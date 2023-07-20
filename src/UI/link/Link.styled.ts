import styled from "styled-components";
import Link from "next/link";
import { paletteConfig, PaletteName } from "@/theme";
import { MyLinkProps } from "@/types";
import { getColor, spacingPaddingMarginFunc } from "@/utils";

export const LinkWrapper = styled(Link).withConfig({
  shouldForwardProp: (prop) =>
    !["color", "active", "sx", "margin", "padding"].includes(prop),
})<MyLinkProps>(({ color, active, sx, padding, margin }) => {
  let styled = {};

  if (sx) {
    styled = sx;
  }
  const separationColor = getColor({ color });
  return {
    color:
      typeof separationColor === "object"
        ? active
          ? separationColor.dark
          : separationColor.main
        : separationColor,

    textDecoration: "none",
    transition: "0.25s",

    ...styled,

    padding: padding && spacingPaddingMarginFunc(padding),
    margin: margin && spacingPaddingMarginFunc(margin),

    "&:hover": {
      color:
        typeof separationColor === "object"
          ? separationColor.dark
          : paletteConfig.primary.dark,
    },

    "&:focus": {
      color:
        typeof separationColor === "object"
          ? separationColor.dark
          : paletteConfig.primary.dark,
      outline: "none",
    },
  };
});
