export const getImageUrl = (url: String) => {
  return `${process.env.NEXT_PUBLIC_MOVIE_DB_IMG_URL}${url}`;
};
