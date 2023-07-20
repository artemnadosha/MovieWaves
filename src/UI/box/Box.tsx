import styled from "styled-components";
import { BoxProps } from "@/types";
import { getColor, spacingGenerated, spacingPaddingMarginFunc } from "@/utils";

const Box = styled(
  ({
    component,
    color,
    spacing,
    direction,
    justifyContent,
    alignItems,
    style,
    padding,
    margin,
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
    margin,
    padding,
  }) => {
    let styles = {};

    if (sx?.flexDirection || sx?.justifyContent || sx?.alignItems) {
      const { flexDirection, justifyContent, alignItems, ...rest } = sx;

      styles = rest;
    }

    const separationColor = getColor({ color });
    return {
      width: "100%",
      padding: padding && spacingPaddingMarginFunc(padding),
      margin: margin && spacingPaddingMarginFunc(margin),

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
      justifyContent: justifyContent || sx?.justifyContent || "center",
      alignItems: alignItems || sx?.alignItems || "center",
      gap:
        spacing && typeof spacing === "string"
          ? spacing
          : spacingGenerated(spacing as number),

      ...styles,
    };
  }
);

export default Box;
