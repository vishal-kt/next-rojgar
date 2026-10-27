import type { Metadata } from "next";
import { mockAdmitCards, DEMO_NOTICE } from "@/lib/mock-data";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Admit Cards — NextRojgar",
  description:
    "Download admit cards for government examinations. Find exam dates and hall ticket links.",
};

export default function AdmitCardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admit Cards</h1>
        <p className="mt-2 text-gray-600">
          Find and download admit cards for government examinations
        </p>
        <p className="mt-2 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-700">
          {DEMO_NOTICE}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockAdmitCards.map((card) => (
          <Card key={card.id}>
            <CardHeader>
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="warning">Admit Card</Badge>
                <Badge variant="outline">{card.category.toUpperCase()}</Badge>
              </div>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <div className="mt-2 space-y-1 text-sm text-gray-600">
              <p>🏢 {card.organization}</p>
              <p>📝 Exam Date: {formatDate(card.examDate)}</p>
            </div>
            <CardFooter className="text-xs text-gray-500">
              <span>Published: {formatDate(card.publishedDate)}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
