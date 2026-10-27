export default function Loading() {
  return (
    <div className="flex items-center justify-center px-4 py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <div
          className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-700"
          role="status"
          aria-label="Loading"
        />
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    </div>
  );
}
