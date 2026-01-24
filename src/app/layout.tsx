import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "조영찬 | Frontend Developer",
  description: "프론트엔드 개발자 조영찬의 포트폴리오입니다.",
  keywords: ["프론트엔드", "개발자", "포트폴리오", "React", "Next.js", "조영찬"],
  authors: [{ name: "조영찬" }],
  openGraph: {
    title: "조영찬 | Frontend Developer",
    description: "프론트엔드 개발자 조영찬의 포트폴리오입니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
