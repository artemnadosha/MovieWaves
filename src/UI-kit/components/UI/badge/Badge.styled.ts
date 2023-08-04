import styled, { css } from "styled-components";
import { BadgeProps } from "./Badge";
import { badgeSizePositionConfig } from "@/UI-kit/components/utils";

export const BadgeWrapper = styled.div<BadgeProps>(({ sx, size }) => ({
  display: "inline-flex",
  position: "relative",
  flexShrink: 0,
  ...(sx as {}),
}));

export const BadgeItem = styled.span.withConfig({
  shouldForwardProp: (props) =>
    !["color", "size", "position", "positionSx"].includes(props),
})<BadgeProps>(({ theme, color, size, positionSx, position }) => {
  const badgeStyle = css`
    display: flex;
    flex-flow: row wrap;
    place-content: center;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    font-family: inherit;
    font-weight: 500;
    font-size: 0.75rem;
    min-width: 20px;
    line-height: 1;
    padding: 0 6px;
    height: 20px;
    border-radius: 10px;
    z-index: 1;
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background: ${theme.palette[color || "primary"].main};
    color: ${theme.palette[color || "primary"].contrastText};
  `;

  const positionStyle = badgeSizePositionConfig({ size })[
    position?.vertical || "top"
  ][position?.horizontal || "right"];

  const positionSxStyle = css({ ...positionSx });

  return css`
    ${badgeStyle};
    ${positionStyle};
    ${positionSxStyle}
  `;
});
