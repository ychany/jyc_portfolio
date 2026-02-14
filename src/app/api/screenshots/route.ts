import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const dir = request.nextUrl.searchParams.get("dir");

  if (!dir) {
    return NextResponse.json({ images: [] });
  }

  // 경로 조작 방지
  const safeName = path.basename(dir);
  const screenshotDir = path.join(
    process.cwd(),
    "public",
    "images",
    "projects",
    "screenshots",
    safeName
  );

  try {
    if (!fs.existsSync(screenshotDir)) {
      return NextResponse.json({ images: [] });
    }

    const files = fs
      .readdirSync(screenshotDir)
      .filter((file) => /\.(webp|png|jpg|jpeg|gif)$/i.test(file))
      .sort();

    const images = files.map(
      (file) => `/images/projects/screenshots/${safeName}/${file}`
    );

    return NextResponse.json({ images });
  } catch {
    return NextResponse.json({ images: [] });
  }
}
