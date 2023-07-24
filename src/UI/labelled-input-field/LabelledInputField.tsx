import { FC } from "react";
import { LabelledInputFieldWrapper } from "./LabelledInputField.styled";
import { PaletteConfigTypes, PaletteName } from "@/theme";
import { CheckboxOrRadio, Typography } from "@/UI";
import { StylesSizeProps, StylesVariantCheckboxProps } from "@/types";

interface LabelledInputFieldProps
  extends StylesSizeProps,
    StylesVariantCheckboxProps {
  name: string;
  color?: keyof PaletteConfigTypes;
  colorTypography?: PaletteName;
  label?: string | number;
}

const LabelledInputField: FC<LabelledInputFieldProps> = ({
  name,
  color,
  colorTypography,
  label,
  size,
  variant,
}: LabelledInputFieldProps) => {
  const typographySize =
    (size === "large" && "h5") || (size === "medium" && "h6") || "p";

  return (
    <LabelledInputFieldWrapper>
      <CheckboxOrRadio
        name={name}
        color={color}
        size={size}
        variant={variant}
        type="radio"
      />
      <Typography
        variant={typographySize}
        color={colorTypography || "text.main"}
      >
        {label}
      </Typography>
    </LabelledInputFieldWrapper>
  );
};

export default LabelledInputField;
