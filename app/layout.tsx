import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "400", "500", "700", "900"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://acostaexteriors.com/"), // Updated domain
  title: "Acosta Exteriors",
  openGraph: {
    title: "Acosta Exteriors",
    images: [
      {
        url: "https://acostaexteriors.com/logo.png", // Absolute URL with new domain
        width: 800,
        height: 430,
        alt: "Acosta Exteriors",
      },
    ],
    type: "website",
    url: "https://acostaexteriors.com/", // New domain
  },
  twitter: {
    card: "summary_large_image",
    title: "Acosta Exteriors",
    images: ["https://acostaexteriors.com/logo.png"], // Absolute URL for Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
