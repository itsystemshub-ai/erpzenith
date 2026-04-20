import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function AjustesDeInventarioYActas() {
    const historicalActs = [
        { id: 'AJU-2023-089', status: 'Aprobado', color: 'text-primary', bg: 'bg-primary/20', title: 'Mermas de Producción Q3', resp: 'Ing. M. Salazar' },
        { id: 'AJU-2023-090', status: 'Pendiente', color: 'text-stone-400', bg: 'bg-stone-700', title: 'Ajuste Inventario Anual', resp: 'Admin Central' },
        { id: 'AJU-2023-087', status: 'Aprobado', color: 'text-primary', bg: 'bg-primary/20', title: 'Daño por Transporte Aéreo', resp: 'Logística Int.' }
    ];

    const adjustmentItems = [
        { sku: 'ENG-992-TX', desc: 'Válvula de Presión Hidráulica', stock: '154 units', adj: '-2', final: '152' }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline">
                    <span className="material-symbols-outlined">edit_note</span>
                    <span>Ajustes de Inventario</span>
                </div>
            }
        >
            <Head title="Ajustes de Inventario y Actas" />

            <div className="space-y-12 pb-12">
                {/* Page Header */}
                <header className="mb-16 relative">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="text-primary font-headline font-black uppercase tracking-[0.4em] text-[10px] bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 shadow-[0_0_15px_rgba(154,205,50,0.1)]">Fiscal Compliance</span>
                                <div className="h-px w-12 bg-outline-variant/10"></div>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Ajustes de <br/> <span className="text-stone-700">Inventario</span></h1>
                            <p className="text-stone-500 font-bold uppercase text-[10px] tracking-[0.3em] max-w-xl leading-relaxed">
                                Registro mandatorio de mermas, daños y ajustes físicos. Cumplimiento estricto con el Artículo 177 de la Ley de Impuesto Sobre la Renta (ISLR).
                            </p>
                        </div>
                        <div className="flex gap-4">
                            {[
                                { label: 'Último Cierre', val: '28 OCT 2023' },
                                { label: 'Variación Acum.', val: '-2.40%', color: 'text-error' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-zinc-900 px-8 py-4 rounded-3xl border border-outline-variant/5 shadow-2xl flex flex-col items-end group hover:border-primary/20 transition-all cursor-pointer">
                                    <span className="text-[9px] text-stone-700 font-black uppercase tracking-widest">{stat.label}</span>
                                    <span className={`font-headline font-black text-lg ${stat.color || 'text-white'} group-hover:scale-105 transition-transform`}>{stat.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <section className="lg:col-span-8 space-y-10">
                        {/* New Adjustment Form */}
                        <div className="bg-zinc-900 p-10 md:p-16 rounded-[40px] border border-outline-variant/10 shadow-3xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-primary shadow-[0_0_20px_#9acd32]"></div>
                            <div className="flex items-center gap-6 mb-12">
                                <h2 className="font-headline font-black text-2xl uppercase tracking-tighter text-white">Nuevo Registro de Ajuste</h2>
                                <div className="flex-1 h-px bg-outline-variant/5"></div>
                            </div>
                            
                            <form className="space-y-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-3">
                                        <label className="block text-[10px] font-black text-stone-700 uppercase tracking-[0.3em] ml-2">Tipo de Ajuste</label>
                                        <select className="w-full bg-zinc-950 border-outline-variant/10 focus:ring-2 focus:ring-primary text-stone-400 p-5 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-inner appearance-none">
                                            <option>Merma por Operación</option>
                                            <option>Pérdida por Daño/Rotura</option>
                                            <option>Diferencia de Conteo Físico</option>
                                            <option>Vencimiento de Insumo</option>
                                        </select>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-[10px] font-black text-stone-700 uppercase tracking-[0.3em] ml-2">Almacén de Origen</label>
                                        <select className="w-full bg-zinc-950 border-outline-variant/10 focus:ring-2 focus:ring-primary text-stone-400 p-5 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-inner appearance-none">
                                            <option>Planta Principal - A1</option>
                                            <option>Centro Logístico Norte</option>
                                            <option>Depósito Externo</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="bg-zinc-950 rounded-[32px] p-8 border border-outline-variant/5 shadow-inner">
                                    <div className="flex justify-between items-center mb-8 px-4">
                                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-700">Artículos a Ajustar</h3>
                                        <button className="text-primary text-[10px] font-black uppercase tracking-[0.2em] bg-primary/5 px-4 py-2 rounded-full border border-primary/20 hover:scale-105 transition-all flex items-center gap-3 active:scale-95" type="button">
                                            <span className="material-symbols-outlined text-sm font-black">add_circle</span> 
                                            AGREGAR ITEM
                                        </button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="text-[9px] font-black text-stone-700 uppercase tracking-widest border-b border-outline-variant/5">
                                                    <th className="px-6 py-4">SKU / Componente</th>
                                                    <th className="px-6 py-4">Stock Actual</th>
                                                    <th className="px-6 py-4 text-center">Cant. Ajuste</th>
                                                    <th className="px-6 py-4 text-right">Nuevo Stock</th>
                                                    <th className="px-6 py-4 w-10"></th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-outline-variant/5">
                                                {adjustmentItems.map((item, i) => (
                                                    <tr key={i} className="group hover:bg-zinc-900/50 transition-all">
                                                        <td className="px-6 py-6">
                                                            <div className="font-headline font-black text-white text-base tracking-tighter uppercase">{item.sku}</div>
                                                            <div className="text-[9px] text-stone-600 font-bold uppercase tracking-widest">{item.desc}</div>
                                                        </td>
                                                        <td className="px-6 py-6 text-stone-400 font-black text-sm uppercase tracking-tighter">{item.stock}</td>
                                                        <td className="px-6 py-6">
                                                            <div className="flex justify-center">
                                                                <input 
                                                                    className="w-24 bg-zinc-900 border border-outline-variant/10 text-white rounded-xl p-3 text-center font-headline font-black text-lg focus:ring-1 focus:ring-primary" 
                                                                    type="number" 
                                                                    defaultValue={item.adj}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-6 text-right">
                                                            <span className="font-headline font-black text-primary text-xl tracking-tighter">{item.final}</span>
                                                        </td>
                                                        <td className="px-6 py-6 text-right">
                                                            <button className="text-stone-700 hover:text-error transition-colors active:scale-90" type="button">
                                                                <span className="material-symbols-outlined text-xl">delete</span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="block text-[10px] font-black text-stone-700 uppercase tracking-[0.3em] ml-2">Justificación Administrativa (Art. 177 ISLR)</label>
                                    <textarea 
                                        className="w-full bg-zinc-950 border-outline-variant/10 focus:ring-2 focus:ring-primary text-stone-300 p-6 rounded-2xl font-bold uppercase tracking-widest text-xs placeholder:text-stone-800 transition-all shadow-inner min-h-[140px]" 
                                        placeholder="DESCRIBA EL MOTIVO TÉCNICO DEL AJUSTE DETALLADAMENTE..."
                                    ></textarea>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="block text-[10px] font-black text-stone-700 uppercase tracking-[0.3em] ml-2">Soporte Digital (Acta PDF)</label>
                                        <div className="border-2 border-dashed border-outline-variant/10 bg-zinc-950/50 p-10 rounded-3xl flex flex-col items-center justify-center text-center cursor-pointer group hover:bg-zinc-950 hover:border-primary transition-all shadow-inner active:scale-[0.98]">
                                            <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center text-stone-700 group-hover:text-primary group-hover:scale-110 transition-all">
                                                <span className="material-symbols-outlined text-3xl">upload_file</span>
                                            </div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-500 mt-4 group-hover:text-white transition-colors">Adjuntar Acta Administrativa</p>
                                            <p className="text-[8px] text-stone-700 mt-2 font-black uppercase tracking-widest leading-relaxed">PDF, JPG (MAX 5MB)</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-end gap-6 pb-2">
                                        <button className="w-full bg-primary text-black py-6 rounded-2xl font-headline font-black uppercase tracking-[0.3em] text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(154,205,50,0.3)] flex items-center justify-center gap-4" type="submit">
                                            Procesar Ajuste Fiscal
                                            <span className="material-symbols-outlined font-black">gavel</span>
                                        </button>
                                        <button className="w-full bg-zinc-950 text-stone-600 py-4 rounded-xl font-headline font-black uppercase tracking-widest text-[10px] border border-outline-variant/5 hover:text-white hover:border-outline-variant/20 transition-all active:scale-95" type="button">
                                            Guardar Borrador Temporal
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Compliance Pulse Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: 'verified_user', label: 'Integridad de Datos', desc: 'Todos los ajustes son firmados digitalmente y sellados cronológicamente.' },
                                { icon: 'policy', label: 'Art. 177 ISLR', desc: 'Cumplimiento automático de libros de inventario permanentes.' },
                                { icon: 'analytics', label: 'Trazabilidad Total', desc: 'Historial inmutable desde la creación hasta la aprobación contable.' }
                            ].map((info, i) => (
                                <div key={i} className="bg-zinc-900 border border-outline-variant/10 p-8 rounded-[40px] shadow-2xl group hover:border-primary/20 transition-all">
                                    <div className="w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-inner">
                                        <span className="material-symbols-outlined text-2xl">{info.icon}</span>
                                    </div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-3">{info.label}</h4>
                                    <p className="text-[10px] text-stone-600 font-bold uppercase tracking-widest leading-relaxed">{info.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Right Panel: History & Intelligence */}
                    <aside className="lg:col-span-4 space-y-10">
                        {/* Recent Acts Timeline */}
                        <div className="bg-zinc-950 rounded-[40px] border border-outline-variant/10 p-10 shadow-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                                <span className="material-symbols-outlined text-[140px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
                            </div>
                            
                            <h2 className="font-headline font-black text-xl uppercase tracking-tight text-white mb-10 flex items-center gap-4 relative z-10">
                                <span className="material-symbols-outlined text-primary">history</span>
                                Actas Recientes
                            </h2>

                            <div className="space-y-10 relative z-10">
                                {historicalActs.map((act, i) => (
                                    <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-1 before:bg-zinc-900 before:rounded-full group/act">
                                        <div className={`absolute -left-[14px] top-1.5 w-7 h-7 rounded-lg ${act.bg} border-4 border-zinc-950 shadow-xl flex items-center justify-center transition-transform group-hover/act:scale-110`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${act.color} animate-pulse shadow-sm`}></span>
                                        </div>
                                        <div className="flex justify-between items-start mb-2">
                                            <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${act.color}`}>{act.id}</span>
                                            <span className={`px-2.5 py-1 ${act.bg} ${act.color} text-[8px] font-black uppercase tracking-widest rounded-full border border-current opacity-60`}>{act.status}</span>
                                        </div>
                                        <p className="text-sm font-headline font-black text-white uppercase tracking-tight mb-1">{act.title}</p>
                                        <p className="text-[9px] text-stone-600 font-black uppercase tracking-widest">Responsable: {act.resp}</p>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full mt-12 py-5 bg-zinc-900 border border-outline-variant/10 rounded-2xl text-[9px] font-black uppercase tracking-[0.4em] text-stone-600 hover:text-white hover:border-primary/20 transition-all active:scale-95 shadow-xl relative z-10">
                                VER TODO EL HISTORIAL
                            </button>
                        </div>

                        {/* Control Metrics */}
                        <div className="bg-zinc-900 rounded-[40px] border border-outline-variant/10 p-10 shadow-2xl group relative overflow-hidden">
                            <div className="absolute inset-0 bg-industrial-mesh opacity-5 group-hover:opacity-10 transition-opacity"></div>
                            <h3 className="font-headline font-black text-sm uppercase tracking-[0.3em] text-white mb-8 border-b border-outline-variant/5 pb-4">Control Analytics</h3>
                            <div className="aspect-video bg-zinc-950 rounded-3xl overflow-hidden relative shadow-inner group/chart mb-10 border border-outline-variant/10">
                                <img 
                                    className="w-full h-full object-cover opacity-20 grayscale group-hover/chart:grayscale-0 group-hover/chart:opacity-40 group-hover/chart:scale-110 transition-all duration-1000" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAwV04LJtOSEN-d15SJByiTCJIxfQOgTOlDNO4WEgmMNRfUCX_XqbdzsNDSdx_YfGn-T5i6MTHznikyQXEtnxWGZemRXxADtyOfXJ8SM58sH_FAzhGYVu1l2EpE0BN_9XOEFKvYCBWk7TwjehJEiJWHnxqJRE3S7XxYrzaRfNKA0NEY8Rpr5IZj5cJHfjwmebMema3XxKV-AzaVIOb7NMjtEImjYtJ7HxRoOtJmFBS0E5dIT8TiTIvzApEWNIT3VSB5THa2gntm2s" 
                                    alt="Analytics" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
                                <div className="absolute bottom-8 left-8">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-700 mb-2">Tasa de Merma Industrial</p>
                                    <p className="text-4xl font-headline font-black text-primary tracking-tighter shadow-2xl">0.84%</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6 relative z-10">
                                {[
                                    { label: 'Valor Ajustes', val: '$12,450', color: 'text-error' },
                                    { label: 'Items Afect.', val: '428 PTS' }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-zinc-950 p-5 rounded-2xl border border-outline-variant/5 shadow-xl">
                                        <p className="text-[9px] font-black text-stone-700 uppercase tracking-widest mb-2">{stat.label}</p>
                                        <p className={`text-xl font-headline font-black tracking-tighter ${stat.color || 'text-white'}`}>{stat.val}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Auditor Note */}
                        <div className="bg-primary rounded-[40px] p-10 shadow-[0_0_50px_rgba(154,205,50,0.2)] group hover:scale-[1.02] transition-transform cursor-pointer">
                            <div className="flex items-start gap-6">
                                <div className="bg-black/10 p-3 rounded-xl border border-black/5 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white font-black">policy</span>
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-black mb-3">Nota de Auditoría Fiscal</h4>
                                    <p className="text-xs text-black/80 font-bold uppercase tracking-widest leading-relaxed italic">
                                        "La falta de actas administrativas firmadas para justificar mermas superiores al 2% puede generar reparos fiscales inmediatos."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Footer Technical Meta */}
                <footer className="pt-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
                    <div className="flex items-center gap-6 text-center md:text-left">
                        <span className="text-2xl font-headline font-black tracking-tighter uppercase text-white">FORGE SYSTEMS</span>
                        <div className="hidden md:block h-6 w-px bg-stone-800"></div>
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-700 uppercase">TITAN ERP v4.2.0 • INDUSTRIAL LICENSE • 2024</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        {['Centro de Ayuda', 'Políticas de Privacidad', 'Auditoría Logs'].map((link) => (
                            <a key={link} className="text-[10px] font-black uppercase tracking-widest text-stone-600 hover:text-primary transition-colors" href="#">{link}</a>
                        ))}
                    </div>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
