import { getMovieServices } from "@/services";
import { DetailMovieInfo } from "@/app-pages";

interface SerialProps {
  params: {
    id: string;
  };
}

const SerialPage = async ({ params: { id } }: SerialProps) => {
  const movieData = await getMovieServices.detailInfo({ id, type: "tv" });
  return <DetailMovieInfo {...movieData} />;
};

export default SerialPage;
