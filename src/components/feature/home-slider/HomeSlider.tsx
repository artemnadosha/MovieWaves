import { FC } from "react";
import { HomeSliderWrapper } from "./HomeSlider.styled";
import { Box, Button, Slider, Typography } from "@/UI-kit/components";
import { ImageProps } from "next/image";

interface HomeSliderProps {}
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
const HomeSlider: FC<HomeSliderProps> = () => {
  return (
    <HomeSliderWrapper>
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

      <Button
        sx={{ position: "absolute", bottom: 36, left: 36, zIndex: 3 }}
        size="large"
      >
        Watch
      </Button>
      <Box
        sx={{
          position: "absolute",
          width: "40%",
          height: "fit-content",
          bottom: 36,
          right: 36,
          zIndex: 3,
        }}
      >
        <Slider
          images={mokImage}
          visibleElements={3}
          imageSetting={{ height: "100px", borderRadius: "20px" }}
        />
      </Box>
    </HomeSliderWrapper>
  );
};

export default HomeSlider;
