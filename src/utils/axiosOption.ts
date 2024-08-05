interface AxiosOption {
  headers?: {
    accept: string;
    Authorization: string;
  };
}

const axiosOption: AxiosOption = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_DB_ACCESS_TOKEN}`,
  },
};

export default axiosOption;
