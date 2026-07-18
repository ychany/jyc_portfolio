import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // *.vercel.app 으로 들어온 요청을 커스텀 도메인으로 영구 이동
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "(?<host>.*)\\.vercel\\.app",
          },
        ],
        destination: "https://yeongchan.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
