import styled from "styled-components";

export const SectionStyle = styled.section`
  position: relative;
  padding: 0 8px;

  @media screen and (min-width: 768px) {
    padding: 0 18px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 30px;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  /* height: 470px; */
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fbfaf5;
  outline: none;
  border-radius: 0 15px 15px 15px;
  padding: 122px 11px 8px;

  @media screen and (min-width: 768px) {
    gap: 8px;
    padding: 64px 301px 17px 32px;
    border-radius: 0 30px 30px 30px;
  }

  @media screen and (min-width: 1440px) {
    gap: 39px;
    padding: 71px 555px 20px 32px;
  }
`;

export const Text = styled.p`
  color: #000;

  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 34px;
  }
`;

export const BottomTextWrapper = styled.div`
  width: fit-content;
  height: 34px;
  display: flex;
  align-items: center;
  gap: 9px;
`;

export const FlyDuck = styled.img`
  position: absolute;
  top: 33px;
  right: 27px;
  width: 107px;
  height: 51px;

  @media screen and (min-width: 768px) {
    top: 118px;
    right: 48px;
    width: 213px;
    height: 102px;
  }

  @media screen and (min-width: 1440px) {
    top: 108px;
    right: 136px;
    width: 269px;
    height: 129px;
  }
`;
