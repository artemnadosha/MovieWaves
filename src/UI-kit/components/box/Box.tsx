import {
  getColor,
  spacingGenerated,
  spacingPaddingMarginFunc,
} from "@/UI-kit/utils";
import styled from "styled-components";
import { BoxProps } from "./Box.type";

const Box = styled(
  ({
    component,
    color,
    spacing,
    direction,
    justifyContent,
    alignItems,
    sx,
    spacingMargin,
    spacingPadding,
    children,
    ...rest
  }: BoxProps) => {
    const Component = component || "div";

    return <Component {...rest}>{children}</Component>;
  }
)(
  ({
    direction,
    color,
    justifyContent,
    alignItems,
    sx,
    spacing,
    spacingPadding,
    spacingMargin,
  }) => {
    const separationColor = getColor({ color });
    return {
      width: "100%",
      height: "100%",

      padding: spacingPadding && spacingPaddingMarginFunc(spacingPadding),
      margin: spacingMargin && spacingPaddingMarginFunc(spacingMargin),

      color:
        typeof separationColor === "object"
          ? separationColor.contrastText
          : separationColor,

      background:
        typeof separationColor === "object"
          ? separationColor.main
          : "transparent",

      display: "flex",
      flexDirection: direction || "column",
      justifyContent: justifyContent || sx?.justifyContent,
      alignItems: alignItems || sx?.alignItems,
      gap:
        spacing && typeof spacing === "string"
          ? spacing
          : spacingGenerated(spacing as number),

      ...(sx as {}),
    };
  }
);

export default Box;
