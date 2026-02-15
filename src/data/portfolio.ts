// 포트폴리오 데이터 - 이 파일만 수정하면 됩니다!

export const profileData = {
  name: "조영찬",
  nameEn: "Youngchan Jo",
  role: "Developer",
  tagline: "끊임없이 성장하는 개발자",
  email: "tigerbone@naver.com",
  github: "https://github.com/ychany",
  blog: "",
  linkedin: "https://www.linkedin.com/in/ychany-23809637b/",
  instagram: "https://www.instagram.com/y_chany_04/",
  devlinks: "https://jyc-devlinks.vercel.app",
  location: "Seoul, South Korea",
};

// aboutData의 details를 동적으로 생성하는 함수
const getAboutDetails = () => [
  { icon: "user", label: "이름", value: "조영찬 (04.04.03)" },
  { icon: "briefcase", label: "소속", value: "(주) 서울소프트 재직 중" },
  { icon: "education", label: "학력", value: getEducationString() },
  { icon: "phone", label: "연락처", value: "010-9855-5344" },
  { icon: "email", label: "이메일", value: "tigerbone@naver.com\ndudcks5344@konkuk.ac.kr" },
  { icon: "location", label: "위치", value: "충청북도 충주시\n서울특별시 광진구" },
];

export const aboutData = {
  introduction: `안녕하세요! 끊임없이 성장하는 개발자 조영찬입니다.

다양한 기술 스택을 활용하여 웹과 앱 서비스를 개발하고 있으며,
새로운 기술을 배우고 적용하는 것에 열정을 가지고 있습니다.`,

  get details() {
    return getAboutDetails();
  },
};

export const skillsData = {
  frontend: [
    { name: "React", level: 80, tagClass: "tag-react" },
    { name: "TypeScript", level: 75, tagClass: "tag-typescript" },
    { name: "JavaScript", level: 85, tagClass: "tag-javascript" },
    { name: "HTML5", level: 90, tagClass: "tag-html" },
    { name: "CSS3", level: 85, tagClass: "tag-css" },
    { name: "Vite", level: 70, tagClass: "tag-vite" },
  ],
  backend: [
    { name: "Python", level: 80, tagClass: "tag-python" },
    { name: "Django", level: 75, tagClass: "tag-django" },
    { name: "MySQL", level: 70, tagClass: "tag-mysql" },
    { name: "Firebase", level: 65, tagClass: "tag-firebase" },
  ],
  mobile: [
    { name: "Flutter", level: 70, tagClass: "tag-flutter" },
    { name: "Dart", level: 70, tagClass: "tag-dart" },
  ],
  tools: [
    { name: "Git", level: 85, tagClass: "tag-git" },
    { name: "GitHub", level: 85, tagClass: "tag-github" },
    { name: "Vercel", level: 75, tagClass: "tag-vercel" },
  ],
};

export const archivingData = [
  {
    name: "GitHub",
    url: "https://github.com/ychany",
    icon: "github",
    description: "소스 코드 저장소입니다.",
    details: [
      "개인 프로젝트 소스 코드",
      "다양한 기술 스택 활용 프로젝트",
      "협업 프로젝트",
    ],
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ychany-23809637b/",
    icon: "linkedin",
    description: "프로페셔널 네트워크입니다.",
    details: [
      "경력 및 프로젝트 이력",
      "기술 스택 및 역량",
      "네트워킹",
    ],
  },
  {
    name: "DevLinks",
    url: "https://jyc-devlinks.vercel.app",
    icon: "link",
    description: "개발 관련 링크 모음입니다.",
    details: [
      "프로젝트 바로가기",
      "소셜 링크 모음",
      "포트폴리오 링크트리",
    ],
  },
];

