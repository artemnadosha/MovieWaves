import { FC } from "react";
import { Box, LinkGroup, LinkSingleType, Switch } from "@/UI-kit";
import {
  IconForward,
  IconHeart,
  IconHelp,
  IconHome,
  IconLogout,
  IconMoon,
  IconPlay,
  IconSun,
} from "@/assets/icon";
import { Logo } from "@/components/UI";

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

const link: LinkSingleType[] = [
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

const Sidebar: FC<SidebarProps> = () => {
  return (
    <Box
      sx={{ maxWidth: "300px" }}
      color="background.main"
      spacingPadding={1}
      spacing={1}
    >
      <Logo />
      <LinkGroup dataLink={linkGroupMok} sx={{ flex: 1 }} />
      <LinkGroup dataLink={link} sx={{ flex: 0 }} />
      <hr />
      <Switch iconOff={<IconSun />} iconOn={<IconMoon />} />
    </Box>
  );
};

export default Sidebar;
