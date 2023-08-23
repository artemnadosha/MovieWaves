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
import { generateArray } from "@/UI-kit/utils";

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
  siblingCount = 1,
  onChange,
}) => {
  const defaultMaxVisiblePage = 2 * siblingCount + 2;
  const additionalPage = 1;
  const adjustedVisiblePageThreshold =
    defaultMaxVisiblePage - siblingCount + additionalPage;

  const [pageState, setPageState] = useState(defaultPage || 1);
  const [minVisiblePage, setMinVisiblePage] = useState(additionalPage);
  const [maxVisiblePage, setMaxVisiblePage] = useState(
    additionalPage + defaultMaxVisiblePage
  );

  const generateCountPagination = generateArray(count);

  const handleClick = (key: number) => {
    setPageState(key);
    if (
      key > adjustedVisiblePageThreshold &&
      key <= count - adjustedVisiblePageThreshold
    ) {
      setMinVisiblePage(key - siblingCount - additionalPage);
      setMaxVisiblePage(key + siblingCount);
    } else if (
      key <= defaultMaxVisiblePage &&
      minVisiblePage !== additionalPage
    ) {
      setMinVisiblePage(additionalPage);
      setMaxVisiblePage(defaultMaxVisiblePage + additionalPage);
    } else if (key >= count - adjustedVisiblePageThreshold) {
      setMinVisiblePage(count - defaultMaxVisiblePage - additionalPage);
      setMaxVisiblePage(count - additionalPage);
    }
  };
  //TODO change this
  useEffect(() => {
    if (defaultPage) handleClick(defaultPage);
  }, []);

  const handleFirstPage = () => {
    setPageState(1);
    setMinVisiblePage(additionalPage);
    setMaxVisiblePage(defaultMaxVisiblePage + additionalPage);
  };

  const handleLastPage = () => {
    setPageState(count);
    setMinVisiblePage(count - defaultMaxVisiblePage - additionalPage);
    setMaxVisiblePage(count - additionalPage);
  };

  const handleNextPage = () => {
    setPageState((prevState) => prevState + additionalPage);
  };

  const handlePrevState = () => {
    setPageState((prevState) => prevState - additionalPage);
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
      {minVisiblePage !== 1 && (
        <ThreePointsWrapper size={size}>
          <Typography color={color}>...</Typography>
        </ThreePointsWrapper>
      )}
      {generateCountPagination
        .slice(minVisiblePage, maxVisiblePage)
        .map((item) => (
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
      {maxVisiblePage !== count - 1 && (
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
