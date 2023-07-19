import styled from "styled-components";
import Link, { LinkProps } from "next/link";
import { paletteConfig, PaletteName } from "@/theme";
import { AnchorHTMLAttributes } from "react";
import { MyLinkProps } from "@/types";

interface LinkWrapperProps {
  color?: PaletteName;
  active?: boolean;
}

const isActiveFunc = ({ active, color }: LinkWrapperProps) => {
  if (active && !color) return paletteConfig.primary.dark;

  if (!color) return paletteConfig.primary.main;

  if (active) return paletteConfig[color].dark || paletteConfig.primary.dark;

  return paletteConfig[color].main;
};

export const LinkWrapper = styled(Link).withConfig({
  shouldForwardProp: (prop) => !["color", "active"].includes(prop),
})<MyLinkProps>(({ color, active }) => ({
  color: isActiveFunc({ active, color }),
  textDecoration: "none",
  transition: "0.25s",

  "&:hover": {
    color: color ? paletteConfig[color].dark : paletteConfig.primary.dark,
  },

  "&:focus": {
    color: color ? paletteConfig[color].dark : paletteConfig.primary.dark,
    outline: "none",
  },
}));
