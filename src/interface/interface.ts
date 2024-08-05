export interface TrendingMoviesDataObj {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface SingleMoviesData {
  backdrop_path: string;
  id: number;
  title: string;
  release_date: string;
  popularity?: number;
}

export interface LoginInterface {
  email: string;
  password: string;
}

export interface SignupInterface {
  fullName: string;
  email: string;
  password: string;
}

export interface UserInterface {
  fullName: string;
  email: string;
  password: string;
  isVerfiied: boolean;
  verificationCode: string;
  forgotPasswordCode: string;
  _id: string;
}
