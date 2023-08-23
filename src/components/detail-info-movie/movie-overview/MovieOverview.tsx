import { FC } from "react";
import { Box, Typography } from "@/UI-kit/components";

interface OverviewProps {
  overview?: string;
}

const MovieOverview: FC<OverviewProps> = ({ overview }) => {
  return (
    <Box spacing={1}>
      <Typography variant="h4" component="h4">
        Overview
      </Typography>
      <Typography>{overview}</Typography>
    </Box>
  );
};

export default MovieOverview;
