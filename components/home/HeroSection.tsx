"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 px-4 py-16 text-white sm:py-24">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Your Gateway to{" "}
          <span className="text-orange-300">Government Jobs</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100 sm:text-xl">
          Find the latest government job notifications, admit cards, results,
          answer keys, and exam resources — all in one place.
        </p>

        {/* Search Bar */}
        <div className="mx-auto mt-8 max-w-xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Search functionality will be added when backend is ready
            }}
            className="flex gap-2"
            role="search"
            aria-label="Search government jobs"
          >
            <label htmlFor="hero-search" className="sr-only">
              Search jobs, exams, or organizations
            </label>
            <input
              id="hero-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search jobs, exams, or organizations..."
              className="flex-1 rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200 backdrop-blur-sm focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <Button
              type="submit"
              className="bg-orange-500 text-white hover:bg-orange-600 focus-visible:ring-orange-400"
              size="lg"
            >
              Search
            </Button>
          </form>
          <p className="mt-3 text-sm text-blue-200">
            Search is coming soon. Browse sections below for now.
          </p>
        </div>
      </div>
    </section>
  );
}
