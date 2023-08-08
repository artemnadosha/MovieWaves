import { FC } from "react";
import {
  AvatarWithText,
  AvatarWithTextProps,
  Box,
  Typography,
} from "@/UI-kit/components";

interface CastProps {
  castData: AvatarWithTextProps[];
}

const MovieCast: FC<CastProps> = ({ castData }) => {
  return (
    <Box
      spacing={1}
      sx={{
        zIndex: 2,
        width: "fit-content",
        minWidth: "400px",
      }}
    >
      <Typography variant="h4" component="h4">
        Cast
      </Typography>
      {castData.map((cast) => (
        <AvatarWithText key={cast.src} {...cast} />
      ))}
    </Box>
  );
};

export default MovieCast;
