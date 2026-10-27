import type { Metadata } from "next";
import { mockJobs, DEMO_NOTICE } from "@/lib/mock-data";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Government Jobs",
  description:
    "Preview the planned government recruitment listings. Current notices are not connected.",
};

export default function JobsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Government Jobs</h1>
        <p className="mt-2 text-gray-600">
          Browse example layouts for future recruitment notices
        </p>
        <p className="mt-2 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-700">
          <strong>Demo content:</strong> {DEMO_NOTICE}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockJobs.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="warning">Demo only</Badge>
                <Badge variant="outline">{job.category}</Badge>
              </div>
              <CardTitle>{job.title}</CardTitle>
            </CardHeader>
            <CardDescription>{job.summary}</CardDescription>
            <div className="mt-3 space-y-1 text-sm text-gray-600">
              {job.location && <p>Location: {job.location}</p>}
              {job.qualification && <p>Qualification: {job.qualification}</p>}
              {job.lastDate && <p>Application deadline: {formatDate(job.lastDate)}</p>}
              {job.vacancies && <p>Vacancies: {job.vacancies}</p>}
            </div>
            <CardFooter className="text-xs text-gray-500">
              <span>{job.organization}</span>
              {job.postedDate && <span>Example posted: {formatDate(job.postedDate)}</span>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
