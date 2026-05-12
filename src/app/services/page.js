"use client";

import AppShell from "../../components/AppShell/AppShell";
import ServicesPage from "../../screens/ServicesPage/ServicesPage";

export default function Services() {
  return (
    <AppShell>
      {({ openModal }) => <ServicesPage onOpenModal={openModal} />}
    </AppShell>
  );
}
