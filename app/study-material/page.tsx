import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Study Material",
  description: "Study resources for government exam preparation.",
};

export default function StudyMaterialPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Study Material</h1>
        <p className="mt-2 text-gray-600">
          Study resources and preparation material for government exams
        </p>
      </div>
      <EmptyState
        icon="📖"
        title="Study Material — Coming Soon"
        description="Notes, practice questions, and reference material organized by exam and subject."
      >
        <Button href="/" variant="outline">
          Back to Home
        </Button>
      </EmptyState>
    </div>
  );
}
