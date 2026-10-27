"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { mockAdmitCards, mockJobs, mockResults } from "@/lib/mock-data";
import { Button } from "@/components/ui/Button";

const searchEntries = [
  ...mockJobs.map((item) => ({
    title: item.title,
    category: "Job",
    href: "/jobs",
    keywords: `${item.organization} ${item.category} ${item.summary}`,
  })),
  ...mockResults.map((item) => ({
    title: item.title,
    category: "Result",
    href: "/results",
    keywords: `${item.organization} ${item.category}`,
  })),
  ...mockAdmitCards.map((item) => ({
    title: item.title,
    category: "Admit card",
    href: "/admit-card",
    keywords: `${item.organization} ${item.category}`,
  })),
];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const matchingEntries = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return [];
    }

    return searchEntries
      .filter((entry) =>
        `${entry.title} ${entry.keywords}`.toLowerCase().includes(query)
      )
      .slice(0, 5);
  }, [searchQuery]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (matchingEntries[0]) {
      router.push(matchingEntries[0].href);
    }
  }

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-teal-400/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-48 left-1/4 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium tracking-wide text-teal-100 sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-teal-300" aria-hidden="true" />
          Independent information for exam aspirants
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Your next opportunity starts with{" "}
          <span className="text-orange-300">clear information.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          Explore recruitment notices, exam updates, and study resources in one
          straightforward place. Always confirm important details with the
          official source.
        </p>

        <div className="relative mt-8 max-w-2xl">
          <form
            onSubmit={handleSearch}
            className="flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-2xl shadow-black/20 sm:flex-row"
            role="search"
            aria-label="Search sample notices"
          >
            <label htmlFor="hero-search" className="sr-only">
              Search jobs, exams, or organizations
            </label>
            <input
              id="hero-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search jobs, exams, or organizations"
              className="min-w-0 flex-1 rounded-xl border-0 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-700"
              autoComplete="off"
            />
            <Button
              type="submit"
              className="bg-orange-500 text-white hover:bg-orange-600 focus-visible:ring-orange-400"
              size="lg"
            >
              Search samples
            </Button>
          </form>
          {searchQuery.trim() && (
            <div
              className="absolute inset-x-0 top-full z-10 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white text-left text-slate-900 shadow-xl"
              role="status"
              aria-live="polite"
            >
              {matchingEntries.length > 0 ? (
                <ul>
                  {matchingEntries.map((entry) => (
                    <li key={`${entry.href}-${entry.title}`}>
                      <button
                        type="button"
                        onClick={() => router.push(entry.href)}
                        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-700"
                      >
                        <span className="text-sm font-medium">{entry.title}</span>
                        <span className="shrink-0 text-xs text-slate-500">
                          {entry.category}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="px-4 py-3 text-sm text-slate-600">
                  No matching sample entries. Try a different search.
                </p>
              )}
            </div>
          )}
        </div>
        <p className="mt-3 text-sm text-slate-400">
          Searches fictional preview content only. No live or verified notices
          are connected.
        </p>
        <div className="mt-8 flex flex-wrap gap-2 text-xs text-slate-300 sm:text-sm">
          <span className="rounded-full border border-white/10 px-3 py-1.5">
            Jobs & recruitment
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1.5">
            Results & admit cards
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1.5">
            Exam resources
          </span>
        </div>
      </div>
    </section>
  );
}
