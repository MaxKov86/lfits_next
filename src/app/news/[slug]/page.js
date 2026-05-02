import { notFound } from "next/navigation";
import AppShell from "../../../components/AppShell/AppShell";
import ArticlePage from "../../../screens/ArticlePage/ArticlePage";
import { articles, getArticleBySlug } from "../../../data/articles";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Статтю не знайдено — LFITS",
      description: "Такої статті не існує.",
    };
  }

  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    alternates: {
      canonical: `/news/${article.slug}`,
    },
    openGraph: {
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      images: [article.img],
      type: "article",
    },
  };
}

export default async function Article({ params }) {
  const { slug } = await params;

  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <AppShell>
      <ArticlePage article={article} />
    </AppShell>
  );
}
