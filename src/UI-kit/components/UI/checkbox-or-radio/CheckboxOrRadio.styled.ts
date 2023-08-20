import styled, { css } from "styled-components";
import { IconCheckbox } from "@/assets/icon";
import { CheckboxOrRadioProps } from "@/UI-kit/components";
import { checkboxColorConfig } from "@/UI-kit/components/utils";

export const defaultStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: none;
  margin: 0;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  transition: 0.25s;
  border: 1px solid;
`;

export const CheckboxWrapper = styled.span.withConfig({
  shouldForwardProp: (props) =>
    !["color", "variant", "size", "type", "name"].includes(props),
})<CheckboxOrRadioProps>(({ color, variant, type, size, checked, theme }) => {
  const separationBorderRadius = css({
    borderRadius: (type === "checkbox"
      ? theme.unitSize.borderRadiusCheckbox
      : theme.unitSize.borderRadiusRadio) as string,
  });

  const variantStyle = checkboxColorConfig({ active: checked, theme, color })[
    variant || "contained"
  ];
  const sizeStyle = css({ ...(theme.size[size || "medium"] as {}) });
  return css`
    ${defaultStyle}
    ${separationBorderRadius}
    ${variantStyle}
    ${sizeStyle}
  `;
});

export const IconCheckboxWrapper = styled(IconCheckbox).withConfig({
  shouldForwardProp: (props) => props !== "active",
})<{ active?: boolean }>(({ active }) => ({
  color: active ? "inherit" : "transparent",
}));
