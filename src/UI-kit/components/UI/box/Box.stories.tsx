import { Meta, StoryObj } from "@storybook/react";
import { Box, Typography } from "@/UI-kit/components";
import { argTypes, CSSValues } from "@/UI-kit/components/utils-stories";

const meta: Meta<typeof Box> = {
  title: "Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    direction: argTypes.direction,
    justifyContent: argTypes.justifyContent,
    alignItems: argTypes.alignItems,
    sx: argTypes.sx,
    color: argTypes.colorNames("none"),
    borderColor: argTypes.colorNames("none"),
    border: argTypes.border,
    borderLeft: argTypes.border,
    borderRight: argTypes.border,
    borderBottom: argTypes.border,
    borderTop: argTypes.border,
    children: argTypes.children,
    component: argTypes.componentBox,
    spacing: argTypes.spacing,
    spacingPadding: argTypes.indents,
    spacingMargin: argTypes.indents,
  },
  args: {
    color: "primary",
    sx: {
      width: "500px",
      height: "200px",
    },
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    spacing: 2,
    spacingPadding: 0,
    spacingMargin: 0,
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Component: Story = {
  render: (args) => (
    <Box {...args}>
      {args.children}
      <Typography>HOME</Typography>
      <Typography>ABOUT</Typography>
      <Typography>INFO</Typography>
    </Box>
  ),
};
