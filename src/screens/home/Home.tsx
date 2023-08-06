"use client";
import { FC } from "react";
import { HomeCards, HomeSlider } from "@/components";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <HomeSlider />
      <HomeCards />
    </>
  );
};

export default Home;
