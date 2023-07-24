"use client";

import { Navigation } from "../nav-link";
import { Box, CheckboxOrRadio, Typography } from "@/UI";
import Button from "../../UI/button/Button";
import { IconArrow } from "@/assets/icon";

const navItem = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const Header = () => {
  return (
    <Box component="header" direction="row" justifyContent="center" spacing={2}>
      <Navigation navLinks={navItem} />
      <Typography variant="h4" component="h2">
        test
      </Typography>
      <Button size="small" variant="outlined" iconStart={<IconArrow />}>
        test
      </Button>
      <Button size="medium" color="secondary" iconEnd={<IconArrow />}>
        test
      </Button>
      <Button size="large" variant="text">
        test
      </Button>
      <Button>test1</Button>
    </Box>
  );
};

export default Header;
