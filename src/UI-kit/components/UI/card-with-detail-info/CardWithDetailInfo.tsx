import { FC } from "react";
import Image, { ImageProps } from "next/image";
import { Box, Typography } from "@/UI-kit/components";
import { PosterImage } from "@/UI-kit/components/UI/card-with-detail-info/CardWithDetailInfo.styled";

interface CardWithDetailInfoProps {
  image: ImageProps;
  title: string;
  subTitle: string;
  titleDescription: string;
  description: string;
}

const CardWithDetailInfo: FC<CardWithDetailInfoProps> = () => {
  const image = {
    src: "https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    alt: "string",
  };
  const title = "Spiderman";
  const subTitle = "Genres: Comedy, Fantastic, Fight";
  const titleDescription = "Overview";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, exercitationem, magni! A animi at atque minus nostrum rerum totam unde?";
  return (
    <Box
      direction="row"
      borderColor="primary.additional"
      border="1px solid"
      sx={{ maxWidth: "600px" }}
    >
      <PosterImage {...image} width={140} height={150} />
      <Box spacingPadding={1}>
        <Typography component="h4" variant="h3" color="primary">
          {title}
        </Typography>
        <Typography>{subTitle}</Typography>
        <Typography variant="h6" sx={{ marginTop: "10px" }}>
          {titleDescription}
        </Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
};

export default CardWithDetailInfo;
