# 조영찬 포트폴리오

개인 포트폴리오 웹사이트입니다.

**Live Demo**: https://jyc-portfolio.vercel.app

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-FF0080?style=flat-square&logo=framer)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Database | Firebase Realtime Database |
| Font | Pretendard |
| Deployment | Vercel |

## Features

- **반응형 디자인** - 모바일, 태블릿, 데스크톱 지원
- **다크모드 지원** - 시스템 설정 연동 + 수동 토글
- **부드러운 애니메이션** - Framer Motion 기반 스크롤 애니메이션
- **프로젝트 상세 모달** - 프로젝트별 상세 정보 모달 팝업
- **스크린샷 갤러리** - 전체화면 캐러셀 뷰어 (스와이프/키보드 지원)
- **자동 스크린샷 탐색** - 폴더에 이미지만 넣으면 자동 반영 (API Route)
- **실시간 Firebase 연동** - 프로젝트 실시간 통계 표시
- **수상작 연결** - 수상 내역에서 해당 프로젝트로 스크롤 이동
- **Toss 미니앱 연동** - 토스 앱인토스 바로가기 버튼
- **PDF 다운로드** - 포트폴리오를 PDF로 내보내기
- **공유 기능** - Web Share API / 클립보드 복사
- **OG 이미지** - 카카오톡, 슬랙 등 링크 미리보기 지원
- **이미지 최적화** - 스크린샷 WebP 변환 (90% 용량 감소)
- **데이터 기반 관리** - `portfolio.ts` 파일 수정으로 콘텐츠 관리
- **동적 헤더** - 스크롤 위치에 따른 헤더 스타일 변경
- **맨 위로 가기** - 커스텀 이징 스크롤 애니메이션

## Sections

| Section | Description |
|---------|-------------|
| Hero | 인트로 + CTA 버튼 |
| About | 자기소개 + 기본 정보 |
| Achievements | 자격증 + 수상 (수상작 프로젝트 연결) |
| Skills | 기술 스택 |
| Archiving | GitHub, 블로그 링크 |
| Projects | 프로젝트 목록 + 상세 모달 + 스크린샷 갤러리 |
| Career | 경력 사항 |
| Contact | 연락처 |

## Getting Started

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

### 환경 변수 설정

`.env.local` 파일을 생성하고 Firebase 설정을 추가합니다:

```env
NEXT_PUBLIC_DUJJONCOO_API_KEY=your_api_key
NEXT_PUBLIC_DUJJONCOO_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_DUJJONCOO_DATABASE_URL=your_database_url
NEXT_PUBLIC_DUJJONCOO_PROJECT_ID=your_project_id
NEXT_PUBLIC_DUJJONCOO_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_DUJJONCOO_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_DUJJONCOO_APP_ID=your_app_id
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── screenshots/       # 스크린샷 자동 탐색 API
│   │       └── route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Skills.tsx
│   │   ├── Archiving.tsx
│   │   ├── Projects.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── FadeIn.tsx
│       ├── SectionTitle.tsx
│       ├── ProjectModal.tsx
│       ├── ScrollToTop.tsx
│       └── ThemeToggle.tsx
├── data/
│   └── portfolio.ts            # 포트폴리오 데이터
├── hooks/
│   └── useDujjoncooStats.ts    # 실시간 Firebase 통계 훅
└── lib/
    ├── dujjoncoo-firebase.ts   # Firebase 설정
    └── generatePdf.ts          # PDF 생성
public/
└── images/
    └── projects/
        ├── screenshots/        # 프로젝트별 스크린샷 (자동 탐색)
        │   ├── korail/
        │   ├── foothub/
        │   ├── dujjoncoo/
        │   ├── kickoff/
        │   ├── smoke-trace/
        │   ├── chungju/
        │   └── portfolio/
        └── *_main.png          # 프로젝트 대표 이미지
└── og-image.png                # OG 미리보기 이미지
```

## Screenshots 관리

프로젝트 스크린샷은 폴더에 이미지를 넣기만 하면 자동으로 반영됩니다:

1. `public/images/projects/screenshots/{프로젝트폴더}/`에 이미지 파일 추가
2. 지원 형식: `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`
3. 파일명 순서로 정렬되어 표시

## Customization

`src/data/portfolio.ts` 파일을 수정하여 포트폴리오 내용을 변경할 수 있습니다.

```typescript
// 예시: 프로젝트 추가
export const projectsData = [
  {
    id: 1,
    title: "프로젝트명",
    subtitle: "한 줄 설명",
    description: "상세 설명",
    image: "/images/projects/project_main.png",
    screenshotDir: "project-folder-name",  // screenshots 폴더명
    techStack: ["React", "TypeScript"],
    github: "https://github.com/...",
    demo: "https://...",
    tossApp: "https://minion.toss.im/...",  // 선택
    // ...
  },
];
```

## License

MIT
