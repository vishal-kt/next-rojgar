import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Us — NextRojgar",
  description: "Get in touch with the NextRojgar team.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
      <p className="mt-2 text-gray-600">
        Have questions or feedback? We'd love to hear from you.
      </p>

      <div className="mt-8">
        <EmptyState
          icon="✉️"
          title="Contact Form — Coming Soon"
          description="We're setting up our contact form. In the meantime, you can reach us at the email address below."
        >
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-3">
              Email: <span className="font-medium text-gray-700">contact@nextrojgar.com</span>
            </p>
            <Button href="/" variant="outline">
              Back to Home
            </Button>
          </div>
        </EmptyState>
      </div>
    </div>
  );
}
