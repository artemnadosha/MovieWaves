import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/UI-kit/components";
import { argTypes } from "@/UI-kit/components/utils-stories";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    hidden: argTypes.hidden,
    label: argTypes.label,
    position: argTypes.position,
    positionSx: argTypes.positionSx,
    color: argTypes.colorKeys(),
    size: argTypes.sizeAnother,
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
