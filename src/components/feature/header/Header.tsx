import { FC } from "react";
import { Badge, Box, Button, Input, Link } from "@/UI-kit/components";
import { IconArrow, IconNotification, IconSearch } from "@/assets/icon";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <Box
      direction="row"
      spacingPadding={2}
      justifyContent="space-between"
      alignItems="center"
      sx={{ height: "fit-content" }}
    >
      <Button size="small" variant="outlined">
        <IconArrow style={{ transform: "rotate(180deg)" }} />
      </Button>
      <Box
        direction="row"
        alignItems="center"
        sx={{ width: "fit-content" }}
        spacing={5}
      >
        <Input iconStart={<IconSearch />} placeholder="Search everythink" />
        <Badge size="small" positionSx={{ top: "3px", right: "6px" }}>
          <Button size="large" variant="defaultText">
            <IconNotification />
          </Button>
        </Badge>
      </Box>
    </Box>
  );
};

export default Header;
