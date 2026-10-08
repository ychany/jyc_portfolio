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

const HIDE_PRIVATE_KEY = "resume:hide-private";

// 이메일·전화번호 등 data-private 항목을 숨긴다 (globals.css 규칙과 짝)
function applyHidePrivate(hide: boolean) {
  if (hide) document.documentElement.setAttribute("data-hide-private", "");
  else document.documentElement.removeAttribute("data-hide-private");
}

function readHidePrivate() {
  try {
    return localStorage.getItem(HIDE_PRIVATE_KEY) === "1";
  } catch {
    return false;
  }
}

export default function ResumeToolbar() {
  const [isReady, setIsReady] = useState(false);
  const [hidePrivate, setHidePrivate] = useState(false);

  const toggleHidePrivate = (hide: boolean) => {
    setHidePrivate(hide);
    applyHidePrivate(hide);
    try {
      localStorage.setItem(HIDE_PRIVATE_KEY, hide ? "1" : "0");
    } catch {
      // 저장소를 못 쓰는 환경에서는 이번 화면에만 적용
    }
  };

  useEffect(() => {
    // 자동 인쇄보다 먼저 적용해야 저장된 선택이 첫 PDF에도 반영된다
    const saved = readHidePrivate();
    applyHidePrivate(saved);

    let cancelled = false;
    waitForAssets().then(() => {
      if (cancelled) return;
      setHidePrivate(saved);
      setIsReady(true);
      if (new URLSearchParams(window.location.search).get("print") === "1") {
        // 새로고침할 때마다 인쇄 창이 다시 뜨지 않도록 파라미터 제거
        window.history.replaceState(null, "", window.location.pathname);
        window.print();
      }
    });
    return () => {
      cancelled = true;
      applyHidePrivate(false);
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
      <label className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-gray-700 shadow">
        <input
          type="checkbox"
          checked={hidePrivate}
          onChange={(e) => toggleHidePrivate(e.target.checked)}
          disabled={!isReady}
          className="h-4 w-4 accent-teal-600"
        />
        개인정보 가리기 <span className="text-xs text-gray-400">(이메일·전화번호)</span>
      </label>
      <p className="rounded-md bg-white/90 px-3 py-1.5 text-xs text-gray-500 shadow-sm">
        인쇄 창에서 대상을 <b className="text-gray-700">PDF로 저장</b>으로 선택하세요
        <br />
        Safari는 <b className="text-gray-700">머리말 및 꼬리말 인쇄</b>를 꺼주세요
      </p>
    </div>
  );
}
