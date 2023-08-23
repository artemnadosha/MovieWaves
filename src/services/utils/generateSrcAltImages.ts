import { ImageProps } from "next/image";

export const generateSrcAltImages = ({
  arr,
  title,
}: {
  arr: string[];
  title: string;
}): ImageProps[] => {
  return arr.map((item) => ({ src: item, alt: title }));
};
