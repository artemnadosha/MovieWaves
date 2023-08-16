import { FC } from "react";
import { MovieListWrapper } from "./MovieList.styled";
import { Card, Link } from "@/UI-kit/components";
import { MovieDataType } from "@/types";

interface MovieListProps {
  data: MovieDataType;
}

const MoviesList: FC<MovieListProps> = ({ data }) => {
  return (
    <MovieListWrapper>
      {data.map((item) => (
        <Link key={item.id} href={`movies/${item.id}`} variant="defaultText">
          <Card image={{ src: item.poster, alt: item.title }} />
        </Link>
      ))}
    </MovieListWrapper>
  );
};

export default MoviesList;
