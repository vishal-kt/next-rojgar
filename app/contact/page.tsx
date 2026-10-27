import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information will be added before the site launches.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
      <p className="mt-2 text-gray-600">
        Have a question or feedback? A contact channel will be added before launch.
      </p>

      <div className="mt-8">
        <EmptyState
          icon="✉️"
          title="Contact Form — Coming Soon"
          description="There is no contact form or support email configured in this preview."
        >
          <Button href="/" variant="outline">
            Back to Home
          </Button>
        </EmptyState>
      </div>
    </div>
  );
}
