import styled, { css } from "styled-components";
import { SizeProps } from "@/UI-kit/types";
import { equalSidesStyles } from "@/UI-kit/components/utils";

const displayCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThreePointsWrapper = styled.div<SizeProps>(
  ({ size }) => `
    ${equalSidesStyles[size || "medium"]}
    ${displayCSS}
    color: #fff
`
);
