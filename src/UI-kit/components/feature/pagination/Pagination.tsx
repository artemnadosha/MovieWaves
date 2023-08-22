import { FC, useEffect, useState } from "react";
import { Box, BoxProps, Button, Typography } from "@/UI-kit/components";
import {
  IconArrowLeft,
  IconArrowRight,
  IconFirstPage,
  IconLastPage,
} from "@/assets/icon";
import { ColorKeysProps, SizeProps, VariantButton } from "@/UI-kit/types";
import { ThreePointsWrapper } from "./Pagination.styled";

interface PaginationProps extends SizeProps, ColorKeysProps, VariantButton {
  count: number;
  defaultPage?: number;
  onChange?: (page: number) => void;
  containerSx?: BoxProps;
  siblingCount?: number;
}

const Pagination: FC<PaginationProps> = ({
  count,
  defaultPage,
  size,
  color,
  variant,
  containerSx,
  siblingCount,
  onChange,
}) => {
  const defaultSiblingCount = siblingCount || 1;
  const defaultHideFlagEnd = 2 * defaultSiblingCount + 3;

  const defaultChangeStart = defaultSiblingCount + 4;

  const [pageState, setPageState] = useState(defaultPage || 1);
  const [hideFlagStart, setHideFlagStart] = useState(1);
  const [hideFlagEnd, setHideFlagEnd] = useState(defaultHideFlagEnd);

  useEffect(() => {}, [pageState]);

  const generateCountPagination = Array.from(
    { length: count },
    (_, index) => index + 1
  );

  const handleClick = (key: number) => {
    setPageState(key);
    if (
      key >= defaultChangeStart &&
      key < count - (defaultChangeStart - defaultSiblingCount)
    ) {
      if (key <= pageState) {
        setHideFlagEnd(key + defaultSiblingCount);
        setHideFlagStart(key - defaultSiblingCount - 1);
      } else {
        setHideFlagEnd(key + defaultSiblingCount);
        setHideFlagStart(key - defaultSiblingCount - 1);
      }
    } else if (key <= defaultChangeStart && hideFlagStart !== 1) {
      setHideFlagStart(1);
      setHideFlagEnd(defaultHideFlagEnd);
    } else if (key > defaultChangeStart) {
      setHideFlagStart(count - (defaultChangeStart + defaultSiblingCount - 1));
      setHideFlagEnd(count - 1);
    }
  };

  const handleFirstPage = () => {
    setPageState(1);
    setHideFlagStart(1);
    setHideFlagEnd(defaultChangeStart);
  };

  const handleLastPage = () => {
    setPageState(count);
    setHideFlagStart(count - (defaultChangeStart - 1));
    setHideFlagEnd(count - 1);
  };

  const handleNextPage = () => {
    setPageState((prevState) => prevState + 1);
  };

  const handlePrevState = () => {
    setPageState((prevState) => prevState - 1);
  };

  useEffect(() => {
    if (onChange) onChange(pageState);
  }, [onChange, pageState]);

  return (
    <Box
      justifyContent={containerSx?.justifyContent || "center"}
      alignItems={containerSx?.alignItems || "center"}
      direction={containerSx?.direction || "row"}
      sx={{ height: "fit-content", flexWrap: "wrap", ...containerSx?.sx }}
      spacing={containerSx?.spacing || 1}
      {...containerSx}
    >
      <Button
        variant="defaultText"
        size={size}
        color={color}
        disabled={pageState === 1}
        onClick={handleFirstPage}
      >
        <IconFirstPage />
      </Button>
      <Button
        color={color}
        variant="defaultText"
        size={size}
        onClick={handlePrevState}
        disabled={pageState === 1}
      >
        <IconArrowLeft />
      </Button>
      <Button
        color={color}
        variant={variant}
        key={1}
        size={size}
        equalSides
        active={pageState === 1}
        onClick={() => handleClick(1)}
      >
        {1}
      </Button>
      {hideFlagStart !== 1 && (
        <ThreePointsWrapper size={size}>
          <Typography color={color}>...</Typography>
        </ThreePointsWrapper>
      )}
      {generateCountPagination.slice(hideFlagStart, hideFlagEnd).map((item) => (
        <Button
          key={item}
          size={size}
          equalSides
          color={color}
          variant={variant}
          active={pageState === item}
          onClick={() => handleClick(item)}
        >
          {item}
        </Button>
      ))}
      {hideFlagEnd !== count - 1 && (
        <ThreePointsWrapper size={size}>
          <Typography color={color}>...</Typography>
        </ThreePointsWrapper>
      )}
      <Button
        color={color}
        variant={variant}
        key={count}
        size={size}
        equalSides
        active={pageState === count}
        onClick={() => handleClick(count)}
      >
        {count}
      </Button>
      <Button
        color={color}
        variant="defaultText"
        size={size}
        onClick={handleNextPage}
        disabled={pageState === count}
      >
        <IconArrowRight />
      </Button>
      <Button
        color={color}
        variant="defaultText"
        size={size}
        disabled={pageState === count}
        onClick={handleLastPage}
      >
        <IconLastPage />
      </Button>
    </Box>
  );
};

export default Pagination;
