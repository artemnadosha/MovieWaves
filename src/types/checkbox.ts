import { InputHTMLAttributes } from "react";
import { PaletteConfigTypes } from "@/theme";
import {
  StylesSizeProps,
  StylesVariantCheckboxProps,
} from "@/types/defaultProps";

export interface CheckboxOrRadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    StylesVariantCheckboxProps,
    StylesSizeProps {
  color?: keyof PaletteConfigTypes;
  type: "checkbox" | "radio";
  name: string;
}
