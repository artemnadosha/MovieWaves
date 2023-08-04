"use client";
import { FC } from "react";
import { ImageProps } from "next/image";
import { Box } from "@/UI-kit/components";
import { Header } from "@/components";

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
    <Box spacing={20} sx={{ width: "calc(100% - 300px)" }}>
      <Header />
    </Box>
  );
};

export default Home;
