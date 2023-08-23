import { getMovieServices } from "@/services";
import { Movies } from "@/app-pages";

interface SeriesPageProps {
  searchParams: {
    page: string;
  };
}

const SeriesPage = async ({ searchParams: { page } }: SeriesPageProps) => {
  const data = await getMovieServices.popular({
    page: page || "1",
    type: "tv",
  });

  return <Movies data={data.data} count={data.totalPages} pathname="series" />;
};

export default SeriesPage;
