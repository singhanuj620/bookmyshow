/* eslint-disable @next/next/no-img-element */
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { SingleMoviesData } from "@/interface/interface";

export default function MovieCard({ movie }: { movie: SingleMoviesData }) {
  return (
    <div className="flex flex-col justify-start hover:scale-105 transition-transform duration-500 ease-out min-w-[18%]">
      <div className="h-[22rem]">
        <img
          src={movie.poster_path}
          alt={movie.title}
          style={{ height: "inherit" }}
          className="rounded-xl cursor-pointer "
        />
      </div>
      <div className="mt-[-12%] ml-[-65%]">
        <CircularProgressbar
          value={movie.vote_average!}
          text={`${movie.vote_average}%`}
          className="h-14"
          background={true}
          styles={buildStyles({
            backgroundColor: "#000000",
            textColor: "#ffffff",
          })}
        />
      </div>
      <div>
        <h1 className="text-lg font-bold mt-2 hover:text-blue-600 cursor-pointer">{movie.title}</h1>
        <p className="text-sm text-gray-500 ">{movie.release_date}</p>
      </div>
    </div>
  );
}
