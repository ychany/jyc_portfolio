// 포트폴리오 데이터 - 이 파일만 수정하면 됩니다!

export const profileData = {
  name: "조영찬",
  nameEn: "Youngchan Jo",
  role: "Frontend Developer",
  tagline: "사용자 경험을 중심으로 생각하는 프론트엔드 개발자",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  blog: "https://your-blog.com",
  linkedin: "", // 선택사항
  location: "Seoul, South Korea",
  phone: "", // 선택사항
};

export const aboutData = {
  introduction: `안녕하세요! 사용자 경험을 중심으로 생각하는 프론트엔드 개발자 조영찬입니다.

깔끔하고 직관적인 UI/UX를 구현하는 것을 좋아하며,
새로운 기술을 배우고 적용하는 것에 열정을 가지고 있습니다.`,

  details: [
    { icon: "user", label: "이름", value: "조영찬" },
    { icon: "calendar", label: "생년월일", value: "YYYY.MM.DD" },
    { icon: "location", label: "위치", value: "서울특별시" },
    { icon: "email", label: "이메일", value: "your.email@example.com" },
    { icon: "education", label: "학력", value: "OO대학교 OO학과" },
  ],
};

export const skillsData = {
  frontend: [
    { name: "React", level: 90, tagClass: "tag-react" },
    { name: "Next.js", level: 85, tagClass: "tag-nextjs" },
    { name: "TypeScript", level: 85, tagClass: "tag-typescript" },
    { name: "JavaScript", level: 90, tagClass: "tag-javascript" },
    { name: "HTML5", level: 95, tagClass: "tag-html" },
    { name: "CSS3", level: 90, tagClass: "tag-css" },
    { name: "Tailwind CSS", level: 85, tagClass: "tag-tailwind" },
  ],
  backend: [
    { name: "Node.js", level: 70, tagClass: "tag-nodejs" },
    { name: "Python", level: 60, tagClass: "tag-python" },
  ],
  database: [
    { name: "MySQL", level: 65, tagClass: "tag-mysql" },
    { name: "MongoDB", level: 60, tagClass: "tag-mongodb" },
  ],
  tools: [
    { name: "Git", level: 85, tagClass: "tag-git" },
    { name: "Figma", level: 75, tagClass: "tag-figma" },
    { name: "Docker", level: 50, tagClass: "tag-docker" },
  ],
};

export const archivingData = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
    description: "소스 코드 저장소입니다.",
    details: [
      "개인 프로젝트 소스 코드",
      "코딩 연습 및 알고리즘 풀이",
      "협업 프로젝트",
    ],
  },
  {
    name: "Blog",
    url: "https://your-blog.com",
    icon: "blog",
    description: "기술 블로그입니다.",
    details: [
      "공부한 내용 정리",
      "트러블슈팅 기록",
      "개발 경험 공유",
    ],
  },
];

export const projectsData = [
  {
    id: 1,
    title: "프로젝트 제목 1",
    subtitle: "프로젝트 부제목",
    description: "프로젝트에 대한 간단한 설명입니다. 어떤 문제를 해결하고자 했는지, 어떤 기능을 구현했는지 등을 작성합니다.",
    image: "/projects/project1.png", // public/projects 폴더에 이미지 추가
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
    period: "2024.01 - 2024.03",
    features: [
      "주요 기능 1",
      "주요 기능 2",
      "주요 기능 3",
    ],
  },
  {
    id: 2,
    title: "프로젝트 제목 2",
    subtitle: "프로젝트 부제목",
    description: "프로젝트에 대한 간단한 설명입니다.",
    image: "/projects/project2.png",
    techStack: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project2",
    demo: "",
    period: "2024.04 - 2024.06",
    features: [
      "주요 기능 1",
      "주요 기능 2",
    ],
  },
];

export const careerData = [
  {
    type: "work", // 'work' | 'education' | 'certificate'
    title: "OO 회사",
    role: "프론트엔드 개발자",
    period: "2023.01 - 현재",
    description: "웹 서비스 프론트엔드 개발 및 유지보수",
    details: [
      "React 기반 웹 애플리케이션 개발",
      "성능 최적화 및 사용자 경험 개선",
    ],
  },
  {
    type: "education",
    title: "OO 대학교",
    role: "컴퓨터공학과",
    period: "2019.03 - 2023.02",
    description: "학사 졸업",
    details: [],
  },
];

export const contactData = {
  email: "your.email@example.com",
  message: "프로젝트 협업, 채용 관련 문의 등 편하게 연락주세요!",
};
