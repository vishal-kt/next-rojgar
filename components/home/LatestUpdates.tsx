import Link from "next/link";
import { mockLatestUpdates } from "@/lib/mock-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

const typeBadgeVariant = {
  job: "success" as const,
  result: "info" as const,
  "admit-card": "warning" as const,
  "answer-key": "default" as const,
  syllabus: "outline" as const,
  admission: "outline" as const,
};

const typeLabel = {
  job: "Job",
  result: "Result",
  "admit-card": "Admit Card",
  "answer-key": "Answer Key",
  syllabus: "Syllabus",
  admission: "Admission",
};

export function LatestUpdates() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" aria-labelledby="latest-updates-heading">
      <SectionHeading
        title="Latest Updates"
        subtitle="Recent notifications and announcements (Demo Data)"
      />
      <div id="latest-updates-heading" className="sr-only">Latest Updates</div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <ul className="divide-y divide-gray-100" role="list">
          {mockLatestUpdates.map((update) => (
            <li key={update.id}>
              <Link
                href={update.href}
                className="flex items-start gap-4 px-5 py-4 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant={typeBadgeVariant[update.type]}>
                      {typeLabel[update.type]}
                    </Badge>
                    <span className="text-xs text-gray-400">
                      {formatDate(update.date)}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {update.title}
                  </p>
                  <p className="mt-0.5 text-sm text-gray-500">
                    {update.summary}
                  </p>
                </div>
                <span className="shrink-0 text-gray-400" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
