import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

export const Btn = styled.button`
  width: 26px;
  height: 26px;
  border: none;
  outline: none;
  background-color: transparent;
  color: white;
  padding: 0;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Burger = styled(RxHamburgerMenu)`
  width: 100%;
  height: 100%;
`;

export const CloseMenu = styled(RxCross2)`
  width: 100%;
  height: 100%;
`;
