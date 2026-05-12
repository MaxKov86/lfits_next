import styled from "styled-components";

export const SectionStyles = styled.section`
  padding: 50px 8px 0;

  @media screen and (min-width: 768px) {
    padding: 50px 18px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 80px 30px 0;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const ListsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 28px;
    margin-bottom: 0;
  }
`;

export const List = styled.ul`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 10px;
  background: #fbfaf5;
  padding: 42px 13px;

  @media screen and (min-width: 768px) {
    width: 352px;
    border-radius: 15px;
  }

  @media screen and (min-width: 834px) {
    width: 385px;
  }

  @media screen and (min-width: 1440px) {
    height: fit-content;
    width: 430px;
    padding: 44px 29px;

    border-radius: 20px;
  }
`;

export const ItemTitle = styled.h3`
  color: #e6643a;

  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: 768px) {
    line-height: 30px;
  }
`;

export const ItemNumberList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style-type: number;
  color: #000;

  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 20px;
  padding-left: 24px;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ItemListTitle = styled.h4`
  font-weight: 600;
`;

export const ItemList = styled.ul`
  margin-top: 10px;
  padding-left: 20px;
  list-style-type: disc;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #000;

  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const TabCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 15px;
  background: #fbfaf5;
  padding: 37px 46px;
`;

export const DeskCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 20px;
  background: #fbfaf5;
  padding: 44px 29px;
`;
export const IconsContainer = styled.div`
  width: 100vw;

  img {
    width: 100%;
  }
`;
