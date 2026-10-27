export const siteConfig = {
  name: "NextRojgar",
  description:
    "India-focused government recruitment and exam-information portal. Find latest government jobs, admit cards, results, answer keys, syllabus, and more.",
  url: "https://nextrojgar.com",
  tagline: "Your Gateway to Government Jobs",
  disclaimer:
    "NextRojgar is an independent information portal. We are not affiliated with any government body. Always verify information from official sources before acting on it.",
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
