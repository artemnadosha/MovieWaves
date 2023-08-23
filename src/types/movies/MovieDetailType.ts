import { AvatarWithTextProps } from "@/UI-kit/components";
import { GenresType, MovieItem } from "@/types";
import { MoviesImages } from "./MovieAddtionalType";

export interface MovieDetailType extends MovieItem, MoviesImages, GenresType {
  castData: AvatarWithTextProps[];
  idYouTube?: string;
}
