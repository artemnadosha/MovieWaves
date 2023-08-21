import { FC } from "react";
import { MovieListWrapper } from "./MovieList.styled";
import { Card, Link, Pagination } from "@/UI-kit/components";
import { MovieDataType } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

interface MovieListProps {
  data: MovieDataType;
  count: number;
}

const MoviesList: FC<MovieListProps> = ({ data, count }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultPage = searchParams.get("page");
  const handleChangePagination = (page: number) => {
    router.push(`/movies?page=${page}`);
  };

  return (
    <MovieListWrapper>
      {data.map((item) => (
        <Link key={item.id} href={`movies/${item.id}`} variant="defaultText">
          <Card image={{ src: item.poster, alt: item.title }} />
        </Link>
      ))}
      <Pagination
        count={count}
        defaultPage={Number(defaultPage) || 1}
        onChange={handleChangePagination}
        containerSx={{ spacingPadding: 1 }}
      />
    </MovieListWrapper>
  );
};

export default MoviesList;
