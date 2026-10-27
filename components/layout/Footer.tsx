import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded">
              <span className="text-xl font-bold text-white">
                Next<span className="text-orange-400">Rojgar</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {siteConfig.description}
            </p>
          </div>

          {/* Exams & Recruitment */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Exams & Recruitment
            </h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.footerLinks.exams.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-10 border-t border-gray-800 pt-8">
          <p className="text-xs leading-relaxed text-slate-400">
            <span className="font-medium text-slate-300">Disclaimer:</span>{" "}
            {siteConfig.disclaimer}
          </p>
          <p className="mt-4 text-xs text-slate-500">
            {siteConfig.name} is an independent information project.
          </p>
        </div>
      </div>
    </footer>
  );
}
