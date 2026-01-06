import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/globalComponent/Header";
import Footer from "@/globalComponent/Footer";
import { PopupProvider } from "@/globalComponent/PopupContext";
import PopupForm from "@/globalComponent/PopupForm";


export const metadata: Metadata = {
  title: "Shreyaan Construction",
  description:
    "Shreyaan Construction - Building Dreams, Creating Excellence in Construction Services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {/* Wrap everything with the PopupProvider to manage popup state globally */}
        <PopupProvider>
          {/* Header is globally available */}
          <Header />
<PopupForm />
          {/* Injected page content */}
          {children}

          {/* Footer is globally available */}
          <Footer />
        </PopupProvider>
      </body>
    </html>
  );
}
