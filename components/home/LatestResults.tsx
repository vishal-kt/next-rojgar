import { mockResults, mockAdmitCards } from "@/lib/mock-data";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function LatestResults() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <SectionHeading
            id="latest-results-heading"
            title="Latest Results"
            subtitle="Sample result cards"
            viewAllHref="/results"
          />
          <div className="space-y-3">
            {mockResults.map((result) => (
              <Card key={result.id} href="/results">
                <CardHeader className="mb-0">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-base">{result.title}</CardTitle>
                    <Badge variant="warning" className="shrink-0">Demo only</Badge>
                  </div>
                </CardHeader>
                <CardFooter className="text-xs text-gray-500">
                  <span>🏢 {result.organization}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            id="latest-admit-cards-heading"
            title="Admit Cards"
            subtitle="Sample admit card listings"
            viewAllHref="/admit-card"
          />
          <div className="space-y-3">
            {mockAdmitCards.map((card) => (
              <Card key={card.id} href="/admit-card">
                <CardHeader className="mb-0">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-base">{card.title}</CardTitle>
                    <Badge variant="warning" className="shrink-0">Demo only</Badge>
                  </div>
                </CardHeader>
                <CardFooter className="text-xs text-gray-500">
                  <span>🏢 {card.organization}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
