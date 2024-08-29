import { type ReactNode } from "react";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

import MainHeader from "../components/mainHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todos App",
  description: "add/remove todos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
