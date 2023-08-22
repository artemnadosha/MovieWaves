import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarWithText, Pagination } from "@/UI-kit/components";
import { argTypes } from "@/UI-kit/components/utils-stories";

const meta: Meta<typeof Pagination> = {
  title: "Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    count: 12,
    siblingCount: 1,
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Component: Story = {
  render: (args) => <Pagination {...args} />,
};
