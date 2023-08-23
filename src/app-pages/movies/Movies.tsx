"use client";
import { FC } from "react";
import { MoviesList } from "@/components";
import { MovieDataType } from "@/types";

interface MoviesProps {
  data: MovieDataType;
  count: number;
  pathname: string;
}

const Movies: FC<MoviesProps> = ({ data, pathname, count }) => {
  return <MoviesList data={data} count={count} pathname={pathname} />;
};

export default Movies;
