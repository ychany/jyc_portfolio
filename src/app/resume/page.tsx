import type { Metadata } from "next";
import {
  profileData,
  aboutData,
  skillsData,
  projectsData,
  experienceData,
  educationData,
  certificateData,
  awardData,
  activityData,
} from "@/data/portfolio";
import ResumeToolbar from "./ResumeToolbar";

// 인쇄 창의 기본 PDF 파일명으로 쓰인다
export const metadata: Metadata = {
  title: `${profileData.name}_이력서`,
  robots: { index: false },
};

type Project = (typeof projectsData)[number];

// 프로젝트 카드가 한 페이지 안에서 끊기지 않도록 핵심 내용만 노출
const MAX_NOTES = 5;

const skillGroups = [
  { label: "Frontend", items: skillsData.frontend },
  { label: "Backend", items: skillsData.backend },
  { label: "Mobile", items: skillsData.mobile },
  { label: "Tools", items: skillsData.tools },
];

const detail = (icon: string) =>
  aboutData.details.find((d) => d.icon === icon)?.value ?? "";

// 원본 썸네일(최대 1.6MB PNG)을 그대로 쓰면 PDF가 10MB를 넘는다.
// 인쇄 폭(44mm ≈ 300dpi 기준 520px)에 맞춰 Next 이미지 최적화로 줄여서 불러온다.
// q는 images.qualities에 등록된 값만 허용된다 (기본값 75, 다른 값은 400).
const thumbnailSrc = (src: string) =>
  `/_next/image?url=${encodeURIComponent(src)}&w=640&q=75`;

const displayUrl = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

function projectLinks(project: Project) {
  const links: { label: string; href: string }[] = [];
  if (project.github) links.push({ label: "GitHub", href: project.github });
  if (project.demo) {
    const isAppStore = project.demo.includes("apps.apple.com");
    links.push({ label: isAppStore ? "App Store" : "Live", href: project.demo });
  }
  if (project.tossApp) links.push({ label: "토스 미니앱", href: project.tossApp });
  project.extraLinks?.forEach((link) => {
    if (link.demo) links.push({ label: link.label, href: link.demo });
    if (link.github) links.push({ label: `${link.label} GitHub`, href: link.github });
  });
  return links;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-[2mm] border-b-2 border-teal-500 pb-[1mm] text-[11pt] font-bold text-gray-900 break-after-avoid">
      {children}
    </h2>
  );
}

