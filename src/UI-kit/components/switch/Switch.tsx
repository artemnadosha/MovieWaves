import { FC, useState } from "react";
import { SwitchContainer, SwitchIcon, SwitchWrapper } from "./Switch.styled";
import { HiddenInput } from "@/UI-kit";
import { SwitchProps } from "./switch.type";

const Switch: FC<SwitchProps> = ({ iconOn, iconOff, color, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prevState) => !prevState);
    if (onChange) onChange(isChecked);
  };

  return (
    <SwitchWrapper>
      <SwitchContainer color={color} isChecked={isChecked}>
        <SwitchIcon isChecked={isChecked} color={color}>
          {isChecked ? iconOn : iconOff}
        </SwitchIcon>
      </SwitchContainer>
      <HiddenInput
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
    </SwitchWrapper>
  );
};

export default Switch;
