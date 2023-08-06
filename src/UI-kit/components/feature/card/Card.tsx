import { FC } from "react";
import { Box, Typography } from "@/UI-kit/components";
import { ImageProps } from "next/image";
import { ImageComponent } from "./Card.styled";

export interface CardProps {
  image: ImageProps;
  title: string;
  subTitle: string;
}

const Card: FC<CardProps> = ({ image, subTitle, title }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "300px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
      border="1px solid"
      borderColor="border"
      color="background.light"
    >
      <ImageComponent
        src={image?.src}
        alt={image?.alt}
        width={200}
        height={200}
      />
      <Box sx={{ height: "fit-content" }} spacingPadding={1} spacing={0.5}>
        <Typography variant="h6" component="h3" noWrap sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="p" component="p">
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
