export type MoviesType = {
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

type CastType = {};

export type ImagesBackdrop = {
  aspect_ratio: number;
  height: number;
  iso_639_1: null | string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

export interface ResponseImagesBackdrop {
  backdrops: ImagesBackdrop[];
}

export interface ResponseUpcomingMovies {
  results: MoviesType[];
  total_pages: number;
  total_results: number;
}