export const projectsData: {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  screenshotDir?: string;
  techStack: string[];
  github: string;
  demo: string;
  tossApp?: string;
  period: string;
  features: string[];
  award?: string;
  role?: string;
  team?: string;
  notes?: string[];
  extraLinks?: { label: string; demo?: string; github?: string }[];
}[] = [
  {
    id: 1,
    title: "코레일 동행열차",
    subtitle: "AI 기반 커플 기차 여행 코스 추천 앱",
    description:
      "사랑하는 사람과 함께하는 특별한 기차 여행을 위한 앱으로, AI 기반 맞춤형 여행 코스 추천과 레일필름(포토카드) 생성 기능을 제공합니다.",
    award: "코레일 내일로 해커톤 장려상",
    image: "/images/projects/korail_main.png",
    screenshotDir: "korail",
    techStack: ["Flutter", "Dart", "Provider", "Naver Map API"],
    github: "https://github.com/dusagong/korail_donghang_train_app",
    demo: "",
    period: "2025.11 ~ 12",
    role: "백엔드 개발",
    team: "2인 팀 프로젝트",
    features: [
      "AI 기반 맞춤형 여행 코스 추천 (만남승강장)",
      "AI 여행 메시지·해시태그 자동 생성 레일필름",
      "스탬프 컬렉션 및 지역 제휴 쿠폰 발급",
      "지역 소상공인 연계 및 상생 모델 구현",
      "네이버 지도 연동 코스 경로 시각화",
      "방문 장소 리뷰 작성 및 사진 첨부",
    ],
    notes: [
      "첫 해커톤 — 기획·디자인·백엔드 전 과정 참여",
      "소개팅 앱 → 커뮤니티 → 사진관 콘셉트로 여러 차례 피봇팅하며 사용자 니즈 기반 재설계 경험",
      "관광객·소상공인·지자체·플랫폼 4자 상생 구조 설계",
      "Flutter, FastAPI, DGX SPARK를 활용하며 기획부터 개발까지 가장 큰 성장을 이룬 프로젝트",
    ],
  },
  {
    id: 2,
    title: "FootHub",
    subtitle: "축구 직관 기록 다이어리 앱",
    description:
      "축구 경기 직관 기록을 작성하고 관리할 수 있는 모바일 앱입니다. 경기 사진, 좌석 정보, 평점, MVP 선정 등 직관의 특별한 순간들을 기록하고, 실시간 경기 스코어와 리그 순위를 확인할 수 있습니다.",
    image: "/images/projects/foothub_main.jpeg",
    screenshotDir: "foothub",
    techStack: ["Flutter", "Dart", "Firebase", "Riverpod", "GoRouter"],
    github: "https://github.com/ychany/FootHub",
    demo: "https://apps.apple.com/kr/app/foothub/id6757123385",
    period: "2025.11 ~ 2026.01",
    role: "1인 개발 (기획, 디자인, 개발)",
    features: [
      "경기 직관 기록 작성 (사진, 좌석, 평점, MVP 등)",
      "실시간 경기 스코어 대시보드 (30초 자동 업데이트)",
      "유럽 5대 리그, K리그, UEFA 대회 등 800+ 리그 지원",
      "라인업·포메이션 피치뷰 및 경기 통계 시각화",
      "한국어/영어 다국어 지원",
      "경기별 커뮤니티 댓글 기능",
    ],
    notes: [
      "첫 App Store 배포 경험 — 심사 과정 및 배포 파이프라인 학습",
      "Riverpod 상태관리 패턴 적용 및 Flutter 아키텍처 설계 경험",
      "외부 축구 API 연동 및 실시간 데이터 처리 구현",
    ],
  },
  {
    id: 3,
    title: "충주 원도심 문제해결 균형발전 시스템",
    subtitle: "AI 기반 동적 리워드 관광 웹앱",
    description:
      "도시 활력 불균형 문제를 해결하기 위한 AI 기반 동적 리워드 관광 웹앱입니다. 저활력 지역(원도심)에서의 활동에 더 높은 리워드를 제공하여 관광객과 시민의 이동을 유도합니다.",
    award: "충주 청년창업 아이디어 캠프 최우수상",
    image: "/images/projects/chungju_main.png",
    screenshotDir: "chungju",
    techStack: ["HTML5", "CSS3", "JavaScript", "Leaflet"],
    github: "https://github.com/ychany/chungju_CityBalance",
    demo: "https://chungju-city-balance.vercel.app",
    period: "2026.01",
    role: "1인 개발 (기획, 디자인, 개발)",
    features: [
      "시간대·요일 가중치 적용 동적 리워드 시스템",
      "Leaflet 기반 12개 행정동 실시간 활력 지도",
      "체크인 시스템 (30분 쿨다운)",
      "5가지 미션 및 6가지 배지 시스템",
      "10단계 레벨 시스템",
    ],
    notes: [
      "대회 수상 아이디어를 실제 동작하는 데모로 구현",
      "Leaflet 지도 라이브러리를 활용한 행정동 단위 시각화 경험",
      "동적 리워드·미션·배지 등 게이미피케이션 시스템 설계",
    ],
  },
  {
    id: 4,
    title: "두바이 왕자",
    subtitle: "두바이 쫀득 쿠키 가상 먹방 웹앱",
    description:
      "6,000원짜리 두바이 쫀득쿠키를 무료로 먹어보는 가상 먹방 체험 웹앱입니다. 터치/클릭 인터랙션으로 쿠키를 먹고, 실시간 동시 접속자 수와 누적 섭취량을 확인할 수 있습니다.",
    image: "/images/projects/dujjoncoo_main.png",
    screenshotDir: "dujjoncoo",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase"],
    github: "https://github.com/ychany/dujjoncoo",
    demo: "https://dujjoncoo.vercel.app",
    tossApp: "https://minion.toss.im/JesOF8A2",
    period: "2026.01",
    role: "1인 개발 (기획, 디자인, 개발)",
    features: [
      "터치/클릭/스페이스바 인터랙션 쿠키 먹기",
      "Firebase Presence 기반 실시간 동시 접속자 표시",
      "일간/누적 쿠키 섭취량 통계 (자동 날짜 변경)",
      "부스러기 파티클 애니메이션 및 동적 대사 시스템",
      "Firebase Transaction 기반 데이터 무결성 검증",
      "토스 미니앱 연동",
    ],
    notes: [
      "첫 토스 앱인토스 심사 및 배포 경험",
      "Firebase Realtime Database를 활용한 실시간 동시 접속자·통계 시스템 구현",
      "파티클 애니메이션 등 인터랙티브 UI/UX 설계 경험",
    ],
  },
  {
    id: 5,
    title: "Smoke Trace",
    subtitle: "담배 한 개비가 남기는 흔적 시각화 웹앱",
    description:
      "담배 한 개비가 남기는 흔적을 시각화하는 교육용 웹앱입니다. 꾹 누르기/더블클릭으로 담배를 피우는 시뮬레이션과 실시간 연기 파티클 효과, 개인/전체 통계를 제공합니다.",
    image: "/images/projects/smoketrace_main.png",
    screenshotDir: "smoke-trace",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase", "Framer Motion"],
    github: "https://github.com/ychany/smoke_trace",
    demo: "https://smoketrace.vercel.app",
    tossApp: "https://minion.toss.im/VKRZG1yg",
    period: "2026.01",
    role: "1인 개발 (기획, 디자인, 개발)",
    features: [
      "담배 피우기 시뮬레이션 (꾹 누르기/더블클릭 자동 모드)",
      "실시간 연기 파티클 효과",
      "개인 통계 (피운 개비, 태운 돈, 줄어든 수명)",
      "실시간 전체 통계 (동시 접속자, 오늘/누적 개비 수)",
      "토스 앱인토스 연동 및 공유 기능",
    ],
    notes: [
      "두바이 왕자에서 구축한 Firebase 실시간 시스템을 확장·응용",
      "꾹 누르기·더블클릭 등 다양한 인터랙션 모드 설계",
      "교육적 메시지를 게이미피케이션으로 전달하는 기획 경험",
    ],
  },
  {
    id: 6,
    title: "Kickoff",
    subtitle: "실시간 축구 경기 정보 토스 미니앱",
    description:
      "실시간 축구 경기 스코어, 리그 순위, 선수 통계 등을 제공하는 토스 앱인토스 미니앱입니다. 유럽 5대 리그, UEFA 대회, K리그를 지원하며, 날짜별 경기 일정 조회와 상세 통계를 확인할 수 있습니다.",
    image: "/images/projects/kickoff_main.png",
    screenshotDir: "kickoff",
    techStack: ["React", "TypeScript", "Vite", "React Router", "TanStack Query", "Framer Motion", "Recharts"],
    github: "https://github.com/ychany/kickoff",
    demo: "https://kickoff-live.vercel.app",
    tossApp: "https://minion.toss.im/J0lHQcjk",
    period: "2026.02",
    role: "1인 개발 (기획, 디자인, 개발)",
    features: [
      "실시간 라이브 경기 현황 및 스코어",
      "리그별 순위표, 득점/도움 순위 통계",
      "팀·선수 상세 페이지 (스쿼드, 시즌 통계, 출전 기록)",
      "경기 상세 (이벤트, 라인업, H2H 상대 전적)",
      "UEFA 대회 리그 페이즈 및 토너먼트 대진표",
      "날짜별 경기 일정 조회 및 리그별 필터링",
      "리그 통계 (경기당 골, 팀 비교, 폼 차트)",
      "토스 공유 및 클립보드 복사 기능",
    ],
    notes: [
      "React Router v7 + TanStack React Query 기반 다중 페이지 SPA 설계",
      "API-Football 데이터를 가공하여 대진표·순위표·폼 차트 등 복잡한 UI 구현",
      "토스 앱인토스 프레임워크 연동 및 배포 경험",
      "스켈레톤 로딩 UI 등 사용자 경험 최적화",
    ],
  },
  {
    id: 7,
    title: "Portfolio & DevLinks",
    subtitle: "개인 포트폴리오 & 링크 모음 웹사이트",
    description:
      "Next.js 15와 Tailwind CSS를 활용하여 제작한 개인 포트폴리오 웹사이트와, 프로젝트·소셜 링크를 한곳에 모은 DevLinks 페이지입니다. 반응형 디자인과 부드러운 스크롤 애니메이션을 적용하였으며, 데이터 기반으로 콘텐츠를 관리합니다.",
    image: "/images/portfolio_main.png",
    screenshotDir: "portfolio",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/ychany/jyc_portfolio",
    demo: "https://jyc-portfolio.vercel.app",
    period: "2026.01 / 2026.02",
    role: "1인 개발 (기획, 디자인, 개발)",
    features: [
      "반응형 디자인 (모바일, 태블릿, 데스크톱)",
      "Framer Motion 스크롤 애니메이션",
      "섹션별 구성 (About, Skills, Projects, Career, Contact)",
      "데이터 기반 콘텐츠 관리",
      "DevLinks - 프로젝트·소셜 링크 모음 페이지",
    ],
    extraLinks: [
      {
        label: "DevLinks",
        demo: "https://jyc-devlinks.vercel.app",
        github: "https://github.com/ychany/jyc_devlinks",
      },
    ],
  },
];

