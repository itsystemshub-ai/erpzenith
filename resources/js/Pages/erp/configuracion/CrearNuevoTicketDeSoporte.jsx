import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CrearNuevoTicketDeSoporte() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">confirmation_number</span>
                    <span>Soporte <span className="text-white/60 mx-2">|</span> Abrir Nuevo Ticket</span>
                </div>
            }
        >
            <Head title="Crear Nuevo Ticket de Soporte" />

            <div className="space-y-16 pb-20 px-4">
                {/* Editorial Header */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10">Case Opening Protocol</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Support v2.0</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">New <br/> <span className="text-stone-700">Ticket</span></h1>
                    </div>
                    <div className="max-w-xs border-l-4 border-primary pl-8 py-2">
                        <p className="text-stone-500 text-xs font-semibold uppercase tracking-widest leading-relaxed">
                            Submit a technical inquiry or report a system anomaly. Our engineering team prioritizes tickets based on severity levels.
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Ticket Form */}
                    <section className="lg:col-span-8 bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl p-12 lg:p-16 space-y-12">
                        <form className="space-y-12">
                            {/* Subject */}
                            <div className="space-y-4 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 px-4 group-focus-within:text-primary transition-colors">Ticket Subject</label>
                                <input 
                                    className="w-full bg-zinc-950/50 border-none rounded-[24px] py-6 px-10 text-[10px] font-black uppercase tracking-widest text-primary focus:ring-1 focus:ring-primary shadow-inner placeholder:text-stone-900" 
                                    placeholder="E.G., INVENTORY SYNCHRONIZATION DELAY IN MAIN WAREHOUSE" 
                                    type="text"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Module Dropdown */}
                                <div className="space-y-4 group">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 px-4 group-focus-within:text-primary transition-colors">Module Affected</label>
                                    <div className="relative">
                                        <select className="w-full bg-zinc-950/50 border-none rounded-[24px] py-6 px-10 text-[10px] font-black uppercase tracking-widest text-primary focus:ring-1 focus:ring-primary shadow-inner appearance-none">
                                            <option>SELECT SYSTEM VECTOR</option>
                                            <option>INVENTORY</option>
                                            <option>SALES</option>
                                            <option>PURCHASES</option>
                                            <option>FINANCE</option>
                                            <option>HUMAN RESOURCES</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-8 top-1/2 -translate-y-1/2 text-stone-800 pointer-events-none">expand_more</span>
                                    </div>
                                </div>
                                
                                {/* Severity Dropdown */}
                                <div className="space-y-4 group">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 px-4 group-focus-within:text-primary transition-colors">Severity Level</label>
                                    <div className="relative">
                                        <select className="w-full bg-zinc-950/50 border-none rounded-[24px] py-6 px-10 text-[10px] font-black uppercase tracking-widest text-primary focus:ring-1 focus:ring-primary shadow-inner appearance-none">
                                            <option>LVL 1 - ROUTINE INQUIRY</option>
                                            <option>LVL 2 - PERFORMANCE ISSUE</option>
                                            <option>LVL 3 - WORKFLOW IMPEDED</option>
                                            <option className="text-error font-black">LVL 4 - CRITICAL SYSTEM FAILURE</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-8 top-1/2 -translate-y-1/2 text-stone-800 pointer-events-none">expand_more</span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-4 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 px-4 group-focus-within:text-primary transition-colors">Forensic Description</label>
                                <textarea 
                                    className="w-full bg-zinc-950/50 border-none rounded-[40px] py-8 px-10 text-xs font-black uppercase tracking-widest text-primary focus:ring-1 focus:ring-primary shadow-inner placeholder:text-stone-900 leading-relaxed" 
                                    placeholder="PROVIDE A DETAILED TECHNICAL EXPLANATION OF THE ISSUE, INCLUDING STEPS TO REPRODUCE..." 
                                    rows="8"
                                ></textarea>
                            </div>

                            {/* Attachments */}
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 px-4">Telemetry Attachments</label>
                                <div className="border-2 border-dashed border-stone-900 bg-zinc-950/30 rounded-[40px] p-16 flex flex-col items-center justify-center gap-6 cursor-pointer hover:bg-zinc-950 transition-all hover:border-primary/20 group/drop">
                                    <div className="w-20 h-20 rounded-[24px] bg-zinc-900 border border-outline-variant/5 flex items-center justify-center group-hover/drop:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-stone-800 text-4xl group-hover/drop:text-primary">cloud_upload</span>
                                    </div>
                                    <div className="text-center space-y-2">
                                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700">Drag forensic files or <span className="text-primary italic">Browse Archives</span></p>
                                        <p className="text-[8px] font-black text-stone-900 uppercase tracking-widest">MAX: 25MB (PNG, JPG, PDF, ZIP, LOG)</p>
                                    </div>
                                </div>
                            </div>

                            {/* Submit */}
                            <button className="w-full bg-primary text-black py-8 rounded-[32px] font-black text-xs uppercase tracking-[0.6em] shadow-xl hover:scale-[1.02] active:scale-95 transition-all shadow-primary/20 flex items-center justify-center gap-6">
                                Initialize Ticket
                                <span className="material-symbols-outlined font-black">send</span>
                            </button>
                        </form>
                    </section>

                    {/* Sidebar Information */}
                    <aside className="lg:col-span-4 space-y-12">
                        {/* SLA Metrics */}
                        <section className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl space-y-10 relative overflow-hidden group">
                            <span className="material-symbols-outlined absolute -right-4 -top-4 text-[120px] text-zinc-950 opacity-40 group-hover:rotate-12 transition-transform">schedule</span>
                            <div className="relative z-10 space-y-2">
                                <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Response <br/> <span className="text-primary italic">SLA Matrix</span></h3>
                                <p className="text-[10px] font-black text-stone-700 uppercase tracking-[0.2em]">Guaranteed Incident Handling Times</p>
                            </div>
                            <div className="relative z-10 space-y-4">
                                {[
                                    { level: 'Critical', time: '< 120 MIN', color: 'text-error' },
                                    { level: 'High', time: '4H - 6H', color: 'text-white' },
                                    { level: 'Medium', time: '12H - 24H', color: 'text-white' },
                                    { level: 'Routine', time: '48H', color: 'text-white' }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-5 border-b border-zinc-800 last:border-none">
                                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">{item.level}</span>
                                        <span className={`text-sm font-headline font-black ${item.color} tracking-widest italic`}>{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Support Status */}
                        <section className="bg-zinc-950 p-1 rounded-[48px] border border-outline-variant/5">
                            <div className="bg-zinc-900 border border-outline-variant/5 rounded-[44px] p-10 space-y-8 overflow-hidden group">
                                <div className="flex items-start gap-6">
                                    <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">verified_user</span>
                                    <div className="space-y-2 text-left">
                                        <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Global Engineering</h4>
                                        <p className="text-stone-600 text-[10px] font-semibold uppercase leading-relaxed tracking-tight italic">Our engineers are available 24/7 for production-halting incidents.</p>
                                    </div>
                                </div>
                                <div className="h-48 relative rounded-3xl overflow-hidden border border-outline-variant/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img alt="Control Room" className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600"/>
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                                </div>
                            </div>
                        </section>
                    </aside>
                </div>

                {/* Industrial Footer */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col gap-3">
                        <span className="text-white font-headline font-black tracking-[0.5em] text-xl uppercase leading-none italic">FORGE SUPPORT</span>
                        <span className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.8em]">Incident Reporting & Response Infrastructure</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary text-lg">call</span>
                            <span>+1 (800) FORGE-TECH</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary text-lg">mail</span>
                            <span>systems.support@forge-erp.com</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-zinc-950 px-8 py-3 rounded-full border border-outline-variant/10 shadow-2xl">
                         <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(154,205,50,0.5)]"></span>
                         <span className="text-[9px] font-black text-white uppercase tracking-[0.4em]">Systems Operational</span>
                    </div>
                </footer>
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
