import { Home } from "../app-pages";
import { getMovieServices } from "@/services";

const HomePage = async () => {
  const data = await getMovieServices.upcoming();
  return <Home dataSlider={data.slice(0, 6)} dataCards={data.slice(6, 10)} />;
};

export default HomePage;
