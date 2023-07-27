import { FC } from "react";
import { Typography } from "../../../UI-kit";

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <Typography component="h1" variant="h1" color="text.contrastText">
      MovieWaves
    </Typography>
  );
};

export default Logo;
