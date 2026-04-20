import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ConfiguracionDeParametrosGlobales() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">settings</span>
                    <span>Configuración Global <span className="text-white/60 mx-2">|</span> Parámetros del Sistema</span>
                </div>
            }
        >
            <Head title="Configuración de Parámetros Globales" />

            <div className="space-y-12 pb-12">
                {/* Page Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 px-4">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="text-primary font-headline font-black uppercase tracking-[0.4em] text-[10px] bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">Engineered Precision</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Global Parameters v2.4</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">System <br/> <span className="text-stone-700">Configuration</span></h1>
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-10">
                    {/* Financial Core Section */}
                    <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-10">
                        {/* Currency Matrix */}
                        <div className="col-span-2 md:col-span-1 bg-zinc-900 rounded-[48px] p-10 border border-outline-variant/10 shadow-3xl group hover:border-primary/20 transition-all relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
                                <span className="material-symbols-outlined text-[100px] text-white">currency_exchange</span>
                            </div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <span className="material-symbols-outlined text-primary text-4xl">payments</span>
                                    <span className="text-[9px] bg-primary/20 px-4 py-1.5 font-black text-primary rounded-full tracking-[0.3em] uppercase border border-primary/10">Live Exchange</span>
                                </div>
                                <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter mb-8">Currency Matrix</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-6 bg-zinc-950 rounded-3xl border border-outline-variant/5 shadow-inner">
                                        <span className="text-[10px] font-black text-stone-600 uppercase tracking-widest">Primary (USD)</span>
                                        <span className="font-mono font-black text-white tracking-widest">$ 1.00</span>
                                    </div>
                                    <div className="flex items-center justify-between p-6 bg-zinc-950 rounded-3xl border-l-[6px] border-primary shadow-inner">
                                        <span className="text-[10px] font-black text-stone-600 uppercase tracking-widest">Secondary (VES)</span>
                                        <input className="bg-transparent border-none text-right font-mono font-black text-primary text-xl focus:ring-0 p-0 w-32 tracking-widest" type="text" defaultValue="62.42" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tax Structure */}
                        <div className="col-span-2 md:col-span-1 bg-zinc-900 rounded-[48px] p-10 border border-outline-variant/10 shadow-3xl group hover:border-primary/20 transition-all relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
                                <span className="material-symbols-outlined text-[100px] text-white">account_balance</span>
                            </div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8 text-primary">
                                    <span className="material-symbols-outlined text-4xl">gavel</span>
                                </div>
                                <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter mb-8">Tax Architecture</h3>
                                <div className="space-y-6">
                                    <div>
                                        <label className="text-[9px] uppercase text-stone-700 font-black mb-3 block tracking-[0.3em] ml-2">IVA General Rate</label>
                                        <div className="flex items-center gap-4 bg-zinc-950 p-4 rounded-3xl border border-outline-variant/5 shadow-inner group-focus-within:border-primary transition-colors">
                                            <input className="flex-1 bg-transparent border-none focus:ring-0 rounded-2xl text-xl font-headline font-black text-white tracking-widest" type="text" defaultValue="16.00" />
                                            <span className="font-headline font-black text-primary text-xl px-4">%</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-6 bg-zinc-950 rounded-3xl border border-outline-variant/5 shadow-inner">
                                        <span className="text-[10px] font-black text-stone-600 uppercase tracking-widest">Special Taxpayer (SPE)</span>
                                        <div className="relative inline-flex items-center cursor-pointer">
                                            <input defaultChecked={true} className="sr-only peer" type="checkbox" />
                                            <div className="w-14 h-8 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-stone-500 peer-checked:after:bg-black after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary shadow-inner"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SENIAT Protocols */}
                        <div className="col-span-2 bg-zinc-950 rounded-[48px] p-12 border border-outline-variant/10 shadow-3xl group relative overflow-hidden">
                            <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 mb-10">
                                <div className="p-6 bg-primary rounded-[32px] shadow-[0_0_40px_rgba(154,205,50,0.3)]">
                                    <span className="material-symbols-outlined text-black text-5xl font-black" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-3xl font-headline font-black text-white uppercase tracking-tighter leading-none mb-2">SENIAT Auth Protocol</h3>
                                    <p className="text-stone-700 text-[10px] font-black uppercase tracking-[0.4em]">Electronic Invoicing & Fiscal Compliance Integration</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                                <div className="space-y-3">
                                    <label className="text-[9px] uppercase text-stone-700 font-black tracking-[0.4em] ml-2">API KEY / LOGISTICS ID</label>
                                    <input className="w-full bg-zinc-900 border-none text-primary focus:ring-1 focus:ring-primary rounded-3xl py-5 px-8 font-mono text-xs font-bold tracking-widest shadow-xl" type="text" defaultValue="CIMA_ADMIN_V3_PROD_A12" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[9px] uppercase text-stone-700 font-black tracking-[0.4em] ml-2">Auth Certificate (P12)</label>
                                    <div className="w-full bg-zinc-900 border border-dashed border-zinc-700 rounded-3xl py-5 px-8 flex justify-between items-center cursor-pointer hover:border-primary transition-all shadow-xl group/upload">
                                        <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest group-hover/upload:text-white transition-colors">cima_cert_2024_rev_b.p12</span>
                                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Appearance & Branding Sidebar */}
                    <div className="col-span-12 lg:col-span-4 space-y-10">
                        {/* Visual Identity */}
                        <div className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl">
                            <h3 className="text-lg font-headline font-black text-white uppercase tracking-tight mb-10 flex items-center gap-4">
                                <span className="w-8 h-1 bg-primary rounded-full"></span> 
                                Visual Identity
                            </h3>
                            <div className="space-y-10">
                                <div className="flex items-center justify-between bg-zinc-950 p-6 rounded-3xl border border-outline-variant/5 shadow-inner">
                                    <span className="text-[10px] font-black text-stone-600 uppercase tracking-widest">System Theme</span>
                                    <div className="flex bg-zinc-900 p-2 rounded-2xl border border-outline-variant/10 shadow-xl">
                                        <button className="px-6 py-2 text-[9px] font-black bg-zinc-800 text-stone-500 rounded-xl transition-all cursor-not-allowed">LIGHT</button>
                                        <button className="px-6 py-2 text-[9px] font-black bg-primary text-black rounded-xl shadow-lg">DARK</button>
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <label className="text-[9px] uppercase text-stone-700 font-black block text-center tracking-[0.4em]">Corporate Branding Assets</label>
                                    <div className="aspect-square bg-zinc-950 rounded-[40px] border-4 border-dashed border-outline-variant/10 flex flex-col items-center justify-center group cursor-pointer hover:border-primary transition-all overflow-hidden relative shadow-inner">
                                        <span className="material-symbols-outlined text-stone-800 group-hover:text-primary mb-4 text-7xl transition-all group-hover:scale-110">cloud_upload</span>
                                        <p className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em] group-hover:text-primary transition-colors">Commit Logo File</p>
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Threshold Alerts */}
                        <div className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl">
                            <h3 className="text-lg font-headline font-black text-white uppercase tracking-tight mb-10 flex items-center gap-4">
                                <span className="w-8 h-1 bg-primary rounded-full"></span> 
                                Logic Barriers
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { icon: 'inventory_2', label: 'Stock Warning', desc: 'Trigger at 15% levels' },
                                    { icon: 'payments', label: 'Payroll Cut-off', desc: 'Notify 3 days before' }
                                ].map((alert, i) => (
                                    <div key={i} className="p-6 bg-zinc-950 rounded-3xl flex items-center justify-between border border-outline-variant/5 shadow-inner">
                                        <div className="flex items-center gap-5">
                                            <div className="p-3 bg-zinc-900 rounded-xl border border-outline-variant/10">
                                                <span className="material-symbols-outlined text-stone-600 text-xl">{alert.icon}</span>
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-black text-white uppercase tracking-tight mb-1 leading-none">{alert.label}</p>
                                                <p className="text-[9px] text-stone-700 font-black uppercase tracking-widest">{alert.desc}</p>
                                            </div>
                                        </div>
                                        <div className="relative inline-flex items-center cursor-pointer">
                                            <input defaultChecked={true} className="sr-only peer" type="checkbox" />
                                            <div className="w-10 h-6 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-stone-600 peer-checked:after:bg-black after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary shadow-inner border border-outline-variant/5"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-10 bg-zinc-950 py-5 text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 rounded-3xl border border-outline-variant/10 hover:border-primary hover:text-white transition-all shadow-xl active:scale-95">
                                Notification Log History
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <footer className="mt-24 pt-16 border-t border-outline-variant/5 grid grid-cols-1 md:grid-cols-3 gap-16 px-4">
                    <div className="space-y-6">
                        <h4 className="font-headline font-black text-xl text-white uppercase tracking-tighter">LA CIMA CORPORATE</h4>
                        <div className="space-y-3">
                            <p className="text-[10px] text-stone-600 font-black uppercase tracking-widest leading-relaxed">
                                Calle Industrial Sur, Galpón 42-B<br/>
                                Zona Industrial II, Barquisimeto<br/>
                                Estado Lara, Venezuela.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center border-x-0 md:border-x border-outline-variant/10 px-0 md:px-16">
                        <p className="text-[10px] font-black uppercase text-stone-700 tracking-[0.4em] mb-3">Tax Registry ID (RIF)</p>
                        <p className="text-3xl font-headline font-black text-white tracking-widest">J-30568214-0</p>
                    </div>
                    <div className="flex flex-col md:items-end justify-center space-y-8">
                        <div className="flex gap-8">
                            {['language', 'mail', 'call'].map(icon => (
                                <span key={icon} className="material-symbols-outlined text-primary text-3xl cursor-pointer hover:scale-125 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                            ))}
                        </div>
                        <p className="text-[9px] text-stone-800 uppercase font-black tracking-[0.5em]">© 2024 MAYOR DE REPUESTO LA CIMA, C.A.</p>
                    </div>
                </footer>
            </div>

            {/* Floating Action Button */}
            <div className="fixed bottom-12 right-12 flex items-center gap-6 group">
                <div className="bg-zinc-900 border border-outline-variant/10 px-8 py-4 rounded-3xl text-[10px] font-black uppercase tracking-[0.4em] text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-8 shadow-3xl pointer-events-none">
                    Commit Parameters
                </div>
                <button className="w-20 h-20 bg-primary text-black rounded-3xl shadow-[0_25px_60px_rgba(154,205,50,0.3)] flex items-center justify-center group/fab hover:scale-110 active:scale-90 transition-all z-50 relative overflow-hidden">
                    <span className="material-symbols-outlined text-4xl font-black group-hover/fab:rotate-12 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>save</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover/fab:opacity-20 transition-opacity"></div>
                </button>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 30px 30px;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
