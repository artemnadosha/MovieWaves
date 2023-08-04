import styled from "styled-components";
import { IconCheckbox } from "@/assets/icon";
import { CheckboxOrRadioProps } from "@/UI-kit/components";
import { checkboxColorConfig } from "@/UI-kit/components/utils";

export const defaultCheckboxOrRadioConfig = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  backgroundColor: "transparent",
  outline: "none",
  margin: "0",
  cursor: "pointer",
  userSelect: "none",
  textDecoration: "none",
  transition: "0.25s",
  border: "1px solid",
};

export const CheckboxWrapper = styled.span.withConfig({
  shouldForwardProp: (props) =>
    !["color", "variant", "size", "type", "name"].includes(props),
})<CheckboxOrRadioProps>(({ color, variant, type, size, checked, theme }) => {
  const separationBorderRadius = (
    type === "checkbox"
      ? theme.unitSize.borderRadiusCheckbox
      : theme.unitSize.borderRadiusRadio
  ) as string;

  return {
    ...(defaultCheckboxOrRadioConfig as {}),
    ...checkboxColorConfig({ active: checked, theme, color })[
      variant || "contained"
    ],
    ...(theme.size[size || "medium"] as {}),
    borderRadius: separationBorderRadius,
  };
});

export const IconCheckboxWrapper = styled(IconCheckbox).withConfig({
  shouldForwardProp: (props) => props !== "active",
})<{ active?: boolean }>(({ active }) => ({
  color: active ? "inherit" : "transparent",
}));
