import { PaletteName } from "@/UI-kit/theme";
import { CheckboxOrRadioProps } from "@/UI-kit/components";

export interface LabelledInputFieldProps extends CheckboxOrRadioProps {
  label: string;
  colorTypography?: PaletteName;
}