// 경력
export const experienceData: {
  title: string;
  role: string;
  period: string;
  description: string;
  details: string[];
  techStack?: string[];
}[] = [
  {
    title: "서울소프트",
    role: "모빌리티 개발팀 · Full-Stack Developer",
    period: "2025.02 - 현재",
    description:
      "운수사(버스·택시) 대상 ERP 서비스를 개발·제공하는 IT 기업에서 Full-Stack 개발자로 근무 중입니다.",
    details: [
      "배차, 급여, 자재, 인사관리 등 핵심 업무 모듈 개발 및 유지보수",
      "Django 기반 MVT 패턴을 활용한 웹 서비스 개발",
      "기존 레거시 시스템 분석 및 개선",
    ],
    techStack: ["Python", "Django", "JavaScript", "MySQL", "HTML5", "CSS3"],
  },
];

// 학력
export const educationData = [
  {
    title: "건국대학교 서울캠퍼스",
    major: "스마트ICT융합공학과",
    minor: "문화콘텐츠학과",
    role: "스마트ICT융합공학과 (부전공: 문화콘텐츠학과)",
    period: "2023 - 현재",
    description: "23학번 재학 중",
    details: [],
  },
];

// 학력 정보를 aboutData용 문자열로 변환하는 함수
export const getEducationString = () => {
  return educationData
    .map((edu) => {
      let result = edu.title + "\n" + edu.major;
      if (edu.minor) {
        result += `\n(부전공: ${edu.minor})`;
      }
      return result;
    })
    .join("\n\n");
};

