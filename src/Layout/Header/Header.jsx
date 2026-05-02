"use client";

import BurgerBtn from "../../components/Buttons/BurgerBtn/BurgerBtn";
import Logo from "../../components/Logo/Logo";
import Navigation from "../Navigation/Navigation";
// import { DesktopNav } from "./Header.styled";

import { HeaderStyle, LogoWrapper } from "./Header.styled";

const Header = ({ onOpenSide }) => {
  return (
    <HeaderStyle>
      <LogoWrapper>
        <Logo fill="#E6643A" />
      </LogoWrapper>

      <Navigation />

      <BurgerBtn onOpenBtn={onOpenSide} />
    </HeaderStyle>
  );
};

export default Header;
