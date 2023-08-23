import { API_MOVIE, options } from "@/services/utils";
import { GetType, TrailerType } from "@/services/types";

interface TrailerProps {
  id: string;
  type?: GetType;
}

export const trailer = async ({ id, type }: TrailerProps) => {
  const res = await fetch(API_MOVIE.TRAILER_URL({ id, type }), options);
  const json: TrailerType = await res.json();
  return json?.results[0]?.key;
};
