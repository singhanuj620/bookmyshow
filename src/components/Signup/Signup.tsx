"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button, Input } from "reactstrap";
import { SignupInterface } from "@/interface/interface";
import { toast } from "react-toastify";
import axios from "axios";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmailValid = (email: string): boolean => emailRegex.test(email);

export default function Signup() {
  const [signupData, setSignupData] = useState<SignupInterface>({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    try {
      toast.success("Signup success");
      const resp = await axios.post("/api/signup", signupData);
      if (resp.data) {
        toast.success("Signup success");
        window.location.href = "/login";
      }
    } catch (e) {
      console.log("Error in signup", e);
    }
  };

  return (
    <div className="h-[90vh] flex flex-row">
      <div className="w-50 flex justify-center items-center flex-col gap-12">
        <div className="w-50">
          <h4>Full Name</h4>
          <div>
            <Input
              type="text"
              required
              onChange={(e) =>
                setSignupData({ ...signupData, fullName: e.target.value })
              }
            />
          </div>
        </div>
        <div className="w-50">
          <h4>Email</h4>
          <div>
            <Input
              type="email"
              required
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="w-50">
          <h4>Password</h4>
          <div>
            <Input
              type="password"
              required
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex justify-start w-50">
          <div>
            <Button
              color="primary"
              disabled={
                !isEmailValid(signupData.email) ||
                !signupData.password ||
                !signupData.fullName
              }
              onClick={() => handleSignup()}
            >
              Signup
            </Button>
          </div>
        </div>
      </div>
      <div className="w-50 flex justify-center items-center">
        <Image
          src={`/Images/signupsvg.svg`}
          alt="Signup"
          width={350}
          height={350}
        />
      </div>
    </div>
  );
}
