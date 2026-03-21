export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-surface-container-low/50 px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-4">
        <span className="font-spartan font-black tracking-tighter text-primary text-sm">ZENITH</span>
        <span className="text-outline text-[10px] font-spartan uppercase tracking-widest">Enterprise v6.0</span>
      </div>
      <div className="flex items-center gap-6 text-[10px] font-spartan uppercase tracking-widest text-outline">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Sistema Operativo
        </span>
        <span>© {new Date().getFullYear()} ERP Zenith</span>
        <span className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[12px]">verified_user</span>
          Cifrado Activo
        </span>
      </div>
    </footer>
  )
}
