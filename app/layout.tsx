import { FC, type ReactNode } from "react";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

import MainHeader from "../components/mainHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todos App",
  description: "add/remove todos",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <MainHeader />
//         {children}
//       </body>
//     </html>
//   );
// }

type RootLayoutProps = {
  title?: string;
  openModal: () => void;
  children?: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children, openModal }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
