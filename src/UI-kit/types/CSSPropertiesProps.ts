import { CSSProperties } from "react";

export interface RadiusProps {
  radius?: CSSProperties["borderRadius"];
}

export interface DirectionProps {
  direction?: CSSProperties["flexDirection"];
}

export interface OrientingProps {
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
}

export interface BorderProps {
  borderLeft?: CSSProperties["borderLeft"];
  borderRight?: CSSProperties["borderRight"];
  borderBottom?: CSSProperties["borderBottom"];
  borderTop?: CSSProperties["borderTop"];
  border?: CSSProperties["border"];
}
