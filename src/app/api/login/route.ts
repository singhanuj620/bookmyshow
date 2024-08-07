import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connect } from "@/db/connect";
import User from "@/models/userModel";
import jwt from "jsonwebtoken";
connect();
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json({ error: "Password incorrect" });
    }

    const jwtToken = await jwt.sign(
      { id: user._id, email: user.email, fullName: user.fullName },
      process.env.NEXT_PUBLIC_JWT_SECRET!,
      { expiresIn: "1d" }
    );
    const response = NextResponse.json({
      data: jwtToken,
    });
    response.cookies.set("jwt", jwtToken, {
      httpOnly: true,
      secure: true,
    });
    return response;
  } catch (e) {
    console.log("Error while fetching data", e);
    return NextResponse.json({ error: e });
  }
}
