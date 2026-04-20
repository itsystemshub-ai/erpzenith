import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function RegistroDeFacturaDeCompra() {
    const items = [
        { sku: 'BRG-2024-X1', desc: 'Rodamiento de Bolas Alta Velocidad 6205-2Z', qty: 12, price: '45.50', subtotal: '546.00' },
        { sku: 'VLV-IND-99', desc: 'Válvula de Compuerta Acero Inoxidable 2"', qty: 2, price: '1,280.00', subtotal: '2,560.00' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg font-black font-black italic">receipt_long</span>
                    <span>Compras <span className="text-white/60 mx-2">|</span> Registro de Factura</span>
                </div>
            }
        >
            <Head title="Registro de Factura - Industrial Forge" />

            <div className="space-y-12 pb-20 px-4">
                {/* Deployment Header */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10 italic">Fiscal Ingestion Protocol</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Entry Node Configuration</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Capture <br/> <span className="text-stone-700">Payload</span></h1>
                    </div>
                    
                    <div className="text-right space-y-2 translate-y-[-10px]">
                         <div className="bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-2xl italic shadow-2xl">
                            <span className="text-[9px] font-black text-stone-600 block uppercase tracking-[0.4em]">Compliance Status</span>
                            <span className="text-primary font-black text-[11px] uppercase tracking-widest">ART. 177 ISLR PROTOCOL_ACTIVE</span>
                         </div>
                    </div>
                </header>

                {/* Main Transactional Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                    <div className="xl:col-span-8 space-y-10">
                        {/* Provider Metadata */}
                        <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl p-12 space-y-10 relative overflow-hidden group">
                           <div className="flex items-center gap-4 relative z-10">
                                <div className="w-1.5 h-8 bg-primary"></div>
                                <h3 className="text-xl font-headline font-black uppercase tracking-widest italic text-white leading-none">Entity Metadata</h3>
                            </div>
                            
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 block italic">Source Provider / RIF</label>
                                    <div className="relative group/select">
                                        <select className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-white font-black text-xs uppercase tracking-widest focus:ring-2 focus:ring-primary transition-all appearance-none italic">
                                            <option>SIDERÚRGICA DEL SUR C.A. - J-12345678-9</option>
                                            <option>REPUESTOS INDUSTRIALES TITÁN - J-87654321-0</option>
                                        </select>
                                        <span className="absolute right-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-stone-700 pointer-events-none group-hover/select:text-primary transition-colors">expand_more</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 block italic">External Reference / Invoice #</label>
                                    <input type="text" placeholder="FT-000000" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-white font-mono text-sm focus:ring-2 focus:ring-primary transition-all placeholder:text-stone-800 uppercase" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 block italic">Issuance Temporal Marker</label>
                                    <input type="date" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-zinc-400 text-xs focus:ring-2 focus:ring-primary transition-all font-black" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600 block italic">Warehouse Ingestion Date</label>
                                    <input type="date" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-zinc-400 text-xs focus:ring-2 focus:ring-primary transition-all font-black" />
                                </div>
                           </div>
                        </section>

                        {/* Manifest Line Items */}
                        <section className="bg-zinc-900 rounded-[56px] border border-outline-variant/10 shadow-3xl overflow-hidden flex flex-col min-h-[400px]">
                            <div className="p-10 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/20">
                                <h3 className="text-xl font-headline font-black uppercase tracking-widest italic text-white leading-none">Manifest Details <span className="text-stone-700 italic">| Heavy Assets</span></h3>
                                <button className="flex items-center gap-3 text-primary font-black text-[10px] uppercase tracking-[0.4em] italic hover:text-white transition-all group">
                                    <span className="material-symbols-outlined text-lg group-hover:rotate-90 transition-transform">add_circle</span>
                                    Push Line Item
                                </button>
                            </div>
                            
                            <div className="overflow-x-auto flex-1">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-zinc-950/40 text-[9px] font-black uppercase tracking-[0.4em] text-stone-700">
                                            <th className="px-10 py-6">Asset SKU</th>
                                            <th className="px-10 py-6">Technical Descriptor</th>
                                            <th className="px-10 py-6 text-center">Unit Count</th>
                                            <th className="px-10 py-6 text-right">Unit Value</th>
                                            <th className="px-10 py-6 text-right">Aggregate</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-800/30">
                                        {items.map((item, i) => (
                                            <tr key={i} className="hover:bg-zinc-950/50 transition-colors group">
                                                <td className="px-10 py-6">
                                                    <input type="text" defaultValue={item.sku} className="bg-transparent border-none p-0 w-full font-mono text-[11px] text-white focus:ring-0 uppercase tracking-widest font-black" />
                                                </td>
                                                <td className="px-10 py-6">
                                                    <input type="text" defaultValue={item.desc} className="bg-transparent border-none p-0 w-full text-[12px] text-stone-400 group-hover:text-white transition-colors focus:ring-0 italic" />
                                                </td>
                                                <td className="px-10 py-6">
                                                    <input type="number" defaultValue={item.qty} className="bg-transparent border-none p-0 w-20 text-center font-headline font-black text-lg text-primary focus:ring-0 italic" />
                                                </td>
                                                <td className="px-10 py-6 text-right font-mono text-[12px] text-stone-600 font-bold group-hover:text-stone-400 transition-colors">
                                                    {item.price}
                                                </td>
                                                <td className="px-10 py-6 text-right font-headline font-black text-xl text-white italic tracking-tighter">
                                                    {item.subtotal}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            
                            <div className="p-10 bg-zinc-950/40 flex justify-end gap-16 border-t border-zinc-800/50">
                                <div className="text-right">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 italic block">Taxable Base Aggregate</span>
                                    <span className="text-4xl font-headline font-black text-white italic tracking-tighter">$3,106.00</span>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Fiscal Liquidation Sidebar */}
                    <aside className="xl:col-span-4 space-y-8">
                        <section className="bg-zinc-900 border border-outline-variant/10 shadow-3xl rounded-[56px] p-10 relative overflow-hidden group border-r-[12px] border-r-primary/20">
                             <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
                             
                             <h3 className="text-[11px] font-black uppercase tracking-[0.6em] text-primary italic mb-10 border-b border-zinc-800 pb-6 block">Fiscal Settlement Manifest</h3>
                             
                             <div className="space-y-8 relative z-10">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 italic">Operational Subtotal</span>
                                    <span className="font-headline font-black text-xl text-white italic tracking-tighter">3,106.00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-3 items-center">
                                         <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 italic">VAT (16.00%)</span>
                                         <span className="bg-zinc-800 px-2 py-0.5 rounded-sm text-[8px] font-black text-stone-500 uppercase italic">CRED</span>
                                    </div>
                                    <span className="font-headline font-black text-xl text-white italic tracking-tighter">496.96</span>
                                </div>
                                <div className="py-8 border-y border-zinc-800/50 flex justify-between items-center">
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 italic block">VAT Retention (75%)</span>
                                        <p className="text-[8px] font-black text-zinc-700 uppercase tracking-widest italic mt-1 leading-none">Entity Authority Subject</p>
                                    </div>
                                    <span className="font-headline font-black text-xl text-primary italic tracking-tighter">- 372.72</span>
                                </div>
                                
                                <div className="pt-6">
                                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-stone-700 italic block mb-2">Aggregate Net Payable</span>
                                    <div className="flex items-baseline justify-between">
                                         <span className="text-stone-600 font-headline font-black text-2xl italic uppercase opacity-20">USD</span>
                                         <span className="text-6xl font-headline font-black text-white italic tracking-tighter shadow-primary/20">3,230<span className="text-stone-700">.24</span></span>
                                    </div>
                                </div>
                             </div>

                             <div className="mt-12 p-6 bg-zinc-950 rounded-3xl border-l-[6px] border-primary flex gap-4 shadow-xl">
                                <span className="material-symbols-outlined text-primary text-xl font-black italic">gavel</span>
                                <p className="text-[9px] font-black text-stone-600 uppercase italic leading-loose tracking-widest">Generating automated retention credentials and purchase ledger seat for administrative compliance providency.</p>
                             </div>
                        </section>

                        {/* Internal State Impacts */}
                        <section className="bg-zinc-900 border border-outline-variant/10 shadow-3xl rounded-[56px] p-8 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center justify-center text-stone-700 italic"><span className="material-symbols-outlined">inventory_2</span></div>
                                <div>
                                    <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] italic block">Material Ingestion Impact</span>
                                    <span className="text-[11px] font-black text-white uppercase italic tracking-widest">+14 Units Allocation to Primary Hub</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-zinc-950 rounded-2xl border border-zinc-800 flex items-center justify-center text-stone-700 italic"><span className="material-symbols-outlined">account_balance</span></div>
                                <div>
                                    <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.4em] italic block">Ledger Seat Vector</span>
                                    <span className="text-mono text-[10px] font-black text-primary uppercase tracking-widest italic leading-none">DR: 1.01.03.01 / CR: 2.01.01.01</span>
                                </div>
                            </div>
                        </section>

                        {/* Commit Action */}
                        <div className="space-y-4">
                            <button className="w-full bg-primary text-black py-8 rounded-[3.5rem] flex items-center justify-center gap-6 shadow-2xl shadow-primary/10 hover:bg-white transition-all group overflow-hidden relative active:scale-95 duration-100">
                                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></span>
                                <span className="font-headline font-black uppercase tracking-[0.3em] text-xl italic relative z-10">Ingest Stock Protocol</span>
                                <span className="material-symbols-outlined font-black italic group-hover:translate-x-4 transition-transform relative z-10">arrow_forward</span>
                            </button>
                            <div className="flex justify-center flex-col items-center gap-1 opacity-40">
                                <span className="text-[9px] font-black text-stone-700 uppercase tracking-[0.6em] italic">Critical Integrity Warning</span>
                                <span className="text-[8px] font-black text-error uppercase tracking-[0.3em] italic">Non-reversible process after warehouse node validation</span>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Secure Deployment Footer */}
                <footer className="mt-20 pt-10 border-t border-zinc-900 flex flex-col xl:flex-row justify-between items-center gap-12 text-stone-800 px-6">
                    <div className="flex gap-12 items-center italic">
                        <div className="flex items-center gap-3">
                            <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-primary/20"></span>
                            <span className="text-[9px] font-black uppercase tracking-[0.4em]">Integrated Hub: LOCAL_DB_01</span>
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.4em]">Protocol Vector: TXN_CAPT_HUB_V.1.2</span>
                    </div>
                    <div className="flex items-center gap-4 bg-zinc-950 px-8 py-3 rounded-full border border-zinc-900 italic shadow-2xl">
                        <span className="material-symbols-outlined text-stone-800 text-lg">verified_user</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.5em] text-stone-700">AES-256 Synchronized Encryption Entry Node</span>
                    </div>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
