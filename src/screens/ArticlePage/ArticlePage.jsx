// import ArticleEngagement from "../../components/ArticleEngagement/ArticleEngagement";
import {
  ArticleBody,
  ArticleCover,
  ArticleDate,
  ArticleHeader,
  ArticleLayout,
  ArticleLead,
  ArticleParagraph,
  ArticleSection,
  ArticleTitle,
  BackLink,
  ExternalLink,
  List,
  ListItem,
  SubTitle,
} from "./ArticlePage.styled";

const ArticlePage = ({ article }) => {
  return (
    <ArticleLayout>
      <ArticleHeader>
        <BackLink href="/news">← До всіх публікацій</BackLink>
        <ArticleDate>{article.date}</ArticleDate>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleLead>{article.excerpt}</ArticleLead>
      </ArticleHeader>

      <ArticleCover src={article.img} alt={article.title} />

      <ArticleBody>
        {article.content.map((block, index) => {
          if (block.type === "h2") {
            return <SubTitle key={index}>{block.text}</SubTitle>;
          }

          if (block.type === "ul") {
            return (
              <List key={index}>
                {block.items.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </List>
            );
          }

          return <ArticleParagraph key={index}>{block.text}</ArticleParagraph>;
        })}

        {article.originalLink && (
          <ExternalLink
            href={article.originalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Переглянути першоджерело
          </ExternalLink>
        )}

        {/* <ArticleEngagement articleId={String(article.id)} /> */}
      </ArticleBody>
    </ArticleLayout>
  );
};

export default ArticlePage;
