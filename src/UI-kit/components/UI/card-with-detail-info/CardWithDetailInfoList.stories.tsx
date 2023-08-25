import { Meta, StoryObj } from "@storybook/react";
import {
  CardWithDetailInfo,
  CardWithDetailInfoList,
} from "@/UI-kit/components";

const mok = [
  {
    id: 1,
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
  {
    id: 2,
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
  {
    id: 3,
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
  {
    id: 4,
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
];

const meta: Meta<typeof CardWithDetailInfoList> = {
  title: "CardWithDetailInfoList",
  component: CardWithDetailInfoList,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    dataList: mok,
  },
};

export default meta;
type Story = StoryObj<typeof CardWithDetailInfoList>;

export const Component: Story = {
  render: (args) => <CardWithDetailInfoList {...args} />,
};
