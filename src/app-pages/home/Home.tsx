"use client";
import { FC } from "react";
import { HomeCards, HomeSlider } from "@/components";
import { HomeSliderType } from "@/types";

interface HomeProps {
  dataSlider: HomeSliderType;
  dataCards: HomeSliderType;
}

const Home: FC<HomeProps> = ({ dataSlider, dataCards }) => {
  return (
    <>
      <HomeSlider dataSlider={dataSlider} />
      <HomeCards dataCards={dataCards} />
    </>
  );
};

export default Home;
