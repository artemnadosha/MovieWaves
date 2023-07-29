import styled from "styled-components";
import { IconCheckbox } from "@/assets/icon";
import { CheckboxOrRadioProps } from "./CheckboxOrRadio.type";
import { separation } from "@/UI-kit/utils";
import {
  checkboxColorConfig,
  checkboxOrRadioConfig,
} from "../theme-styles-components";

export const CheckboxWrapper = styled.span.withConfig({
  shouldForwardProp: (props) =>
    !["color", "variant", "size", "type", "name"].includes(props),
})<CheckboxOrRadioProps>(({ color, variant, type, size, checked }) => {
  return {
    ...(checkboxOrRadioConfig.defaultStyles as {}),
    ...separation.variantCheckbox({ variant, color, active: checked }),
    ...separation.sizeCheckboxOrRadio({ size }),
    borderRadius: checkboxColorConfig({ type }).borderRadius,
  };
});

export const IconCheckboxWrapper = styled(IconCheckbox).withConfig({
  shouldForwardProp: (props) => props !== "active",
})<{ active?: boolean }>(({ active }) => ({
  color: active ? "inherit" : "transparent",
}));
