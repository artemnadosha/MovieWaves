import { ResponseGenres } from "../types";

export const generateGenresString = (genres: ResponseGenres[]) => {
  return genres?.map((item) => item.name).join(", ");
};
