import styled from "styled-components";

export const ModalWrapper = styled.div`
  z-index: 1;
  position: relative;
`;

export const Overlay = styled.div`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;
