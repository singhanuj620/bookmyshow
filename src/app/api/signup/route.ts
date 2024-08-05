import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { connect } from "@/db/connect";
import User from "@/models/userModel";
import bcrypt from "bcrypt";
connect();
export async function POST(request: NextRequest) {
  try {
    const { fullName, email, password } = await request.json();
    console.log(fullName, email, password);
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.NEXT_PUBLIC_SALT!)
    );
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    if (user) {
      console.log("User created successfully");
      const response = NextResponse.json({
        data: { ...user._doc, password: "" },
      });
      return response;
    } else {
      return NextResponse.json({ error: "User not created" });
    }
  } catch (e) {
    console.log("Error while fetching data", e);
    return NextResponse.json({ error: e });
  }
}
