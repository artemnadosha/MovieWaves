import { AvatarWithTextProps } from "@/UI-kit/components";
import { MovieItem } from "@/types";

export type GenresType = {
  genres: string;
};

export type MovieDetailType = MovieItem &
  GenresType & {
    castData: AvatarWithTextProps[];
    idYouTube?: string;
  };
