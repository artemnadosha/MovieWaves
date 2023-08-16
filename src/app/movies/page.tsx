import { Movies } from "@/app-pages";
import { getMovieServices } from "@/services";

const MoviesPage = async () => {
  const data = await getMovieServices.popular();
  return <Movies data={data} />;
};

export default MoviesPage;
