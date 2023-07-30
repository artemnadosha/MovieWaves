import styled from "styled-components";
import {
  getColor,
  spacingGenerated,
  spacingPaddingMarginFunc,
} from "@/UI-kit/utils";
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
    borderLeft,
    borderBottom,
    borderRight,
    borderTop,
    border,
    borderColor,
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
    borderLeft,
    borderBottom,
    borderRight,
    borderTop,
    border,
    borderColor,
    theme,
  }) => {
    const separationColor = getColor({ color, theme });
    const separationBorderColor = getColor({ color: borderColor, theme });

    return {
      width: "100%",
      height: "100%",

      padding:
        spacingPadding &&
        spacingPaddingMarginFunc({ arg: spacingPadding, theme }),
      margin:
        spacingMargin &&
        spacingPaddingMarginFunc({ arg: spacingMargin, theme }),

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
        spacing &&
        (typeof spacing === "string"
          ? spacing
          : spacingGenerated({ size: spacing as number, theme })),
      borderLeft: borderLeft as string,
      borderBottom: borderBottom as string,
      borderRight: borderRight as string,
      borderTop: borderTop as string,
      border: border as string,
      borderColor:
        typeof separationBorderColor === "object"
          ? separationBorderColor.main
          : separationBorderColor,
      ...(sx as {}),
    };
  }
);

export default Box;
