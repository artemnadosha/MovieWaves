import { FC } from "react";
import { Box, Typography } from "@/UI-kit/components";
import { ImageProps } from "next/image";
import { CardInfoWrapper, CardWrapper, ImageComponent } from "./Card.styled";
import { useHover } from "@/UI-kit/hooks";

export interface CardProps {
  image: ImageProps;
  title?: string;
  subTitle?: string;
}

const Card: FC<CardProps> = ({ image, subTitle, title }) => {
  const [isHovered, elementRef] = useHover<HTMLDivElement>();

  return (
    <CardWrapper ref={elementRef}>
      <ImageComponent
        src={image?.src}
        alt={image?.alt}
        width={1100}
        height={1100}
      />
      {isHovered && (
        <CardInfoWrapper>
          {title && (
            <Typography
              variant="h5"
              component="h3"
              color="primary"
              isShadow
              sx={{ fontWeight: 700 }}
            >
              {title}
            </Typography>
          )}
          {subTitle && (
            <Typography variant="p" component="p" color="primary.contrastText">
              {subTitle.length > 320
                ? subTitle.slice(0, 320) + "..."
                : subTitle}
            </Typography>
          )}
        </CardInfoWrapper>
      )}
    </CardWrapper>
  );
};

export default Card;
