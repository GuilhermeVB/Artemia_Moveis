import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const mainFontFamily = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Artêmia Móveis Planejados",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={mainFontFamily.className}>
      <head>
        <link rel="shortcut icon" href="./icons/favicon.ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
