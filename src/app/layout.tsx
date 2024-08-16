import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import icon from "./Icon.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {" "}
        <link rel="shortcut icon" href={"/Icon.jpg"} />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="19513031-3eef-49c9-9107-beff726b3a5a"
        ></script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
