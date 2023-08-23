import { LinkSingleType } from "@/UI-kit/components";
import {
  IconForward,
  IconHeart,
  IconHelp,
  IconHome,
  IconLogout,
  IconPlay,
} from "@/assets/icon";

export const linkGroupMok: LinkSingleType[] = [
  {
    label: "Home",
    href: "/",
    iconStart: <IconHome />,
  },
  {
    label: "Movies",
    href: "/movies",
    iconStart: <IconPlay />,
  },
  {
    label: "Series",
    href: "/series",
    iconStart: <IconForward />,
  },
  {
    label: "Favourite",
    href: "/favourite",
    iconStart: <IconHeart />,
  },
];

export const link: LinkSingleType[] = [
  {
    label: "Help Center",
    href: "/help-center",
    iconStart: <IconHelp />,
  },
  {
    label: "Logout",
    href: "/login",
    iconStart: <IconLogout />,
  },
];
