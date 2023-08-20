import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@/UI-kit/components";
import { argTypes } from "@/UI-kit/components/utils-stories";

const meta: Meta<typeof Tag> = {
  title: "Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    color: argTypes.colorKeys(),
    size: argTypes.size({}),
    sx: argTypes.sx,
    children: argTypes.children,
    variant: argTypes.variantButton({}),
    radius: argTypes.radius,
  },
  args: {
    color: "primary",
    children: "Tag component",
    variant: "contained",
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Component: Story = {
  render: (args) => <Tag {...args} />,
};
