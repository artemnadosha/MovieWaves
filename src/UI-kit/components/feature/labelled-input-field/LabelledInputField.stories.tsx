import { Meta, StoryObj } from "@storybook/react";
import { LabelledInputField } from "@/UI-kit/components";
import { argTypes } from "@/UI-kit/components/utils-stories";

const meta: Meta<typeof LabelledInputField> = {
  title: "Labelled Input Field",
  component: LabelledInputField,
  tags: ["autodocs"],
  argTypes: {
    color: argTypes.colorKeys(),
    colorTypography: argTypes.colorNames("text.main"),
    label: argTypes.label,
    type: argTypes.typeCheckRadio,
    size: argTypes.size({ size: "medium" }),
    variant: argTypes.variantCheckRadio,
    sx: argTypes.sx,
  },
  args: {
    color: "primary",
    colorTypography: "text.main",
    label: "label",
    type: "checkbox",
    size: "medium",
    variant: "contained",
  },
};

export default meta;
type Story = StoryObj<typeof LabelledInputField>;

export const Component: Story = {
  render: (args) => <LabelledInputField {...args} />,
};
