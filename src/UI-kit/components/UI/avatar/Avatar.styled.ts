import styled from "styled-components";
import Image from "next/image";

const Avatar = styled(Image)`
  width: 80px;
  min-width: 80px;
  height: 80px;
  min-height: 80px;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
  background: antiquewhite;
`;

export default Avatar;
