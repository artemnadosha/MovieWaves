"use client";
import { FC } from "react";
import {
  DetailInfoMovieWrapper,
  MovieAction,
  MovieCast,
  MovieOverview,
  MoviePosterWithTrailerButton,
} from "@/components";
import {
  AvatarWithTextProps,
  Box,
  Slider,
  Typography,
} from "@/UI-kit/components";
import { ImageProps } from "next/image";

interface DetailFilmProps {}

const mokCast: AvatarWithTextProps[] = [
  {
    src: "https://image.tmdb.org/t/p/original/8nytsqL59SFJTVYVrN72k6qkGgJ.jpg",
    alt: "Edward Norton",
    title: "Edward Norton",
    subTitle: "The Narrator",
  },
  {
    src: "https://image.tmdb.org/t/p/original/huV2cdcolEUwJy37QvH914vup7d.jpg",
    alt: "Brad Pitt",
    title: "Brad Pitt",
    subTitle: "Tyler Durden",
  },
  {
    src: "https://image.tmdb.org/t/p/original/DDeITcCpnBd0CkAIRPhggy9bt5.jpg",
    alt: "Helena Bonham Carter",
    title: "Helena Bonham Carter",
    subTitle: "Marla Singer",
  },
  {
    src: "https://image.tmdb.org/t/p/original/7gKLR1u46OB8WJ6m06LemNBCMx6.jpg",
    alt: "Meat Loaf",
    title: "Meat Loaf",
    subTitle: 'Robert "Bob" Paulson',
  },
  {
    src: "https://image.tmdb.org/t/p/original/ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg",
    alt: "Jared Leto",
    title: "Jared Leto",
    subTitle: "Angel Face",
  },
];

const mokSlider: ImageProps[] = [
  {
    src: "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    alt: "Fight Club",
  },
  {
    src: "https://image.tmdb.org/t/p/original/fygeMr16EcxJiYhdiO1LEr7iHtI.jpg",
    alt: "Fight Club",
  },
  {
    src: "https://image.tmdb.org/t/p/original/b9HyPoxwxjxkWEUL5ErZdhApQe2.jpg",
    alt: "Fight Club",
  },
  {
    src: "https://image.tmdb.org/t/p/original/c6OLXfKAk5BKeR6broC8pYiCquX.jpg",
    alt: "Fight Club",
  },
  {
    src: "https://image.tmdb.org/t/p/original/3nv2TEz2u178xPXzdKlZdUh5uOI.jpg",
    alt: "Fight Club",
  },
  {
    src: "https://image.tmdb.org/t/p/original/yguBaPk5V0nZCcSBthre4YFMAgk.jpg",
    alt: "Fight Club",
  },
];

const DetailMovieInfo: FC<DetailFilmProps> = () => {
  return (
    <DetailInfoMovieWrapper
      spacingPadding={2}
      justifyContent="space-between"
      direction="row"
      spacing={2}
      bgImage="https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg"
    >
      <Box sx={{ zIndex: 2 }}>
        <Box direction="row" spacing={2}>
          <MoviePosterWithTrailerButton
            src="https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
            alt="Fight Club"
            idYouTube="O-b2VfmmbyA"
          />
          <Box spacing={1}>
            <Typography component="h2" variant="h2" color="primary">
              Fight Club
            </Typography>
            <Typography>Drama, Thriller, Comedy</Typography>
            <MovieAction />
            <MovieOverview overview='A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.' />
          </Box>
        </Box>
        <Slider
          visibleElements={4}
          images={mokSlider}
          imageSetting={{ borderRadius: "24px" }}
        />
      </Box>
      <MovieCast castData={mokCast} />
    </DetailInfoMovieWrapper>
  );
};

export default DetailMovieInfo;
