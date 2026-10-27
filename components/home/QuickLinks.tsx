import Link from "next/link";

const quickLinks = [
  { label: "Latest Jobs", href: "/jobs", icon: "💼", color: "bg-blue-50 text-blue-700 hover:bg-blue-100" },
  { label: "Admit Card", href: "/admit-card", icon: "🎫", color: "bg-green-50 text-green-700 hover:bg-green-100" },
  { label: "Results", href: "/results", icon: "📊", color: "bg-purple-50 text-purple-700 hover:bg-purple-100" },
  { label: "Answer Key", href: "/answer-key", icon: "🔑", color: "bg-orange-50 text-orange-700 hover:bg-orange-100" },
  { label: "Syllabus", href: "/syllabus", icon: "📚", color: "bg-teal-50 text-teal-700 hover:bg-teal-100" },
  { label: "Admissions", href: "/admissions", icon: "🎓", color: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100" },
  { label: "Current Affairs", href: "/current-affairs", icon: "📰", color: "bg-rose-50 text-rose-700 hover:bg-rose-100" },
  { label: "Study Material", href: "/study-material", icon: "📖", color: "bg-cyan-50 text-cyan-700 hover:bg-cyan-100" },
  { label: "Online Tools", href: "/tools", icon: "🛠️", color: "bg-amber-50 text-amber-700 hover:bg-amber-100" },
];

export function QuickLinks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" aria-labelledby="quick-links-heading">
      <h2 id="quick-links-heading" className="sr-only">
        Quick Links
      </h2>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex flex-col items-center gap-2 rounded-xl p-4 text-center transition-colors ${link.color} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
          >
            <span className="text-2xl" role="img" aria-hidden="true">
              {link.icon}
            </span>
            <span className="text-xs font-medium sm:text-sm">{link.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
