import { FC } from "react";
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
import { useTheme } from "@/providers";
import {
  Box,
  LabelField,
  LinkGroup,
  LinkSingleType,
  Switch,
} from "@/UI-kit/components";

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
  const theme = useTheme();

  const handleChangeTheme = (_: boolean) => {
    if (theme) theme.toggleTheme();
  };

  return (
    <Box
      sx={{ maxWidth: "300px" }}
      color="background.main"
      spacingPadding={1}
      spacing={1}
      component="aside"
      borderRight="1px solid"
      borderColor="border"
    >
      <Logo />
      <LinkGroup
        dataLink={linkGroupMok}
        sx={{ flex: 1 }}
        spacing={1}
        label="Menu"
      />
      <LinkGroup dataLink={link} sx={{ flex: 0 }} spacing={1} />
      <hr />
      <LabelField
        label={theme?.isDarkTheme ? "Dark mode" : "Light mode"}
        control={
          <Switch
            iconOff={<IconMoon />}
            iconOn={<IconSun />}
            onChange={handleChangeTheme}
          />
        }
      />
    </Box>
  );
};

export default Sidebar;
