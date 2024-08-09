import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import NextTopLoader from "nextjs-toploader";
import { CrispProvider } from "./crisp-provider";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interview Expert",
  description: "Interview Expert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CrispProvider></CrispProvider>
      <body className={inter.className}>
        <Providers>
          <NextTopLoader />
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
