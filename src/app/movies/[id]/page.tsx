import { DetailMovieInfo } from "@/app-pages";
import { getMovieServices } from "@/services";

interface MovieProps {
  params: {
    id: string;
  };
}

const MoviePage = async ({ params: { id } }: MovieProps) => {
  const movieData = await getMovieServices.detailInfo(id);
  return <DetailMovieInfo {...movieData} />;
};

export default MoviePage;
