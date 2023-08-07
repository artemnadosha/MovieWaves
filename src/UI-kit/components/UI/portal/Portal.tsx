import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Overlay, PortalWrapper } from "./Portal.styled";

interface PortalProps {
  children: ReactNode;
  onClick?: () => void;
}

const Portal = ({ onClick, children }: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#modal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <PortalWrapper>
          <Overlay onClick={onClick} />
          {children}
        </PortalWrapper>,
        ref.current
      )
    : null;
};

export default Portal;
