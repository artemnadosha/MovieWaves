import { Meta, StoryObj } from "@storybook/react";
import { Avatar, Poster } from "@/UI-kit/components";
import { argTypes } from "@/UI-kit/components/utils-stories";

const meta: Meta<typeof Poster> = {
  title: "Poster",
  component: Poster,
  tags: ["autodocs"],
  argTypes: {
    src: argTypes.src,
    alt: argTypes.alt,
  },
  args: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Leonardo_Dicaprio_Cannes_2019.jpg/220px-Leonardo_Dicaprio_Cannes_2019.jpg",
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
