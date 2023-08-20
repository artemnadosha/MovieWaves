import { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/UI-kit/components";
import { argTypes } from "@/UI-kit/components/utils-stories";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    color: argTypes.colorKeys(),
    radius: argTypes.radius,
    label: argTypes.label,
    size: argTypes.size({}),
    variant: argTypes.variantInput,
    iconEnd: argTypes.icon,
    iconStart: argTypes.icon,
    focus: argTypes.disabledInTable,
  },
  args: {
    color: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Component: Story = {
  render: (args) => <Input {...args} />,
};
