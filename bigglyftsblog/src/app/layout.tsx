import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Chi-Rho Power & Strength",
  description: "Prepare, Commit, Respond - A blog on my thoghths and learnings on strength training and living a purposeful life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-black">
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
