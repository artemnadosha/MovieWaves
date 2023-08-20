import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@/UI-kit/components";
import { argTypes } from "@/UI-kit/components/utils-stories";

const meta: Meta<typeof Switch> = {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    color: argTypes.colorKeys(),
    iconOff: argTypes.icon,
    iconOn: argTypes.icon,
    onChange: argTypes.disabledInTable,
  },
  args: {
    color: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Component: Story = {
  render: (args) => <Switch {...args} />,
};
