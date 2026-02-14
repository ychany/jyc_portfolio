import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "조영찬 | Developer",
  description: "개발자 조영찬의 포트폴리오입니다.",
  keywords: ["개발자", "포트폴리오", "React", "Next.js", "Flutter", "Django", "조영찬"],
  authors: [{ name: "조영찬" }],
  openGraph: {
    title: "조영찬 | Developer",
    description: "개발자 조영찬의 포트폴리오입니다.",
    type: "website",
    url: "https://jyc-portfolio.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "조영찬 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "조영찬 | Developer",
    description: "개발자 조영찬의 포트폴리오입니다.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
