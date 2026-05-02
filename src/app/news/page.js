import NewsPage from "@/screens/NewsPage/NewsPage";
import AppShell from "../../components/AppShell/AppShell";

export const metadata = {
  title: "Новини і публікації — LFITS",
  description:
    "Юридичні статті, публікації та корисні матеріали для IT-бізнесу, підприємців, стартапів і компаній.",
};

export default function News() {
  return (
    <AppShell>
      <NewsPage />
    </AppShell>
  );
}
