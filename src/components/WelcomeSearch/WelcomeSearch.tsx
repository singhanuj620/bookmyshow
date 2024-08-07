/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { Input } from "reactstrap";

export default function WelcomeSearch() {
  return (
    <div>
      <div className="flex flex-row justify-around items-center">
        <div className="flex flex-col justify-center w-[30%] gap-10">
          <div className="text-4xl">Welcome to</div>
          <div className="text-6xl text-red-700">Book My Show</div>
          <div className="text-3xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </div>
          <div className="flex flex-row justify-start items-center gap-2">
            <div className="w-[70%]">
              <Input placeholder="Search for movies, tv series, etc" />
            </div>
            <div className="cursor-pointer">
              <img
                src={"/Images/enter.png"}
                alt="Enter"
                className="h-8"
              />
            </div>
          </div>
        </div>
        <div>
          <img
            src={"/Images/welcomebg.jpg"}
            alt="Welcome Search"
            className="rounded-lg h-[60vh]"
          />
        </div>
      </div>
    </div>
  );
}
