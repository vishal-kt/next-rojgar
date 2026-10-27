import type { Metadata } from "next";
import { mockResults, DEMO_NOTICE } from "@/lib/mock-data";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Exam Results",
  description:
    "Browse the planned results section. Demo entries are fictional and not official.",
};

export default function ResultsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Exam Results</h1>
        <p className="mt-2 text-gray-600">
          Browse example layouts for future result notices
        </p>
        <p className="mt-2 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-700">
          <strong>Demo content:</strong> {DEMO_NOTICE}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockResults.map((result) => (
          <Card key={result.id}>
            <CardHeader>
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="info">Result</Badge>
                <Badge variant="warning">Demo only</Badge>
                <Badge variant="outline">{result.category}</Badge>
              </div>
              <CardTitle>{result.title}</CardTitle>
            </CardHeader>
            <div className="mt-2 space-y-1 text-sm text-gray-600">
              <p>{result.organization}</p>
            </div>
            <CardFooter className="text-xs text-gray-500">
              {result.publishedDate && <span>Example publication date: {formatDate(result.publishedDate)}</span>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
