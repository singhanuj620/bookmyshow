import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { connect } from "@/db/connect";
import User from "@/models/userModel";
import bcrypt from "bcrypt";
import { UserInterface } from "@/interface/interface";
import SendVerificationEmail from "@/utils/sendEmail";
connect();
export async function POST(request: NextRequest) {
  try {
    const { fullName, email, password } = await request.json();
    console.log(fullName, email, password);
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.NEXT_PUBLIC_SALT!)
    );
    const user: UserInterface = await User.create({
      fullName,
      email,
      password: hashedPassword,
      verificationCode: uuidv4(),
    });

    const referer = request.headers.get("referer");

    const verifyEmailHTML = `
      <h1>Welcome to BookMyShow Clone</h1>
      <h3>Made by Anuj Singh. More info : <a href="https://anujsingh.net">https://anujsingh.net</a></h3>
      <p>Click <a href="${
        referer ? referer : "http://localhost:3000"
      }/verifyemail/${user.verificationCode}">here</a> to verify your email</p>
      `;
      
    await SendVerificationEmail(
      user.email,
      "Verify your email",
      verifyEmailHTML
    );

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
