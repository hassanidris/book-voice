import type { Metadata } from "next";
import { IBM_Plex_Serif, Mona_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import Navbar from "@/components/Navbar";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Book Robot",
  description:
    "Transform your books into interactive AI conversations. Easily upload your book and start chatting with it using voice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSerif.variable} ${monaSans.variable} h-full relative font-sans antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider>
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
