# 조영찬 포트폴리오

개인 포트폴리오 웹사이트입니다.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Language**: TypeScript
- **Font**: Pretendard

## Features

- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 부드러운 스크롤 애니메이션
- 섹션별 구성 (About, Achievements, Skills, Archiving, Projects, Career, Contact)
- 데이터 기반 콘텐츠 관리 (`src/data/portfolio.ts`)

## Getting Started

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

http://localhost:3000 에서 확인할 수 있습니다.

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
└── data/
    └── portfolio.ts        # 포트폴리오 데이터
```

## Customization

`src/data/portfolio.ts` 파일을 수정하여 포트폴리오 내용을 변경할 수 있습니다.

## License

MIT
