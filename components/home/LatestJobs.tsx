import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { DEMO_NOTICE, mockJobs } from "@/lib/mock-data";

export function LatestJobs() {
  const jobs = mockJobs.slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" aria-labelledby="latest-jobs-heading">
      <SectionHeading
        id="latest-jobs-heading"
        title="Latest Government Jobs"
        subtitle="Example listings to preview the recruitment section"
        viewAllHref="/jobs"
      />
      <p className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        {DEMO_NOTICE}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <Card key={job.id} href="/jobs">
            <CardHeader>
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="warning">Demo only</Badge>
                <Badge variant="outline">{job.category}</Badge>
              </div>
              <CardTitle>{job.title}</CardTitle>
            </CardHeader>
            <CardDescription>{job.summary}</CardDescription>
            <CardFooter className="flex-wrap text-xs text-gray-500">
              <span>{job.organization}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
