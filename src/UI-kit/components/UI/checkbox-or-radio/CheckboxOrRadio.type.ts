import { InputHTMLAttributes } from "react";
import {
  ColorKeysProps,
  DefaultProps,
  SizeProps,
  TypeCheckboxOrRadioProps,
  VariantCheckbox,
} from "@/UI-kit/types";

export interface CheckboxOrRadioProps
  extends DefaultProps,
    ColorKeysProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "color">,
    VariantCheckbox,
    SizeProps,
    Required<TypeCheckboxOrRadioProps> {}
