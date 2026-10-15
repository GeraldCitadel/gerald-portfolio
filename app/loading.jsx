export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-gray-950 transition-colors">
      {/* Background ambient glow */}
      <div className="absolute h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative flex flex-col items-center gap-6">
        {/* Modern minimal loader ring */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute h-full w-full rounded-full border-2 border-primary/20" />
          <div className="h-full w-full rounded-full border-2 border-primary border-t-transparent animate-spin" />
          {/* Central accent dot */}
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        </div>

        {/* Text branding */}
        <div className="flex flex-col items-center gap-1 text-center">
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Gerald Citadel
          </span>
          <span className="text-xs tracking-widest text-gray-500 uppercase dark:text-gray-400 animate-pulse">
            Loading Experience
          </span>
        </div>
      </div>
    </div>
  );
}