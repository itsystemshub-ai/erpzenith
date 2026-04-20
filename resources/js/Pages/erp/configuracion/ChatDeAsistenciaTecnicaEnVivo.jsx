import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ChatDeAsistenciaTecnicaEnVivo() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">chat</span>
                    <span>Soporte <span className="text-white/60 mx-2">|</span> Asistencia en Vivo</span>
                </div>
            }
        >
            <Head title="Chat de Asistencia Técnica" />

            <div className="flex h-[calc(100vh-140px)] -mx-4 -mb-4 overflow-hidden rounded-t-[48px] bg-zinc-950 border-x border-t border-outline-variant/10 shadow-3xl">
                {/* Sidebar: Resources */}
                <aside className="hidden lg:flex flex-col w-80 bg-zinc-900 border-r border-outline-variant/5 p-8 overflow-y-auto">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em]">Resource Library</h3>
                            <div className="space-y-4">
                                {[
                                    { tag: 'TECHNICAL DOCS', title: 'Hydraulic System v4.2', desc: 'Step-by-step calibration guide.' },
                                    { tag: 'KB ARTICLE', title: 'Troubleshooting Forge Lag', desc: 'Common resolution for latency.' },
                                    { tag: 'VIDEO GUIDE', title: 'Emergency Shutdown', desc: 'Safety protocols for X-900.' }
                                ].map((res, i) => (
                                    <div key={i} className="bg-zinc-950/50 p-5 rounded-3xl border border-outline-variant/5 cursor-pointer hover:border-primary/20 transition-all group">
                                        <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">{res.tag}</span>
                                        <p className="text-white text-sm font-headline font-black mt-2 uppercase tracking-tighter group-hover:text-primary transition-colors">{res.title}</p>
                                        <p className="text-stone-600 text-[10px] font-semibold mt-2 leading-relaxed uppercase">{res.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto pt-8 border-t border-zinc-800">
                            <div className="bg-primary/5 p-8 rounded-[32px] border border-primary/20 space-y-4">
                                <p className="text-primary font-headline font-black text-xs uppercase tracking-widest leading-tight">Urgent Assistance?</p>
                                <p className="text-stone-600 text-[10px] font-semibold uppercase italic leading-relaxed">Direct line to site supervisors for hardware failures.</p>
                                <button className="w-full bg-primary text-black font-black text-[10px] py-4 rounded-2xl tracking-[0.3em] uppercase hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/10">
                                    Request Callback
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Chat Interface */}
                <section className="flex-1 flex flex-col bg-zinc-950 relative">
                    {/* Chat Header */}
                    <header className="h-24 flex items-center justify-between px-10 bg-zinc-900/50 backdrop-blur-xl border-b border-outline-variant/5 z-20">
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <div className="h-14 w-14 rounded-[20px] bg-primary/20 flex items-center justify-center text-primary font-headline font-black shadow-inner">MF</div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-4 border-zinc-900 animate-pulse shadow-[0_0_10px_rgba(154,205,50,0.5)]"></div>
                            </div>
                            <div className="space-y-1">
                                <h2 className="text-xl font-headline font-black text-white uppercase tracking-tighter">Marcus Forge</h2>
                                <div className="flex items-center gap-3">
                                    <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Technical Lead</span>
                                    <span className="w-1 h-1 rounded-full bg-stone-800"></span>
                                    <span className="text-[9px] font-black text-stone-600 uppercase tracking-[0.3em]">Status: Online</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            {['search', 'attach_file', 'more_vert'].map(icon => (
                                <button key={icon} className="p-3 hover:bg-zinc-800 rounded-2xl transition-all material-symbols-outlined text-stone-600 hover:text-white">{icon}</button>
                            ))}
                        </div>
                    </header>

                    {/* Messages Area */}
                    <div className="flex-1 p-10 overflow-y-auto space-y-8 chat-scroll">
                        <div className="flex justify-center mb-12">
                            <span className="bg-zinc-900 border border-outline-variant/5 px-6 py-2 rounded-full text-[9px] font-black text-stone-700 uppercase tracking-[0.4em]">Session Log: 2024.11.08_09:42</span>
                        </div>

                        {/* Agent Message */}
                        <div className="flex gap-6 max-w-3xl">
                            <div className="shrink-0">
                                <div className="h-10 w-10 rounded-xl bg-zinc-900 border border-outline-variant/5 flex items-center justify-center text-[10px] font-black text-stone-700 uppercase">MF</div>
                            </div>
                            <div className="space-y-2">
                                <div className="bg-zinc-900 p-6 rounded-[32px] rounded-tl-none border border-outline-variant/5 shadow-2xl skew-x-[-1deg]">
                                    <p className="text-stone-300 text-sm font-medium leading-relaxed uppercase tracking-wide">
                                        Hello. This is Marcus from the Forge technical team. I've received your report regarding the <span className="text-primary font-black italic">Hydraulic Unit #4</span> cooling failure. How can I assist with the diagnostic procedure?
                                    </p>
                                </div>
                                <span className="text-[9px] font-black text-stone-800 uppercase pl-4">09:43 AM // Verified</span>
                            </div>
                        </div>

                        {/* User Message */}
                        <div className="flex gap-6 max-w-3xl self-end flex-row-reverse text-right">
                            <div className="shrink-0">
                                <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-black text-[10px] font-black uppercase">YOU</div>
                            </div>
                            <div className="space-y-2">
                                <div className="bg-primary text-black p-6 rounded-[32px] rounded-tr-none shadow-2xl skew-x-[1deg] shadow-primary/10">
                                    <p className="text-sm font-black leading-relaxed uppercase tracking-tight">
                                        The temperature sensor is reading 112°C. Intake valve checked, flow restricted. Do I initiate a full pressure purge?
                                    </p>
                                </div>
                                <div className="flex items-center justify-end gap-2 pr-4">
                                    <span className="text-[9px] font-black text-stone-800 uppercase">09:45 AM</span>
                                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
                                </div>
                            </div>
                        </div>

                        {/* Technical Spec Insert */}
                        <div className="max-w-xl mx-auto py-10">
                            <div className="bg-zinc-900/50 rounded-[40px] border-l-[8px] border-primary p-8 space-y-6 shadow-3xl">
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary">analytics</span>
                                    <h4 className="text-[10px] font-black text-stone-500 uppercase tracking-[0.4em]">Technical Spec: Bypass B-14</h4>
                                </div>
                                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                                    {[
                                        { l: 'Normal Ops', v: 'Vertical (90°)' },
                                        { l: 'Max Pressure', v: '4500 PSI' },
                                        { l: 'Safety Lock', v: 'Manual Pin' },
                                        { l: 'Coolant Type', v: 'HE-22 Glycol' }
                                    ].map((spec, i) => (
                                        <div key={i} className="flex flex-col gap-1">
                                            <span className="text-[8px] font-black text-stone-800 uppercase tracking-widest">{spec.l}</span>
                                            <span className="text-xs font-headline font-black text-white italic tracking-widest uppercase">{spec.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                         {/* Agent Typing */}
                        <div className="flex items-center gap-4 text-stone-800 ml-16">
                            <div className="flex gap-1.5">
                                <div className="w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
                                <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
                            </div>
                            <span className="text-[9px] font-black uppercase tracking-[0.5em]">Marcus is analyzing telemetry...</span>
                        </div>
                    </div>

                    {/* Input Area */}
                    <footer className="p-10 bg-zinc-900/30 backdrop-blur-3xl border-t border-outline-variant/5">
                        <div className="max-w-5xl mx-auto flex gap-6 items-end">
                            <div className="flex-1 bg-zinc-950 p-4 rounded-[32px] border border-outline-variant/10 focus-within:border-primary/40 transition-all shadow-inner group">
                                <textarea 
                                    className="w-full bg-transparent border-none focus:ring-0 text-sm font-medium text-white placeholder:text-stone-800 resize-none px-4 py-2 uppercase tracking-wide" 
                                    placeholder="TYPE DIAGNOSTIC REPORT OR INQUIRY..." 
                                    rows="1"
                                ></textarea>
                                <div className="flex justify-between items-center px-4 pt-2">
                                    <div className="flex gap-6">
                                        {['image', 'attachment', 'keyboard_voice'].map(icon => (
                                            <button key={icon} className="material-symbols-outlined text-stone-700 hover:text-primary transition-colors text-xl">{icon}</button>
                                        ))}
                                    </div>
                                    <span className="text-[8px] font-black text-stone-800 uppercase tracking-[0.3em]">System: Ready // Shift+Enter for line-break</span>
                                </div>
                            </div>
                            <button className="h-16 w-16 bg-primary text-black rounded-[24px] flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/10">
                                <span className="material-symbols-outlined text-3xl font-black">send</span>
                            </button>
                        </div>
                    </footer>
                </section>

                {/* Right Panel: Asset Details */}
                <aside className="hidden xl:flex flex-col w-96 bg-zinc-900 border-l border-outline-variant/5 p-10 overflow-y-auto space-y-12">
                    <div className="space-y-8">
                        <h3 className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em]">Asset Analysis</h3>
                        
                        <div className="bg-zinc-950 rounded-[48px] overflow-hidden border border-outline-variant/5 shadow-2xl group">
                            <div className="h-56 relative overflow-hidden">
                                <img alt="Hydraulic Unit" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?auto=format&fit=crop&q=80&w=600"/>
                                <div className="absolute top-6 right-6 bg-error text-white text-[9px] font-black px-4 py-2 rounded-full tracking-[0.3em] uppercase animate-pulse shadow-3xl shadow-error/20">Critical Alert</div>
                            </div>
                            <div className="p-8 space-y-4">
                                <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em]">Serial: FX-9000-A2</span>
                                <h4 className="text-2xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Forge Core <br/> Hydraulic #4</h4>
                                <div className="flex items-center gap-3 pt-2">
                                    <span className="w-2 h-2 rounded-full bg-error"></span>
                                    <span className="text-[10px] font-black text-stone-500 uppercase tracking-[0.2em]">Thermodynamic Stress</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { l: 'UPTIME', v: '99.8%' },
                                { l: 'PSI AVG', v: '4,210' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-zinc-950 p-6 rounded-[32px] border border-outline-variant/5 space-y-1">
                                    <span className="text-[8px] font-black text-stone-700 uppercase tracking-widest">{stat.l}</span>
                                    <p className="text-2xl font-headline font-black text-white italic tracking-tighter">{stat.v}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em]">Event Registry</h3>
                        <div className="space-y-8 pl-4 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-zinc-800">
                            {[
                                { t: '09:42 AM', d: 'Diagnostic session initiated.', active: true },
                                { t: 'OCT 24', d: 'Fluid replacement completed.', active: false },
                                { t: 'OCT 12', d: 'Safety inspection: PASSED.', active: false }
                            ].map((evt, i) => (
                                <div key={i} className="relative space-y-2">
                                    <div className={`absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full border-4 border-zinc-900 ${evt.active ? 'bg-primary shadow-[0_0_8px_rgba(154,205,50,0.5)]' : 'bg-stone-800'}`}></div>
                                    <p className="text-[9px] font-black text-white uppercase tracking-widest leading-none">{evt.t}</p>
                                    <p className="text-[10px] text-stone-600 font-semibold uppercase leading-tight tracking-tight italic">{evt.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 30px 30px;
                }
                .chat-scroll::-webkit-scrollbar {
                    width: 6px;
                }
                .chat-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .chat-scroll::-webkit-scrollbar-thumb {
                    background: #18181b;
                    border-radius: 10px;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
