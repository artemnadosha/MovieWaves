import styled from "styled-components";
import Image from "next/image";

const Poster = styled(Image)`
  width: 280px;
  height: 340px;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
`;

export default Poster;
