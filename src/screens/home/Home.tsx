"use client";
import { FC } from "react";
import { HomeWrapper } from "./Home.styled";
import { Sidebar } from "@/components";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return <Sidebar />;
};

export default Home;
