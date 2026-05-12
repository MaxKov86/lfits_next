import styled from "styled-components";

export const SectionStyle = styled.section`
  position: relative;
  padding: 80px 8px 0;

  @media screen and (min-width: 768px) {
    padding: 80px 18px 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 150px 30px 0;
  }
`;
export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: #fbfaf5;

  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 48px;
    margin-bottom: 70px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    gap: 28px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1440px) {
    gap: 44px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  border-radius: 10px;
  background: #fbfaf5;
  padding: 42px 13px;

  @media screen and (min-width: 768px) {
    width: 352px;
  }
  @media screen and (min-width: 834px) {
    width: 385px;
  }

  @media screen and (min-width: 1440px) {
    width: 430px;
  }
`;

export const ItemTitle = styled.h3`
  color: #e6643a;

  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const ItemListTitle = styled.h4`
  color: #000;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;
`;
export const ItemList = styled.ul`
  margin-bottom: 10px;
  padding-left: 30px;
  display: flex;
  list-style-type: disc;
  flex-direction: column;
  gap: 10px;

  color: #000;

  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const ItemListBottomText = styled.p`
  padding-right: 15px;
  padding-left: 15px;
  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const ItemNumberList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
  padding-left: 60px;
  list-style-type: number;
  color: #000;

  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ListItem = styled.li``;

export const ItemPrice = styled.p`
  color: #e6643a;

  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;
export const ItemPriceBottomText = styled.p`
  color: #000;

  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
export const IconsContainer = styled.div`
  width: 100vw;

  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
  }
`;
export const PackageDuck = styled.img`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    top: 70px;
  }
`;
