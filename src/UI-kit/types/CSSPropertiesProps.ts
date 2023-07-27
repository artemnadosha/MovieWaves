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
