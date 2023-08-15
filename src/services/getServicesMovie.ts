import { HomeSliderType } from "@/types";
import { API_CONST, options } from "@/services/utils";
import {
  MoviesType,
  ResponseImagesBackdrop,
  ResponseUpcomingMovies,
} from "@/services/types";

const imagesMovie = async (id: number) => {
  const res = await fetch(API_CONST.IMAGES_MOVIES_URL(id), options);
  const json: ResponseImagesBackdrop = await res.json();

  return json.backdrops.map((item) =>
    API_CONST.GENERATE_IMAGE_URL(item.file_path)
  );
};

const MovieDTO = async (movie: MoviesType) => {
  const getImageData = await imagesMovie(movie.id);

  return {
    id: movie.id,
    backdrop: API_CONST.GENERATE_IMAGE_URL(movie.backdrop_path),
    moviesImages: getImageData,
    title: movie.title,
    overview: movie.overview,
    poster: API_CONST.GENERATE_IMAGE_URL(movie.poster_path),
  };
};

const upcomingMovies = async (
  page?: string
): Promise<Awaited<HomeSliderType>> => {
  const res = await fetch(API_CONST.UPCOMING_MOVIES_URL, options);
  const json: ResponseUpcomingMovies = await res.json();

  return await Promise.all(
    json.results.map(async (item) => await MovieDTO(item))
  );
};

export const getServices = {
  upcomingMovies,
  imagesMovie,
};
