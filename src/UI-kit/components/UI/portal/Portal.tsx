import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PortalWrapper } from "./Portal.styled";

interface PortalProps {
  children: ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#modal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(<PortalWrapper>{children}</PortalWrapper>, ref.current)
    : null;
};

export default Portal;