// 자격증
export const certificateData = [
  {
    title: "데이터 분석 준전문가 (ADsP)",
    issuer: "한국데이터산업진흥원",
    date: "2025.11",
  },
  {
    title: "정보처리산업기사",
    issuer: "한국산업인력공단",
    date: "2025.09",
  },
];

// 수상
export const awardData: {
  title: string;
  prize: string;
  date: string;
  projectId?: number;
}[] = [
  {
    title: "코레일 내일로 해커톤",
    prize: "장려상",
    date: "2025.12",
    projectId: 1,
  },
  {
    title: "충주 청년 창업 아이디어 캠프",
    prize: "최우수상",
    date: "2026.01",
    projectId: 3,
  },
];

// 활동 경험
export const activityData = [
  {
    organization: "건국대학교 정보운영팀",
    role: "교내 근로",
    period: "2024.03 ~ 2025.01",
    description: "행정, 지정업무, 학교 홈페이지 모니터링 및 피드백, 신규사업 참여",
  },
  {
    organization: "중앙대학교 산학협력단",
    role: "인공지능 연구보조원",
    period: "2023.09",
    description: "딥러닝 학습에 필요한 데이터 전처리",
  },
];

export const contactData = {
  email: "tigerbone@naver.com",
  message: "프로젝트 협업, 채용 관련 문의 등 편하게 연락주세요!",
};
