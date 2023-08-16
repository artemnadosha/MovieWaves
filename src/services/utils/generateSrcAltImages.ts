export const generateSrcAltImages = ({
  arr,
  title,
}: {
  arr: string[];
  title: string;
}) => {
  return arr.map((item) => ({ src: item, alt: title }));
};
