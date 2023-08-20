import { Meta, StoryObj } from "@storybook/react";
import { argTypes } from "@/UI-kit/components/utils-stories";
import { Box, Button, Modal } from "@/UI-kit/components";
import { useEffect, useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    children: argTypes.children,
    onClose: argTypes.disabledInTable,
  },
  args: {
    children: "test modal component",
    isCloseIcon: true,
    isOpen: false,
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalStoryComponent: typeof Modal = ({
  isOpen,
  onClose,
  closeOverlay,
  isCloseIcon,
  children,
}) => {
  const [isOpenModal, setIsOpen] = useState(isOpen || false);
  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  const handleToggleModal = () => setIsOpen((prevState) => !prevState);
  return (
    <>
      <Modal
        isOpen={isOpenModal}
        onClose={handleToggleModal}
        closeOverlay={closeOverlay}
        isCloseIcon={isCloseIcon}
      >
        <Box sx={{ width: 200, height: 200 }} color="secondary">
          {children}
        </Box>
      </Modal>
      <Button onClick={handleToggleModal}>Open modal</Button>
    </>
  );
};

export const Component: Story = {
  render: (args) => <ModalStoryComponent {...args} />,
};
