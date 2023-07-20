"use client";

import { Navigation } from "../nav-link";
import { Box } from "@/UI";
import Button from "../../UI/button/Button";

const navItem = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const Header = () => {
  return (
    <Box component="header" direction="row" justifyContent="center" spacing={2}>
      <Navigation navLinks={navItem} />
      <Button size="small" variant="outlined">
        test
      </Button>
      <Button size="medium" color="secondary">
        test
      </Button>
      <Button size="large" variant="text">
        test
      </Button>
    </Box>
  );
};

export default Header;
