"use client";
import { ChangeEvent, FC, useState } from "react";
import { CheckboxWrapper, IconCheckboxWrapper } from "./Checkbox.styled";
import { CheckboxOrRadioProps } from "./CheckboxOrRadio.type";
import { HiddenInput } from "@/UI-kit";

const CheckboxOrRadio: FC<CheckboxOrRadioProps> = (props) => {
  const { onControlled, onChange, checked, type, ...rest } = props;

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked((prevState) => checked || !prevState);
    if (onChange) onChange(event);
    if (onControlled && isChecked) onControlled(event.target.name);
  };

  return (
    <CheckboxWrapper {...rest} type={type} checked={isChecked}>
      <IconCheckboxWrapper active={isChecked} />
      <HiddenInput type={type} onChange={handleChange} />
    </CheckboxWrapper>
  );
};

export default CheckboxOrRadio;
