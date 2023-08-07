import { HomeSliderType } from "@/types";

const options = {
  method: "GET",

  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
  },
};

const upcomingMoviesURL = `${process.env.NEXT_PUBLIC_BASE_URL}/movie/upcoming?language=en-US&page=1`;

const generateGetImagesMoviesURL = (id: number) => {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/movie/${id}/images`;
};

const generateImageURL = (pathImage: string) => {
  return process.env.NEXT_PUBLIC_BASE_URL_IMAGE + pathImage;
};

type UpcomingMoviesType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type ImagesBackdrop = {
  aspect_ratio: number;
  height: number;
  iso_639_1: null | string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

interface ResponseImagesBackdrop {
  backdrops: ImagesBackdrop[];
}

type ResponseUpcomingMovies = {
  results: UpcomingMoviesType[];
  total_pages: number;
  total_results: number;
};

const imagesMovie = async (id: number) => {
  const res = await fetch(generateGetImagesMoviesURL(id), options);
  const json: ResponseImagesBackdrop = await res.json();

  return json.backdrops.map((item) => generateImageURL(item.file_path));
};

const upcomingMovies = async (
  page?: string
): Promise<Awaited<HomeSliderType>> => {
  const res = await fetch(upcomingMoviesURL, options);
  const json: ResponseUpcomingMovies = await res.json();

  return await Promise.all(
    json.results.map(async (item) => {
      const getImageData = await imagesMovie(item.id);

      return {
        id: item.id,
        backdrop: generateImageURL(item.backdrop_path),
        moviesImages: getImageData,
        title: item.title,
        overview: item.overview,
        poster: generateImageURL(item.poster_path),
      };
    })
  );
};

export const getServices = {
  upcomingMovies,
  imagesMovie,
};
