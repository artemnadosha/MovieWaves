import { InputHTMLAttributes } from "react";
import { PaletteConfigTypes } from "@/theme";
import {
  StylesSizeProps,
  StylesVariantCheckboxProps,
} from "@/types/defaultProps";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    StylesVariantCheckboxProps,
    StylesSizeProps {
  color?: keyof PaletteConfigTypes;
  name: string;
}
