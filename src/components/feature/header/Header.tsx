import { FC, useState } from "react";
import {
  Badge,
  Box,
  Button,
  CheckboxOrRadio,
  Input,
  YouTubeModal,
} from "@/UI-kit/components";
import { IconArrowRight, IconNotification, IconSearch } from "@/assets/icon";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [isModal, setIsModal] = useState(false);

  const handleToggleModal = () => {
    setIsModal((prevState) => !prevState);
  };
  return (
    <Box
      direction="row"
      spacingPadding={2}
      justifyContent="space-between"
      alignItems="center"
      sx={{ height: "fit-content" }}
    >
      <Button size="medium" variant="outlined" onClick={handleToggleModal}>
        <IconArrowRight style={{ transform: "rotate(180deg)" }} />
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
      <YouTubeModal
        isOpen={isModal}
        onClose={handleToggleModal}
        idVideo="flEq-HpAy7s"
      />
    </Box>
  );
};

export default Header;
