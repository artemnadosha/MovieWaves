import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarWithText } from "@/UI-kit/components";
import { argTypes } from "@/UI-kit/components/utils-stories";

const meta: Meta<typeof AvatarWithText> = {
  title: "Avatar with text",
  component: AvatarWithText,
  tags: ["autodocs"],
  argTypes: {
    src: argTypes.src,
    alt: argTypes.alt,
    title: argTypes.title,
    subTitle: argTypes.subTitle,
    color: argTypes.colorKeys(),
  },
  args: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Leonardo_Dicaprio_Cannes_2019.jpg/220px-Leonardo_Dicaprio_Cannes_2019.jpg",
    alt: "default Alt",
    title: "Leonardo Dicaprio",
    subTitle: "Dominic Cobb",
    color: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof AvatarWithText>;

export const Component: Story = {
  render: (args) => <AvatarWithText {...args} />,
};
