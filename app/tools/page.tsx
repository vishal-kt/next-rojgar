import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Online Tools",
  description: "Explore planned browser-based tools for application documents.",
};

const tools = [
  {
    name: "Age Calculator",
    description: "A planned tool for calculating the difference between dates.",
    icon: "🎂",
    status: "Coming Soon",
  },
  {
    name: "PDF to Image",
    description: "A planned tool for converting PDF pages to image files.",
    icon: "📄",
    status: "Coming Soon",
  },
  {
    name: "Image Resizer",
    description: "A planned tool for resizing images for application documents.",
    icon: "🖼️",
    status: "Coming Soon",
  },
  {
    name: "Signature Resizer",
    description: "A planned tool for preparing signature images.",
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
          Planned tools for application documents. None are available yet.
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
