export const siteConfig = {
  name: "NextRojgar",
  description:
    "An independent India-focused project for government recruitment information, exam updates, and study resources.",
  url: "http://localhost:3000",
  tagline: "Independent recruitment and exam information",
  disclaimer:
    "NextRojgar is an independent project and is not affiliated with any government body. This preview contains fictional demo content only. Verify real information with official sources.",
  navLinks: [
    { label: "Jobs", href: "/jobs" },
    { label: "Admit Card", href: "/admit-card" },
    { label: "Results", href: "/results" },
    { label: "Answer Key", href: "/answer-key" },
    { label: "Syllabus", href: "/syllabus" },
    { label: "Admissions", href: "/admissions" },
    { label: "Current Affairs", href: "/current-affairs" },
    { label: "Study Material", href: "/study-material" },
    { label: "Tools", href: "/tools" },
  ],
  footerLinks: {
    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    resources: [
      { label: "Study Material", href: "/study-material" },
      { label: "Current Affairs", href: "/current-affairs" },
      { label: "Online Tools", href: "/tools" },
    ],
    exams: [
      { label: "Government Jobs", href: "/jobs" },
      { label: "Admit Cards", href: "/admit-card" },
      { label: "Results", href: "/results" },
      { label: "Answer Keys", href: "/answer-key" },
      { label: "Syllabus", href: "/syllabus" },
    ],
  },
} as const;

export type NavLink = (typeof siteConfig.navLinks)[number];
