import { SkillCategory } from "../type/skillType";

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "HTML", percentage: 90, src: "/skills/html5.svg" },
      { name: "CSS", percentage: 90, src: "/skills/css.svg" },
      { name: "TypeScript", percentage: 70, src: "/images/typescript-seeklogo.png" },
      { name: "PHP", percentage: 50, src: "/skills/php-seeklogo.svg" },
      { name: "JavaScript", percentage: 60, src: "/skills/javascript.svg" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React", percentage: 85, src: "/skills/react.svg" },
      { name: "Laravel", percentage: 70, src: "/skills/laravel-seeklogo.svg" },
      {
        name: "Tailwind CSS",
        percentage: 80,
        src: "/skills/tailwind-css-seeklogo.svg",
      },
      { name: "MaterialUI", percentage: 65, src: "/images/material-ui-seeklogo.png" },
            { name: "Next.js", percentage: 70, src: "/images/Next.js.png" },

    ],
  },
  {
    category: "Libraries",
    items: [
      { name: "SWR", percentage: 65, src: "/skills/swr-seeklogo.png" },
      { name: "Tanstack Query", percentage: 60, src: "/images/react-query-icon_.png" },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git/Github", percentage: 80, src: "/github.png" },
      { name: "VS Code", percentage: 90, src: "/images/visual-studio-code-seeklogo.png" },
      { name: "Postman", percentage: 60, src: "/images/postman.png" },
      { name: "Bruno", percentage: 70, src: "/images/images.png" },
    ],
  },
];
