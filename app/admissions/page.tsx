import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Admissions — NextRojgar",
  description: "Education admission notices and application information.",
};

export default function AdmissionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admissions</h1>
        <p className="mt-2 text-gray-600">
          Education admission notices and application details
        </p>
      </div>
      <EmptyState
        icon="🎓"
        title="Admissions Section — Coming Soon"
        description="Find education-related admission notices, application deadlines, and eligibility information."
      >
        <Button href="/" variant="outline">
          Back to Home
        </Button>
      </EmptyState>
    </div>
  );
}
