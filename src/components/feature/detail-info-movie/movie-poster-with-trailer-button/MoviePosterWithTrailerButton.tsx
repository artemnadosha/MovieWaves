import { FC, useState } from "react";
import { Box, Button, Poster, YouTubeModal } from "@/UI-kit/components";
import { IconPlay } from "@/assets/icon";

interface MoviePosterWithTrailerButtonProps {
  src: string;
  alt: string;
  idYouTube: string;
}

const MoviePosterWithTrailerButton: FC<MoviePosterWithTrailerButtonProps> = ({
  src,
  alt,
  idYouTube,
}) => {
  const [isModal, setIsModal] = useState(false);

  const handleToggleModal = () => setIsModal((prevState) => !prevState);
  return (
    <>
      <Box sx={{ width: "fit-content" }} spacing={1}>
        <Poster src={src} alt={alt} width="596" height="895" />
        <Button
          variant="outlined"
          iconStart={<IconPlay />}
          onClick={handleToggleModal}
          size="small"
        >
          Trailer
        </Button>
      </Box>
      <YouTubeModal
        isOpen={isModal}
        idVideo={idYouTube}
        onClose={handleToggleModal}
      />
    </>
  );
};

export default MoviePosterWithTrailerButton;
