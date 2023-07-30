import { FC } from "react";
import { Box, Typography } from "@/UI-kit";

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <Typography component="h1" variant="h3" spacingPadding={[2, 0]}>
      Movie
      <Typography component="span" variant="h3" color="primary.main">
        Waves
      </Typography>
    </Typography>
  );
};

export default Logo;
