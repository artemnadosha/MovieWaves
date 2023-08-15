type generateMovieURLType = {
  id: number;
  path: "detail" | "credits" | "videos" | "images";
};

const generateMovieURL = ({ path, id }: generateMovieURLType) => {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/movie/${id}/${path}${
    path === "images" ? "" : "?language=en-US"
  }`;
};

export const API_CONST = {
  UPCOMING_MOVIES_URL: `${process.env.NEXT_PUBLIC_BASE_URL}/movie/upcoming?language=en-US&page=1`,
  DETAIL_MOVIE_URL: (id: number) =>
    `${generateMovieURL({
      id,
      path: "videos",
    })}`,
  CAST_MOVIE_URL: (id: number) =>
    `${generateMovieURL({
      id,
      path: "credits",
    })}`,
  TRAILER_MOVIE_URL: (id: number) =>
    `${generateMovieURL({
      id,
      path: "videos",
    })}`,
  IMAGES_MOVIES_URL: (id: number) => {
    return `${generateMovieURL({
      id,
      path: "images",
    })}`;
  },
  GENERATE_IMAGE_URL: (pathImage: string) => {
    return process.env.NEXT_PUBLIC_BASE_URL_IMAGE + pathImage;
  },
};
