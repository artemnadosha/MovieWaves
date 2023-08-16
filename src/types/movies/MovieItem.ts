import { ImageProps } from "next/image";

export type MovieItem = {
  id: number;
  backdrop: string;
  moviesImages: ImageProps[];
  title: string;
  overview: string;
  poster: string;
  video?: boolean;
};
