import { CheckboxProps } from "@/types";
import {
  CheckboxWrapper,
  IconCheckboxWrapper,
  InputCheckbox,
} from "@/UI/checkbox/Checkbox.styled";
import { FC, useState } from "react";

const Checkbox: FC<CheckboxProps> = ({ name, checked, ...rest }) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  return (
    <CheckboxWrapper
      {...rest}
      checked={isChecked}
      name={name}
      aria-checked={isChecked}
    >
      <IconCheckboxWrapper active={isChecked} />
      <InputCheckbox
        type="checkbox"
        name={name}
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
    </CheckboxWrapper>
  );
};

export default Checkbox;
