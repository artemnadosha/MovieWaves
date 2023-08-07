import { FC } from "react";
import { Modal } from "@/UI-kit/components";
import styled from "styled-components";

interface YouTubeModalProps {
  isOpen: boolean;
  onClose?: () => void;
  closeOverlay?: boolean;
  idVideo: string;
}

const YouTubeModal: FC<YouTubeModalProps> = ({ idVideo, ...rest }) => {
  const srcData = `https://www.youtube.com/embed/${idVideo}`;
  return (
    <Modal {...rest}>
      <iframe
        width="560"
        height="315"
        src={srcData}
        frameBorder="0"
        allowFullScreen
      />
    </Modal>
  );
};

export default YouTubeModal;
