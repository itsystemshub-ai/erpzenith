import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CentroDeAyudaYSoporteTecnico() {
    const modules = [
        { name: 'Inventario', desc: 'Gestión de stock, almacenes y repuestos pesados.', icon: 'inventory_2', type: 'Descargar PDF' },
        { name: 'Ventas', desc: 'Facturación, preventa y notas de entrega industriales.', icon: 'point_of_sale', type: 'Leer manual' },
        { name: 'Finanzas', desc: 'Cuentas por cobrar y conciliación bancaria.', icon: 'payments', type: 'Consultar' },
        { name: 'RRHH', desc: 'Gestión de nómina y asistencia del personal.', icon: 'groups', type: 'Ver guía' }
    ];

    const faqs = [
        { q: '¿Cómo anular una factura emitida por error?', a: '', open: false },
        { q: '¿Cómo reponer stock de un almacén secundario?', a: 'Debe dirigirse al módulo de Inventario > Transferencias. Seleccione el almacén de origen "Principal" y el destino correspondiente. Ingrese los códigos de las piezas y valide la firma digital del responsable de almacén.', open: true },
        { q: '¿Mi clave ha expirado, cómo la recupero?', a: '', open: false },
        { q: '¿Cómo generar el reporte de ventas del mes anterior?', a: '', open: false }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">help_center</span>
                    <span>Soporte <span className="text-white/60 mx-2">|</span> Centro de Ayuda</span>
                </div>
            }
        >
            <Head title="Centro de Ayuda y Soporte" />

            <div className="space-y-16 pb-20 px-4">
                {/* Hero Section */}
                <header className="relative grid grid-cols-1 md:grid-cols-12 gap-12 items-end mt-8">
                    <div className="md:col-span-8 space-y-8">
                        <div className="inline-flex px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black tracking-[0.4em] uppercase border border-primary/20 rounded-full">
                            Knowledge Base v4.2
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">
                            Support <br/> <span className="text-stone-700">Protocol</span>
                        </h1>
                        <p className="text-stone-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed uppercase tracking-tight">
                            Portal de capacitación y asistencia técnica para el personal de <span className="text-white font-black italic">MAYOR DE REPUESTO LA CIMA</span>. Optimize su flujo de trabajo industrial.
                        </p>
                    </div>
                    <div className="md:col-span-4">
                        <article className="bg-zinc-900 p-8 rounded-[40px] border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                            <div className="relative z-10 space-y-2">
                                <span className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em] block mb-2">Live System Health</span>
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(154,205,50,0.6)]"></div>
                                    <span className="text-xl font-headline font-black text-white uppercase tracking-tighter italic">Operational 100%</span>
                                </div>
                            </div>
                            <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-[120px] text-stone-950 opacity-40 group-hover:rotate-12 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        </article>
                    </div>
                </header>

                {/* Search & Modules Grid */}
                <section className="space-y-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-900 pb-10">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-headline font-black text-white uppercase tracking-tighter">Module Resources</h2>
                            <p className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em]">Detailed technical documentation ledger</p>
                        </div>
                        <div className="relative w-full md:w-96 group">
                            <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-stone-700 text-lg group-focus-within:text-primary transition-colors">search</span>
                            <input className="w-full bg-zinc-900 border-none rounded-[24px] py-4 pl-14 pr-6 text-[10px] font-black uppercase tracking-widest text-primary focus:ring-1 focus:ring-primary shadow-inner placeholder:text-stone-800" placeholder="SEARCH MANUALS OR ERRORS..." type="text"/>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {modules.map((mod, i) => (
                            <div key={i} className="md:col-span-2 lg:col-span-2 bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl group hover:bg-primary transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between">
                                <div className="space-y-8">
                                    <span className="material-symbols-outlined text-5xl text-primary group-hover:text-black transition-colors">{mod.icon}</span>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-headline font-black text-white group-hover:text-black uppercase tracking-tighter transition-colors">{mod.name}</h3>
                                        <p className="text-stone-500 group-hover:text-black/60 text-xs font-semibold leading-relaxed tracking-tight transition-colors uppercase">{mod.desc}</p>
                                    </div>
                                </div>
                                <button className="mt-10 text-[9px] font-black uppercase tracking-[0.3em] text-primary group-hover:text-black border-b-2 border-primary group-hover:border-black/30 pb-2 flex items-center justify-between transition-colors">
                                    {mod.type}
                                    <span className="material-symbols-outlined text-sm">north_east</span>
                                </button>
                            </div>
                        ))}

                        {/* Video Tutorials Highlight */}
                        <div className="md:col-span-4 lg:col-span-2 row-span-1 lg:row-span-2 relative bg-zinc-950 rounded-[48px] overflow-hidden group shadow-3xl border border-outline-variant/10">
                            <div className="absolute inset-0 bg-industrial-mesh opacity-10"></div>
                            <img alt="Video Tutorials" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(154,205,50,0.4)] group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-black text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                                </div>
                                <h3 className="text-3xl font-headline font-black text-white uppercase tracking-tighter italic mb-2">Video Forge</h3>
                                <p className="text-stone-500 text-[10px] font-black uppercase tracking-[0.3em]">Step-by-step visual guidance protocols</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 pt-10 border-t border-zinc-900">
                    <div className="lg:col-span-4 space-y-8">
                        <h2 className="text-5xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white italic">Common <br/> <span className="text-primary italic">Inquiries</span></h2>
                        <p className="text-stone-500 text-sm font-semibold uppercase tracking-widest leading-relaxed">Respuestas rápidas a las dudas operativas más frecuentes detectadas en la infraestructura.</p>
                        <div className="p-8 border-l-[6px] border-primary bg-zinc-900 rounded-r-[32px] shadow-2xl skew-x-[-4deg]">
                             <p className="text-xs italic text-stone-400 font-medium leading-relaxed uppercase">"La precisión en el registro de datos es el pilar central de nuestra eficiencia operativa."</p>
                             <span className="text-[9px] font-black uppercase tracking-[0.4em] block mt-4 text-primary leading-none">— Central Systems Authority</span>
                        </div>
                    </div>
                    <div className="lg:col-span-8 space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`p-8 transition-all duration-500 border border-outline-variant/5 hover:border-primary/20 ${
                                faq.open ? 'bg-zinc-950 rounded-[40px] shadow-3xl' : 'bg-zinc-900/50 rounded-[32px] hover:bg-zinc-900'
                            }`}>
                                <div className="flex justify-between items-center cursor-pointer group">
                                    <span className={`font-headline text-sm font-black uppercase tracking-tight transition-colors ${faq.open ? 'text-primary' : 'text-white group-hover:text-primary'}`}>{faq.q}</span>
                                    <span className={`material-symbols-outlined transition-all ${faq.open ? 'text-primary rotate-45' : 'text-stone-700'}`}>add</span>
                                </div>
                                {faq.open && (
                                    <div className="mt-8 pt-8 border-t border-zinc-900 animate-fade-in-down">
                                        <p className="text-stone-400 text-sm font-medium leading-loose uppercase tracking-wide">
                                            {faq.a}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Support Ticket Section */}
                <section className="bg-zinc-900 rounded-[64px] border border-outline-variant/10 shadow-3xl overflow-hidden relative group p-1 md:p-4">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[56px]">
                        {/* Info Block */}
                        <aside className="lg:col-span-5 bg-zinc-950 p-12 lg:p-20 flex flex-col justify-between">
                            <div className="space-y-10">
                                <h2 className="text-4xl md:text-6xl font-headline font-black text-white uppercase tracking-tighter leading-none italic">Report <br/> <span className="text-primary italic">Incident</span></h2>
                                <p className="text-stone-500 text-xs font-semibold uppercase tracking-widest leading-relaxed">
                                    Si el problema persiste tras consultar los manuales técnicos, abra un ticket de soporte. Respuesta garantizada en &lt; 120 minutos.
                                </p>
                                <div className="space-y-8 pt-8">
                                    {[
                                        { icon: 'mail', label: 'E-mail Protocol', val: 'sistemas@lacima.com.ve' },
                                        { icon: 'phone_in_talk', label: 'Emergency Hot-Line', val: 'INT-EXT: 405 / 406' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 items-start group/item">
                                            <span className="material-symbols-outlined text-primary text-3xl group-hover/item:scale-110 transition-transform">{item.icon}</span>
                                            <div className="space-y-1">
                                                <span className="block text-[9px] font-black uppercase tracking-[0.4em] text-stone-700 leading-none">{item.label}</span>
                                                <span className="text-xl font-headline font-black text-white tracking-widest uppercase italic">{item.val}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>

                        {/* Form Block */}
                        <div className="lg:col-span-7 bg-zinc-900/40 backdrop-blur-3xl p-12 lg:p-20">
                            <form className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 px-4">Operator Identity</label>
                                        <input className="w-full bg-zinc-950/50 border-none rounded-2xl py-5 px-8 text-xs font-black uppercase tracking-widest text-primary focus:ring-1 focus:ring-primary shadow-inner placeholder:text-stone-900" placeholder="e.g. CARLOS PÉREZ" type="text"/>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 px-4">Affected Vector</label>
                                        <select className="w-full bg-zinc-950/50 border-none rounded-2xl py-5 px-8 text-xs font-black uppercase tracking-widest text-primary focus:ring-1 focus:ring-primary shadow-inner appearance-none">
                                            <option>SYSTEM CORE</option>
                                            <option>INVENTORY NODE</option>
                                            <option>SALES GRID</option>
                                            <option>FISCAL BRIDGE</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 px-4 leading-none">Priority Vector</label>
                                    <div className="flex flex-wrap gap-10 px-4">
                                        {['Routine', 'Standard', 'Critical'].map(level => (
                                            <label key={level} className="flex items-center gap-4 cursor-pointer group/radio">
                                                <input className="w-5 h-5 bg-zinc-950 border-none text-primary focus:ring-1 focus:ring-primary focus:ring-offset-0 rounded-full" name="prio" type="radio"/>
                                                <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${level === 'Critical' ? 'text-primary' : 'text-stone-600'} group-hover/radio:text-white transition-colors`}>{level}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 px-4">Problem Description</label>
                                    <textarea className="w-full bg-zinc-950/50 border-none rounded-[32px] py-8 px-8 text-xs font-black uppercase tracking-widest text-primary focus:ring-1 focus:ring-primary shadow-inner placeholder:text-stone-900" placeholder="DESCRIBE THE LOGICAL FAILURE DETAILEDLY..." rows="5"></textarea>
                                </div>
                                <button className="w-full py-8 bg-primary text-black rounded-[32px] font-black text-xs uppercase tracking-[0.6em] shadow-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(154,205,50,0.2)]" type="submit">Deploy Support Ticket</button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Industrial Footer */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col gap-3">
                        <span className="text-white font-headline font-black tracking-[0.5em] text-xl uppercase leading-none italic">FORGE SUPPORT</span>
                        <span className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.8em]">Documentation & Infrastructure Maintenance Hub</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">
                        {['Security_Policy', 'Changelog_Registry', 'v4.2.1-STABLE'].map(link => (
                            <span key={link} className="hover:text-white cursor-pointer transition-colors px-2">{link}</span>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 bg-zinc-950 px-8 py-3 rounded-full border border-outline-variant/10 shadow-2xl group hover:border-primary/20 transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-primary text-xl animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Live Assist</span>
                    </div>
                </footer>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 30px 30px;
                }
                .animate-fade-in-down {
                    animation: fadeInDown 0.5s ease-out;
                }
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}} />
        </AuthenticatedLayout>
    );
}
