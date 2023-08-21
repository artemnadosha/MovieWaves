"use client";
import { FC } from "react";
import { MoviesList } from "@/components";
import { MovieDataType } from "@/types";

interface MoviesProps {
  data: MovieDataType;
  count: number;
}

const Movies: FC<MoviesProps> = ({ data, count }) => {
  return <MoviesList data={data} count={count} />;
};

export default Movies;
