import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function GestionDeProductosEInventario() {
    const products = [
        { id: '#CP-8842-12', name: 'Cylinder Head Gasket', sub: 'Cummins ISX Series', category: 'Engine Seals', stock: 42, max: 50, cost: '$124.50', price: '$144.42', status: 'optimal' },
        { id: '#PK-1102-X', name: 'Main Bearing Set', sub: 'Perkins 1104D-44TA', category: 'Internal Parts', stock: 3, max: 20, cost: '$82.00', price: '$95.12', status: 'low' },
        { id: '#FP-9931-B', name: 'Fuel Injection Pump', sub: 'Bosch Heavy Duty', category: 'Fuel Systems', stock: 8, max: 12, cost: '$1,840.00', price: '$2,134.40', status: 'optimal' },
        { id: '#TU-4420-W', name: 'Turbocharger Assembly', sub: 'Holset HE351CW', category: 'Air Intake', stock: 2, max: 5, cost: '$645.00', price: '$748.20', status: 'optimal' },
        { id: '#VL-0012-S', name: 'Exhaust Valve Set', sub: 'CAT 3406E Industrial', category: 'Valve Train', stock: 1, max: 24, cost: '$18.40', price: '$21.34', status: 'critical' },
        { id: '#OP-5521-X', name: 'Oil Pump Assembly', sub: 'Detroit Diesel Series 60', category: 'Lubrication', stock: 12, max: 12, cost: '$312.00', price: '$361.92', status: 'optimal' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline">
                    <span className="material-symbols-outlined">inventory_2</span>
                    <span>Gestión de Productos e Inventario</span>
                </div>
            }
        >
            <Head title="Gestión de Productos e Inventario" />

            <div className="space-y-12 pb-12">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 px-4">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="text-primary font-headline font-black uppercase tracking-[0.4em] text-[10px] bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">Industrial Ops</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Global Stock Control v4.2</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Inventory <br/> <span className="text-stone-700">Management</span></h1>
                    </div>
                    <button className="flex items-center gap-4 px-10 py-6 bg-primary text-black rounded-3xl font-black uppercase tracking-[0.2em] text-[11px] shadow-[0_20px_50px_rgba(154,205,50,0.3)] hover:scale-[1.02] active:scale-95 transition-all group">
                        <span className="material-symbols-outlined font-black group-hover:rotate-90 transition-transform">add</span>
                        New Product Entry
                    </button>
                </header>

                {/* Filters Bento Grid */}
                <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { label: 'Category Filter', type: 'select', options: ['ALL MOTOR PARTS', 'CYLINDER HEADS', 'PISTON KITS', 'CRANKSHAFTS'] },
                        { label: 'Brand Line', type: 'select', options: ['ANY BRAND', 'CUMMINS HEAVY', 'CATERPILLAR GEN', 'PERKINS IND'] },
                        { label: 'Stock Health', type: 'stat', val: 'LOW STOCK (4)', color: 'text-amber-500', alert: true },
                        { label: 'Total SKU Count', type: 'stat', val: '1,402', color: 'text-primary' }
                    ].map((filter, i) => (
                        <div key={i} className="bg-zinc-900/50 p-10 rounded-[40px] border border-outline-variant/10 hover:border-primary/20 transition-all group shadow-3xl flex flex-col justify-between h-48 relative overflow-hidden">
                            <span className="text-[9px] font-black text-stone-600 uppercase tracking-[0.4em] mb-4 relative z-10">{filter.label}</span>
                            {filter.type === 'select' ? (
                                <select className="bg-transparent border-none text-white font-headline text-2xl font-black p-0 focus:ring-0 cursor-pointer uppercase tracking-tighter relative z-10 appearance-none">
                                    {filter.options.map(opt => <option key={opt} className="bg-zinc-900">{opt}</option>)}
                                </select>
                            ) : (
                                <div className="flex items-center gap-4 relative z-10">
                                    {filter.alert && <div className="w-4 h-4 rounded-full bg-amber-500 animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>}
                                    <span className={`font-headline text-3xl font-black tracking-tighter ${filter.color} uppercase`}>{filter.val}</span>
                                </div>
                            )}
                            <div className="absolute -right-4 -bottom-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                                <span className="material-symbols-outlined text-[100px] text-white">
                                    {filter.type === 'select' ? 'filter_list' : 'analytics'}
                                </span>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Main Product Table */}
                <section className="bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl overflow-hidden">
                    <div className="overflow-x-auto custom-scrollbar">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-zinc-950/80">
                                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.5em] text-stone-700">SKU Code</th>
                                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.5em] text-stone-700">Component Name</th>
                                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.5em] text-stone-700 text-center">Category</th>
                                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.5em] text-stone-700">Stock Status</th>
                                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.5em] text-stone-700 text-right">Cost (Avg)</th>
                                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.5em] text-stone-700 text-right text-primary">Price + IVA</th>
                                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.5em] text-stone-700 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-outline-variant/5">
                                {products.map((item, i) => (
                                    <tr key={i} className={`group transition-all hover:bg-zinc-950/40 cursor-pointer ${item.status === 'critical' ? 'bg-error/5' : item.status === 'low' ? 'bg-amber-500/5' : ''}`}>
                                        <td className="px-10 py-10">
                                            <span className="text-sm font-headline font-bold text-stone-500 tracking-widest group-hover:text-primary transition-colors">{item.id}</span>
                                        </td>
                                        <td className="px-10 py-10">
                                            <p className="text-base font-headline font-black text-white uppercase tracking-tight mb-1">{item.name}</p>
                                            <p className="text-[10px] text-stone-600 font-bold uppercase tracking-widest uppercase">{item.sub}</p>
                                        </td>
                                        <td className="px-10 py-10 text-center">
                                            <span className="bg-zinc-950 px-4 py-2 rounded-xl text-[10px] font-black text-stone-500 border border-outline-variant/5 uppercase tracking-widest shadow-inner">
                                                {item.category}
                                            </span>
                                        </td>
                                        <td className="px-10 py-10">
                                            <div className="flex items-center gap-6">
                                                <div className="flex-1 bg-zinc-950 h-2 max-w-[120px] rounded-full overflow-hidden border border-outline-variant/5 shadow-inner">
                                                    <div 
                                                        style={{ width: `${(item.stock / item.max) * 100}%` }} 
                                                        className={`h-full transition-all duration-1000 shadow-[0_0_10px] ${
                                                            item.status === 'critical' ? 'bg-error shadow-error' : 
                                                            item.status === 'low' ? 'bg-amber-500 shadow-amber-500' : 'bg-primary shadow-primary'
                                                        }`}
                                                    ></div>
                                                </div>
                                                <span className={`text-sm font-headline font-black tracking-tighter ${
                                                    item.status === 'critical' ? 'text-error animate-pulse' : 
                                                    item.status === 'low' ? 'text-amber-500' : 'text-white'
                                                }`}>
                                                    {item.stock} <span className="text-[10px] text-stone-700 font-bold tracking-widest ml-1">/ {item.max}</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-10 text-right">
                                            <span className="text-lg font-headline font-black text-stone-500 tracking-tighter">{item.cost}</span>
                                        </td>
                                        <td className="px-10 py-10 text-right">
                                            <span className="text-2xl font-headline font-black text-white tracking-tighter">{item.price}</span>
                                        </td>
                                        <td className="px-10 py-10">
                                            <div className="flex justify-center gap-4">
                                                <button className="w-12 h-12 flex items-center justify-center bg-zinc-950 rounded-2xl border border-outline-variant/10 text-stone-500 hover:text-primary hover:border-primary/50 transition-all shadow-xl group/btn active:scale-90">
                                                    <span className="material-symbols-outlined text-lg group-hover/btn:rotate-12 transition-transform">edit</span>
                                                </button>
                                                <button className="w-12 h-12 flex items-center justify-center bg-zinc-950 rounded-2xl border border-outline-variant/10 text-stone-500 hover:text-error hover:border-error/50 transition-all shadow-xl group/btn active:scale-90">
                                                    <span className="material-symbols-outlined text-lg group-hover/btn:scale-110 transition-transform">archive</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Pagination */}
                    <div className="p-12 bg-zinc-950/20 flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="text-[10px] font-black text-stone-700 uppercase tracking-[0.5em]">Showing 6 of 1,402 line items in current view</div>
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-4">
                                {[1, 2, 3].map(p => (
                                    <span key={p} className={`w-10 h-10 flex items-center justify-center rounded-xl text-[11px] font-black transition-all cursor-pointer border ${
                                        p === 2 ? 'bg-primary text-black border-primary shadow-lg scale-110' : 'bg-zinc-900 text-stone-700 border-outline-variant/5 hover:text-white'
                                    }`}>
                                        {p}
                                    </span>
                                ))}
                                <span className="text-stone-800">...</span>
                                <span className="w-10 h-10 bg-zinc-900 text-stone-700 flex items-center justify-center rounded-xl text-[11px] font-black hover:text-white transition-colors cursor-pointer border border-outline-variant/5">
                                    94
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* System Stats / Summary Cards */}
                <section className="grid grid-cols-12 gap-10">
                    <div className="col-span-12 lg:col-span-8 bg-zinc-900 p-12 rounded-[64px] border-l-[12px] border-l-primary border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                        <div className="absolute right-0 top-0 opacity-[0.02] rotate-12 scale-150 pointer-events-none group-hover:scale-[1.6] transition-transform duration-1000">
                            <span className="material-symbols-outlined text-[300px] text-white">precision_manufacturing</span>
                        </div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="font-headline text-4xl font-black text-white uppercase tracking-tighter mb-4">Active Inventory Value</h3>
                                <p className="text-[10px] text-stone-600 font-bold uppercase tracking-[0.4em] mb-10">Live Warehouse Appraisal | All Categories</p>
                                <div className="flex items-baseline gap-4 mb-4">
                                    <span className="text-7xl font-headline font-black text-primary tracking-tighter leading-none">$1,452,310.00</span>
                                    <span className="text-xs font-black text-stone-500 uppercase tracking-widest">USD</span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-end gap-10 md:items-end">
                                <div className="text-right">
                                    <p className="text-[10px] text-stone-700 font-black uppercase tracking-[0.3em] mb-3">IVA Liability (16%)</p>
                                    <p className="text-3xl font-headline font-black text-white tracking-widest">$232,369.60</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] text-stone-700 font-black uppercase tracking-[0.3em] mb-3">Pre-Tax Cost Basis</p>
                                    <p className="text-3xl font-headline font-black text-stone-500 tracking-widest">$1,219,940.40</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-4 bg-zinc-950 p-12 rounded-[64px] border-l-[12px] border-l-amber-500 border border-outline-variant/10 shadow-3xl relative overflow-hidden flex flex-col group">
                        <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                        <h3 className="font-headline text-2xl font-black text-white uppercase tracking-tighter mb-10 relative z-10 flex items-center gap-4">
                            <span className="material-symbols-outlined text-amber-500">pipeline</span>
                            Restock Pipeline
                        </h3>
                        <div className="space-y-8 flex-1 relative z-10">
                            {[
                                { label: 'Critical Low', val: '04 SKUs', color: 'bg-amber-500', alert: true },
                                { label: 'Pending Orders', val: '12 Shipments', color: 'bg-zinc-800' },
                                { label: 'Under Review', val: '08 Categories', color: 'bg-zinc-800' }
                            ].map((row, i) => (
                                <div key={i} className="flex items-center justify-between p-6 bg-zinc-900 rounded-3xl border border-outline-variant/5 shadow-xl group-hover:translate-x-2 transition-transform">
                                    <span className="text-[10px] text-stone-500 font-black uppercase tracking-[0.3em]">{row.label}</span>
                                    <span className={`${row.color} ${row.color === 'bg-amber-500' ? 'text-black' : 'text-white'} text-[10px] font-black px-4 py-2 rounded-xl transition-colors`}>
                                        {row.val}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-12 py-6 bg-transparent border-2 border-amber-500/20 text-amber-500 text-[11px] font-black uppercase tracking-[0.4em] rounded-[32px] hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all active:scale-95 relative z-10">
                            Generate Restock Report
                        </button>
                    </div>
                </section>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                    height: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0.2);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(154, 205, 50, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(154, 205, 50, 0.3);
                }
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 20px 20px;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
