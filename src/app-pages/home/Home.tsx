"use client";
import { FC } from "react";
import { HomeCards, HomeSlider } from "@/components";
import { MovieDataType } from "@/types";

interface HomeProps {
  dataSlider: MovieDataType;
  dataCards: MovieDataType;
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
