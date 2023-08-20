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
    isCloseIcon: argTypes.booleanProps({ defaultValue: true }),
    isOpen: argTypes.booleanProps({ defaultValue: "none", required: true }),
    closeOverlay: argTypes.booleanProps({ defaultValue: true }),
  },
  args: {
    children: "Test modal component",
    isCloseIcon: true,
    isOpen: false,
    closeOverlay: true,
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalStoryComponent: typeof Modal = ({
  isOpen,
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
        <Box
          sx={{ width: 200, height: 200 }}
          justifyContent="center"
          alignItems="center"
          color="secondary"
        >
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
