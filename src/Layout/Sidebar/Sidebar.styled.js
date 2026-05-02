import styled from "styled-components";

export const SidebarStyle = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-100%")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: #e6643a;
  z-index: 99999;
  padding-top: 104px;
  padding-bottom: 37px;
  transition: right 500ms ease-in-out;

  @media screen and (min-width: 768px) {
    width: 50%;
    padding-top: 93px;
    padding-bottom: 69px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const SidebarNav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;
  text-align: center;
`;
export const SidebarNavItem = styled.li`
  width: fit-content;
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
export const SidebarNavLink = styled.a`
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;
`;

export const SidebarSocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;
`;
export const SidebarSocialItem = styled.li`
  display: flex;
  width: 28px;
  height: 28px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #e6643a;
    border: solid 1px white;
  }

  &:hover > a > svg {
    fill: white;
  }
`;
export const SidebarSocialLink = styled.a`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: #e6643a;
    width: 50%;
    height: 50%;
  }
`;
