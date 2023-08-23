import { Movies } from "@/app-pages";
import { getMovieServices } from "@/services";
import { useSearchParams } from "next/navigation";

interface MoviesPageProps {
  searchParams: {
    page: string;
  };
}

const MoviesPage = async ({ searchParams: { page } }: MoviesPageProps) => {
  const data = await getMovieServices.popular({
    page: page || "1",
    type: "movie",
  });

  return <Movies data={data.data} count={data.totalPages} pathname="movies" />;
};

export default MoviesPage;
