// Projects from your resume. Add links (repoUrl, liveUrl) when you have them.
export type Project = {
  title: string;
  summary: string;
  tags: readonly string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const PROJECTS: readonly Project[] = [
  {
    title: "BayionTech digital services",
    summary:
      "The digital services business I founded. It provides graphic design, software development and online services, and manages brand identity and client projects.",
    tags: ["Brand identity", "Software development", "Online services"],
  },
  {
    title: "Church media and content",
    summary:
      "Posters and infographics for church events, plus short invitation and sermon-based videos created from YouTube sermons.",
    tags: ["Adobe Photoshop", "Adobe Premiere Pro", "Video editing"],
  },
  {
    title: "Book review and digital commerce",
    summary:
      "An online book review community with discussions, and a platform set up for selling digital books.",
    tags: ["Web development", "E-commerce"],
  },
];
