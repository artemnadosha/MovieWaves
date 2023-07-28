import { FC } from "react";
import { Box, LinkGroup, LinkSingleType } from "@/UI-kit";
import { IconForward, IconHeart, IconHome, IconPlay } from "@/assets/icon";

interface SidebarProps {}

const linkGroupMok: LinkSingleType[] = [
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

const Sidebar: FC<SidebarProps> = () => {
  return (
    <Box sx={{ maxWidth: "232px" }} color="background.main">
      <LinkGroup dataLink={linkGroupMok} />
    </Box>
  );
};

export default Sidebar;
