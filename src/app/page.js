import HomePage from "@/screens/HomePage/HomePage";
import AppShell from "../components/AppShell/AppShell";

export const metadata = {
  title: "LFITS — юридичні послуги для IT бізнесу",
  description:
    "Юридичний супровід IT-компаній, стартапів, ФОП, договорів, податків і міжнародних структур.",
};

export default function Page() {
  return (
    <AppShell>
      <HomePage />
    </AppShell>
  );
}
