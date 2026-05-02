"use client";

import Link from "next/link";
import {
  ArrowIcon,
  IconsContainer,
  Item,
  ItemDate,
  ItemImage,
  ItemLink,
  ItemText,
  List,
  LoadMoreBtn,
  SectionStyle,
  SectionWrapper,
  TextWrapper,
  Title,
} from "./Articles.styled";

import { articles, articlesWithDecor } from "../../../../data/articles";
import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import Image from "next/image";

const Articles = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const widthMob = useMediaQuery(
    "only screen and (min-width: 320px) and (max-width: 767px)",
  );
  const widthTab = useMediaQuery(
    "only screen and (min-width: 768px) and (max-width: 1439px)",
  );
  const widthDesk = useMediaQuery("only screen and (min-width: 1440px)");

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const visibleCards = articles.slice(0, visibleCount);

  const renderArticleCard = (item, index) => (
    <Item key={item.id} area={`item${index + 1}`}>
      <ItemImage src={item.img} alt={item.title} />

      <TextWrapper>
        <ItemDate>{item.date}</ItemDate>
        <ItemText>{item.title}</ItemText>

        <Link href={`/news/${item.slug}`} passHref legacyBehavior>
          <ItemLink as="a">
            ЧИТАТИ ПОВНІСТЮ{" "}
            <ArrowIcon src="/icons/arrow-up-right_hero.svg" alt="arrow" />
          </ItemLink>
        </Link>
      </TextWrapper>
    </Item>
  );

  return (
    <SectionStyle id="articles">
      <SectionWrapper>
        <Title>НОВИНИ І ПУБЛІКАЦІЇ</Title>

        <List>
          {widthMob
            ? visibleCards.map((item, index) => renderArticleCard(item, index))
            : articlesWithDecor.map((item, index) =>
                item.text === "empty" ? (
                  <li
                    key={item.id}
                    style={{ position: "relative" }}
                    className="empty"
                  >
                    <Image
                      style={{
                        width: `${item.id === 25 ? "187px" : "162px"}`,
                        position: "absolute",
                        bottom: "0",
                        left: `${item.id === 25 ? "0" : "-62px"}`,
                        zIndex: `${item.id === 85 ? "-1" : "1"}`,
                      }}
                      src={item.svg}
                      alt=""
                    />
                  </li>
                ) : (
                  renderArticleCard(item, index)
                ),
              )}
        </List>

        {widthMob && visibleCount < articles.length && (
          <LoadMoreBtn onClick={handleLoadMore} type="button">
            Показати більше
          </LoadMoreBtn>
        )}
      </SectionWrapper>

      <IconsContainer>
        {widthMob && (
          <Image src="/img/footprints_art_mob.png" alt="footprints" />
        )}
        {widthTab && (
          <Image src="/img/footprints_art_tab.png" alt="footprints" />
        )}
        {widthDesk && (
          <Image src="/img/footprints_art_desk.png" alt="footprints" />
        )}
      </IconsContainer>
    </SectionStyle>
  );
};

export default Articles;
