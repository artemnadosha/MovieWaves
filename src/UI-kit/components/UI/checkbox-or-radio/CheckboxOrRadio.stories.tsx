import { Meta, StoryObj } from "@storybook/react";
import { CheckboxOrRadio, CheckboxOrRadioProps } from "@/UI-kit/components";
import { argTypes } from "@/UI-kit/components/utils-stories";

const meta: Meta<CheckboxOrRadioProps> = {
  title: "Checkbox or Radio",
  component: CheckboxOrRadio,
  tags: ["autodocs"],
  argTypes: {
    type: argTypes.typeCheckRadio,
    size: argTypes.size({}),
    variant: argTypes.variantCheckRadio,
    color: argTypes.colorKeys(),
  },
  args: {
    size: "medium",
    variant: "contained",
    color: "primary",
    type: "checkbox",
  },
};

export default meta;
type Story = StoryObj<CheckboxOrRadioProps>;

export const Component: Story = {
  render: (args) => <CheckboxOrRadio {...args} />,
};
