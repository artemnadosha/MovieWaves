import { FC, useState } from "react";
import { HomeSliderWrapper } from "./HomeSlider.styled";
import { Box, Button, Slider, Typography } from "@/UI-kit/components";
import { ImageProps } from "next/image";
import { MovieDataType } from "@/types";

interface HomeSliderProps {
  dataSlider: MovieDataType;
}

const generateSliderItem = (dataSlider: MovieDataType) => {
  return dataSlider.map((item) => {
    return {
      mainSlider: {
        src: item.backdrop,
        alt: item.title,
      },
      subSlider: item.moviesImages,
    };
  });
};

const HomeSlider: FC<HomeSliderProps> = ({ dataSlider }) => {
  const [indexMainSlider, setIndexMainSlider] = useState(1);

  const data = generateSliderItem(dataSlider);
  const dataMainSlider = data.map((item) => item.mainSlider);

  const handleChangeMainSlide = (index: number) => {
    if (index <= dataSlider.length - 1) {
      setIndexMainSlider(index);
    } else {
      setIndexMainSlider(0);
    }
  };
  return (
    <HomeSliderWrapper>
      <Slider
        images={dataMainSlider}
        visibleElements={1}
        imageSetting={{
          height: "100%",
          disabledSpacing: true,
          borderRadius: "0",
          sx: { objectPosition: "top" },
        }}
        autoScrolling
        sliderNavigation
        onChange={handleChangeMainSlide}
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
          images={data[indexMainSlider].subSlider}
          visibleElements={3}
          imageSetting={{ height: "100px", borderRadius: "20px" }}
        />
      </Box>
    </HomeSliderWrapper>
  );
};

export default HomeSlider;
