"use client";
import { FC } from "react";
import { ImageProps } from "next/image";
import { Box, Slider } from "@/UI-kit/components";
import { Header } from "@/components";

interface HomeProps {}

const mokImage: ImageProps[] = [
  {
    src: "https://itc.ua/wp-content/uploads/2023/07/oppenheimer-2023-movie-poster-hd-wallpaper-uhdpaper.com-719-1-k.jpg",
    alt: "Oppenheimer",
  },
  {
    src: "https://itc.ua/wp-content/uploads/2023/07/HauntedMansion.jpg",
    alt: "Haunted Mansion",
  },
  {
    src: "https://itc.ua/wp-content/uploads/2023/07/Barbie-Landscape-promo.jpeg",
    alt: "Barbie",
  },
  {
    src: "https://itc.ua/wp-content/uploads/2023/07/4xBX8xoVyd0b1jh9F1fXTwxmY8H.jpg",
    alt: "They Cloned Tyrone",
  },
  {
    src: "https://itc.ua/wp-content/uploads/2023/07/tmDdFWtXwq7alX2dPG3LPPNNVs2.jpg",
    alt: "Bird Box Barcelona",
  },
  {
    src: "https://itc.ua/wp-content/uploads/2023/07/Do-I-Need-To-Watch-the-Other-Insidious-Movies.webp",
    alt: "Insidious: The Red Door",
  },
];

const Home: FC<HomeProps> = () => {
  return (
    <Box>
      <Slider
        images={mokImage}
        visibleElements={1}
        imageSetting={{
          height: "500px",
          disabledSpacing: true,
          borderRadius: "0",
        }}
        autoScrolling
        sliderNavigation
      />
    </Box>
  );
};

export default Home;
