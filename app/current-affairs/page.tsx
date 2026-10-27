import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Current Affairs — NextRojgar",
  description: "Latest current affairs for competitive exam preparation.",
};

export default function CurrentAffairsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Current Affairs</h1>
        <p className="mt-2 text-gray-600">
          Stay updated with current affairs for exam preparation
        </p>
      </div>
      <EmptyState
        icon="📰"
        title="Current Affairs — Coming Soon"
        description="Daily current affairs, monthly compilations, and topic-wise updates for competitive exam preparation."
      >
        <Button href="/" variant="outline">
          Back to Home
        </Button>
      </EmptyState>
    </div>
  );
}
