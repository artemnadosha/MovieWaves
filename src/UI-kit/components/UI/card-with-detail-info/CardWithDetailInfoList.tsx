import { FC, useEffect, useState } from "react";
import {
  Box,
  CardWithDetailInfo,
  CardWithDetailInfoProps,
  Typography,
} from "@/UI-kit/components";
import { IconNotFoundData } from "@/assets/icon";

interface CardWithDetailInfoListProps {
  dataList?: CardWithDetailInfoProps[];
}

const CardWithDetailInfoList: FC<CardWithDetailInfoListProps> = ({
  dataList,
}) => {
  return (
    <>
      {dataList ? (
        dataList.map((item) => <CardWithDetailInfo key={item.id} {...item} />)
      ) : (
        <Box justifyContent="center" alignItems="center" spacingPadding={1}>
          <IconNotFoundData />
        </Box>
      )}
    </>
  );
};

export default CardWithDetailInfoList;
