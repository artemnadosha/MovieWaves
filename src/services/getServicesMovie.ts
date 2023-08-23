import { MovieDataType, MovieDetailType } from "@/types";
import { API_MOVIE, DTO, options } from "@/services/utils";
import { GetType, ResponseMovies } from "@/services/types";
import { images } from "@/services/images";
import { detail } from "./detail";
import { cast } from "./cast";
import { trailer } from "./trailer";

const upcoming = async (page?: string): Promise<Awaited<MovieDataType>> => {
  const res = await fetch(API_MOVIE.UPCOMING_URL, options);
  const json: ResponseMovies = await res.json();

  return await Promise.all(
    json?.results?.map(
      async (item) =>
        await DTO.movieWithImages({
          value: item,
          imagesSize: "w780",
          posterSize: "w780",
          type: "movie",
        })
    )
  );
};

interface PopularProps {
  page: string;
  type?: GetType;
}

const popular = async ({ type, page }: PopularProps) => {
  const res = await fetch(API_MOVIE.POPULAR_URL({ type, page }), options);
  const json: ResponseMovies = await res.json();
  const data = json?.results?.map((item) =>
    DTO.movie({ value: item, backdropSize: "w300", posterSize: "w300" })
  );
  return {
    data,
    totalPages: json?.total_pages >= 500 ? 500 : json?.total_pages,
  };
};

interface DetailInfoProps {
  id: string;
  type?: GetType;
}

const detailInfo = async ({
  id,
  type,
}: DetailInfoProps): Promise<Awaited<MovieDetailType>> => {
  const detailData = await detail({ id, type });
  const castData = await cast({ id, title: detailData.title, type });
  const idYouTube = await trailer({ id, type });
  return {
    ...detailData,
    castData,
    idYouTube,
  };
};

export const getMovieServices = {
  upcoming,
  popular,
  detailInfo,
  images,
};
