import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Answer Keys — NextRojgar",
  description: "Find answer keys for government examinations.",
};

export default function AnswerKeyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Answer Keys</h1>
        <p className="mt-2 text-gray-600">
          Find answer keys for government examinations
        </p>
      </div>
      <EmptyState
        icon="🔑"
        title="Answer Keys — Coming Soon"
        description="We're working on bringing you answer keys for all major government examinations. Check back soon!"
      >
        <Button href="/" variant="outline">
          Back to Home
        </Button>
      </EmptyState>
    </div>
  );
}
