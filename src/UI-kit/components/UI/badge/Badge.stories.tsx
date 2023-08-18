import { Meta, StoryObj } from "@storybook/react";
import { Avatar, Badge } from "@/UI-kit/components";
import { darkTheme } from "@/UI-kit";
import { ColorKeysProps, SizeProps } from "@/UI-kit/types";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    hidden: {
      type: "boolean",
      description: "Ability to hide badge",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    label: {
      type: "string",
      description: "The text in the badge",
      table: {
        type: { summary: "string | number" },
        defaultValue: { summary: "none" },
      },
    },
    position: {
      description: "An object that takes in a horizontal and vertical value",
      options: ["top-left", "top-right", "bottom-left", "bottom-right"],
      mapping: {
        "top-left": {
          horizontal: "left",
          vertical: "top",
        },
        "top-right": {
          horizontal: "right",
          vertical: "top",
        },
        "bottom-left": {
          horizontal: "left",
          vertical: "bottom",
        },
        "bottom-right": {
          horizontal: "right",
          vertical: "bottom",
        },
      },
      table: {
        type: {
          summary: "Badge Position Props",
          detail: `{ vertical: 'top' | 'bottom', horizontal: 'left' | 'right' }`,
        },
        defaultValue: {
          summary: `horizontal:left, vertical:top`,
        },
      },
    },
    positionSx: {
      description: "An object that accepts values to fine-tune the badge",
      table: {
        type: {
          summary: "Badge PositionSX Props",
          detail: `{ top: CSSProperties["top"] | bottom: CSSProperties["bottom"] | left: CSSProperties["left"] | right: CSSProperties["right"] }`,
        },
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
    size: {
      type: "string",
      options: ["small", "large"],
      control: "radio",
      description: "Use of size that are set in the badge",
      table: {
        type: { summary: "small, large" },
        defaultValue: { summary: "large" },
      },
    },
  },
  args: {
    hidden: false,
    color: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Component: Story = {
  render: (args) => (
    <Badge {...args}>
      <div
        style={{
          width: 50,
          height: 50,
          background: "orange",
        }}
      ></div>
    </Badge>
  ),
};
