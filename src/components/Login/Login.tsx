"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button, Input } from "reactstrap";
import { LoginInterface } from "@/interface/interface";
import axiosOption from "@/utils/axiosOption";
import axios from "axios";
import { toast } from "react-toastify";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmailValid = (email: string): boolean => emailRegex.test(email);

export default function Login() {
  const [loginData, setLoginData] = useState<LoginInterface>({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const resp = await axios.post("/api/login", loginData);
      if (resp.data) {
        console.log("Login success");
        toast.success("Login success");
        window.location.href = "/";
      }
    } catch (e) {
      console.log("Error in login", e);
    }
  };

  return (
    <div className="h-[90vh] flex flex-row">
      <div className="w-50 flex justify-center items-center flex-col gap-12">
        <div className="w-50">
          <h2>Email</h2>
          <div>
            <Input
              type="email"
              required
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="w-50">
          <h2>Password</h2>
          <div>
            <Input
              type="password"
              required
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex justify-start w-50">
          <div>
            <Button
              color="primary"
              disabled={
                !isEmailValid(loginData.email) || loginData.password === ""
              }
              onClick={() => handleLogin()}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
      <div className="w-50 flex justify-center items-center">
        <Image
          src={`/Images/loginsvg.svg`}
          alt="login"
          width={350}
          height={350}
        />
      </div>
    </div>
  );
}
