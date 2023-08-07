import { IconArrow } from "@/assets/icon";
import { useState, FC, useEffect, useCallback } from "react";
import Image, { ImageProps } from "next/image";
import {
  NextButton,
  PrevButton,
  SliderContainer,
  SliderList,
  SliderNavigation,
  SliderNavigationWrapper,
  SliderWrapper,
} from "./Slider.styled";
import { PaletteConfigType } from "@/UI-kit/theme";
import { DefaultProps } from "@/UI-kit/types";
import { ButtonProps } from "../../UI";

export interface ImageSettingProps extends DefaultProps {
  spacing?: number;
  disabledSpacing?: boolean;
  borderRadius?: string;
  height?: string;
}

export interface SliderNavigationSettingProps extends DefaultProps {
  color?: keyof PaletteConfigType;
}

export interface AutoScrollingSettingProps {
  duration?: number;
}

interface SliderProps {
  images: ImageProps[];
  visibleElements: number;
  imageSetting?: ImageSettingProps;
  autoScrolling?: boolean;
  autoScrollingSetting?: AutoScrollingSettingProps;
  sliderNavigation?: boolean;
  sliderNavigationSetting?: SliderNavigationSettingProps;
  buttonSetting?: ButtonProps;
  onChange?: (index: number) => void;
}

const Slider: FC<SliderProps> = ({
  images,
  visibleElements,
  imageSetting,
  autoScrolling,
  autoScrollingSetting,
  buttonSetting,
  sliderNavigation,
  sliderNavigationSetting,
  onChange,
}) => {
  const [isTransition, setIsTransition] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  const itemsCount = images.length + 2;

  const duplicateImage = images.slice(0, visibleElements + 1);

  const slideToNext = useCallback(
    ({
      direction,
      index,
    }: {
      direction?: "left" | "right";
      index?: number;
    }) => {
      setIsTransition(true);
      if (index || index === 0) {
        setCurrentIndex(index);
      } else {
        setCurrentIndex((prevIndex) => {
          if (direction === "left") {
            return (prevIndex - 1 + itemsCount) % itemsCount;
          }
          return (prevIndex + 1) % itemsCount;
        });
      }
    },
    [itemsCount]
  );

  useEffect(() => {
    if (onChange) onChange(currentIndex);
  }, [currentIndex]);

  const handleTransitionEnd = () => {
    setIsTransition(false);
    if (currentIndex === 0) {
      setCurrentIndex(itemsCount - 2);
    } else if (currentIndex === itemsCount - 1) {
      setCurrentIndex(1);
    }
  };

  useEffect(() => {
    if (autoScrolling) {
      const sliderInterval = setInterval(() => {
        slideToNext({ direction: "right" });
      }, autoScrollingSetting?.duration || 5000);

      return () => clearInterval(sliderInterval);
    }
  }, [autoScrolling, autoScrollingSetting?.duration, slideToNext]);

  return (
    <SliderContainer>
      <SliderWrapper>
        <SliderList
          sizeImage={visibleElements}
          imageSetting={imageSetting}
          translateXValue={-(100 / visibleElements) * currentIndex}
          isTransition={isTransition}
          onTransitionEnd={handleTransitionEnd}
        >
          {images.map(({ src, alt, ...rest }, index) => (
            <Image
              key={index}
              width={1920}
              height={1080}
              src={src}
              alt={alt}
              {...rest}
            />
          ))}
          {duplicateImage.map(({ src, alt, ...rest }, index) => (
            <Image
              key={index}
              width={1920}
              height={1080}
              src={src}
              alt={alt}
              {...rest}
            />
          ))}
        </SliderList>
      </SliderWrapper>
      {!sliderNavigation && (
        <>
          <PrevButton
            onClick={() => !isTransition && slideToNext({ direction: "left" })}
            radius="50%"
            {...buttonSetting}
          >
            <IconArrow style={{ transform: "rotateY(180deg)" }} />
          </PrevButton>
          <NextButton
            onClick={() => !isTransition && slideToNext({ direction: "right" })}
            radius="50%"
            {...buttonSetting}
          >
            <IconArrow />
          </NextButton>
        </>
      )}
      {sliderNavigation && (
        <SliderNavigationWrapper>
          {images.map((item, index) => (
            <SliderNavigation
              key={index}
              setting={sliderNavigationSetting}
              active={currentIndex - 1 === index}
              onClick={() =>
                !isTransition &&
                slideToNext({
                  index: index + 1,
                })
              }
            />
          ))}
        </SliderNavigationWrapper>
      )}
    </SliderContainer>
  );
};

export default Slider;
