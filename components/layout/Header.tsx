import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MobileMenuButton } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="NextRojgar home"
          className="flex items-center gap-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white" aria-hidden="true">
            NR
          </span>
          <span>
            <span className="block text-lg font-bold leading-tight text-slate-950">
              Next<span className="text-orange-600">Rojgar</span>
            </span>
            <span className="hidden text-[11px] leading-tight text-slate-500 sm:block">
              Find your next step
            </span>
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-1">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-2.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 xl:px-3"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:hidden">
          <MobileMenuButton />
        </div>
      </div>
    </header>
  );
}
