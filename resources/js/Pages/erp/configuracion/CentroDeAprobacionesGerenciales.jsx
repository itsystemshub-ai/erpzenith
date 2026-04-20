import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CentroDeAprobacionesGerenciales() {
    const approvals = [
        {
            type: 'PURCHASE',
            priority: 'HIGH',
            ref: '#OC-29401',
            title: 'Importación Motores Caterpillar 3406',
            desc: 'Reposición de stock crítico para contratos mineros zona sur. Proveedor: HeavyEquipment Ltd (Miami).',
            amount: '$54,200.00',
            currency: 'USD',
            requestedBy: 'Ing. Marcos Rivas',
            location: 'Almacén Central (PTO)',
            deadline: '24h Restantes',
            critical: true
        }
    ];

    const stats = [
        { label: 'Pendientes', val: '12', color: 'text-primary' },
        { label: 'Críticos', val: '04', color: 'text-error' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">admin_panel_settings</span>
                    <span>Administración Central <span className="text-white/60 mx-2">|</span> Aprobaciones Gerenciales</span>
                </div>
            }
        >
            <Head title="Centro de Aprobaciones Gerenciales" />

            <div className="space-y-12 pb-12">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 px-4">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="text-primary font-headline font-black uppercase tracking-[0.4em] text-[10px] bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">Executive Oversight</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Operational Gatekeeper v2.1</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Central <br/> <span className="text-stone-700">Approvals</span></h1>
                    </div>
                    <div className="flex gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-zinc-900 px-10 py-6 rounded-[32px] border border-outline-variant/5 shadow-3xl group flex flex-col items-center">
                                <span className={`${stat.color} font-headline font-black text-5xl tracking-tighter mb-2 group-hover:scale-110 transition-transform`}>{stat.val}</span>
                                <span className="text-[10px] uppercase font-black tracking-[0.2em] text-stone-600">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </header>

                {/* Filter Section */}
                <section className="bg-zinc-900/50 p-3 rounded-[32px] border border-outline-variant/10 backdrop-blur-xl flex flex-wrap items-center gap-6 shadow-3xl">
                    <div className="flex-1 relative min-w-[320px]">
                        <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-stone-600">search</span>
                        <input className="w-full bg-zinc-950/50 border-none rounded-2xl py-4 pl-16 pr-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary focus:ring-1 focus:ring-primary shadow-inner" placeholder="Search by reference or requestor..." type="text"/>
                    </div>
                    <div className="flex gap-3 px-4">
                        {['Todas', 'Compras', 'Inventario', 'Personal'].map((cat, i) => (
                            <button key={cat} className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                i === 0 ? 'bg-primary text-black shadow-[0_0_20px_rgba(154,205,50,0.3)]' : 'text-stone-500 hover:text-white'
                            }`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                <div className="grid grid-cols-12 gap-10">
                    {/* Critical Approval Item */}
                    <article className="col-span-12 xl:col-span-8 bg-zinc-900 rounded-[48px] p-12 border border-outline-variant/10 shadow-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-2 h-full bg-error/20 group-hover:bg-error transition-colors"></div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <span className="bg-error text-white text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] animate-pulse uppercase">Alta Prioridad</span>
                                        <span className="text-stone-600 text-[10px] font-black uppercase tracking-[0.4em]">ORDEN DE COMPRA #OC-29401</span>
                                    </div>
                                    <h3 className="text-4xl font-headline font-black text-white uppercase tracking-tighter leading-none">Importación Motores <br/> Caterpillar 3406</h3>
                                    <p className="text-stone-500 text-sm font-medium leading-relaxed max-w-xl">Reposición de stock crítico para contratos mineros zona sur. Proveedor: HeavyEquipment Ltd (Miami).</p>
                                </div>
                                <div className="text-right bg-zinc-950 p-8 rounded-[32px] border border-outline-variant/5 shadow-inner">
                                    <span className="text-5xl font-headline font-black text-white tracking-tighter block mb-2">$54,200.00</span>
                                    <p className="text-[10px] font-black text-stone-700 uppercase tracking-widest">Total Neto (Exento IVA)</p>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 border-y border-outline-variant/10 mb-12">
                                {[
                                    { label: 'Solicitado por', val: 'Ing. Marcos Rivas', icon: 'person' },
                                    { label: 'Almacén Destino', val: 'Centro (PTO)', icon: 'location_on' },
                                    { label: 'Fecha Límite', val: '24h Restantes', icon: 'schedule', color: 'text-error' }
                                ].map((info, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="p-3 bg-zinc-950 rounded-xl border border-outline-variant/5">
                                            <span className="material-symbols-outlined text-stone-600 text-lg">{info.icon}</span>
                                        </div>
                                        <div>
                                            <span className="block text-[9px] text-stone-700 font-black uppercase tracking-[0.3em] mb-1">{info.label}</span>
                                            <span className={`font-headline font-black text-sm uppercase tracking-tight ${info.color || 'text-white'}`}>{info.val}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="flex flex-wrap justify-between items-center gap-10 mt-auto">
                                <div className="flex gap-6">
                                    <button className="bg-primary text-black px-10 py-5 rounded-[24px] font-black text-xs uppercase tracking-[0.2em] shadow-[0_15px_40px_rgba(154,205,50,0.2)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                                        <span className="material-symbols-outlined font-black">check_circle</span> Aprobar
                                    </button>
                                    <button className="bg-zinc-950 text-white px-10 py-5 rounded-[24px] font-black text-xs uppercase tracking-[0.2em] border border-outline-variant/10 hover:bg-error transition-all active:scale-95 flex items-center gap-3">
                                        <span className="material-symbols-outlined font-black text-lg">cancel</span> Rechazar
                                    </button>
                                </div>
                                <button className="text-[10px] font-black uppercase tracking-[0.4em] text-primary flex items-center gap-3 group/link">
                                    Ver Detalles Técnicos 
                                    <span className="material-symbols-outlined text-lg group-hover/link:translate-x-2 transition-transform">east</span>
                                </button>
                            </div>
                        </div>
                    </article>

                    {/* Secondary Approval Item */}
                    <article className="col-span-12 xl:col-span-4 bg-zinc-950 rounded-[48px] p-12 border border-outline-variant/10 shadow-3xl flex flex-col justify-between group relative overflow-hidden">
                        <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                        <div className="relative z-10 flex-1 flex flex-col">
                            <div className="flex items-center gap-4 mb-10">
                                <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase">Security Gate</span>
                                <span className="text-stone-700 text-[10px] font-black uppercase tracking-[0.4em]">ACCESO SISTEMA</span>
                            </div>
                            
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-24 h-24 bg-zinc-900 rounded-[32px] flex items-center justify-center border border-outline-variant/10 shadow-3xl group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-5xl text-stone-700">person</span>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-headline font-black text-white uppercase tracking-tighter leading-none mb-2">Celia Ortega</h3>
                                    <p className="text-[10px] font-black text-stone-600 uppercase tracking-widest">Analista de Compras Jr.</p>
                                </div>
                            </div>
                            
                            <div className="space-y-6 pt-10 border-t border-outline-variant/5 mb-12">
                                {[
                                    { label: 'Perfil Requerido', val: 'Operador Nivel 1', icon: 'verified_user' },
                                    { label: 'Módulos Autorizados', val: 'Inventario, Compras', icon: 'lock' }
                                ].map((p, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 bg-zinc-900/50 rounded-2xl border border-outline-variant/5">
                                        <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{p.icon}</span>
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-black text-stone-700 uppercase tracking-widest leading-none mb-1">{p.label}</span>
                                            <span className="text-xs font-black text-white uppercase tracking-tight">{p.val}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 mt-auto">
                                <button className="bg-primary text-black py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">Aprobar Acceso</button>
                                <button className="bg-zinc-900 text-stone-500 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-outline-variant/5 hover:text-white transition-all">Ver Perfil</button>
                            </div>
                        </div>
                    </article>

                    {/* Horizontal Big Approval Item */}
                    <article className="col-span-12 bg-zinc-900/30 rounded-[48px] p-12 flex flex-col lg:flex-row items-center gap-16 border border-outline-variant/10 shadow-3xl hover:bg-zinc-900/50 transition-colors group">
                        <div className="w-full lg:w-72 h-72 bg-zinc-950 rounded-[40px] p-8 shrink-0 relative overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform shadow-inner border border-outline-variant/5">
                            <span className="material-symbols-outlined text-[120px] text-zinc-900 group-hover:text-primary transition-colors opacity-10">precision_manufacturing</span>
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <div className="w-full h-full bg-zinc-900/50 rounded-3xl border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden">
                                     {/* Image Placeholder */}
                                     <span className="material-symbols-outlined text-6xl text-stone-800">analytics</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="bg-amber-500 text-black text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase">Ajuste Crítico</span>
                                <span className="text-stone-700 text-[10px] font-black uppercase tracking-[0.4em]">INVENTARIO FISICO VS SISTEMA</span>
                            </div>
                            <h3 className="text-4xl font-headline font-black text-white uppercase tracking-tighter leading-none mb-4">Discrepancia Ejes de <br/> Transmisión (Z-40)</h3>
                            <div className="flex flex-wrap gap-12">
                                {[
                                    { label: 'Stock Teórico', val: '124 Unid.', color: 'text-stone-500' },
                                    { label: 'Stock Real Hallado', val: '98 Unid.', color: 'text-error' },
                                    { label: 'Diferencia Costo', val: '-$2,860.00', color: 'text-error' }
                                ].map((stat, i) => (
                                    <div key={i} className="space-y-2">
                                        <p className="text-[9px] text-stone-700 font-black uppercase tracking-[0.4em]">{stat.label}</p>
                                        <p className={`text-4xl font-headline font-black tracking-tighter ${stat.color}`}>{stat.val}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-full lg:w-72 shrink-0">
                            <button className="w-full bg-white text-black px-8 py-5 rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-primary transition-all active:scale-95 flex items-center justify-center gap-3 group/btn2">
                                <span className="material-symbols-outlined font-black">check_circle</span> Aprobar Ajuste
                            </button>
                            <button className="w-full bg-zinc-950 text-white px-8 py-5 rounded-3xl font-black text-xs uppercase tracking-[0.2em] border border-outline-variant/10 hover:bg-zinc-800 transition-all active:scale-95">
                                Solicitar Recuento
                            </button>
                            <button className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700 hover:text-white transition-colors mt-4 text-center">Ver Reporte Auditoría</button>
                        </div>
                    </article>
                </div>

                {/* Footer Meta Section */}
                <section className="mt-20 flex flex-col md:flex-row items-center justify-between pt-12 border-t-2 border-zinc-900 gap-8 px-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700">Mostrando 04 de 12 solicitudes pendientes de aprobación</span>
                    <button className="flex items-center gap-6 group">
                        <span className="text-xs font-black uppercase tracking-widest text-stone-500 group-hover:text-white transition-colors">Cargar más registros históricos</span>
                        <div className="w-14 h-14 bg-zinc-950 text-stone-600 flex items-center justify-center rounded-2xl group-hover:bg-primary group-hover:text-black transition-all shadow-xl -rotate-12 group-hover:rotate-0">
                            <span className="material-symbols-outlined text-2xl font-black">keyboard_double_arrow_down</span>
                        </div>
                    </button>
                </section>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 20px 20px;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
