import { mockJobs } from "@/lib/mock-data";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDate } from "@/lib/utils";

const statusBadgeVariant = {
  active: "success" as const,
  upcoming: "warning" as const,
  expired: "danger" as const,
};

export function LatestJobs() {
  const jobs = mockJobs.slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" aria-labelledby="latest-jobs-heading">
      <SectionHeading
        title="Latest Government Jobs"
        subtitle="Recent recruitment notifications (Demo Data)"
        viewAllHref="/jobs"
      />
      <div id="latest-jobs-heading" className="sr-only">Latest Government Jobs</div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <Card key={job.id} href={`/jobs`}>
            <CardHeader>
              <div className="mb-2 flex items-center gap-2">
                <Badge variant={statusBadgeVariant[job.status]}>
                  {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                </Badge>
                <Badge variant="outline">{job.category.toUpperCase()}</Badge>
              </div>
              <CardTitle>{job.title}</CardTitle>
            </CardHeader>
            <CardDescription>{job.summary}</CardDescription>
            <CardFooter className="flex-wrap text-xs text-gray-500">
              <span>📅 Last Date: {formatDate(job.lastDate)}</span>
              <span className="text-gray-300">|</span>
              <span>🏢 {job.organization}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
