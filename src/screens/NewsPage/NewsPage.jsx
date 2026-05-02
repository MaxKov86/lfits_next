import { articles } from "../../data/articles";
import {
  NewsCard,
  NewsDate,
  //   NewsExcerpt,
  NewsGrid,
  NewsImage,
  NewsLink,
  NewsSection,
  NewsTitle,
  PageTitle,
} from "./NewsPage.styled";

const NewsPage = () => {
  return (
    <NewsSection>
      <PageTitle>Новини і публікації</PageTitle>

      <NewsGrid>
        {articles.map((article) => (
          <NewsCard key={article.id}>
            <NewsImage src={article.img} alt={article.title} />
            <NewsDate>{article.date}</NewsDate>
            <NewsTitle>{article.title}</NewsTitle>
            {/* <NewsExcerpt>{article.excerpt}</NewsExcerpt> */}

            <NewsLink href={`/news/${article.slug}`}>Читати повністю</NewsLink>
          </NewsCard>
        ))}
      </NewsGrid>
    </NewsSection>
  );
};

export default NewsPage;
