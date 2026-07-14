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
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
