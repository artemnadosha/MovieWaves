import styled from "styled-components";
import { IconCheckbox } from "@/assets/icon";
import { CheckboxProps } from "@/types";
import { checkboxConfig } from "@/theme";
import { separation } from "@/utils";

export const CheckboxWrapper = styled.span.withConfig({
  shouldForwardProp: (props) => !["color", "variant", "size"].includes(props),
})<CheckboxProps>(({ color, variant, size, checked }) => {
  const checkboxStyles = checkboxConfig({});

  return {
    ...(checkboxStyles.defaultStyles as {}),
    ...separation.variantCheckbox({ variant, color, active: checked }),
    ...separation.sizeCheckbox({ size }),
  };
});

export const InputCheckbox = styled.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
`;

export const IconCheckboxWrapper = styled(IconCheckbox).withConfig({
  shouldForwardProp: (props) => props !== "active",
})<{ active: boolean }>(({ active }) => ({
  color: active ? "inherit" : "transparent",
}));
