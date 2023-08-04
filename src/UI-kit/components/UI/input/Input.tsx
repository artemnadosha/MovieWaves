import { ChangeEvent, FC, HTMLAttributes, useState } from "react";
import {
  BaseInput,
  Fieldset,
  InputWrapper,
  Legend,
  LegendText,
} from "./Input.styled";
import {
  ColorKeysProps,
  IconProps,
  RadiusProps,
  SizeProps,
  VariantInput,
} from "@/UI-kit/types";
import { IconBox } from "@/UI-kit/components";

export interface InputProps
  extends SizeProps,
    IconProps,
    ColorKeysProps,
    VariantInput,
    RadiusProps,
    Omit<HTMLAttributes<HTMLInputElement>, "color"> {
  focus?: boolean;
  label?: string | number;
}

const Input: FC<InputProps> = ({
  size,
  iconEnd,
  focus,
  iconStart,
  color,
  variant,
  radius,
  onChange,
  label,
  ...rest
}) => {
  const [isFocus, setIsFocus] = useState(focus || false);
  const [value, setValue] = useState("");
  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <InputWrapper focus={isFocus} size={size} radius={radius}>
      {iconStart && <IconBox>{iconStart}</IconBox>}
      <BaseInput
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
      />
      {iconEnd && <IconBox>{iconEnd}</IconBox>}
      <Fieldset focus={isFocus}>
        <Legend focus={isFocus}>
          {label && <LegendText>{label}</LegendText>}
        </Legend>
      </Fieldset>
    </InputWrapper>
  );
};
export default Input;
