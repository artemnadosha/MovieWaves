import { FC, PropsWithChildren } from "react";
import {
  Box,
  CardWithDetailInfo,
  CardWithDetailInfoProps,
  Loader,
} from "@/UI-kit/components";
import { IconNotFoundData } from "@/assets/icon";

export interface CardWithDetailInfoListProps {
  dataList?: CardWithDetailInfoProps[];
  loading?: boolean;
}

const CardWithDetailInfoList: FC<CardWithDetailInfoListProps> = ({
  dataList,
  loading,
}) => {
  return (
    <>
      {dataList?.length ? (
        dataList.map((item) => <CardWithDetailInfo key={item.id} {...item} />)
      ) : loading ? (
        <Loader />
      ) : (
        <Box justifyContent="center" alignItems="center" spacingPadding={1}>
          <IconNotFoundData />
        </Box>
      )}
    </>
  );
};

export default CardWithDetailInfoList;
