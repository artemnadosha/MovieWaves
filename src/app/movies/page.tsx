"use client";
import { Movies } from "@/app-pages";
import { getMovieServices } from "@/services";
import { useSearchParams } from "next/navigation";

const MoviesPage = async () => {
  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  const data = await getMovieServices.popular(page || "1");

  return <Movies data={data.data} count={data.totalPages} />;
};

export default MoviesPage;
