import { FC } from "react";
import { Avatar, Box, Typography } from "@/UI-kit/components";
import { ColorKeysProps } from "@/UI-kit/types";

export interface AvatarWithTextProps extends ColorKeysProps {
  src: string;
  alt: string;
  title: string;
  subTitle: string;
}

const AvatarWithText: FC<AvatarWithTextProps> = ({
  src,
  alt,
  title,
  subTitle,
  color,
}) => {
  return (
    <Box
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{ height: "fit-content" }}
    >
      <Avatar src={src} alt={alt} width="100" height="100" />
      <Box spacing={1} justifyContent="center">
        <Typography color={color || "primary"}>{title}</Typography>
        <Typography>{subTitle}</Typography>
      </Box>
    </Box>
  );
};

export default AvatarWithText;
