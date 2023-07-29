import styled from "styled-components";
import { ColorKeysProps } from "@/UI-kit/types";
import { paletteLightConfig } from "@/UI-kit/theme";

interface SwitchStyled extends ColorKeysProps {
  isChecked?: boolean;
}

export const SwitchWrapper = styled.span`
  display: inline-flex;
  width: 42px;
  height: 22px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

export const SwitchContainer = styled.span.withConfig({
  shouldForwardProp: (props) => !["color", "isChecked"].includes(props),
})<SwitchStyled>(({ color, isChecked, theme }) => {
  const colorPath = theme.palette[color || "primary"];
  return {
    width: "100%",
    height: "100%",
    background: isChecked ? colorPath.main : colorPath.light,
    transition: "background 0.3s ease-in-out",
    borderRadius: "12px",
    position: "relative",
  };
});

export const SwitchIcon = styled.span.withConfig({
  shouldForwardProp: (props) => !["color", "isChecked"].includes(props),
})<SwitchStyled>(({ isChecked, color, theme }) => {
  const colorPath = theme.palette[color || "primary"];

  return {
    width: "22px",
    height: "100%",
    borderRadius: "50%",
    position: "absolute",
    background: isChecked ? colorPath.contrastText : colorPath.main,
    transform: `translateX(${isChecked ? "20px" : 0})`,
    border: `2px solid ${isChecked ? colorPath.main : colorPath.light}`,
    color: isChecked ? colorPath.main : colorPath.contrastText,
    transition: "0.3s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px",
  };
});
