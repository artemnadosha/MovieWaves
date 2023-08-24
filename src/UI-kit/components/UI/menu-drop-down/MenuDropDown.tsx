import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { ContentWrapper, ControlWrapper } from "./MenuDropDown.styled";

interface MenuDropDownProps {
  control: ReactNode;
  content: ReactNode;
  positionContent?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  isOpen?: boolean;
}

const MenuDropDown: FC<MenuDropDownProps> = ({
  control,
  content,
  positionContent = "bottomRight",
  isOpen,
}) => {
  const [position, setPosition] = useState<{
    top: number;
    right: number;
    bottom: number;
    left: number;
  } | null>(null);
  const controlRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (controlRef.current) {
      const referenceRect = controlRef.current.getBoundingClientRect();

      const position = {
        top: referenceRect.top,
        bottom: referenceRect.bottom,
        left: referenceRect.left,
        right: referenceRect.right,
      };
      setPosition(position);
    }
  }, []);

  return (
    <>
      <ControlWrapper ref={controlRef}>{control}</ControlWrapper>
      {position && (
        <ContentWrapper
          ref={contentRef}
          position={position}
          isOpen={isOpen}
          positionContent={positionContent}
        >
          {content}
        </ContentWrapper>
      )}
    </>
  );
};

export default MenuDropDown;
