import styled from "styled-components";
import { Button } from "../../UI";
import { ImageSettingProps, SliderNavigationSettingProps } from "./Slider";

interface SliderListProps {
  isTransition: boolean;
  translateXValue: number;
  sizeImage: number;
  imageSetting?: ImageSettingProps;
}

interface SettingProps {
  setting?: SliderNavigationSettingProps;
  active: boolean;
}

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const SliderList = styled.div.withConfig({
  shouldForwardProp: (props) =>
    !["isTransition", "translateXValue", "sizeImage", "imageSetting"].includes(
      props
    ),
})<SliderListProps>(
  ({ isTransition, sizeImage, translateXValue, imageSetting, theme }) => ({
    display: "flex",
    flexWrap: "nowrap",
    width: "100%",
    height: imageSetting?.height ? imageSetting?.height : "200px",
    transition: isTransition ? "0.3s" : "none",
    transform: `translateX(${translateXValue}%)`,

    img: {
      width: `${100 / sizeImage}%`,
      height: "100%",
      flexShrink: 0,
      boxSizing: "border-box",
      padding: !imageSetting?.disabledSpacing
        ? imageSetting?.spacing
          ? `0 ${imageSetting.spacing / 2}px`
          : "0 8px"
        : 0,
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
  left: -20px;
  transform: translateY(-50%);
  z-index: 1;
`;

export const NextButton = styled(Button)`
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  z-index: 1;
`;

export const SliderNavigationWrapper = styled.div`
  display: flex;
  width: fit-content;
  gap: 5px;
  position: absolute;
  left: 50%;
  right: 50%;
  bottom: 5px;
  transform: translate(-50%, -50%);
`;

export const SliderNavigation = styled.div.withConfig({
  shouldForwardProp: (prop) => !["setting", "active"].includes(prop),
})<SettingProps>(({ setting, active, theme }) => ({
  width: "15px",
  height: "15px",
  background: active
    ? theme.palette[setting?.color || "primary"].main
    : theme.palette[setting?.color || "primary"].additional,
  borderRadius: "50%",
  cursor: "pointer",
}));
