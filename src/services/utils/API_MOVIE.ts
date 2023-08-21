type generateMovieURLType = {
  id: string | number;
  path: "credits" | "videos" | "images";
};

const generateMovieURL = ({ path, id }: generateMovieURLType) => {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/movie/${id}/${path}${
    path === "images" ? "" : "?language=en-US"
  }`;
};

export const API_MOVIE = {
  UPCOMING_URL: `${process.env.NEXT_PUBLIC_BASE_URL}/movie/upcoming?language=en-US&page=1`,
  POPULAR_URL: (page: string) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}/movie/popular?language=en-US&page=${page}`,
  DETAIL_URL: (id: string) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}/movie/${id}?language=en-US"
      `,
  CAST_URL: (id: string) =>
    `${generateMovieURL({
      id,
      path: "credits",
    })}`,
  TRAILER_URL: (id: string) =>
    `${generateMovieURL({
      id,
      path: "videos",
    })}`,
  IMAGES_URL: (id: number | string) => {
    return `${generateMovieURL({
      id,
      path: "images",
    })}`;
  },
  GENERATE_IMAGE_URL: (pathImage: string) => {
    return process.env.NEXT_PUBLIC_BASE_URL_IMAGE + pathImage;
  },
};
