import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarWithText, LinkGroup } from "@/UI-kit/components";
import { argTypes } from "@/UI-kit/components/utils-stories";

const meta: Meta<typeof LinkGroup> = {
  title: "Link Group",
  component: LinkGroup,
  tags: ["autodocs"],
  argTypes: {
    label: argTypes.label,
  },
  args: {
    dataLink: [
      {
        label: "Link 1",
        href: "#",
      },
      {
        label: "Link 2",
        href: "#",
      },
      {
        label: "Link 3",
        href: "#",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof LinkGroup>;

export const Component: Story = {
  render: (args) => <LinkGroup {...args} />,
};
