import { GenresType, MovieDataType, MovieDetailType, MovieItem } from "@/types";
import {
  API_MOVIE,
  generateGenresString,
  generateSrcAltImages,
  options,
} from "@/services/utils";
import {
  MoviesType,
  DetailMovieType,
  ResponseImagesBackdrop,
  ResponseMovies,
  TrailerType,
} from "@/services/types";
import { CastType } from "@/services/types/API_response";
import { AvatarWithTextProps } from "@/UI-kit/components";

const imagesMovie = async (id: number) => {
  const res = await fetch(API_MOVIE.IMAGES_URL(id), options);
  const json: ResponseImagesBackdrop = await res.json();
  return json.backdrops?.map((item) =>
    API_MOVIE.GENERATE_IMAGE_URL(item.file_path)
  );
};

const MovieDTO = async (movie: MoviesType) => {
  const getImageData = await imagesMovie(movie.id);

  const remakeImageProps = generateSrcAltImages({
    arr: getImageData,
    title: movie.title,
  });

  return {
    id: movie.id,
    backdrop: API_MOVIE.GENERATE_IMAGE_URL(movie.backdrop_path),
    moviesImages: remakeImageProps,
    title: movie.title,
    overview: movie.overview,
    poster: API_MOVIE.GENERATE_IMAGE_URL(movie.poster_path),
  };
};

const MovieDetailInfoDTO = async (
  movie: DetailMovieType
): Promise<Awaited<MovieItem & GenresType>> => {
  const getImageData = await imagesMovie(movie.id);
  const remakeImageProps = generateSrcAltImages({
    arr: getImageData,
    title: movie.title,
  });

  return {
    id: movie.id,
    backdrop: API_MOVIE.GENERATE_IMAGE_URL(movie.backdrop_path),
    moviesImages: remakeImageProps,
    title: movie.title,
    overview: movie.overview,
    poster: API_MOVIE.GENERATE_IMAGE_URL(movie.poster_path),
    video: movie.video,
    genres: generateGenresString(movie.genres),
  };
};

const CastDTO = (cast: CastType, title: string): AvatarWithTextProps[] => {
  return cast.cast
    .map((item) => ({
      src: API_MOVIE.GENERATE_IMAGE_URL(item.profile_path),
      alt: title,
      title: item.name,
      subTitle: item.character,
    }))
    .slice(0, 12);
};

const upcoming = async (page?: string): Promise<Awaited<MovieDataType>> => {
  const res = await fetch(API_MOVIE.UPCOMING_URL, options);
  const json: ResponseMovies = await res.json();

  return await Promise.all(
    json.results.map(async (item) => await MovieDTO(item))
  );
};

const popular = async (page: string) => {
  const res = await fetch(API_MOVIE.POPULAR_URL(page), options);
  const json: ResponseMovies = await res.json();
  const data = await Promise.all(
    json.results.map(async (item) => await MovieDTO(item))
  );
  return {
    data,
    totalPages: json.total_pages,
  };
};

const detail = async (id: string) => {
  const res = await fetch(API_MOVIE.DETAIL_URL(id), options);
  const json: DetailMovieType = await res.json();

  return await MovieDetailInfoDTO(json);
};
const cast = async (id: string, title: string) => {
  const res = await fetch(API_MOVIE.CAST_URL(id), options);
  const json: CastType = await res.json();

  return CastDTO(json, title);
};
const trailer = async (id: string) => {
  const res = await fetch(API_MOVIE.TRAILER_URL(id), options);
  const json: TrailerType = await res.json();
  return json.results[0].key;
};

const detailInfo = async (id: string): Promise<Awaited<MovieDetailType>> => {
  const detailData = await detail(id);
  const castData = await cast(id, detailData.title);
  const idYouTube = await trailer(id);
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
  imagesMovie,
};
