// Education and experience from your resume, newest first.
// Fields marked PLACEHOLDER need dates, which were not on the resume.
export type TimelineItem = {
  kind: "education" | "experience";
  title: string;
  organization: string;
  period: string;
  details: readonly string[];
};

export const TIMELINE: readonly TimelineItem[] = [
  {
    kind: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "Laikipia University",
    period: "2023 – Present",
    details: [],
  },
  {
    kind: "experience",
    title: "Founder",
    organization: "BayionTech",
    period: "PLACEHOLDER: start – present",
    details: [
      "Providing digital solutions including graphic design, software development and online services.",
      "Managing brand identity and client projects.",
    ],
  },
  {
    kind: "experience",
    title: "Media and content creation",
    organization: "Church media",
    period: "PLACEHOLDER: dates",
    details: [
      "Designing posters and infographics for church events.",
      "Creating short invitation and sermon-based content from YouTube sermons.",
    ],
  },
  {
    kind: "experience",
    title: "Book review and digital commerce projects",
    organization: "Online platform",
    period: "PLACEHOLDER: dates",
    details: [
      "Managing online book reviews and discussions.",
      "Setting up an online platform for selling digital books.",
    ],
  },
  {
    kind: "education",
    title: "Kenya Certificate of Secondary Education (KCSE)",
    organization: "Friends School Kamusinga",
    period: "2019 – 2022",
    details: ["Grade B (plain)"],
  },
];
