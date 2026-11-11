import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ellen Chen — Frontend Engineer",
  description:
    "React + TypeScript frontends for high-stakes products: AI-native underwriting, Web3 trading, on-chain claims. Taipei · open to remote.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400..600&family=Geist:wght@400;500&family=Geist+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
