import { Meta, StoryObj } from "@storybook/react";
import { Avatar, Poster } from "@/UI-kit/components";

const meta: Meta<typeof Poster> = {
  title: "Poster",
  component: Poster,
  tags: ["autodocs"],
  args: {
    src: "https://n1s1.hsmedia.ru/6f/58/f5/6f58f5de8ef7a8669cef896d4b704f99/480x497_0xac120003_20009305281589455348.jpg",
    alt: "default Alt",
    width: 280,
    height: 340,
  },
};

export default meta;
type Story = StoryObj<typeof Poster>;

export const Component: Story = {
  render: (args) => <Poster {...args} />,
};
