import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/UI-kit/components";
import { darkTheme } from "@/UI-kit";
import { ColorKeysProps, SizeProps } from "@/UI-kit/types";
import { ButtonProps } from "./Button.type";

const meta: Meta<ButtonProps> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      type: "string",
      options: ["contained", "outlined", "text", "defaultText"],
      control: "select",
      description: "Use of variant that are set in the theme",
      table: {
        type: { summary: "contained, outlined, text, defaultText" },
        defaultValue: { summary: "contained" },
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
    children: {
      type: "string",
      description: "Component label ",
      table: {
        type: { summary: "string, React component" },
        defaultValue: { summary: "none" },
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
    iconStart: {
      options: ["😄"],
      control: "check",
      table: {
        type: { summary: "React Component" },
        defaultValue: { summary: "none" },
      },
    },
    iconEnd: {
      options: ["😄"],
      control: "check",
      table: {
        type: { summary: "React Component" },
        defaultValue: { summary: "none" },
      },
    },
    radius: {
      type: "string",
      description: "Use a string value that accepts border radius",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "none" },
      },
    },
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
