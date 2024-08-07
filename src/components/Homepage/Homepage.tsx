"use client";
import CarouselUI from "@/components/Carousel/Carousel";
import { useState, useEffect } from "react";
import WelcomeSearch from "@/components/WelcomeSearch/WelcomeSearch";
import { TrendingMoviesDataObj, SingleMoviesData, SingleTvData, TrendingTvDataObj } from "@/interface/interface";
import axios from "axios";
import { getImageUrl } from "@/utils/getImages";
import MovieCard from "../MovieCard/MovieCard";

export default function HomePage() {
  const [trendingMoviesData, setTrendingMoviesData] = useState<
    SingleMoviesData[]
  >([]);
  const [trendingTvData, setTrendingTvData] = useState<
    SingleTvData[]
  >([]);
  useEffect(() => {
    (async () => {
      try {
        const TrendMovresp = await axios.get("/api/gettrendingmovies");
        if (TrendMovresp.data) {
          const items: SingleMoviesData[] = TrendMovresp.data.results.map(
            (item: TrendingMoviesDataObj) => {
              return {
                backdrop_path: getImageUrl(item.backdrop_path),
                id: item.id,
                title: item.title,
                release_date: item.release_date,
                popularity: item.popularity,
                poster_path: getImageUrl(item.poster_path),
                vote_average: Math.ceil(item.vote_average * 10),
              };
            }
          );
          setTrendingMoviesData(items);
        }
        const TrendTvresp = await axios.get("/api/gettrendingtv");
        if (TrendTvresp.data) {
          const items: SingleTvData[] = TrendTvresp.data.results.map(
            (item: TrendingTvDataObj) => {
              return {
                backdrop_path: getImageUrl(item.backdrop_path),
                id: item.id,
                title: item.name,
                release_date: item.first_air_date,
                popularity: item.popularity,
                poster_path: getImageUrl(item.poster_path),
                vote_average: Math.ceil(item.vote_average * 10),
              };
            }
          );
          setTrendingTvData(items);
        }
      } catch (e) {
        console.log("Error while fetching data", e);
      }
    })();
  }, []);
  return (
    <>
      <div>
        <CarouselUI items={trendingMoviesData} />
      </div>
      <div className="mt-4">
        <WelcomeSearch />
      </div>
      <div>
        <div className="text-5xl pl-8 mt-12">Trending Movies</div>
        <div className="flex flex-row gap-10 p-12 overflow-y-auto">
          {trendingMoviesData.map((movie, ind) => (
            <MovieCard movie={movie} key={ind} />
          ))}
        </div>
      </div>
      <div>
        <div className="text-5xl pl-8 mt-12">Trending Tv</div>
        <div className="flex flex-row gap-10 p-12 overflow-y-auto">
          {trendingTvData.map((movie, ind) => (
            <MovieCard movie={movie} key={ind} />
          ))}
        </div>
      </div>
    </>
  );
}
