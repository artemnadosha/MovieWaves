"use client";
import { FC } from "react";
import {
  DetailInfoMovieWrapper,
  MovieAction,
  MovieCast,
  MovieOverview,
  MoviePosterWithTrailerButton,
} from "@/components";
import { Box, Slider, Typography } from "@/UI-kit/components";
import { MovieDetailType } from "@/types";

const DetailMovieInfo: FC<MovieDetailType> = ({
  backdrop,
  poster,
  idYouTube,
  title,
  genres,
  moviesImages,
  castData,
  overview,
  id,
}) => {
  return (
    <DetailInfoMovieWrapper
      spacingPadding={2}
      justifyContent="space-between"
      direction="row"
      spacing={2}
      bgImage={backdrop}
    >
      <Box sx={{ zIndex: 2 }}>
        <Box direction="row" spacing={2}>
          <MoviePosterWithTrailerButton
            src={poster}
            alt={title}
            idYouTube={idYouTube}
          />
          <Box spacing={1}>
            <Typography component="h2" variant="h2" color="primary">
              {title}
            </Typography>
            <Typography>{genres}</Typography>
            <MovieAction />
            <MovieOverview overview={overview} />
          </Box>
        </Box>
        <Slider
          visibleElements={4}
          images={moviesImages}
          imageSetting={{ borderRadius: "24px" }}
        />
      </Box>
      <MovieCast castData={castData} />
    </DetailInfoMovieWrapper>
  );
};

export default DetailMovieInfo;
