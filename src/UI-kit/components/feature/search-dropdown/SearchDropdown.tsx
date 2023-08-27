import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  Box,
  CardWithDetailInfoList,
  CardWithDetailInfoProps,
  Input,
  MenuDropDown,
} from "@/UI-kit/components";
import { SearchDropdownAction } from "./index";

interface SearchDropdownProps {
  dataList?: CardWithDetailInfoProps[];
  actionLink: string;
  actionTitle: string;
  onChange: (value: string) => void;
}

const SearchDropdown: FC<SearchDropdownProps> = ({
  dataList,
  actionLink,
  onChange,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setIsLoading(true);
  };

  const handleFocus = (value: boolean) => {
    setIsOpen(value);
  };

  useEffect(() => {
    if (dataList) {
      setIsLoading(false);
    }
  }, [dataList]);

  return (
    <>
      <MenuDropDown
        control={<Input onChange={handleChange} onFocus={handleFocus} />}
        content={
          <Box
            sx={{
              width: "700px",
              maxHeight: "500px",
              overflow: "auto",
              position: "relative",
              paddingBottom: "40px",
            }}
            color="background.dark"
          >
            <CardWithDetailInfoList dataList={dataList} loading={isLoading} />
            <SearchDropdownAction actionLink={actionLink} actionTitle="test" />
          </Box>
        }
        isOpen={isOpen}
      />
    </>
  );
};

export default SearchDropdown;
