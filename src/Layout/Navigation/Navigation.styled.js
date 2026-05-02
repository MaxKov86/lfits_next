import styled from "styled-components";
import Link from "next/link";

export const NavStyle = styled.nav`
  display: none;
  margin-left: auto;

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
  padding-right: 29px;
`;

export const NavListItem = styled.li`
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 2px;
    scale: 0;
    background-color: white;
    transition: scale 300ms linear;
  }

  &:hover {
    &::after {
      scale: 1;
    }
  }
`;

export const NavListLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 300;
`;
