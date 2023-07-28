import { FC } from "react";
import { Typography } from "../../../UI-kit";

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <Typography component="h1" variant="h3">
      MovieWaves
    </Typography>
  );
};

export default Logo;
