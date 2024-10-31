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

export const metadata: Metadata = {
  metadataBase: new URL("https://acostaexteriors.com/"),
  title: "Acosta Exteriors",
  description:
    "Elevate your brand with Scriptify, where creativity meets connection! I craft compelling stories and engaging posts designed to spark conversations and build a thriving community around your brand.",
  openGraph: {
    title: "Acosta Exteriors",
    description:
      "Elevate your brand with Scriptify, where creativity meets connection! I craft compelling stories and engaging posts designed to spark conversations and build a thriving community around your brand.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Acosta Exteriors",
      },
    ],
    type: "website",
    url: "/logo.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acosta Exteriors",
    description:
      "Elevate your brand with Scriptify, where creativity meets connection! I craft compelling stories and engaging posts designed to spark conversations and build a thriving community around your brand.",
    images: ["/logo.png"],
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
