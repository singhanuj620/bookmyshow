import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ToastUI from "@/components/Toast/Toast";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book My Show",
  description: "Book My Show Clone Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
      </head>
      <body className={montserrat.className}>
        <AntdRegistry>
          <Navbar />
          <ToastUI />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
