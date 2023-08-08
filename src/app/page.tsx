import { Home } from "../app-pages";
import { getServices } from "@/services";

const HomePage = async () => {
  const data = await getServices.upcomingMovies();
  return <Home dataSlider={data.slice(0, 6)} dataCards={data.slice(6, 10)} />;
};

export default HomePage;
