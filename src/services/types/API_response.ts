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

export interface ResponseMovies {
  results: MoviesType[];
  total_pages: number;
  total_results: number;
}

export type ResponseGenres = {
  id: number;
  name: string;
};

type ResponseProductionCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type ResponseProductionCountries = {
  iso_3166_1: string;
  name: string;
};

type ResponseSpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export interface DetailMovieType {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: ResponseGenres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ResponseProductionCompanies[];
  production_countries: ResponseProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ResponseSpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

type CastItem = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export interface CastType {
  id: number;
  cast: CastItem[];
}

type TrailerItem = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

export interface TrailerType {
  id: number;
  results: TrailerItem[];
}
