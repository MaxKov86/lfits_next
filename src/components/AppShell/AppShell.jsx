"use client";

import { useCallback, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import Layout from "../../Layout/Layout";

import Modal from "../Modal/Modal";
import Sidebar from "@/Layout/Sidebar/Sidebar";
import Overlay from "@/Layout/Sidebar/Overlay/Overlay";

const AppShell = ({ children }) => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSide = () => {
    setIsSideOpen(true);
  };

  const closeSide = () => {
    setIsSideOpen(false);
  };

  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      closeModal();
      closeSide();
    }
  }, []);

  useEffect(() => {
    if (isModalOpen || isSideOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen, isSideOpen, handleKeyDown]);

  return (
    <>
      <Layout onOpenBtn={openSide}>
        {typeof children === "function"
          ? children({ openModal, closeModal })
          : children}
      </Layout>

      <Sidebar onCloseBtn={closeSide} isOpen={isSideOpen} />
      <Overlay isOpen={isSideOpen} />
      <Modal onClose={closeModal} isOpen={isModalOpen} />

      <Toaster position="top-center" toastOptions={{ duration: 2500 }} />
    </>
  );
};

export default AppShell;
