import styled from "styled-components";
import Image from "next/image";
import { hexToRGBA } from "@/UI-kit/utils";

export const ImageComponent = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardWrapper = styled.div(({ theme }) => ({
  width: "280px",
  height: "340px",
  borderRadius: "10px",
  overflow: "hidden",
  position: "relative",
  background: theme.palette.background.light,
  border: `1px solid ${theme.palette.background.main}`,
  zIndex: 1,
  display: "flex",
  transition: "0.5s",
}));

export const CardInfoWrapper = styled.div(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  gap: theme.unitSize.spacing * 0.5,
  padding: theme.unitSize.spacing * 1,
  background: hexToRGBA(theme.palette.background.dark, 0.4),
}));
