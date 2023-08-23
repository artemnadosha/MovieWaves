import { FC } from "react";
import { IconMoon, IconSun } from "@/assets/icon";
import { Box, LabelField, LinkGroup, Switch } from "@/UI-kit/components";
import { useTheme } from "@/providers";
import { Logo } from "@/components";
import { linkGroupMok, link } from "./Sidebar.utils";

interface SidebarProps {}

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
        label={theme?.isDarkTheme === "dark" ? "Dark mode" : "Light mode"}
        control={
          <Switch
            defaultValue={theme?.isDarkTheme !== "dark"}
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
