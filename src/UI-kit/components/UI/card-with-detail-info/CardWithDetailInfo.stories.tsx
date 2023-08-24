import { Meta, StoryObj } from "@storybook/react";
import { CardWithDetailInfo } from "@/UI-kit/components";

const meta: Meta<typeof CardWithDetailInfo> = {
  title: "CardWithDetailInfo",
  component: CardWithDetailInfo,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    isOpen: true,
  },
};

export default meta;
type Story = StoryObj<typeof CardWithDetailInfo>;

export const Component: Story = {
  render: (args) => <CardWithDetailInfo {...args} />,
};
