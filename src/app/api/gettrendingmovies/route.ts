import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import axiosOption from "@/utils/axiosOption";

export async function GET(request: NextRequest) {
  try {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const resp = await axios.get(url, axiosOption);
    return NextResponse.json(resp.data);
  } catch (e) {
    console.log("Error while fetching data", e);
    return NextResponse.json({ error: e });
  }
}
