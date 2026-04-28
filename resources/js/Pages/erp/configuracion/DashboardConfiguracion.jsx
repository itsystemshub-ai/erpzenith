import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function DashboardConfiguracion() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">settings</span>
                    <span>Configuración <span className="text-white/60 mx-2">|</span> Parámetros Globales</span>
                </div>
            }
        >
            <Head title="Parámetros Globales | Configuración" />

            <div className="space-y-12 pb-12 relative overflow-hidden">
                {/* Header Section */}
                <header className="relative">
                    <div className="absolute -left-8 top-0 h-full w-1 bg-primary"></div>
                    <h1 className="text-5xl md:text-6xl font-headline font-black text-white uppercase tracking-tighter leading-none italic">
                        Configuración <br/><span className="text-stone-700">del Sistema</span>
                    </h1>
                    <p className="text-stone-500 font-bold uppercase tracking-[0.2em] text-xs mt-4">
                        Engineered Precision / Global Parameters
                    </p>
                </header>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    
                    {/* Left Column: Core Financials & Integrations */}
                    <div className="md:col-span-8 space-y-8">
                        
                        {/* Financial Settings Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {/* Currency Configuration */}
                            <section className="bg-zinc-950 p-8 rounded-[40px] border border-white/5 shadow-inner group hover:border-primary/20 transition-all flex flex-col justify-between">
                                <div className="flex justify-between items-start mb-8">
                                    <span className="material-symbols-outlined text-primary text-4xl shadow-[0_0_15px_rgba(154,205,50,0.2)] rounded-full bg-primary/5 p-2">currency_exchange</span>
                                    <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-[0.3em] rounded-lg animate-pulse italic">Live Sync</span>
                                </div>
                                <h3 className="font-headline font-black text-white text-2xl uppercase tracking-tighter mb-6 italic group-hover:text-primary transition-colors">Currency Matrix</h3>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-5 bg-zinc-900 rounded-2xl border border-white/5">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-stone-500">Primary (USD)</span>
                                        <span className="font-mono font-black text-white text-lg">$ 1.00</span>
                                    </div>
                                    <div className="flex items-center justify-between p-5 bg-zinc-900 rounded-2xl border-l-4 border-primary shadow-inner">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-stone-500">Secondary (VES)</span>
                                        <input 
                                            className="bg-transparent border-none text-right font-mono font-black text-primary focus:ring-0 p-0 w-24 text-lg" 
                                            type="text" 
                                            defaultValue="36.42"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Tax Architecture */}
                            <section className="bg-zinc-950 p-8 rounded-[40px] border border-white/5 shadow-inner group hover:border-primary/20 transition-all flex flex-col justify-between">
                                <div className="flex justify-between items-start mb-8">
                                    <span className="material-symbols-outlined text-primary text-4xl shadow-[0_0_15px_rgba(154,205,50,0.2)] rounded-full bg-primary/5 p-2">account_balance</span>
                                </div>
                                <h3 className="font-headline font-black text-white text-2xl uppercase tracking-tighter mb-6 italic group-hover:text-primary transition-colors">Tax Structure</h3>
                                
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase text-stone-500 tracking-[0.3em] block">IVA General Rate</label>
                                        <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-2xl border border-white/5 focus-within:border-primary/50 transition-colors">
                                            <input 
                                                className="flex-1 bg-transparent border-none focus:ring-0 p-0 text-white font-mono font-black text-lg" 
                                                type="text" 
                                                defaultValue="16.00"
                                            />
                                            <span className="font-black text-primary">%</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-6 bg-zinc-900 rounded-2xl border border-white/5">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-stone-300">Special Taxpayer (SPE)</span>
                                        <div className="relative inline-flex items-center cursor-pointer">
                                            <input defaultChecked type="checkbox" className="sr-only peer" />
                                            <div className="w-11 h-6 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary shadow-inner"></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* SENIAT E-Invoicing Credentials */}
                        <section className="bg-zinc-900 p-10 rounded-[48px] border-l-[12px] border-primary shadow-3xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mt-16 -mr-16 group-hover:bg-primary/20 transition-all duration-700"></div>
                            
                            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 mb-10">
                                <div className="w-16 h-16 bg-primary flex items-center justify-center rounded-2xl shadow-[0_0_20px_rgba(154,205,50,0.3)]">
                                    <span className="material-symbols-outlined text-black text-3xl font-black">terminal</span>
                                </div>
                                <div>
                                    <h3 className="font-headline font-black text-3xl uppercase tracking-tighter text-white italic">SENIAT Auth Protocol</h3>
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mt-1">Electronic Invoicing Integration Node</p>
                                </div>
                            </div>
                            
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[9px] font-black uppercase text-stone-500 tracking-[0.3em] block">API KEY / USERNAME</label>
                                    <input 
                                        className="w-full bg-zinc-950 border border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 text-primary rounded-2xl p-5 font-mono text-sm tracking-widest shadow-inner transition-colors" 
                                        type="text" 
                                        defaultValue="CIMA_ADMIN_V3_PROD"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[9px] font-black uppercase text-stone-500 tracking-[0.3em] block">Auth Certificate (P12)</label>
                                    <div className="w-full bg-zinc-950 border border-dashed border-white/10 hover:border-primary/50 rounded-2xl p-5 flex justify-between items-center cursor-pointer transition-all shadow-inner group/cert">
                                        <span className="text-sm font-mono text-stone-400 group-hover/cert:text-primary transition-colors tracking-wider">cima_cert_2024.p12</span>
                                        <span className="material-symbols-outlined text-primary font-black">verified</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Settings, Branding, Alerts */}
                    <div className="md:col-span-4 space-y-8">
                        
                        {/* Visual Identity */}
                        <section className="bg-zinc-950 p-8 rounded-[40px] border border-white/5 shadow-inner">
                            <h3 className="font-headline font-black text-xl uppercase tracking-tighter text-white mb-8 flex items-center gap-4 italic border-b border-white/5 pb-4">
                                <span className="w-3 h-3 bg-primary rounded-sm shadow-[0_0_8px_#9acd32]"></span>
                                Visual Identity
                            </h3>
                            
                            <div className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-stone-500">System Theme</span>
                                    <div className="flex bg-zinc-900 p-1.5 rounded-xl border border-white/5 shadow-inner">
                                        <button className="px-4 py-2 text-[10px] font-black text-stone-400 hover:text-white transition-colors rounded-lg">LIGHT</button>
                                        <button className="px-4 py-2 text-[10px] font-black bg-zinc-800 text-primary shadow-md rounded-lg italic">DARK</button>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="text-[10px] font-black uppercase text-stone-500 tracking-widest block text-center mb-4">Company Logo Upload</label>
                                    <div className="aspect-video bg-zinc-900 rounded-[24px] border-2 border-dashed border-white/10 flex flex-col items-center justify-center group cursor-pointer hover:border-primary/50 transition-all overflow-hidden relative shadow-inner">
                                        <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoG3GNwaIxMdhYR5ORAQq4rEt0pc8B1NMLYnqGTmwRK4W78d0NuLXCDar8OIeykPGappJBJ79x6qxNcyx2xa1JePGIpyMO8yzDaRoROkfgF2dR1D6sggAg6jgML2CLfY1eTuoBIf8_ThmRbuDGzzZfmUiZ2rHWtMI-EU4cE75jgyT4S5MMpo3s6fcDvEpyiU_0KhZUSSTV3efWzTpwp_oLabbUFDRU1A3SI9eaig-OIMhhs_FySSNF6zg3fq2HsUEfHanLIqY5zOI')] bg-cover bg-center opacity-20 grayscale group-hover:opacity-40 transition-opacity"></div>
                                        <span className="material-symbols-outlined text-stone-600 group-hover:text-primary text-4xl mb-3 font-black transition-colors relative z-10 shadow-sm">cloud_upload</span>
                                        <p className="text-[9px] font-black text-stone-500 uppercase tracking-[0.2em] relative z-10 group-hover:text-primary transition-colors">Drag file / click to browse</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Threshold Alerts */}
                        <section className="bg-zinc-950 p-8 rounded-[40px] border border-white/5 shadow-inner">
                            <h3 className="font-headline font-black text-xl uppercase tracking-tighter text-white mb-8 flex items-center gap-4 italic border-b border-white/5 pb-4">
                                <span className="w-3 h-3 bg-amber-500 rounded-sm shadow-[0_0_8px_#f59e0b]"></span>
                                Threshold Alerts
                            </h3>
                            
                            <div className="space-y-4">
                                {[
                                    { icon: 'inventory_2', title: 'Stock Warning', detail: 'Trigger at 15% levels' },
                                    { icon: 'payments', title: 'Payroll Cut-off', detail: 'Notify 3 days before' }
                                ].map((alert, i) => (
                                    <div key={i} className="p-5 bg-zinc-900 rounded-2xl flex items-center justify-between border border-white/5 hover:border-white/10 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center shadow-inner border border-white/5">
                                                <span className="material-symbols-outlined text-stone-400 font-black text-sm">{alert.icon}</span>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase text-stone-300 tracking-widest">{alert.title}</p>
                                                <p className="text-[8px] font-black text-stone-600 uppercase tracking-widest">{alert.detail}</p>
                                            </div>
                                        </div>
                                        <div className="relative inline-flex items-center cursor-pointer">
                                            <input defaultChecked type="checkbox" className="sr-only peer" />
                                            <div className="w-9 h-5 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary shadow-inner"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <button className="fixed bottom-10 right-10 w-20 h-20 bg-primary text-black rounded-full shadow-[0_10px_30px_rgba(154,205,50,0.4)] flex items-center justify-center group hover:scale-105 active:scale-95 transition-all z-50 overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="material-symbols-outlined text-4xl font-black relative z-10">save</span>
                
                {/* Tooltip */}
                <div className="absolute right-24 top-1/2 -translate-y-1/2 bg-zinc-900 text-primary border border-white/5 text-[9px] font-black px-6 py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-[0.3em] whitespace-nowrap shadow-2xl pointer-events-none italic">
                    Commit Parameters Engine
                </div>
            </button>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 32px 32px;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
