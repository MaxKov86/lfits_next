import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding-top: 6px;
  padding-right: 8px;
  padding-left: 8px;
  background-color: #e6643a;

  @media screen and (min-width: 768px) {
    height: 65px;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 17px;
  }

  @media screen and (min-width: 1440px) {
    height: 87px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 24px;
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 6px;
  left: 8px;
  display: flex;
  align-items: center;
  width: 120px;
  height: 36px;
  background-color: #fbfaf5;
  padding-left: 13px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  clip-path: path(
    "M0 10C0 4.47715 4.47715 0 10 0H93.8302C97.4661 0 100.816 1.97346 102.578 5.15389L119.667 36H0V10Z"
  );

  @media screen and (min-width: 768px) {
    top: 17px;
    left: 18px;
    width: 263px;
    height: 48px;
    padding-left: 32px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    clip-path: path(
      "M0 30C0 13.4315 13.4315 0 30 0H204.563C212.792 0 220.66 3.38051 226.325 9.35003L263 48H0V30Z"
    );
  }

  @media screen and (min-width: 1440px) {
    top: 25px;
    left: 30px;
    width: 358px;
    height: 63px;
    padding-left: 32px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    clip-path: path(
      "M0 30C0 13.4315 13.4315 0 30 0H283.433C291.472 0 299.176 3.22696 304.815 8.95718L358 63H0V30Z"
    );
  }
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  color: #e6643a;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 45px;
  }
`;
