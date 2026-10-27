import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
      <span className="text-6xl" role="img" aria-hidden="true">
        🔍
      </span>
      <h1 className="mt-6 text-3xl font-bold text-gray-900">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-gray-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might
        have been moved or doesn&apos;t exist.
      </p>
      <div className="mt-8">
        <Button href="/">Back to Home</Button>
      </div>
    </div>
  );
}
