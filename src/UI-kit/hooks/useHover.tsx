import { useState, useEffect, useRef, RefObject } from "react";

const useHover = <T extends HTMLElement>(): [boolean, RefObject<T>] => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const elementRef = useRef<T>(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    const ref = elementRef.current;

    if (ref) {
      ref.addEventListener("mouseenter", handleMouseEnter);
      ref.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        ref.removeEventListener("mouseenter", handleMouseEnter);
        ref.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return [isHovered, elementRef];
};

export default useHover;
