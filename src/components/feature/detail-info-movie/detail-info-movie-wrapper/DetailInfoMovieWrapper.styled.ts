import styled from "styled-components";
import { Box } from "@/UI-kit/components";

const DetailInfoMovieWrapper = styled(Box).withConfig({
  shouldForwardProp: (prop) => prop !== "bgImage",
})<{ bgImage: string }>`
  background: url(${({ bgImage }) => bgImage});
  background-size: cover;
  position: relative;

  &:after {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
  }
`;

export default DetailInfoMovieWrapper;
