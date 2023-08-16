"use client";
import { FC } from "react";
import { MoviesList } from "@/components";
import { MovieDataType } from "@/types";

interface MoviesProps {
  data: MovieDataType;
}

const Movies: FC<MoviesProps> = ({ data }) => {
  return <MoviesList data={data} />;
};

export default Movies;
