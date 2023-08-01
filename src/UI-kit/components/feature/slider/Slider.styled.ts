import styled from "styled-components";
import { Button } from "../../UI";
import { ImageSettingProps } from "./Slider";

interface SliderListProps {
  isTransition: boolean;
  translateXValue: number;
  sizeImage: number;
  imageSetting?: ImageSettingProps;
}

export const SliderContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const SliderList = styled.div.withConfig({
  shouldForwardProp: (props) =>
    ![
      "isTransition",
      "translateXValue",
      "sizeImage",
      "sliderItemSetting",
    ].includes(props),
})<SliderListProps>(
  ({ isTransition, sizeImage, translateXValue, imageSetting, theme }) => ({
    display: "flex",
    flexWrap: "nowrap",
    width: "100%",
    height: imageSetting?.height ? imageSetting?.height : "100%",
    transition: isTransition ? "0.3s" : "none",
    transform: `translateX(${translateXValue}%)`,

    img: {
      width: `${100 / sizeImage}%`,
      height: "100%",
      flexShrink: 0,
      boxSizing: "border-box",
      padding: imageSetting?.spacing
        ? `0 ${imageSetting.spacing / 2}px`
        : "0 8px",
      borderRadius: imageSetting?.borderRadius
        ? imageSetting.borderRadius
        : (theme.unitSize.borderRadius as string),
      objectFit: "cover",
      objectPosition: "center",
      ...(imageSetting as {}),
    },
  })
);

export const PrevButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 1;
`;

export const NextButton = styled(Button)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  z-index: 1;
`;
