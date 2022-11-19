import { ReactNode } from "react";
import { Footer } from "./Footer";
import { MenuExpanded } from "./MenuExpanded";
import { Navbar } from "./Navbar";
import { WhatsAppButton } from "./WhatsAppButton";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      

      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </section>
  );
}
