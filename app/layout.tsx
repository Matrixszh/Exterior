import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";
const roboto = Roboto({
  weight: ["100", "400", "500", "700", "900"],
  display: "swap",
  subsets: ["latin"],
});
const baseUrl = "https://acostaexteriors.com/";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Acosta Exteriors",
  openGraph: {
    title: "Acosta Exteriors",
    images: [
      {
        url: new URL("/logo.png", baseUrl).toString(),
        width: 1200,
        height: 1200,
        alt: "Acosta Exteriors Square Logo",
      },
      {
        url: new URL("/logo.png", baseUrl).toString(),
        width: 1200,
        height: 630,
        alt: "Acosta Exteriors Rectangle Logo",
      },
    ],
    type: "website",
    url: baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Acosta Exteriors",
    images: [
      {
        url: new URL("/logo.png", baseUrl).toString(),
        width: 1200,
        height: 1200,
        alt: "Acosta Exteriors Square Logo",
      },
    ],
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
