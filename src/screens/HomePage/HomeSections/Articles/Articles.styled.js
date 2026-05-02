import styled from "styled-components";

export const SectionStyle = styled.section``;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 50px;
  padding: 50px 8px 0px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    padding: 50px 18px 0px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 80px;
    padding: 80px 30px 0px;
  }
`;

export const Title = styled.h2`
  color: #fbfaf5;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

  @media screen and (min-width: 375px) {
    font-size: 30px;
  }

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 27px;

  .empty {
    display: none;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 30px;
    grid-template-areas:
      "card1 card2"
      "card3 card3"
      "card4 card5"
      "card6 card6"
      "card7 card8";
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    grid-template-columns: repeat(4, 1fr);

    .empty {
      display: grid;
    }
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ItemImage = styled.img`
  height: 235px;
`;

export const TextWrapper = styled.div`
  padding: 18px 19px;
  background-color: #fbfaf5;
  border-radius: 0 0 15px 15px;

  @media screen and (min-width: 768px) {
    padding: 20px 19px;
  }
`;

export const ItemDate = styled.p`
  color: #e6643a;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 7px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ItemText = styled.p`
  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 17px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 19px;
    height: 92px;
  }
`;

export const ItemLink = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  color: #e6643a;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ArrowIcon = styled.img`
  width: 17px;
  height: 17px;
`;

export const LoadMoreBtn = styled.button`
  width: fit-content;
  padding: 0;
  border: none;
  border-bottom: solid 1px #fff;
  background-color: transparent;

  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const IconsContainer = styled.div`
  width: 100vw;

  img {
    width: 100vw;
  }
`;
