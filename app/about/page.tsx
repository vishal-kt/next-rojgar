import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About — NextRojgar",
  description: "Learn about NextRojgar, an independent government recruitment information portal.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">About NextRojgar</h1>

      <div className="mt-6 space-y-6 text-gray-600 leading-relaxed">
        <p>
          <strong className="text-gray-900">NextRojgar</strong> is an independent,
          India-focused portal that aims to help people discover government
          recruitment opportunities, exam resources, and useful online tools — all
          from one place.
        </p>

        <p>
          We aggregate and organize publicly available recruitment information to
          make it easier for candidates to find and act on relevant opportunities.
          We always link back to official sources and encourage users to verify
          information from official notifications before making decisions.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">What We Cover</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Central and state government job notifications</li>
          <li>Admit card download links and exam schedules</li>
          <li>Exam results and merit lists</li>
          <li>Answer keys and objection windows</li>
          <li>Syllabus and exam pattern details</li>
          <li>Education admission notices</li>
          <li>Current affairs for exam preparation</li>
          <li>Free online tools for document preparation</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 pt-4">Our Principles</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Never fabricate vacancy counts, eligibility criteria, or deadlines</li>
          <li>Always cite official sources and link to original notifications</li>
          <li>Clearly distinguish editorial summaries from official information</li>
          <li>Provide a clean, fast, mobile-friendly experience</li>
          <li>Respect user privacy and avoid intrusive practices</li>
        </ul>

        <div className="mt-8 rounded-lg bg-blue-50 p-4 border border-blue-100">
          <p className="text-sm text-blue-800">
            <strong>Disclaimer:</strong> {siteConfig.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}
