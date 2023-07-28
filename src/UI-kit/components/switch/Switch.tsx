import { FC, useState } from "react";
import { SwitchContainer, SwitchIcon, SwitchWrapper } from "./Switch.styled";
import { HiddenInput } from "@/UI-kit";
import { SwitchProps } from "./switch.type";

const Switch: FC<SwitchProps> = ({ iconOn, iconOff, color, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

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
        onChange={() => setIsChecked((prevState) => !prevState)}
      />
    </SwitchWrapper>
  );
};

export default Switch;
