import React from 'react';
import { Link } from '@inertiajs/react';

export default function LoginAdministrativoAccesoSeguro() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            {/* Branding Background Elements */}
            <div className="fixed top-0 right-0 p-12 opacity-5 pointer-events-none select-none overflow-hidden">
                <span className="font-headline text-[15rem] font-black text-white leading-none uppercase">CORE</span>
            </div>
            <div className="fixed bottom-0 left-0 p-12 opacity-5 pointer-events-none select-none">
                <span className="font-headline text-[15rem] font-black text-white leading-none uppercase">V2.4</span>
            </div>

            <main className="w-full max-w-4xl grid md:grid-cols-12 gap-0 overflow-hidden rounded-lg shadow-2xl relative z-10">
                {/* Branding Side */}
                <div className="md:col-span-5 bg-stone-900 p-8 flex flex-col justify-between relative overflow-hidden min-h-[500px]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%)' }}>
                    <div className="absolute inset-0 opacity-20">
                        <img 
                            className="w-full h-full object-cover" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzoGEmAksW7lTtLojjc3GJclts9iQUWtsZVhS_kMD3aDxxYSjcJ8egT8Zj7zluD5sSZpwtZ3QU4drvurZ93k0GeyCacH3XjISLUXURs00GWhlXQ1PMJVeXsaydOCi85HKOVGm5hpNkU_TNpz5uD_j07ck2uFSVMrmLjSSuO9tZYXmtViqvsXpVlCO1oVJU8jWzFsCY3_2zg3J4Tc7TyFf7i5KrxQX3uhTDcPrykWUtzPbos73Jkq9lQ7OkD9UDqxTc5Rt2J8Tl4a0"
                            alt="Industrial machinery"
                        />
                    </div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 mb-8">
                            <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
                            <span className="font-headline font-bold text-white tracking-widest text-lg">LA CIMA</span>
                        </div>
                        <h1 className="font-headline text-4xl font-extrabold text-white leading-none tracking-tighter mb-4">
                            MAYOR DE REPUESTO LA CIMA, C.A.
                        </h1>
                        <p className="text-stone-400 font-label text-xs uppercase tracking-[0.2em] max-w-[200px] leading-relaxed">
                            High-Performance Industrial Forge Ecosystem v2.4
                        </p>
                    </div>
                    <div className="relative z-10 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></div>
                            <span className="font-label text-xs text-primary-container font-bold tracking-widest uppercase">Secure Node Active</span>
                        </div>
                        <div className="p-4 bg-black/40 backdrop-blur-sm border-l-2 border-primary">
                            <p className="text-stone-500 text-[10px] uppercase font-bold mb-1">Station ID</p>
                            <p className="text-stone-200 font-headline text-sm tracking-widest">FORGE-X9-ADMIN</p>
                        </div>
                    </div>
                </div>

                {/* Login Form Side */}
                <div className="md:col-span-7 bg-white p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-10">
                        <h2 className="font-headline text-2xl font-bold text-zinc-900 tracking-tight mb-2">OPERATOR AUTHENTICATION</h2>
                        <div className="h-1 w-12 bg-primary"></div>
                    </div>
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="block font-label text-[10px] font-bold text-stone-500 tracking-widest uppercase">System Identifier</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 text-sm">person</span>
                                <input 
                                    className="w-full bg-stone-100 pl-12 pr-4 py-4 border-none focus:ring-2 focus:ring-primary text-zinc-900 font-headline tracking-widest placeholder:text-stone-400" 
                                    placeholder="OPERATOR_ID" 
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block font-label text-[10px] font-bold text-stone-500 tracking-widest uppercase">Access Cipher</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 text-sm">lock_open</span>
                                <input 
                                    className="w-full bg-stone-100 pl-12 pr-4 py-4 border-none focus:ring-2 focus:ring-primary text-zinc-900 font-headline tracking-widest placeholder:text-stone-400" 
                                    placeholder="••••••••" 
                                    type="password"
                                />
                            </div>
                        </div>
                        <div className="p-4 bg-stone-50 border border-stone-200 rounded-sm">
                            <div className="flex items-center justify-between mb-3">
                                <label className="font-label text-[10px] font-bold text-stone-600 tracking-widest uppercase flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[16px]">verified_user</span> 2FA Protocol
                                </label>
                                <span className="text-[9px] text-primary font-bold">SMS SENT</span>
                            </div>
                            <div className="flex gap-2">
                                {[4, 9, 0, 0, 0, 0].map((val, i) => (
                                    <input 
                                        key={i}
                                        className="w-full h-12 text-center bg-stone-200 border-none text-zinc-900 font-headline font-bold focus:ring-2 focus:ring-primary" 
                                        maxLength="1" 
                                        defaultValue={val || ''} 
                                        placeholder={val === 0 ? "0" : ""}
                                        type="text"
                                    />
                                ))}
                            </div>
                        </div>
                        <button 
                            className="w-full py-4 bg-[#FF8C00] hover:bg-[#E67E00] text-black font-headline font-black text-sm tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3 active:scale-[0.98]" 
                            type="submit"
                        >
                            LOGIN TO CORE
                            <span className="material-symbols-outlined">bolt</span>
                        </button>
                        <div className="flex justify-between items-center">
                            <a className="text-[10px] font-bold text-stone-500 hover:text-primary tracking-widest uppercase transition-colors" href="#">Emergency Bypass</a>
                            <a className="text-[10px] font-bold text-stone-500 hover:text-primary tracking-widest uppercase transition-colors" href="#">Request Access</a>
                        </div>
                    </form>
                </div>
            </main>

            <footer className="mt-12 w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-6 px-4 relative z-10">
                <div className="flex flex-col items-center md:items-start">
                    <span className="font-headline font-black text-stone-700 tracking-tighter text-xl">RIF J-40308741-5</span>
                    <span className="font-label text-[10px] text-stone-500 tracking-[0.3em] uppercase">Registered Industrial Entity</span>
                </div>
                <div className="flex items-center gap-8">
                    <div className="text-right">
                        <p className="font-label text-[10px] font-bold text-stone-500 uppercase tracking-widest">Support Line</p>
                        <p className="font-headline text-stone-600 font-medium">+58 212-CORE-00</p>
                    </div>
                    <div className="h-8 w-px bg-stone-800"></div>
                    <div className="text-right">
                        <p className="font-label text-[10px] font-bold text-stone-500 uppercase tracking-widest">Global Ops</p>
                        <p className="font-headline text-stone-600 font-medium text-xs">admin.lacima@industrial.ve</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
