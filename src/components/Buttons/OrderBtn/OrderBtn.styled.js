import styled from "styled-components";

export const Btn = styled.button`
  width: fit-content;
  display: inline-flex;
  justify-content: center;
  height: 43.044px;
  padding: 10px 15px;
  align-items: center;

  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  background-color: #000;
  cursor: pointer;

  @media screen and (min-width: 375px) {
    padding: 10px 20px;
  }
`;

export const Link = styled.a`
  display: flex;
  gap: 11px;
  width: 100%;
  color: #fbfaf5;

  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  svg {
    width: 14px;
    height: 14px;
  }

  @media screen and (min-width: 375px) {
    font-size: 18px;
    svg {
      width: 17px;
      height: 17px;
    }
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;
