import styled from "styled-components";

export const FooterStyle = styled.footer`
  border-radius: 10px 10px 0px 0px;
  background-color: #fbfaf5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 34px 0px 20px;

  @media screen and (min-width: 768px) {
    gap: 30px;
    border-radius: 20px 20px 0px 0px;
    padding: 42px 18px 13px;
  }

  @media screen and (min-width: 1440px) {
    border-radius: 30px 30px 0px 0px;
    padding: 43px 30px 19px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0;
  }

  @media screen and (min-width: 1440px) {
    align-items: center;
  }
`;

export const LogoContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 157px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    gap: 25px;
  }
`;

export const ListLink = styled.a`
  color: #e6643a;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export const SocialListItem = styled.li`
  width: 28px;
  height: 28px;
  border: none;
  background-color: #e6643a;
  border-radius: 50%;
  cursor: pointer;
  transition:
    background-color 250ms linear,
    border 250ms linear,
    fill 1000ms linear;

  &:hover {
    background-color: white;
    border: solid 1px #e6643a;
  }

  &:hover > a > svg {
    fill: #e6643a;
  }
`;

export const SocialListLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  svg {
    width: 50%;
    height: 50%;
    fill: white;
  }
`;

export const FooterCopyright = styled.p`
  color: #000;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;
