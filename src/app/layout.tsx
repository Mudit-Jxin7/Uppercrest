import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Globals/Navbar/Navbar";
import Footer from "@/components/Globals/Footer/Footer";
import { poppins } from "@/utils/font";

export const metadata: Metadata = {
  title: "UpperCrest",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body className={poppins.className}>
        <Navbar />
        <div className="w-full h-[0.01rem] bg-slate-500 mb-5"></div>
        {children}

        <Footer />
      </body>
    </html>
  );
}
