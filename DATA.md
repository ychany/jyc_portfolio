# 데이터 관리 가이드 (Data Structure)

이 포트폴리오는 **데이터 기반(data-driven)** 으로 동작합니다.
모든 콘텐츠는 [`src/data/portfolio.ts`](src/data/portfolio.ts) 한 파일에서 관리되며,
**이 파일만 수정하면 사이트 전체 내용이 바뀝니다.** (코드는 건드릴 필요 없음)

> JSON 파일은 아니지만, 사실상 JSON과 동일한 객체/배열 형태로 데이터를 정의하고
> 각 컴포넌트가 이를 `import` 해서 렌더링하는 구조입니다.

---

## 기술 스택 (Tech Stack)

| 분류 | 기술 | 버전 | 용도 |
|------|------|------|------|
| **Framework** | Next.js | 16.1.4 | React 기반 풀스택 프레임워크 (App Router) |
| **Language** | TypeScript | ^5 | 정적 타입 |
| **UI Library** | React / React DOM | 19.2.3 | 컴포넌트 UI |
| **Styling** | Tailwind CSS | ^4 | 유틸리티 CSS (`@tailwindcss/postcss` 사용) |
| **Animation** | Framer Motion | ^12.29.0 | 스크롤·인터랙션 애니메이션 |
| **Theme** | next-themes | ^0.4.6 | 다크/라이트 모드 |
| **Lint** | ESLint | ^9 (`eslint-config-next`) | 코드 품질 |
| **Build Tooling** | PostCSS | — | Tailwind v4 처리 |
| **Deploy** | Vercel | — | 호스팅 (https://jyc-portfolio.vercel.app) |

### 실행 스크립트
| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint 검사 |

---

## 데이터 구조 (`src/data/portfolio.ts`)

파일은 여러 개의 named export로 구성됩니다. 각 export가 사이트의 한 섹션을 담당합니다.

### 1. `profileData` — 기본 프로필
헤더/히어로 영역의 이름, 역할, 소셜 링크 등.
```ts
{
  name, nameEn, role, tagline, email,
  github, blog, linkedin, instagram, devlinks, location
}
```

### 2. `aboutData` — 소개 섹션
- `introduction`: 자기소개 문단(string)
- `details`: getter로 동적 생성되는 항목 배열 (`{ icon, label, value }`)
  - 내부 `getAboutDetails()` / `getEducationString()`가 학력 데이터를 조합해 자동 생성

### 3. `skillsData` — 기술 역량
카테고리별 기술 배열. 각 항목은 숙련도(`level`)와 태그 색상 클래스를 가짐.
```ts
{
  frontend: [{ name, level, tagClass }, ...],
  backend:  [...],
  mobile:   [...],
  tools:    [...]
}
```

### 4. `archivingData` — 아카이빙 링크
GitHub / LinkedIn / DevLinks 등 외부 채널 카드.
```ts
[{ name, url, icon, description, details: string[] }]
```

### 5. `projectsData` — 프로젝트 (핵심)
가장 큰 데이터. 타입이 명시되어 있으며, **모달 상세 화면**까지 이 데이터로 렌더링됩니다.

| 필드 | 필수 | 설명 |
|------|:---:|------|
| `id` | ✅ | 고유 번호 (정렬·매칭 키) |
| `title` / `subtitle` | ✅ | 제목 / 한 줄 설명 |
| `description` | ✅ | 상세 설명 |
| `image` | ✅ | 대표 이미지 경로 |
| `screenshotDir` | | 스크린샷 폴더명 (자동 탐색 API가 사용) |
| `techStack` | ✅ | 기술 태그 배열 |
| `github` / `demo` | ✅ | 소스 / 데모 링크 |
| `period` | ✅ | 진행 기간 |
| `features` | ✅ | 주요 기능 목록 |
| `award` | | 수상 내역 |
| `role` / `team` | | 담당 역할 / 팀 구성 |
| `notes` | | "배운 점 / 메모" (모달에 teal 점 bullet로 표시) |
| `extraLinks` | | 추가 링크 `{ label, demo?, github? }[]` |
| `pdf` | | 발표자료 `{ label, url }` |
| `video` | | 시연 영상 `{ label, url }` |

> 📌 스크린샷은 `screenshotDir` 폴더 안에서 **파일명 알파벳순**으로 정렬됩니다.
> 순서를 정하려면 `01_`, `02_` 같은 접두사를 사용하세요.

### 6. `experienceData` — 경력
```ts
[{ title, role, period, description, details: string[], techStack? }]
```

### 7. `educationData` — 학력
```ts
[{ title, major, minor?, role, period, description, details }]
```
→ `getEducationString()`가 이 데이터를 `aboutData.details`에 자동 반영.

### 8. `certificateData` — 자격증
```ts
[{ title, issuer, date }]
```

### 9. `awardData` — 수상
`projectId`로 해당 프로젝트와 연결됩니다.
```ts
[{ title, prize, date, projectId? }]
```

### 10. `activityData` — 대외활동
디프만, 구름톤 등. `links`와 `projectId`로 프로젝트/외부 사이트 연결.
```ts
[{ organization, role, period, description, links?, projectId? }]
```

### 11. `contactData` — 연락처
```ts
{ email, message }
```

---

## 데이터 추가/수정하는 법

| 하고 싶은 것 | 수정할 export |
|---------------|---------------|
| 프로젝트 추가 | `projectsData`에 객체 1개 추가 (`id` 중복 주의) |
| 기술 스택 추가 | `skillsData`의 해당 카테고리 배열 |
| 수상 내역 추가 | `awardData` (+ 연결할 `projectId`) |
| 대외활동 추가 | `activityData` |
| 경력 추가 | `experienceData` |
| 프로필/연락처 변경 | `profileData` / `contactData` |

### 관계(연결) 요약
- `awardData.projectId` → `projectsData.id`
- `activityData.projectId` → `projectsData.id`
- `educationData` → `getEducationString()` → `aboutData.details`

---

## 관련 파일
- [`src/data/portfolio.ts`](src/data/portfolio.ts) — 단일 데이터 소스
- `src/components/ui/ProjectModal.tsx` — 프로젝트 상세 모달 (notes, screenshots, tech tags 렌더링)
- `src/app/api/screenshots/route.ts` — `screenshotDir` 기반 스크린샷 자동 탐색 API

---

## 파일 디렉터리 구조

```
jyc_portfolio/
├── public/                          # 정적 에셋 (URL로 직접 접근)
│   ├── images/
│   │   └── projects/
│   │       ├── *_main.png           # 프로젝트 대표 이미지
│   │       └── screenshots/         # 프로젝트별 스크린샷 폴더
│   │           ├── {project-a}/     #  └ portfolio.ts의 screenshotDir 값과 폴더명 일치
│   │           ├── {project-b}/     #  └ demo.mp4(시연 영상)도 같은 폴더에 둘 수 있음
│   │           └── ...              #  └ 프로젝트마다 폴더 1개씩 추가
│   ├── ppt/                         # 발표자료 PDF (pdf.url 경로)
│   └── projects/
│
└── src/
    ├── app/                         # Next.js App Router
    │   ├── api/
    │   │   └── screenshots/route.ts # 스크린샷 자동 탐색 API
    │   ├── globals.css              # 전역 스타일 + Tailwind + 태그 색상(tagClass)
    │   ├── layout.tsx               # 루트 레이아웃 (테마, 폰트)
    │   └── page.tsx                 # 메인 페이지 (섹션 조립)
    │
    ├── components/
    │   ├── Header.tsx               # 상단 네비게이션
    │   ├── sections/                # 페이지 섹션 (각각 portfolio.ts 데이터 사용)
    │   │   ├── Hero.tsx             #  └ profileData
    │   │   ├── About.tsx            #  └ aboutData
    │   │   ├── Skills.tsx           #  └ skillsData
    │   │   ├── Projects.tsx         #  └ projectsData
    │   │   ├── Career.tsx           #  └ experienceData / educationData
    │   │   ├── Achievements.tsx     #  └ awardData / certificateData / activityData
    │   │   ├── Archiving.tsx        #  └ archivingData
    │   │   ├── Contact.tsx          #  └ contactData
    │   │   └── Footer.tsx
    │   └── ui/                      # 재사용 UI 컴포넌트
    │       ├── ProjectModal.tsx     #  └ 프로젝트 상세 모달
    │       ├── FadeIn.tsx           #  └ 스크롤 등장 애니메이션
    │       ├── SectionTitle.tsx
    │       ├── SkillTag.tsx
    │       ├── ScrollToTop.tsx
    │       └── ThemeToggle.tsx      #  └ 다크/라이트 모드
    │
    ├── data/
    │   └── portfolio.ts             # ⭐ 모든 콘텐츠 데이터 (단일 소스)
    │
    ├── hooks/
    │   └── useDujjoncooStats.ts     # Firebase 실시간 통계 훅
    │
    └── lib/
        ├── dujjoncoo-firebase.ts    # Firebase 설정
        └── generatePdf.ts           # PDF 생성 유틸
```

> 📌 **콘텐츠를 바꿀 때는 `src/data/portfolio.ts` 만** 수정하면 됩니다.
> 각 `sections/*.tsx`는 이 데이터를 import해서 화면을 그릴 뿐, 직접 고칠 일이 거의 없습니다.
>
> 📌 **이미지/스크린샷/PDF 추가**는 `public/` 안에 파일을 넣고, `portfolio.ts`에서
> 그 경로(`image`, `screenshotDir`, `pdf.url` 등)를 가리키면 됩니다.