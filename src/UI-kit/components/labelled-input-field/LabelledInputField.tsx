import { FC } from "react";
import { LabelledInputFieldWrapper } from "./LabelledInputField.styled";
import { CheckboxOrRadio, Typography } from "@/UI-kit";
import { LabelledInputFieldProps } from "./LablledInputField.type";

const LabelledInputField: FC<LabelledInputFieldProps> = ({
  name,
  color,
  colorTypography,
  label,
  size,
  value,
  variant,
  type,
  checked,
  ...rest
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
        type={type}
        value={value}
        checked={checked}
        {...rest}
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
