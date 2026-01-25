# 조영찬 포트폴리오

개인 포트폴리오 웹사이트입니다.

**Live Demo**: https://jyc-portfolio.vercel.app

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-FF0080?style=flat-square&logo=framer)

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Font | Pretendard |
| Deployment | Vercel |

## Features

- **반응형 디자인** - 모바일, 태블릿, 데스크톱 지원
- **부드러운 애니메이션** - Framer Motion 기반 스크롤 애니메이션
- **프로젝트 상세 모달** - 프로젝트별 상세 정보 모달 팝업
- **데이터 기반 관리** - `portfolio.ts` 파일 수정으로 콘텐츠 관리
- **맨 위로 가기** - 커스텀 이징 스크롤 애니메이션
- **동적 헤더** - 스크롤 위치에 따른 헤더 스타일 변경

## Sections

| Section | Description |
|---------|-------------|
| Hero | 인트로 + CTA 버튼 |
| About | 자기소개 + 기본 정보 |
| Achievements | 자격증 + 수상 |
| Skills | 기술 스택 |
| Archiving | GitHub, 블로그 링크 |
| Projects | 프로젝트 목록 + 상세 모달 |
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

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 페이지
│   └── globals.css         # 전역 스타일
├── components/
│   ├── Header.tsx          # 네비게이션 헤더
│   ├── sections/           # 섹션 컴포넌트
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Skills.tsx
│   │   ├── Archiving.tsx
│   │   ├── Projects.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/                 # 재사용 UI 컴포넌트
│       ├── FadeIn.tsx
│       ├── SectionTitle.tsx
│       ├── ProjectModal.tsx
│       └── ScrollToTop.tsx
└── data/
    └── portfolio.ts        # 포트폴리오 데이터
```

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
    techStack: ["React", "TypeScript"],
    // ...
  },
];
```

## License

MIT
