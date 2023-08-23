import { API_MOVIE, DTO, options } from "@/services/utils";
import { CastType } from "@/services/types/API_response";
import { GetType, SizeImageType } from "@/services/types";

interface CastProps {
  id: string;
  title: string;
  type?: GetType;
}

export const cast = async ({ id, title, type }: CastProps) => {
  const res = await fetch(API_MOVIE.CAST_URL({ id, type }), options);
  const value: CastType = await res.json();

  return DTO.cast({ value, title, castImageSize: "w300" });
};
