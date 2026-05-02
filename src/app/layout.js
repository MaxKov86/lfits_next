import StyledComponentsRegistry from "./registry";
import "./globals.css";

export const metadata = {
  title: "LFITS — юридичні послуги для IT бізнесу",
  description:
    "Юридичний супровід IT-компаній, ФОП, стартапів, договорів, податків, благодійних фондів та міжнародних структур.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" data-scroll-behavior="smooth">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
