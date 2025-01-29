import Navbar from "@/components/layoutComponents/Navbar";
import Footer from "@/components/layoutComponents/Footer";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";


const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sora',
})

export const metadata: Metadata = {
  title: "NFT WEB APP",
  description: "DEVELOPED BY BUCHI DEV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
