import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/UI-kit/components";
import { ButtonProps } from "./Button.type";
import { argTypes } from "@/UI-kit/components/utils-stories";

const meta: Meta<ButtonProps> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: argTypes.variantButton({}),
    size: argTypes.size({}),
    children: argTypes.children,
    color: argTypes.colorKeys(),
    iconStart: argTypes.icon,
    iconEnd: argTypes.icon,
    radius: argTypes.radius,
    onClick: { action: "clicked", table: { disable: true } },
  },
  args: {
    children: "Click me",
    size: "small",
    variant: "contained",
    color: "primary",
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Component: Story = {
  render: (args) => <Button {...args} />,
};
