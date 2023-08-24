"use client";
import { FC } from "react";
import { HomeCards, HomeSlider } from "@/components";
import { MovieDataType, MovieDataTypeWithImages } from "@/types";

interface HomeProps {
  dataSlider: MovieDataTypeWithImages;
  dataCards: MovieDataTypeWithImages;
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
