import { Meta, StoryObj } from "@storybook/react";
import { Box, Input, MenuDropDown } from "@/UI-kit/components";

const meta: Meta<typeof MenuDropDown> = {
  title: "MenuDropDown",
  component: MenuDropDown,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    isOpen: true,
  },
};

export default meta;
type Story = StoryObj<typeof MenuDropDown>;

const TestComponent = () => {
  return (
    <Box sx={{ width: "200px", maxHeight: "500px", background: "red" }}>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
    </Box>
  );
};

export const Component: Story = {
  render: (args) => (
    <MenuDropDown {...args} control={<Input />} content={<TestComponent />} />
  ),
};
