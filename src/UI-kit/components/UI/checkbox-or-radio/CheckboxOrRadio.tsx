"use client";
import { ChangeEvent, FC, useState } from "react";
import { CheckboxOrRadioProps, HiddenInput } from "@/UI-kit/components";
import { CheckboxWrapper, IconCheckboxWrapper } from "./CheckboxOrRadio.styled";

const CheckboxOrRadio: FC<CheckboxOrRadioProps> = (props) => {
  const { onChange, checked, type, ...rest } = props;

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked((prevState) => checked || !prevState);
    if (onChange) onChange(event);
  };

  return (
    <CheckboxWrapper {...rest} type={type} checked={isChecked}>
      <IconCheckboxWrapper active={isChecked} />
      <HiddenInput type={type} onChange={handleChange} />
    </CheckboxWrapper>
  );
};

export default CheckboxOrRadio;
