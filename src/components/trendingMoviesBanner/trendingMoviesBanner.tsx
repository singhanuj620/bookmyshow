"use client";
import { useState, useEffect } from "react";
import CarouselUI from "@/components/Carousel/Carousel";
import axios from "axios";
import axiosOption from "@/utils/axiosOption";
import { getImageUrl } from "@/utils/getImages";
import { TrendingMoviesDataObj, SingleMoviesData } from "@/interface/interface";

export default function TrendingMoviesBanner() {
  const [trendingMoviesData, setTrendingMoviesData] = useState<
    SingleMoviesData[]
  >([]);
  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get("/api/gettrendingmovies");
        if (resp.data) {
          const items: SingleMoviesData[] = resp.data.results.map(
            (item: TrendingMoviesDataObj) => {
              return {
                backdrop_path: getImageUrl(item.backdrop_path),
                id: item.id,
                title: item.title,
                release_date: item.release_date,
                popularity: item.popularity,
              };
            }
          );
          setTrendingMoviesData(items);
        }
      } catch (e) {
        console.log("Error while fetching data", e);
      }
    })();
  }, []);
  return (
    <div>
      <CarouselUI items={trendingMoviesData} />
    </div>
  );
}
