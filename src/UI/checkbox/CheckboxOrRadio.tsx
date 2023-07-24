import { CheckboxOrRadioProps } from "@/types";
import {
  CheckboxWrapper,
  IconCheckboxWrapper,
  InputCheckbox,
} from "./Checkbox.styled";
import { FC, useState } from "react";

const CheckboxOrRadio: FC<CheckboxOrRadioProps> = ({
  name,
  checked,
  type,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  return (
    <CheckboxWrapper
      {...rest}
      checked={isChecked}
      name={name}
      type={type}
      aria-checked={isChecked}
    >
      <IconCheckboxWrapper active={isChecked} />
      <InputCheckbox
        type={type}
        name={name}
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
    </CheckboxWrapper>
  );
};

export default CheckboxOrRadio;
