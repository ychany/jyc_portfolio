"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// 폰트·썸네일이 다 불러와지기 전에 인쇄하면 PDF에 빈 이미지나 대체 글꼴이 찍힌다
async function waitForAssets() {
  await document.fonts.ready;
  await Promise.all(
    Array.from(document.images).map((img) =>
      img.complete
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            img.addEventListener("load", () => resolve(), { once: true });
            img.addEventListener("error", () => resolve(), { once: true });
          })
    )
  );
}

export default function ResumeToolbar() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    waitForAssets().then(() => {
      if (cancelled) return;
      setIsReady(true);
      if (new URLSearchParams(window.location.search).get("print") === "1") {
        // 새로고침할 때마다 인쇄 창이 다시 뜨지 않도록 파라미터 제거
        window.history.replaceState(null, "", window.location.pathname);
        window.print();
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end gap-2 print:hidden">
      <div className="flex gap-2">
        <Link
          href="/"
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow hover:bg-gray-50"
        >
          포트폴리오 보기
        </Link>
        <button
          onClick={() => window.print()}
          disabled={!isReady}
          className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 disabled:opacity-50"
        >
          {isReady ? "PDF로 저장" : "불러오는 중..."}
        </button>
      </div>
      <p className="rounded-md bg-white/90 px-3 py-1.5 text-xs text-gray-500 shadow-sm">
        인쇄 창에서 대상을 <b className="text-gray-700">PDF로 저장</b>으로 선택하세요
        <br />
        Safari는 <b className="text-gray-700">머리말 및 꼬리말 인쇄</b>를 꺼주세요
      </p>
    </div>
  );
}
