import { API_MOVIE, options } from "@/services/utils";
import {
  GetType,
  ResponseImagesBackdrop,
  SizeImageType,
} from "@/services/types";

interface ImagesProps {
  id: number | string;
  sizeImage?: SizeImageType;
  type?: GetType;
}

export const images = async ({ id, type, sizeImage }: ImagesProps) => {
  const res = await fetch(API_MOVIE.IMAGES_URL({ id, type }), options);
  const json: ResponseImagesBackdrop = await res.json();
  return json?.backdrops?.map((item) =>
    API_MOVIE.GENERATE_IMAGE_URL(item.file_path, sizeImage)
  );
};
