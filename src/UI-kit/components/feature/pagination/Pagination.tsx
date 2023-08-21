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
}

const Pagination: FC<PaginationProps> = ({
  count,
  defaultPage,
  size,
  color,
  variant,
  containerSx,
  onChange,
}) => {
  const [pageState, setPageState] = useState(defaultPage || 1);
  const [hideFlagStart, setHideFlagStart] = useState(1);
  const [hideFlagEnd, setHideFlagEnd] = useState(5);

  useEffect(() => {
    if (count)
      if (
        pageState === hideFlagEnd &&
        hideFlagStart > 1 &&
        hideFlagEnd > 5 &&
        pageState + 1 !== count
      ) {
        setHideFlagStart((prevState) => prevState + 1);
        setHideFlagEnd((prevState) => prevState + 1);
      }

    if (pageState - 1 === hideFlagStart && pageState >= 5) {
      setHideFlagStart((prevState) => prevState - 1);
      setHideFlagEnd((prevState) => prevState - 1);
    }

    if (hideFlagStart <= 1 && hideFlagEnd <= 5 && pageState === 5) {
      setHideFlagStart(3);
      setHideFlagEnd(6);
    }

    if (hideFlagStart <= 3 && hideFlagEnd <= 7 && pageState <= 4) {
      setHideFlagStart(1);
      setHideFlagEnd(5);
    }

    if (
      hideFlagStart === count - 6 &&
      hideFlagEnd === count - 3 &&
      pageState > count - 5
    ) {
      setHideFlagStart(count - 5);
      setHideFlagEnd(count - 1);
    }

    if (pageState === count - 4 && hideFlagStart >= count - 5) {
      setHideFlagStart(count - 6);
      setHideFlagEnd(count - 3);
    }
    if (pageState === count) {
      setHideFlagStart(count - 5);
      setHideFlagEnd(count - 1);
    }
    if (pageState === 1) {
      setHideFlagStart(1);
      setHideFlagEnd(5);
    }
  }, [pageState]);

  const generateCountPagination = Array.from(
    { length: count },
    (_, index) => index + 1
  );

  const handleClick = (key: number) => {
    setPageState(key);
  };

  const handleFirstPage = () => {
    setPageState(1);
    setHideFlagStart(1);
    setHideFlagEnd(5);
  };

  const handleLastPage = () => {
    setPageState(count);
    setHideFlagStart(count - 5);
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
      {pageState >= 5 && (
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
      {hideFlagStart <= count - 6 && (
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
