import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aadhithya A — Software Developer & Full-Stack Developer Portfolio",
  description:
    "Interactive Windows 11 themed portfolio of Aadhithya A — Software Developer, Full-Stack Developer, and Creative Designer based in Ahmedabad, Gujarat.",
  keywords: [
    "Aadhithya A",
    "Portfolio",
    "Software Developer",
    "Full-Stack Developer",
    "Python",
    "React",
    "Windows 11",
  ],
  openGraph: {
    title: "Aadhithya A — Software Developer Portfolio",
    description:
      "Explore Aadhithya A's interactive Windows 11 themed portfolio featuring projects, skills, and experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#202020] text-white antialiased">{children}</body>
    </html>
  );
}
