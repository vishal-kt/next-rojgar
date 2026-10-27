import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about NextRojgar, an independent government recruitment information portal.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">About NextRojgar</h1>

      <div className="mt-6 space-y-6 text-gray-600 leading-relaxed">
        <p>
          <strong className="text-gray-900">NextRojgar</strong> is an independent,
          India-focused project being built to organize government recruitment
          information, exam resources, and practical online tools.
        </p>

        <p>
          This preview uses fictional sample content only. It is not connected to
          live recruitment data, and no listings on this site should be treated as
          a real notice. Future recruitment information should link to its official
          source and be checked before publication.
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
          <li>Use official sources and link to original notifications when real content is introduced</li>
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
