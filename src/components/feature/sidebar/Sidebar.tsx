import { FC } from "react";
import { Box } from "../../../UI-kit";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return <Box sx={{ maxWidth: "232px" }} color="background.main"></Box>;
};

export default Sidebar;
