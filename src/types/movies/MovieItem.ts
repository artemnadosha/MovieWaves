import { MoviesImages } from "@/types/movies/MovieAddtionalType";

export interface MovieItem {
  id: number;
  backdrop: string;
  title: string;
  overview: string;
  poster: string;
  video?: boolean;
}

export interface MovieItemWithImages extends MovieItem, MoviesImages {}
