import { API_MOVIE, DTO, options } from "@/services/utils";
import { DetailMovieType, GetType, SizeImageType } from "@/services/types";

interface DetailProps {
  id: string;
  type?: GetType;
}

export const detail = async ({ id, type }: DetailProps) => {
  const res = await fetch(API_MOVIE.DETAIL_URL({ id, type }), options);
  const value: DetailMovieType = await res.json();

  console.log(value);
  return await DTO.movieDetailInfo({
    value,
    imagesSize: "w780",
    posterSize: "w780",
    type: type,
  });
};
