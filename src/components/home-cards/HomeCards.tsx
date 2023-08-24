import { FC } from "react";
import { Box, Card, CardProps, Link } from "@/UI-kit/components";
import { MovieDataType, MovieDataTypeWithImages } from "@/types";

interface HomeCardsProps {
  dataCards: MovieDataTypeWithImages;
}

const generateDataCards = (dataCards: MovieDataType) => {
  return dataCards.map((item) => {
    return {
      id: item.id,
      image: {
        src: item.poster,
        alt: item.title,
      },
      title: item.title,
      subTitle: item.overview,
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
        <Link key={item.id} href={`/movies/${item.id}`} variant="defaultText">
          <Card {...item} />
        </Link>
      ))}
    </Box>
  );
};

export default HomeCards;
