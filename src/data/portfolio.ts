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
    { icon: "location", label: "위치", value: "서울특별시" },
    { icon: "education", label: "학력", value: "건국대학교 스마트ICT융합공학과" },
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
  // 프로젝트는 나중에 추가
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
    role: "개발자",
    period: "2025.02 - 현재",
    description: "", // 회사/업무에 대한 간단한 설명
    details: [
      // 담당 업무를 여기에 추가
      // 예: "React, TypeScript 기반 웹 애플리케이션 개발",
      // 예: "RESTful API 설계 및 구현",
    ],
    techStack: [
      // 사용 기술 스택을 여기에 추가
      // 예: "React", "TypeScript", "Python"
    ],
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
export const awardData = [
  {
    title: "코레일 내일로 해커톤",
    prize: "장려상",
  },
  {
    title: "충주 청년 창업 아이디어 캠프",
    prize: "최우수상",
  },
];

export const contactData = {
  email: "tigerbone@naver.com",
  message: "프로젝트 협업, 채용 관련 문의 등 편하게 연락주세요!",
};
