import { AvatarWithTextProps } from "@/UI-kit/components";
import { HomeSliderItem } from "../home";

export type MovieDetailType = HomeSliderItem & {
  castInfo: AvatarWithTextProps[];
  genre: string[];
  idYouTube?: string;
};
