import { IconArrow } from "@/assets/icon";
import { useState, FC, useEffect, CSSProperties, useCallback } from "react";
import Image, { ImageProps } from "next/image";
import {
  NextButton,
  PrevButton,
  SliderContainer,
  SliderList,
  SliderWrapper,
} from "./Slider.styled";
import { ButtonProps } from "@/UI-kit/components/UI/button/Button.type";

export interface ImageSettingProps
  extends Omit<
    CSSProperties,
    "margin" | "padding" | "height" | "borderRadius"
  > {
  spacing?: number;
  borderRadius?: string;
  height?: string;
}

interface SliderProps {
  images: ImageProps[];
  visibleElements: number;
  imageSetting?: ImageSettingProps;
  autoScrolling?: boolean;
  autoScrollingDuration?: number;
  buttonSetting?: ButtonProps;
}

const Slider: FC<SliderProps> = ({
  images,
  visibleElements,
  imageSetting,
  autoScrolling,
  autoScrollingDuration,
  buttonSetting,
}) => {
  const [isTransition, setIsTransition] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  const itemsCount = images.length + 2;

  const duplicateImage = images.slice(0, visibleElements + 1);

  const slideToNext = useCallback((direction: "left" | "right") => {
    setIsTransition(true);
    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return (prevIndex - 1 + itemsCount) % itemsCount;
      }
      return (prevIndex + 1) % itemsCount;
    });
  }, []);

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
        slideToNext("right");
      }, autoScrollingDuration || 3000);

      return () => clearInterval(sliderInterval);
    }
  }, [autoScrolling, autoScrollingDuration, slideToNext]);

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
              width={200}
              height={100}
              src={src}
              alt={alt}
              {...rest}
            />
          ))}
          {duplicateImage.map(({ src, alt, ...rest }, index) => (
            <Image
              key={index}
              width={200}
              height={100}
              src={src}
              alt={alt}
              {...rest}
            />
          ))}
        </SliderList>
      </SliderWrapper>
      <PrevButton
        onClick={() => !isTransition && slideToNext("left")}
        radius="50%"
        {...buttonSetting}
      >
        <IconArrow style={{ transform: "rotateY(180deg)" }} />
      </PrevButton>
      <NextButton
        onClick={() => !isTransition && slideToNext("right")}
        radius="50%"
        {...buttonSetting}
      >
        <IconArrow />
      </NextButton>
    </SliderContainer>
  );
};

export default Slider;
