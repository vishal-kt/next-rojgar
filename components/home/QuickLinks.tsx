import Link from "next/link";

const quickLinks = [
  { label: "Latest Jobs", href: "/jobs", icon: "JB", color: "bg-blue-50 text-blue-800" },
  { label: "Admit Cards", href: "/admit-card", icon: "AC", color: "bg-emerald-50 text-emerald-800" },
  { label: "Results", href: "/results", icon: "RS", color: "bg-violet-50 text-violet-800" },
  { label: "Answer Keys", href: "/answer-key", icon: "AK", color: "bg-orange-50 text-orange-800" },
  { label: "Syllabus", href: "/syllabus", icon: "SY", color: "bg-teal-50 text-teal-800" },
  { label: "Admissions", href: "/admissions", icon: "AD", color: "bg-indigo-50 text-indigo-800" },
  { label: "Current Affairs", href: "/current-affairs", icon: "CA", color: "bg-rose-50 text-rose-800" },
  { label: "Study Material", href: "/study-material", icon: "SM", color: "bg-cyan-50 text-cyan-800" },
  { label: "Online Tools", href: "/tools", icon: "TL", color: "bg-amber-50 text-amber-900" },
];

export function QuickLinks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" aria-labelledby="quick-links-heading">
      <div className="mb-5">
        <h2 id="quick-links-heading" className="text-xl font-semibold text-slate-900">
          Explore sections
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Browse recruitment, exam updates, and learning resources.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 sm:p-4"
          >
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xl font-semibold ${link.color}`} aria-hidden="true">
              {link.icon}
            </span>
            <span className="text-sm font-medium text-slate-800 group-hover:text-teal-800">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
