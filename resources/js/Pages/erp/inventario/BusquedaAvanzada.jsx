import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function BusquedaAvanzada() {
    const results = [
        { pn: '2872405-X', name: 'Fuel Injector Assembly', price: '$845.00', desc: 'High-performance fuel delivery system optimized for Volvo D13 engine architectures.', brand: 'Volvo Penta', cond: 'OEM New' },
        { pn: 'D16-FUEL-99', name: 'Common Rail Pump', price: '$1,290.00', desc: 'Precision machined pressure pump for heavy-duty marine and industrial applications.', brand: 'Volvo Penta', cond: 'Refurbished' }
    ];

    const manufacturers = ['Cummins', 'Volvo Penta', 'Detroit Diesel', 'Caterpillar'];
    const categories = ['Cylinder Heads', 'Fuel Systems', 'Turbochargers'];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg font-black font-black italic">search</span>
                    <span>Inventario <span className="text-white/60 mx-2">|</span> Búsqueda Avanzada de Componentes</span>
                </div>
            }
        >
            <Head title="Búsqueda Avanzada - Industrial Forge" />

            <div className="space-y-12 pb-20 px-4">
                {/* Search Strategy Header */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10 italic">Search Protocol Phase 01</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Component Discovery Node</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Technical <br/> <span className="text-stone-700">Exploration</span></h1>
                    </div>
                </header>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                    {/* Filter Sidebar */}
                    <aside className="xl:col-span-3 space-y-10">
                        <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-10 space-y-10 border-l-[12px] border-l-primary/10 sticky top-24">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary text-xl font-black italic">tune</span>
                                <h3 className="text-xl font-headline font-black uppercase tracking-widest italic text-white leading-none">Filter Matrix</h3>
                            </div>

                            <div className="space-y-8">
                                {/* Manufacturer */}
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 block italic">Manufacturer Node</label>
                                    <div className="space-y-3">
                                        {manufacturers.map((m) => (
                                            <label key={m} className="flex items-center gap-4 cursor-pointer group">
                                                <input type="checkbox" className="w-5 h-5 rounded-lg border-zinc-800 bg-zinc-950 text-primary focus:ring-primary transition-all" defaultChecked={m === 'Volvo Penta'} />
                                                <span className="text-[11px] font-black text-stone-500 uppercase tracking-widest group-hover:text-white transition-all italic">{m}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Series */}
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 block italic">Engine Platform</label>
                                    <select className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white text-[11px] font-black uppercase tracking-widest focus:ring-2 focus:ring-primary transition-all italic appearance-none">
                                        <option>All Platforms</option>
                                        <option>ISX15 / X15</option>
                                        <option>D13 / D16</option>
                                    </select>
                                </div>

                                {/* Category */}
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 block italic">Component Category</label>
                                    <div className="space-y-3">
                                        {categories.map((c) => (
                                            <label key={c} className="flex items-center gap-4 cursor-pointer group">
                                                <input type="radio" name="cat" className="w-5 h-5 border-zinc-800 bg-zinc-950 text-primary focus:ring-primary transition-all" defaultChecked={c === 'Fuel Systems'} />
                                                <span className="text-[11px] font-black text-stone-500 uppercase tracking-widest group-hover:text-white transition-all italic">{c}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 block italic">Pricing Range (USD)</label>
                                    <div className="flex items-center gap-4">
                                        <input type="number" placeholder="Min" className="flex-1 bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white font-mono text-xs focus:ring-2 focus:ring-primary transition-all placeholder:text-stone-800" />
                                        <span className="text-stone-800 font-black">/</span>
                                        <input type="number" placeholder="Max" className="flex-1 bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-white font-mono text-xs focus:ring-2 focus:ring-primary transition-all placeholder:text-stone-800" />
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-primary text-black py-5 rounded-[24px] font-black uppercase tracking-[0.4em] text-[10px] hover:bg-white transition-all italic shadow-2xl shadow-primary/5 active:scale-95">RECALIBRATE SEARCH</button>
                        </section>
                    </aside>

                    {/* Main Results Column */}
                    <div className="xl:col-span-9 space-y-12">
                        {/* Master Search Bar */}
                        <section className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-lime-600/20 blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative flex flex-col md:flex-row items-center bg-zinc-900 border border-outline-variant/10 rounded-[3.5rem] shadow-3xl overflow-hidden">
                                <span className="material-symbols-outlined ml-10 text-stone-700 text-3xl font-black italic">search</span>
                                <input type="text" defaultValue="High pressure fuel injector assembly" className="w-full bg-transparent border-none py-10 px-8 text-2xl md:text-3xl font-headline font-black text-white italic placeholder:text-stone-800 focus:ring-0 uppercase tracking-tighter" />
                                <button className="bg-primary text-black py-10 px-16 font-headline font-black uppercase tracking-tighter text-xl hover:bg-white transition-all italic h-full">EXECUTE SEARCH</button>
                            </div>
                            
                            {/* Technical Result Metadata */}
                            <div className="flex gap-4 items-center mt-6 px-10">
                                <span className="text-[10px] font-black text-stone-700 uppercase tracking-[0.4em] italic leading-none">Global Trace:</span>
                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-zinc-950/50 border border-zinc-800 text-[9px] font-black text-stone-500 px-4 py-1.5 rounded-full uppercase tracking-widest italic flex items-center gap-2 group">Volvo Penta <button className="material-symbols-outlined text-[12px] hover:text-error">close</button></span>
                                    <span className="bg-zinc-950/50 border border-zinc-800 text-[9px] font-black text-stone-500 px-4 py-1.5 rounded-full uppercase tracking-widest italic flex items-center gap-2 group">Fuel Systems <button className="material-symbols-outlined text-[12px] hover:text-error">close</button></span>
                                </div>
                            </div>
                        </section>

                        {/* Result Cards Grid */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {results.map((r, i) => (
                                <div key={i} className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden flex flex-col group hover:shadow-primary/5 transition-all duration-500">
                                    <div className="relative aspect-video overflow-hidden group/img">
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 z-10"></div>
                                        <img src={`https://lh3.googleusercontent.com/aida-public/AB6AXuAdih3XW_e6_FAaQCp97gTQ45lzDlWb-bqNy-qbZPTpjtZq6aw5z4etnzjXUGKuQFlngtq3YdAaSTr87jAH8HHYJuRCDpo1EdUd6pt6ibpk2vkdqe_GECKhP9XhwhflYVuzRE_Fvt1FvFn03r5TzKgjhfH9f5i6v5Nr9FqWaWVluKsjoAFyzG1IUTKkrrqIETfK-A3RYRPnGOUL5ww9_DE7OkFQjFgW7Z9PGLbGwE35qH4qoQ27Wop-IhkehsRBlfC9sKM-fpgeFcQ`} className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110 grayscale group-hover/img:grayscale-0" />
                                        <div className="absolute top-6 left-6 z-20 bg-zinc-950 border border-zinc-800 px-4 py-1.5 rounded-xl text-[9px] font-black text-primary uppercase italic tracking-[0.2em]">PN: {r.pn}</div>
                                        <div className="absolute bottom-6 right-8 z-20 font-headline font-black text-3xl text-white italic tracking-tighter drop-shadow-2xl">{r.price}</div>
                                    </div>

                                    <div className="p-10 space-y-8 flex-1 flex flex-col">
                                        <div className="space-y-3">
                                            <h4 className="text-2xl font-headline font-black text-stone-200 uppercase italic tracking-tighter group-hover:text-primary transition-colors leading-none">{r.name}</h4>
                                            <p className="text-[12px] font-black text-stone-600 uppercase italic leading-relaxed tracking-widest line-clamp-2">{r.desc}</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 pb-4">
                                            <div className="bg-zinc-950/50 p-4 rounded-3xl border border-zinc-800/30">
                                                <span className="text-[8px] font-black text-stone-800 uppercase tracking-[0.2em] italic block mb-1">Entity / OEM</span>
                                                <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest italic">{r.brand}</span>
                                            </div>
                                            <div className="bg-zinc-950/50 p-4 rounded-3xl border border-zinc-800/30">
                                                <span className="text-[8px] font-black text-stone-800 uppercase tracking-[0.2em] italic block mb-1">Certification Status</span>
                                                <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest italic">{r.cond}</span>
                                            </div>
                                        </div>

                                        <button className="w-full py-5 border-2 border-zinc-800 rounded-[24px] text-[10px] font-black text-stone-600 uppercase tracking-[0.4em] italic hover:border-primary hover:text-white hover:bg-primary/5 transition-all mt-auto flex items-center justify-center gap-4 group/btn">
                                             <span className="material-symbols-outlined text-lg group-hover/btn:rotate-180 transition-transform italic">engineering</span>
                                             Access Technical Node
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </section>

                        {/* Pagination Meta */}
                        <div className="flex flex-col items-center gap-8 py-10">
                            <button className="bg-zinc-900 border border-outline-variant/10 text-white px-16 py-6 rounded-full font-headline font-black text-xs uppercase tracking-[0.6em] italic hover:border-primary transition-all shadow-3xl hover:scale-105 active:scale-95 group flex items-center gap-6">
                                Load 142 More Nodes
                                <span className="material-symbols-outlined font-black group-hover:translate-y-2 transition-all">expand_more</span>
                            </button>
                            <span className="text-[9px] font-black text-stone-900 uppercase tracking-[1em] italic">Telemetry Stream: 02 / 144 Entity Nodes Resolved</span>
                        </div>
                    </div>
                </div>

                {/* Documentation Banner */}
                <section className="bg-zinc-950 rounded-[56px] border border-outline-variant/10 p-16 md:p-24 relative overflow-hidden group shadow-inner">
                    <div className="absolute inset-0 opacity-5 blueprint-bg grayscale invert group-hover:scale-110 transition-transform duration-[10s]"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                             <div className="space-y-6">
                                <h2 className="text-4xl md:text-6xl font-headline font-black text-white italic tracking-tighter uppercase leading-none">Precision <br/> <span className="text-primary italic">Documentation</span></h2>
                                <p className="text-[13px] font-black text-stone-700 uppercase italic tracking-[0.1em] leading-loose max-w-lg">Access granular engineering blueprints and CAD renderings for immediate part verification across transnational supply chain channels.</p>
                             </div>
                             
                             <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                     <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20"><span className="material-symbols-outlined text-3xl font-black italic">architecture</span></div>
                                     <div className="space-y-2 border-l border-zinc-800/50 pl-6">
                                          <h4 className="text-[11px] font-black text-white uppercase italic tracking-widest">Interactive Schematics</h4>
                                          <p className="text-[10px] font-black text-stone-800 uppercase italic tracking-[0.1em]">Exploded views and component hierarchy analysis nodes.</p>
                                     </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                     <div className="w-16 h-16 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-stone-600"><span className="material-symbols-outlined text-3xl font-black italic">verified</span></div>
                                     <div className="space-y-2 border-l border-zinc-800/50 pl-6">
                                          <h4 className="text-[11px] font-black text-white uppercase italic tracking-widest">OEM Validation Hub</h4>
                                          <p className="text-[10px] font-black text-stone-800 uppercase italic tracking-[0.1em]">Cross-reference integrity check across all industrial platforms.</p>
                                     </div>
                                </div>
                             </div>
                        </div>
                        
                        <div className="relative flex justify-center items-center">
                             <div className="absolute -inset-10 bg-primary/20 blur-[120px] rounded-full animate-pulse"></div>
                             <div className="bg-zinc-900 border border-outline-variant/10 p-4 rounded-[40px] shadow-3xl skew-y-3 hover:skew-y-0 transition-all duration-1000 rotate-2 group-hover:rotate-0">
                                <img src={`https://lh3.googleusercontent.com/aida-public/AB6AXuDp_go7_XzNq6g-tmy9bpYLTd3_FBXd6B2kXx45Se-1-1Fgn2GasArxzKSx0cpR9a4A0wUur7EOKn0Lb-AV4Qy_mn96N86-SZYDhgs1RxIxsyp4XGlTSM-H2odaoKMCrl3yY6vTltIeNIK2XP0tOmRWCLqAjwkMLgkbAG1u1pHjCbZRYY_DIK1ARS2ZI6HlEBrk07jJqZOVZ3f4EvUOt5K1L5ttCmt9LF0Wz1DgbKDKBSV0KSa617nY1PRQVsew99Hv2CfGWqTzBow`} className="rounded-[32px] w-full max-w-lg grayscale contrast-125 opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                             </div>
                        </div>
                    </div>
                </section>

                {/* Industrial Infrastructure Footer */}
                <footer className="mt-20 pt-20 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-4 gap-16 px-6">
                    <div className="space-y-6">
                        <div className="text-white font-headline font-black tracking-[-0.1em] text-3xl opacity-10 italic mb-4">LA CIMA_NET_LOGISTICS</div>
                        <p className="text-[10px] font-black text-stone-800 leading-loose uppercase tracking-widest italic max-w-sm">Leading distributor of high-performance heavy-duty components across Venezualan maritime and industrial sectors.</p>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.6em] italic">Contact Channels</h4>
                        <div className="space-y-4">
                             <div className="flex items-center gap-3 text-stone-800 hover:text-primary transition-colors cursor-pointer group">
                                <span className="material-symbols-outlined text-lg">mail</span>
                                <span className="text-[10px] font-black uppercase italic tracking-widest">info@lacima_node.ve</span>
                             </div>
                             <div className="flex items-center gap-3 text-stone-800 hover:text-primary transition-colors cursor-pointer group">
                                <span className="material-symbols-outlined text-lg">call</span>
                                <span className="text-[10px] font-black uppercase italic tracking-widest">+58 241-5550101</span>
                             </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 text-right flex flex-col justify-end gap-2 grayscale">
                        <div className="text-primary font-headline text-[13px] font-black italic tracking-[0.2em] uppercase leading-none italic mb-2">MAYOR DE REPUESTO LA CIMA, C.A.</div>
                        <div className="text-stone-800 font-mono text-[10px] font-black italic tracking-widest leading-none">RIF: J-40308741-5 | VALENCIA_VE_HUB</div>
                        <span className="text-[9px] font-black text-stone-900 uppercase tracking-[0.1em] mt-4 italic">© 2024 Titan Systems Group LLC. ALL ASSET DISCOVERY PROTOCOLS ACTIVE.</span>
                    </div>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
