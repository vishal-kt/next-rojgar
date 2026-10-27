import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Online Tools — NextRojgar",
  description: "Free online tools: age calculator, PDF utilities, image resizer, and more.",
};

const tools = [
  {
    name: "Age Calculator",
    description: "Calculate your exact age on a specific date. Useful for checking age eligibility for government exams.",
    icon: "🎂",
    status: "Coming Soon",
  },
  {
    name: "PDF to Image",
    description: "Convert PDF pages to high-quality images. Process files directly in your browser.",
    icon: "📄",
    status: "Coming Soon",
  },
  {
    name: "Image Resizer",
    description: "Resize and compress images to meet application photo requirements.",
    icon: "🖼️",
    status: "Coming Soon",
  },
  {
    name: "Signature Resizer",
    description: "Resize your signature image to meet government application specifications.",
    icon: "✍️",
    status: "Coming Soon",
  },
];

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Online Tools</h1>
        <p className="mt-2 text-gray-600">
          Free tools to help with your exam applications and document preparation
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.name}>
            <CardHeader>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-3xl" role="img" aria-hidden="true">
                  {tool.icon}
                </span>
                <Badge variant="warning">{tool.status}</Badge>
              </div>
              <CardTitle>{tool.name}</CardTitle>
            </CardHeader>
            <CardDescription>{tool.description}</CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
}
