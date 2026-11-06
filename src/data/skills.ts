// Skills from your site and resume. Edit the items to match what you use most.
export type SkillGroup = {
  group: string;
  items: readonly string[];
};

export const SKILLS: readonly SkillGroup[] = [
  {
    group: "Design",
    items: [
      "Brand identity",
      "Typography",
      "UI/UX design",
      "Posters and infographics",
      "Video editing",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe Premiere Pro",
    ],
  },
  {
    group: "Development",
    items: ["Front-end logic", "HTML", "CSS", "JavaScript", "Python", "Web and app development"],
  },
  {
    group: "Leadership",
    items: ["Team leadership", "Communication", "Problem-solving"],
  },
];
