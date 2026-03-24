import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Radiadores y Tanques de Venezuela",
  description: "La más amplia variedad de radiadores, tanques plásticos, colmenas y accesorios. Calidad garantizada.",
  icons: { icon: "/images/2022/07/cropped-isotipo-01_fit=32%2C32&ssl=1_v=1753197969.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
