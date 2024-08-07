import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/db/connect";
connect();

export async function POST(request: NextRequest) {
  try {
    const { verificationCode } = await request.json();
    const user = await User.findOne({ verificationCode });
    if (!user) {
      return NextResponse.json({ error: "Invalid verification code" });
    }
    if (user.verificationCode === verificationCode) {
      user.isVerified = true;
      await user.save();
    }
    return NextResponse.json({ data: "Email verified" });
  } catch (e) {
    console.log("Error while fetching data", e);
    return NextResponse.json({ error: e });
  }
}
