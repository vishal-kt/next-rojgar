"use client";

import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
      <span className="text-6xl" role="img" aria-hidden="true">
        ⚠️
      </span>
      <h1 className="mt-6 text-3xl font-bold text-gray-900">
        Something Went Wrong
      </h1>
      <p className="mt-3 max-w-md text-gray-600">
        An unexpected error occurred. Please try again or return to the
        homepage.
      </p>
      <div className="mt-8 flex gap-3">
        <Button onClick={() => reset()} variant="outline">
          Try Again
        </Button>
        <Button href="/">Back to Home</Button>
      </div>
    </div>
  );
}
