import styled, { css, keyframes } from "styled-components";

export const ControlWrapper = styled.div`
  position: relative;
`;

type PositionProps = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

interface ContentProps {
  position: PositionProps;
  isOpen?: boolean;
  positionContent: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

export const ContentWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["position", "isActive", "positionContent"].includes(prop),
})<ContentProps>(({ position, isOpen, positionContent }) => {
  const defaultStyle = css`
    width: fit-content;
    height: fit-content;
    position: absolute;
    transition: 0.5s;
  `;

  const topLeftStyle = css({
    left: position.left,
    top: position.top,
  });
  const bottomLeftStyle = css({
    left: position.left,
    top: position.bottom,
  });
  const topRightStyle = css({
    right: position.left,
    top: position.top,
  });
  const bottomRightStyle = css({
    right: position.left,
    top: position.bottom,
  });

  const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-40px);
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
  const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translateY(-40px);
    opacity: 0;
  }
`;

  const animateIsActiveStyle = css`
    animation: ${fadeInOut} 0.5s ease-in-out forwards;
  `;
  const animateInActiveStyle = css`
    animation: ${fadeOut} 0.5s ease-in-out forwards;
  `;

  return css`
    ${defaultStyle}
    ${positionContent === "topLeft" && topLeftStyle}
    ${positionContent === "bottomLeft" && bottomLeftStyle}
    ${positionContent === "topRight" && topRightStyle}
    ${positionContent === "bottomRight" && bottomRightStyle}
    ${isOpen && animateIsActiveStyle}
    ${!isOpen && animateInActiveStyle}
  `;
});
