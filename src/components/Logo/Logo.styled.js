import styled from "styled-components";
import Link from "next/link";

export const LogoStyle = styled(Link)`
  width: 55px;
  height: 16.5px;
  cursor: pointer;

  svg {
    width: 55px;
    height: 16.5px;
  }

  @media screen and (min-width: 768px) {
    width: 96px;
    height: 29px;
    svg {
      width: 96px;
      height: 29px;
    }
  }
`;
