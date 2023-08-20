import { Meta, StoryObj } from "@storybook/react";
import { Box, Typography } from "@/UI-kit/components";
import { argTypes } from "@/UI-kit/components/utils-stories";

const meta: Meta<typeof Typography> = {
  title: "Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    component: argTypes.componentTypography,
    variant: argTypes.variantTypography,
    color: argTypes.colorNames("inherit"),
    noWrap: argTypes.booleanProps({}),
    sx: argTypes.sx,
    spacingPadding: argTypes.indents,
    spacingMargin: argTypes.indents,
    isShadow: argTypes.booleanProps({}),
  },
  args: {
    children: "Typography component",
    component: "p",
    noWrap: false,
    isShadow: false,
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Component: Story = {
  render: (args) => <Typography {...args} />,
};

export const Default: Story = {
  render: () => (
    <Box spacing={2}>
      <Typography component="h1" variant="h1">
        h1 Typography defined by the theme
      </Typography>
      <Typography component="h2" variant="h2">
        h2 Typography defined by the theme
      </Typography>
      <Typography component="h3" variant="h3">
        h3 Typography defined by the theme
      </Typography>
      <Typography component="h4" variant="h4">
        h4 Typography defined by the theme
      </Typography>
      <Typography component="h5" variant="h5">
        h5 Typography defined by the theme
      </Typography>
      <Typography component="h6" variant="h6">
        h6 Typography defined by the theme
      </Typography>
      <Typography component="p" variant="p">
        p Typography defined by the theme
      </Typography>
    </Box>
  ),
};
