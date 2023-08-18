import { Meta, StoryObj } from "@storybook/react";
import { CheckboxOrRadio, CheckboxOrRadioProps } from "@/UI-kit/components";
import { darkTheme } from "@/UI-kit";
import { ColorKeysProps, SizeProps } from "@/UI-kit/types";

const meta: Meta<CheckboxOrRadioProps> = {
  title: "Checkbox or Radio",
  component: CheckboxOrRadio,
  tags: ["autodocs"],
  argTypes: {
    type: {
      type: {
        name: "string",
        required: true,
      },
      options: ["checkbox", "radio"],
      control: "radio",
      description:
        "The type that defines the component will be checkbox or radio",
      table: {
        type: { summary: "checkbox, radio" },
        defaultValue: { summary: "none" },
      },
    },
    size: {
      type: "string",
      options: Object.keys(darkTheme.size) as SizeProps["size"][],
      control: "radio",
      description: "Use of size that are set in the theme",
      table: {
        type: { summary: Object.keys(darkTheme.size).join(", ") },
        defaultValue: { summary: "medium" },
      },
    },
    variant: {
      type: "string",
      options: ["contained", "outlined"],
      control: "radio",
      description: "Use of variant that are set in the theme",
      table: {
        type: { summary: "contained, outlined" },
        defaultValue: { summary: "contained" },
      },
    },
    color: {
      type: "string",
      options: Object.keys(darkTheme.palette) as ColorKeysProps["color"][],
      control: "select",
      description: "Use of colors that are set in the theme",
      table: {
        type: { summary: Object.keys(darkTheme.palette).join(", ") },
        defaultValue: { summary: "primary" },
      },
    },
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
