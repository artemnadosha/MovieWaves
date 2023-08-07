import { FC, PropsWithChildren } from "react";
import { ModalWrapper } from "./Modal.styled";
import { Portal } from "../portal";
import { IconExit } from "@/assets/icon";
import { Button } from "../button";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose?: () => void;
  closeOverlay?: boolean;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  closeOverlay = true,
  children,
}) => {
  return isOpen ? (
    <Portal onClick={closeOverlay ? onClose : () => {}}>
      <ModalWrapper>
        {children}
        <Button
          size="small"
          onClick={onClose}
          variant="defaultText"
          sx={{
            position: "absolute",
            top: "-7px",
            right: "-7px",
            transform: "scale(2)",
          }}
        >
          <IconExit />
        </Button>
      </ModalWrapper>
    </Portal>
  ) : null;
};

export default Modal;
