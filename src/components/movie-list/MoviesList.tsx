import { FC, useRef } from "react";
import { MovieListWrapper } from "./MovieList.styled";
import { Card, Link, Pagination } from "@/UI-kit/components";
import { MovieDataType } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

interface MovieListProps {
  data: MovieDataType;
  pathname: string;
  count: number;
}

const MoviesList: FC<MovieListProps> = ({ data, pathname, count }) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const defaultPage = searchParams.get("page");
  const handleChangePagination = (page: number) => {
    router.push(`/${pathname}?page=${page}`);
    if (ref.current) ref.current.scroll(0, 0);
  };

  return (
    <MovieListWrapper ref={ref}>
      {data?.map((item) => (
        <Link
          key={item.id}
          href={`${pathname}/${item.id}`}
          variant="defaultText"
        >
          <Card image={{ src: item.poster, alt: item.title }} />
        </Link>
      ))}
      <Pagination
        count={count}
        defaultPage={Number(defaultPage) || 1}
        onChange={handleChangePagination}
        containerSx={{ spacingPadding: 1 }}
        siblingCount={3}
      />
    </MovieListWrapper>
  );
};

export default MoviesList;
