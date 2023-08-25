import { FC } from "react";
import { ImageProps } from "next/image";
import { Box, Typography } from "@/UI-kit/components";
import { PosterImage } from "@/UI-kit/components/UI/card-with-detail-info/CardWithDetailInfo.styled";

export interface CardWithDetailInfoProps {
  id: string | number;
  image: ImageProps;
  title: string;
  subTitle: string;
  titleDescription: string;
  description: string;
}

const CardWithDetailInfo: FC<CardWithDetailInfoProps> = ({
  image,
  subTitle,
  title,
  titleDescription,
  description,
}) => {
  return (
    <Box
      direction="row"
      borderColor="primary.additional"
      color="background.light"
      border="1px solid"
      sx={{ width: "700px", height: "fit-content" }}
    >
      <PosterImage {...image} width={110} height={160} />
      <Box spacingPadding={1}>
        <Typography component="h4" variant="h3" color="primary">
          {title}
        </Typography>
        <Typography>{subTitle}</Typography>
        <Typography variant="h6" sx={{ marginTop: "10px" }}>
          {titleDescription}
        </Typography>
        <Typography>
          {description.length > 150
            ? description.slice(0, 150) + "..."
            : description}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardWithDetailInfo;
