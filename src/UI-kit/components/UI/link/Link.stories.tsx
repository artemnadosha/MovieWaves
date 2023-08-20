import { Meta, StoryObj } from "@storybook/react";
import { Link, MyLinkProps } from "@/UI-kit/components";
import { argTypes } from "@/UI-kit/components/utils-stories";

const meta: Meta<MyLinkProps> = {
  title: "Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    variant: argTypes.variantLink({}),
    size: argTypes.size({}),
    children: argTypes.children,
    color: argTypes.colorKeys(),
    iconStart: argTypes.icon,
    iconEnd: argTypes.icon,
    radius: argTypes.radius,
    href: argTypes.href,
    spacingMargin: argTypes.indents,
    spacingPadding: argTypes.indents,
  },
  args: {
    children: "link",
    size: "small",
    variant: "text",
    color: "primary",
    href: "#",
  },
};

export default meta;
type Story = StoryObj<MyLinkProps>;

export const Component: Story = {
  render: (args) => <Link {...args} />,
};
