"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-6 py-12 text-center">
      <p className="text-sm font-medium text-zinc-800">
        This screen couldn&apos;t be loaded.
      </p>
      {process.env.NODE_ENV === "development" ? (
        <pre className="max-w-full overflow-x-auto rounded-lg bg-zinc-100 p-3 text-left text-xs text-red-700">
          {error.message}
        </pre>
      ) : null}
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white"
      >
        Try again
      </button>
    </div>
  );
}
