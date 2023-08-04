import { FC } from "react";
import { Badge, Box, Button, Input } from "@/UI-kit/components";
import { IconArrow, IconSearch } from "@/assets/icon";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <Box
      direction="row"
      spacingPadding={2}
      justifyContent="space-between"
      sx={{ height: "fit-content" }}
    >
      <Button size="small" variant="outlined">
        <IconArrow style={{ transform: "rotate(180deg)" }} />
      </Button>
      <Input iconStart={<IconSearch />} placeholder="Search everythink" />
    </Box>
  );
};

export default Header;
