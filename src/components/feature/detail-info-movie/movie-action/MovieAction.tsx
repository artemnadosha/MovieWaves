import { FC } from "react";
import { Box, Button } from "@/UI-kit/components";
import { IconHeart } from "@/assets/icon";

interface MovieActionProps {}

const MovieAction: FC<MovieActionProps> = () => {
  return (
    <Box direction="row" spacing={2} sx={{ height: "fit-content" }}>
      <Button size="small">Watch</Button>
      <Button variant="defaultText" size="large">
        <IconHeart />
      </Button>
    </Box>
  );
};

export default MovieAction;
