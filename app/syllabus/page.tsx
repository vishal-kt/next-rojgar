import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Syllabus",
  description: "Exam syllabus and pattern information for government examinations.",
};

export default function SyllabusPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Syllabus</h1>
        <p className="mt-2 text-gray-600">
          Exam syllabus and pattern information
        </p>
      </div>
      <EmptyState
        icon="📚"
        title="Syllabus Section — Coming Soon"
        description="Detailed syllabus and exam patterns for SSC, UPSC, Banking, Railway, and other major exams will be available here."
      >
        <Button href="/" variant="outline">
          Back to Home
        </Button>
      </EmptyState>
    </div>
  );
}
