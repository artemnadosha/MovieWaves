import { css } from "styled-components";
import { SizeBadgeProps } from "@/UI-kit/types";

export const badgeSizePositionConfig = ({ size }: SizeBadgeProps) => {
  const separationSize = size === "small" ? 0.5 : 1;

  return {
    top: {
      left: css`
        top: 0;
        left: 0;
        transform: scale(${separationSize}) translate(-50%, -50%);
        transform-origin: 0 0;
      `,
      right: css`
        top: 0;
        right: 0;
        transform: scale(${separationSize}) translate(50%, -50%);
        transform-origin: 100% 0;
      `,
    },
    bottom: {
      left: css`
        bottom: 0;
        left: 0;
        transform: scale(${separationSize}) translate(-50%, 50%);
        transform-origin: 0 100%;
      `,
      right: css`
        bottom: 0;
        right: 0;
        transform: scale(${separationSize}) translate(50%, 50%);
        transform-origin: 100% 100%;
      `,
    },
  };
};
