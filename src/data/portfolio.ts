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
  location: "Seoul, South Korea",
};

export const aboutData = {
  introduction: `안녕하세요! 끊임없이 성장하는 개발자 조영찬입니다.

다양한 기술 스택을 활용하여 웹과 앱 서비스를 개발하고 있으며,
새로운 기술을 배우고 적용하는 것에 열정을 가지고 있습니다.`,

  details: [
    { icon: "user", label: "이름", value: "조영찬" },
    { icon: "email", label: "이메일", value: "tigerbone@naver.com" },
    { icon: "location", label: "위치", value: "서울특별시 광진구 / 충청북도 충주시" },
    { icon: "education", label: "학력", value: "건국대학교 서울캠퍼스 스마트ICT융합공학과" },
  ],
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
];

export const projectsData: {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  demo: string;
  period: string;
  features: string[];
}[] = [
  {
    id: 1,
    title: "FootHub",
    subtitle: "축구 직관 기록 다이어리 앱",
    description:
      "축구 경기 직관 기록을 작성하고 관리할 수 있는 모바일 앱입니다. 경기 사진, 좌석 정보, 평점, MVP 선정 등 직관의 특별한 순간들을 기록하고, 실시간 경기 스코어와 리그 순위를 확인할 수 있습니다.",
    image: "",
    techStack: ["Flutter", "Dart", "Firebase", "Riverpod"],
    github: "https://github.com/ychany/FootHub",
    demo: "",
    period: "2025",
    features: [
      "경기 직관 기록 작성 (사진, 좌석, 평점, MVP 등)",
      "실시간 경기 스코어 대시보드 (30초 자동 업데이트)",
      "유럽 5대 리그 및 K리그 지원",
      "한국어/영어 다국어 지원",
      "경기별 커뮤니티 댓글 기능",
    ],
  },
  {
    id: 2,
    title: "두바이 왕자",
    subtitle: "가상 두바이 쿠키 먹방 체험 웹앱",
    description:
      "6,000원짜리 두바이 쫀득쿠키를 무료로 먹어보는 가상 먹방 체험 웹앱입니다. 터치/클릭 인터랙션으로 쿠키를 먹고, 실시간 동시 접속자 수와 누적 섭취량을 확인할 수 있습니다.",
    image: "",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase"],
    github: "https://github.com/ychany/dujjoncoo",
    demo: "https://dujjoncoo.vercel.app",
    period: "2026",
    features: [
      "터치/클릭/스페이스바 인터랙션 쿠키 먹기",
      "Firebase Presence 기반 실시간 동시 접속자 표시",
      "일간/누적 쿠키 섭취량 통계",
      "부스러기 파티클 애니메이션",
      "토스 미니앱 연동",
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
    role: "스마트ICT융합공학과",
    period: "2023 - 현재",
    description: "23학번 재학 중",
    details: [],
  },
];

// 자격증
export const certificateData = [
  {
    title: "데이터 분석 준전문가 (ADsP)",
    date: "2025.11",
  },
  {
    title: "정보처리산업기사",
    date: "2025.09",
  },
];

// 수상
export const awardData: {
  title: string;
  prize: string;
  date: string;
}[] = [
  {
    title: "코레일 내일로 해커톤",
    prize: "장려상",
    date: "2025.12",
  },
  {
    title: "충주 청년 창업 아이디어 캠프",
    prize: "최우수상",
    date: "2026.01",
  },
];

export const contactData = {
  email: "tigerbone@naver.com",
  message: "프로젝트 협업, 채용 관련 문의 등 편하게 연락주세요!",
};
