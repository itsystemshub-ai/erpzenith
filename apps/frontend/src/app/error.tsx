'use client'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-surface">
      <h1 className="text-4xl font-bold text-error mb-4">Error</h1>
      <p className="text-on-surface-variant mb-8">{error.message}</p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90"
      >
        Intentar de nuevo
      </button>
    </div>
  )
}
