export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1">{children}</div>
      <footer className="w-full border-t border-white/5 bg-surface-container-low/50 px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <span className="font-spartan font-black tracking-tighter text-primary text-sm">ZENITH</span>
          <span className="text-outline text-[10px] font-spartan uppercase tracking-widest">Enterprise v6.0</span>
        </div>
        <div className="flex items-center gap-6 text-[10px] font-spartan uppercase tracking-widest text-outline">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[12px]">verified_user</span>
            Cifrado Militar Activo
          </span>
          <span suppressHydrationWarning>© {new Date().getFullYear()} ERP Zenith</span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[12px]">shield</span>
            ZENITH PROTECT V4.2
          </span>
        </div>
      </footer>
    </div>
  )
}
