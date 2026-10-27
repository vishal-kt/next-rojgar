import { mockResults, mockAdmitCards } from "@/lib/mock-data";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export function LatestResults() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Results Column */}
        <div>
          <SectionHeading
            title="Latest Results"
            subtitle="Recent exam results (Demo Data)"
            viewAllHref="/results"
          />
          <div className="space-y-3">
            {mockResults.map((result) => (
              <Card key={result.id} href="/results">
                <CardHeader className="mb-0">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-base">{result.title}</CardTitle>
                    <Badge variant="info" className="shrink-0">Result</Badge>
                  </div>
                </CardHeader>
                <CardFooter className="text-xs text-gray-500">
                  <span>🏢 {result.organization}</span>
                  <span className="text-gray-300">|</span>
                  <span>📅 {formatDate(result.publishedDate)}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Admit Cards Column */}
        <div>
          <SectionHeading
            title="Admit Cards"
            subtitle="Recently released admit cards (Demo Data)"
            viewAllHref="/admit-card"
          />
          <div className="space-y-3">
            {mockAdmitCards.map((card) => (
              <Card key={card.id} href="/admit-card">
                <CardHeader className="mb-0">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-base">{card.title}</CardTitle>
                    <Badge variant="warning" className="shrink-0">Admit Card</Badge>
                  </div>
                </CardHeader>
                <CardFooter className="text-xs text-gray-500">
                  <span>🏢 {card.organization}</span>
                  <span className="text-gray-300">|</span>
                  <span>📝 Exam: {formatDate(card.examDate)}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
