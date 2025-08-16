import type { Metadata } from "next";
import { Eczar } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "../components/ErrorBoundary";

const eczar = Eczar({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Seigfried – A Cozy Writer's Portfolio",
  description: "A minimalist, animated portfolio showcasing creative writing, stories, and poems in a visually immersive, distraction-free experience.",
  keywords: ["creative writing", "poetry", "stories", "writer portfolio", "literature"],
  authors: [{ name: "Seigfried" }],
  openGraph: {
    title: "Seigfried – A Cozy Writer's Portfolio",
    description: "A minimalist, animated portfolio showcasing creative writing, stories, and poems in a visually immersive, distraction-free experience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seigfried – A Cozy Writer's Portfolio",
    description: "A minimalist, animated portfolio showcasing creative writing, stories, and poems in a visually immersive, distraction-free experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${eczar.className} bg-background text-foreground`}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
