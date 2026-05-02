import styled from "styled-components";

export const ArticleLayout = styled.main`
  width: 100%;
  padding: 112px 20px 80px;
  background: #fff;

  @media screen and (min-width: 768px) {
    padding: 132px 32px 100px;
  }

  @media screen and (min-width: 1440px) {
    padding: 160px 80px 120px;
  }
`;

export const ArticleHeader = styled.header`
  max-width: 920px;
  margin: 0 auto 32px;
`;

export const BackLink = styled.a`
  display: inline-flex;
  margin-bottom: 24px;
  color: #e6643a;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
`;

export const ArticleDate = styled.p`
  margin: 0 0 12px;
  color: #e6643a;
  font-weight: 700;
`;

export const ArticleTitle = styled.h1`
  margin: 0 0 20px;
  font-family: Roboto, sans-serif;
  font-size: 34px;
  line-height: 1.15;
  color: #111;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 64px;
  }
`;

export const ArticleLead = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 1.7;
  color: #333;

  @media screen and (min-width: 768px) {
    font-size: 21px;
  }
`;

export const ArticleCover = styled.img`
  display: block;
  width: 100%;
  max-width: 1080px;
  max-height: 520px;
  margin: 0 auto 40px;
  border-radius: 28px;
  object-fit: cover;
`;

export const ArticleBody = styled.article`
  max-width: 860px;
  margin: 0 auto;
`;

export const SubTitle = styled.h2`
  margin: 36px 0 16px;
  font-size: 28px;
  line-height: 1.25;
  color: #111;
`;

export const ArticleParagraph = styled.p`
  margin: 0 0 20px;
  font-size: 18px;
  line-height: 1.8;
  color: #222;
`;

export const List = styled.ul`
  margin: 0 0 24px;
  padding-left: 24px;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 1.7;
  color: #222;
`;

export const ExternalLink = styled.a`
  display: inline-flex;
  margin: 24px 0 32px;
  padding: 14px 22px;
  border-radius: 100px;
  background: #111;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
`;
