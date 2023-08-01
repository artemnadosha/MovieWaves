"use client";
import { FC } from "react";
import { HomeWrapper } from "./Home.styled";
import { Sidebar } from "@/components";
import { Box, Slider } from "@/UI-kit";
import { ImageProps } from "next/image";

interface HomeProps {}

const mokImage: ImageProps[] = [
  {
    src: "https://uaserials.pro/posters/1292.jpg",
    alt: "test1",
  },
  {
    src: "https://uaserials.pro/posters/7910.jpg",
    alt: "test2",
  },
  {
    src: "https://uaserials.pro/posters/6548.jpg",
    alt: "test3",
  },
  {
    src: "https://uaserials.pro/posters/7873.jpg",
    alt: "test4",
  },
  {
    src: "https://uaserials.pro/posters/7873.jpg",
    alt: "test4",
  },
  {
    src: "https://uaserials.pro/posters/7873.jpg",
    alt: "test5",
  },
];

const Home: FC<HomeProps> = () => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      sx={{ width: "calc(100% - 300px)" }}
    >
      <Slider images={mokImage} visibleElements={4} />
    </Box>
  );
};

export default Home;