function Section({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mt-[4mm] ${className}`}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-gray-100 px-[2.2mm] py-[0.4mm] text-[7.5pt] font-medium text-gray-700">
      {children}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const links = projectLinks(project);
  const notes = project.notes?.slice(0, MAX_NOTES) ?? [];

  return (
    <article className="mb-[3mm] flex gap-[4mm] rounded-[2.5mm] border border-gray-200 p-[3.5mm] break-inside-avoid">
      <div className="w-[44mm] shrink-0">
        {project.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnailSrc(project.image)}
            alt={project.title}
            className="aspect-video w-full rounded-[1.5mm] border border-gray-100 object-cover"
          />
        )}
        {links.length > 0 && (
          <ul className="mt-[2.5mm] space-y-[0.8mm] text-[7.5pt]">
            {links.map((link) => (
              <li key={link.href} className="truncate">
                <a href={link.href} className="font-semibold text-teal-700">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-[3mm]">
          <h3 className="text-[12pt] font-bold text-gray-900">{project.title}</h3>
          <span className="shrink-0 text-[8pt] font-semibold text-teal-600">
            {project.period}
          </span>
        </div>
        <p className="text-[8.5pt] text-gray-500">{project.subtitle}</p>

        <div className="mt-[1.5mm] flex flex-wrap items-center gap-x-[3mm] gap-y-[1mm] text-[8pt] text-gray-600">
          {project.role && (
            <span>
              <b className="font-semibold text-gray-800">역할</b> {project.role}
            </span>
          )}
          {project.team && (
            <span>
              <b className="font-semibold text-gray-800">팀</b> {project.team}
            </span>
          )}
          {project.award && (
            <span className="rounded bg-amber-100 px-[1.5mm] py-[0.3mm] font-semibold text-amber-800">
              수상 · {project.award}
            </span>
          )}
        </div>

        <p className="mt-[1.8mm] text-[8.5pt] leading-[1.55] text-gray-700">
          {project.description}
        </p>

        {notes.length > 0 && (
          <ul className="mt-[1.8mm] space-y-[0.6mm] text-[8.5pt] leading-normal text-gray-800">
            {notes.map((note) => (
              <li key={note} className="flex gap-[1.5mm]">
                <span className="text-teal-500">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-[2.2mm] flex flex-wrap gap-[1.2mm]">
          {project.techStack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ResumePage() {
  const phone = detail("phone");
  const field = detail("briefcase").replace(/\n/g, " · ");
  const introduction = aboutData.introduction.replace(/\s*\n+\s*/g, " ");
  const activities = activityData.filter((a) => !a.hidden);
  const activityRows = Array.from({ length: Math.ceil(activities.length / 2) }, (_, i) =>
    activities.slice(i * 2, i * 2 + 2)
  );
  // 최신 프로젝트가 먼저 오도록
  const projects = [...projectsData].reverse();

  const contacts = [
    { label: "Email", value: profileData.email, href: `mailto:${profileData.email}` },
    { label: "Phone", value: phone, href: `tel:${phone.replace(/-/g, "")}` },
    { label: "Portfolio", value: displayUrl(profileData.website), href: profileData.website },
    { label: "GitHub", value: displayUrl(profileData.github), href: profileData.github },
    { label: "LinkedIn", value: displayUrl(profileData.linkedin), href: profileData.linkedin },
  ].filter((c) => c.value);

  return (
    <div className="min-h-screen overflow-x-auto bg-gray-200 py-[10mm] print:overflow-visible print:bg-white print:py-0">
      <ResumeToolbar />

      <main className="mx-auto w-[210mm] bg-white px-[10mm] py-[15mm] text-gray-900 shadow-lg print:w-auto print:p-0 print:shadow-none">
        {/* 프로필 — 전역 인쇄 스타일이 <header>를 숨기므로 div 사용 */}
        <div className="flex items-end justify-between gap-[6mm] border-b border-gray-200 pb-[4mm]">
          <div>
            <p className="text-[9pt] font-semibold tracking-wide text-teal-600">
              {profileData.nameEn}
            </p>
            <h1 className="mt-[0.5mm] text-[24pt] font-extrabold leading-tight">
              {profileData.name}
            </h1>
            <p className="mt-[1mm] text-[10pt] font-medium text-gray-600">{field}</p>
          </div>
          <dl className="grid grid-cols-[auto_auto] gap-x-[3mm] gap-y-[0.8mm] text-[8.5pt]">
            {contacts.map((c) => (
              <div key={c.label} className="contents">
                <dt className="font-semibold text-gray-500">{c.label}</dt>
                <dd>
                  <a href={c.href} className="text-gray-800">
                    {c.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-[3.5mm] text-[9.5pt] leading-[1.6] text-gray-700">{introduction}</p>

        <Section title="학력">
          {educationData.map((edu) => (
            <div key={edu.title} className="flex items-baseline justify-between gap-[3mm]">
              <p className="text-[9.5pt]">
                <b className="font-bold">{edu.title}</b>
                <span className="ml-[2mm] text-gray-700">
                  {edu.major}
                  {edu.minor && ` (부전공: ${edu.minor})`}
                </span>
                {edu.description && (
                  <span className="ml-[2mm] text-[8.5pt] text-gray-500">{edu.description}</span>
                )}
              </p>
              <span className="shrink-0 text-[8.5pt] font-semibold text-teal-600">
                {edu.period}
              </span>
            </div>
          ))}
        </Section>

        <Section title="경력">
          {experienceData.map((exp) => (
            <div key={exp.title} className="break-inside-avoid">
              <div className="flex items-baseline justify-between gap-[3mm]">
                <h3 className="text-[11pt] font-bold">
                  {exp.title}
                  <span className="ml-[2mm] text-[9pt] font-medium text-gray-500">
                    {exp.role}
                  </span>
                </h3>
                <span className="shrink-0 text-[8.5pt] font-semibold text-teal-600">
                  {exp.period}
                </span>
              </div>
              <p className="mt-[1mm] text-[9pt] text-gray-700">{exp.description}</p>
              <ul className="mt-[1.5mm] space-y-[0.6mm] text-[9pt] text-gray-800">
                {exp.details.map((d) => (
                  <li key={d} className="flex gap-[1.5mm]">
                    <span className="text-teal-500">•</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              {exp.techStack && (
                <div className="mt-[2mm] flex flex-wrap gap-[1.2mm]">
                  {exp.techStack.map((tech) => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Section>

        <div className="grid grid-cols-2 gap-x-[8mm] break-inside-avoid">
          <Section title="수상">
            <ul className="space-y-[1.2mm] text-[9pt]">
              {awardData.map((award) => (
                <li key={award.title} className="flex justify-between gap-[2mm]">
                  <span>
                    <b className="font-semibold">{award.prize}</b>
                    <span className="ml-[1.5mm] text-gray-700">{award.title}</span>
                  </span>
                  <span className="shrink-0 text-[8pt] text-gray-500">{award.date}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="자격증">
            <ul className="space-y-[1.2mm] text-[9pt]">
              {certificateData.map((cert) => (
                <li key={cert.title} className="flex justify-between gap-[2mm]">
                  <span>
                    <b className="font-semibold">{cert.title}</b>
                    <span className="ml-[1.5mm] text-[8pt] text-gray-500">{cert.issuer}</span>
                  </span>
                  <span className="shrink-0 text-[8pt] text-gray-500">{cert.date}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {activities.length > 0 && (
          <Section title="활동">
            <div className="space-y-[2mm]">
              {activityRows.map((row) => (
                <div
                  key={row[0].organization}
                  className="grid grid-cols-2 gap-x-[8mm] break-inside-avoid"
                >
                  {row.map((activity) => (
                    <div key={activity.organization}>
                      <div className="flex items-baseline justify-between gap-[2mm]">
                        <b className="text-[9pt] font-semibold">{activity.organization}</b>
                        <span className="shrink-0 text-[8pt] text-gray-500">{activity.period}</span>
                      </div>
                      <p className="text-[8pt] font-semibold text-teal-700">{activity.role}</p>
                      <p className="mt-[0.5mm] text-[8pt] leading-normal text-gray-600">
                        {activity.description}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section title="기술 스택">
          <div className="space-y-[1.2mm]">
            {skillGroups.map((group) => (
              <div key={group.label} className="flex items-start gap-[3mm]">
                <span className="w-[18mm] shrink-0 pt-[0.3mm] text-[8.5pt] font-bold text-teal-700">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-[1.2mm]">
                  {group.items.map((skill) => (
                    <Chip key={skill.name}>{skill.name}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {projects.length > 0 && (
          <section className="mt-[4mm]">
            <div className="break-inside-avoid">
              <SectionTitle>{`프로젝트 (${projects.length})`}</SectionTitle>
              <ProjectCard project={projects[0]} />
            </div>
            {projects.slice(1).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            <p className="mt-[2mm] text-center text-[8pt] text-gray-500">
              프로젝트 상세 내용과 스크린샷은{" "}
              <a href={profileData.website} className="font-semibold text-teal-700">
                {displayUrl(profileData.website)}
              </a>
              에서 확인하실 수 있습니다.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
