import {
  DetailMovieType,
  GetType,
  MoviesType,
  SizeImageType,
} from "@/services/types";
import {
  GenresType,
  MovieItem,
  MovieItemWithImages,
  MoviesImages,
} from "@/types";
import { API_MOVIE } from "@/services/utils/API_MOVIE";
import { getMovieServices } from "@/services";
import { generateSrcAltImages } from "@/services/utils/generateSrcAltImages";
import { generateGenresString } from "@/services/utils/generateGenresString";
import { CastType } from "@/services/types/API_response";
import { AvatarWithTextProps } from "@/UI-kit/components";

interface MovieDTOProps {
  value: MoviesType | DetailMovieType;
  posterSize?: SizeImageType;
  backdropSize?: SizeImageType;
}

interface MovieWithImageDTOProps extends MovieDTOProps {
  imagesSize?: SizeImageType;
  type?: GetType;
}

interface MovieDetailDTOProps {
  value: DetailMovieType;
  posterSize?: SizeImageType;
  backdropSize?: SizeImageType;
  imagesSize?: SizeImageType;
  type?: GetType;
}

interface CastDTOProps {
  value: CastType;
  title: string;
  castImageSize?: SizeImageType;
}

const movie = ({
  value,
  backdropSize,
  posterSize,
}: MovieDTOProps): MovieItem => {
  return {
    id: value.id,
    backdrop: API_MOVIE.GENERATE_IMAGE_URL(value.backdrop_path, backdropSize),
    title: value.title,
    overview: value.overview,
    poster: API_MOVIE.GENERATE_IMAGE_URL(value.poster_path, posterSize),
  };
};

const movieWithImages = async ({
  value,
  imagesSize,
  posterSize,
  backdropSize,
  type,
}: MovieWithImageDTOProps): Promise<Awaited<MovieItemWithImages>> => {
  const getImageData = await getMovieServices.images({
    id: value.id,
    type,
    sizeImage: imagesSize,
  });

  const remakeImageProps = generateSrcAltImages({
    arr: getImageData,
    title: value.title,
  });

  return {
    moviesImages: remakeImageProps,
    ...movie({ value, posterSize, backdropSize }),
  };
};

const movieDetailInfo = async ({
  value,
  posterSize,
  backdropSize,
  imagesSize,
  type,
}: MovieDetailDTOProps): Promise<
  Awaited<MovieItem & MoviesImages & GenresType>
> => {
  const resultDTO = await movieWithImages({
    value,
    imagesSize,
    backdropSize,
    posterSize,
    type,
  });
  return {
    ...resultDTO,
    genres: generateGenresString(value.genres),
  };
};

const cast = ({
  value,
  title,
  castImageSize,
}: CastDTOProps): AvatarWithTextProps[] => {
  return value.cast
    .map((item) => ({
      src: API_MOVIE.GENERATE_IMAGE_URL(item.profile_path, castImageSize),
      alt: title,
      title: item.name,
      subTitle: item.character,
    }))
    .slice(0, 12);
};

export const DTO = {
  movie,
  movieWithImages,
  movieDetailInfo,
  cast,
};
