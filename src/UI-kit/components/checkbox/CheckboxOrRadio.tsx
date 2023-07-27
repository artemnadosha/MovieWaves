"use client";
import { ChangeEvent, FC, useState } from "react";
import {
  CheckboxWrapper,
  IconCheckboxWrapper,
  InputCheckbox,
} from "./Checkbox.styled";
import { CheckboxOrRadioProps } from "./CheckboxOrRadio.type";

const CheckboxOrRadio: FC<CheckboxOrRadioProps> = (props) => {
  const { onControlled, onChange, checked, ...rest } = props;

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked((prevState) => checked || !prevState);
    if (onChange) onChange(event);
    if (onControlled && isChecked) onControlled(event.target.name);
  };

  return (
    <CheckboxWrapper {...rest} checked={isChecked}>
      <IconCheckboxWrapper active={isChecked} />
      <InputCheckbox {...props} onChange={handleChange} />
    </CheckboxWrapper>
  );
};

export default CheckboxOrRadio;
