"use client";

import {
  NavList,
  NavListItem,
  NavListLink,
  NavStyle,
} from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavStyle>
      <NavList>
        <NavListItem>
          <NavListLink href="/">Головна</NavListLink>
        </NavListItem>

        <NavListItem>
          <NavListLink href="/#mission">Місія</NavListLink>
        </NavListItem>

        <NavListItem>
          <NavListLink href="/#principles">Принципи роботи</NavListLink>
        </NavListItem>

        <NavListItem>
          <NavListLink href="/#team">Команда</NavListLink>
        </NavListItem>

        <NavListItem>
          <NavListLink href="/#activities">Діяльність</NavListLink>
        </NavListItem>

        <NavListItem>
          <NavListLink href="/news">Новини</NavListLink>
        </NavListItem>

        <NavListItem>
          <NavListLink href="/services">Послуги</NavListLink>
        </NavListItem>

        <NavListItem>
          <NavListLink href="#contacts">Контакти</NavListLink>
        </NavListItem>
      </NavList>
    </NavStyle>
  );
};

export default Navigation;
