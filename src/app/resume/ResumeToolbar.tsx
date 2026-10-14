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

const HIDDEN_PROJECTS_KEY = "resume:hidden-projects";

type ProjectOption = { id: number; title: string };

// 체크 해제한 프로젝트 카드를 숨기고, 제목의 개수와 섹션 노출을 맞춘다 (globals.css 규칙과 짝)
function applyHiddenProjects(hiddenIds: number[]) {
  const hidden = new Set(hiddenIds);
  const cards = document.querySelectorAll<HTMLElement>("[data-resume-project]");
  let visible = 0;
  cards.forEach((card) => {
    if (hidden.has(Number(card.dataset.resumeProject))) {
      card.setAttribute("data-hidden", "");
    } else {
      card.removeAttribute("data-hidden");
      visible += 1;
    }
  });
  document.querySelectorAll("[data-project-count]").forEach((el) => {
    el.textContent = String(visible);
  });
  // 일부만 골랐다면 '주요 프로젝트', 전부면 그냥 '프로젝트'
  const isSubset = visible > 0 && visible < cards.length;
  document.querySelectorAll("[data-project-prefix]").forEach((el) => {
    el.textContent = isSubset ? "주요 " : "";
  });
  document.querySelectorAll<HTMLElement>("[data-project-note]").forEach((el) => {
    el.hidden = !isSubset;
  });
  const section = document.querySelector("[data-resume-projects]");
  if (visible === 0) section?.setAttribute("data-empty", "");
  else section?.removeAttribute("data-empty");
}

// '숨긴 목록'을 저장해, 나중에 새로 추가한 프로젝트는 기본으로 체크된 상태가 된다
function readHiddenProjects(): number[] {
  try {
    const raw = localStorage.getItem(HIDDEN_PROJECTS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((v): v is number => typeof v === "number") : [];
  } catch {
    return [];
  }
}

export default function ResumeToolbar({ projects }: { projects: ProjectOption[] }) {
  const [isReady, setIsReady] = useState(false);
  const [hidePrivate, setHidePrivate] = useState(false);
  const [hiddenProjects, setHiddenProjects] = useState<number[]>([]);

  const updateHiddenProjects = (next: number[]) => {
    setHiddenProjects(next);
    applyHiddenProjects(next);
    try {
      localStorage.setItem(HIDDEN_PROJECTS_KEY, JSON.stringify(next));
    } catch {
      // 저장소를 못 쓰는 환경에서는 이번 화면에만 적용
    }
  };

  const toggleProject = (id: number, checked: boolean) => {
    updateHiddenProjects(
      checked ? hiddenProjects.filter((v) => v !== id) : [...hiddenProjects, id]
    );
  };

  const allChecked = hiddenProjects.length === 0;

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
    const savedHidden = readHiddenProjects();
    applyHiddenProjects(savedHidden);

    let cancelled = false;
    waitForAssets().then(() => {
      if (cancelled) return;
      setHidePrivate(saved);
      setHiddenProjects(savedHidden);
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
      applyHiddenProjects([]);
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
      <details className="w-64 rounded-lg bg-white text-sm text-gray-700 shadow">
        <summary className="cursor-pointer px-3 py-2 font-medium">
          프로젝트 선택{" "}
          <span className="text-xs text-gray-400">
            ({projects.length - hiddenProjects.length}/{projects.length})
          </span>
        </summary>
        <div className="max-h-72 space-y-1 overflow-y-auto border-t border-gray-100 px-3 py-2">
          <button
            type="button"
            onClick={() => updateHiddenProjects(allChecked ? projects.map((p) => p.id) : [])}
            disabled={!isReady}
            className="mb-1 text-xs font-semibold text-teal-700 hover:underline disabled:opacity-50"
          >
            {allChecked ? "전체 해제" : "전체 선택"}
          </button>
          {projects.map((project) => (
            <label key={project.id} className="flex cursor-pointer items-center gap-2 py-0.5">
              <input
                type="checkbox"
                checked={!hiddenProjects.includes(project.id)}
                onChange={(e) => toggleProject(project.id, e.target.checked)}
                disabled={!isReady}
                className="h-4 w-4 shrink-0 accent-teal-600"
              />
              <span className="truncate">{project.title}</span>
            </label>
          ))}
        </div>
      </details>
      <p className="rounded-md bg-white/90 px-3 py-1.5 text-xs text-gray-500 shadow-sm">
        인쇄 창에서 대상을 <b className="text-gray-700">PDF로 저장</b>으로 선택하세요
        <br />
        Safari는 <b className="text-gray-700">머리말 및 꼬리말 인쇄</b>를 꺼주세요
      </p>
    </div>
  );
}
