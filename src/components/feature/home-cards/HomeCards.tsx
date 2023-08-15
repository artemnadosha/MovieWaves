import { FC } from "react";
import { Box, Card, CardProps } from "@/UI-kit/components";
import { HomeSliderType } from "@/types";

interface HomeCardsProps {
  dataCards: HomeSliderType;
}

const mokCard: CardProps[] = [
  {
    image: {
      src: "https://itc.ua/wp-content/uploads/2023/07/oppenheimer-2023-movie-poster-hd-wallpaper-uhdpaper.com-719-1-k.jpg",
      alt: "Oppenheimer",
    },
    title: "Oppenheimer",
    subTitle: "Lorem ipsum dolor",
  },
  {
    image: {
      src: "https://itc.ua/wp-content/uploads/2023/07/HauntedMansion.jpg",
      alt: "Haunted Mansion",
    },
    title: "Haunted Mansion",
    subTitle: "Lorem ipsum dolor",
  },
  {
    image: {
      src: "https://itc.ua/wp-content/uploads/2023/07/Barbie-Landscape-promo.jpeg",
      alt: "Barbie",
    },
    title: "Barbie",
    subTitle: "Lorem ipsum dolor",
  },
  {
    image: {
      src: "https://itc.ua/wp-content/uploads/2023/07/4xBX8xoVyd0b1jh9F1fXTwxmY8H.jpg",
      alt: "They Cloned Tyrone",
    },
    title: "They Cloned Tyrone",
    subTitle: "Lorem ipsum dolor",
  },
];

const generateDataCards = (dataCards: HomeSliderType) => {
  return dataCards.map((item) => {
    return {
      id: item.id,
      image: {
        src: item.poster,
        alt: item.title,
      },
    };
  });
};

const HomeCards: FC<HomeCardsProps> = ({ dataCards }) => {
  const generateData = generateDataCards(dataCards);
  return (
    <Box
      spacingPadding={2}
      spacing={1}
      direction="row"
      justifyContent="space-between"
      sx={{ height: "fit-content" }}
    >
      {generateData.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </Box>
  );
};

export default HomeCards;