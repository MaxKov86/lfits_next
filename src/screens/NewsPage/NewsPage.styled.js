import styled from "styled-components";
import Link from "next/link";

export const NewsSection = styled.main`
  width: 100%;
  padding: 112px 20px 80px;
  background: transparent;

  @media screen and (min-width: 768px) {
    padding: 132px 32px 100px;
  }

  @media screen and (min-width: 1440px) {
    padding: 160px 80px 120px;
  }
`;

export const PageTitle = styled.h1`
  margin: 0 auto 40px;
  max-width: 1180px;
  font-family: Roboto, sans-serif;
  font-size: 34px;
  line-height: 1.15;
  text-transform: uppercase;
  color: #111;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 64px;
  }
`;

export const NewsGrid = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  gap: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const NewsCard = styled.article`
  border-radius: 24px;
  overflow: hidden;
  background: #f7f3ef;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.08);
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
  display: block;
`;

export const NewsDate = styled.p`
  margin: 20px 20px 8px;
  font-size: 14px;
  color: #e6643a;
  font-weight: 700;
`;

export const NewsTitle = styled.h2`
  height: 125px;
  margin: 0 20px 12px;
  font-size: 20px;
  line-height: 1.25;
  color: #111;
`;

export const NewsExcerpt = styled.p`
  margin: 0 20px 20px;
  font-size: 16px;
  line-height: 1.55;
  color: #333;
`;

export const NewsLink = styled(Link)`
  display: inline-flex;
  margin: 0 20px 24px;
  padding: 12px 18px;
  border-radius: 100px;
  background: #e6643a;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
`;
