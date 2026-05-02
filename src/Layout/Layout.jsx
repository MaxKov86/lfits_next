"use client";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children, onOpenBtn }) => {
  return (
    <>
      <Header onOpenSide={onOpenBtn} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
