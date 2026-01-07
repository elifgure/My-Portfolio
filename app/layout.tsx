import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Elif Güre | Web Developer",
    template: "%s | Elif Güre",
  },
  description:
    "Web Developer portfolio. React, Next.js, Tailwind CSS projeleri. Junior Web Developer.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Backend Developer",
    "FullStack Developer",
    "FullStack Developer Portfolio",
    "Next.js Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Elif Güre" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
