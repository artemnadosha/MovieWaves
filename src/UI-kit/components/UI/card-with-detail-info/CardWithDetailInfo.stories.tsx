import { Meta, StoryObj } from "@storybook/react";
import { CardWithDetailInfo } from "@/UI-kit/components";

const meta: Meta<typeof CardWithDetailInfo> = {
  title: "CardWithDetailInfo",
  component: CardWithDetailInfo,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    image: {
      src: "https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      alt: "string",
    },
    title: "Spiderman",
    subTitle: "Genres: Comedy, Fantastic, Fight",
    titleDescription: "Overview",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, exercitationem, magni! A animi at atque minus nostrum rerum totam unde?",
  },
};

export default meta;
type Story = StoryObj<typeof CardWithDetailInfo>;

export const Component: Story = {
  render: (args) => <CardWithDetailInfo {...args} />,
};
