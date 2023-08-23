import { GetType, SizeImageType } from "@/services/types";

type generateMovieURLType = {
  id: string | number;
  path: "credits" | "videos" | "images";
  type?: GetType;
};

type URLProps = {
  id: string | number;
  type?: GetType;
};

type URLPopularProps = {
  page: string;
  type?: GetType;
};

const DEFAULT_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://api.themoviedb.org/3";

const generateMovieURL = ({ path, id, type }: generateMovieURLType) => {
  return `${DEFAULT_URL}/${type || "movies"}/${id}/${path}${
    path === "images" ? "" : "?language=en-US"
  }`;
};

export const API_MOVIE = {
  UPCOMING_URL: `${DEFAULT_URL}/movie/upcoming?language=en-US&page=1`,

  POPULAR_URL: ({ type, page }: URLPopularProps) =>
    `${DEFAULT_URL}/${type || "movie"}/popular?language=en-US&page=${page}`,

  DETAIL_URL: ({ type, id }: URLProps) =>
    `${DEFAULT_URL}/${type || "movie"}/${id}?language=en-US"
      `,

  CAST_URL: ({ id, type }: URLProps) =>
    `${generateMovieURL({
      id,
      path: "credits",
      type,
    })}`,

  TRAILER_URL: ({ id, type }: URLProps) =>
    `${generateMovieURL({
      id,
      path: "videos",
      type,
    })}`,

  IMAGES_URL: ({ id, type }: URLProps) => {
    return `${generateMovieURL({
      id,
      path: "images",
      type,
    })}`;
  },

  GENERATE_IMAGE_URL: (pathImage: string, sizeImage?: SizeImageType) => {
    return (
      process.env.NEXT_PUBLIC_BASE_URL_IMAGE +
      `/${sizeImage ? sizeImage : "original"}` +
      pathImage
    );
  },
};
