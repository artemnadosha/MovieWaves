import { PaletteName } from "@/UI-kit/theme";
import { CheckboxOrRadioProps } from "@/UI-kit/components/UI/checkbox-or-radio/CheckboxOrRadio.type";

export interface LabelledInputFieldProps extends CheckboxOrRadioProps {
  label: string;
  colorTypography?: PaletteName;
}
