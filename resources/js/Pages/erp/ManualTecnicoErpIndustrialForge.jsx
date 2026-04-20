import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ManualTecnicoErpIndustrialForge() {
    const sections = [
        {
            id: '01',
            title: 'Visión General del Sistema',
            content: 'El ecosistema desarrollado para "La Cima" es una solución integral que combina una plataforma de comercio electrónico orientada al cliente con un robusto Sistema de Planificación de Recursos Empresariales (ERP) de grado industrial. El sistema está diseñado bajo la filosofía "Industrial Forge", priorizando la densidad de datos, la precisión técnica y el cumplimiento estricto de las normativas legales venezolanas (LOTTT, SENIAT, ISLR, NIIF).'
        },
        {
            id: '02',
            title: 'Arquitectura de Datos y Persistencia',
            list: [
                'Motor de Persistencia: Basado en localStorage con una capa de abstracción de base de datos relacional simulada.',
                'Interconexión: Todos los módulos comparten un bus de datos común a través de claves compartidas en el navegador, permitiendo sincronización en tiempo real entre Ventas, Inventario y Contabilidad.',
                'Seguridad: Implementación de cifrado para datos sensibles, 2FA simulado para accesos administrativos y logs de auditoría inmutables por sesión.'
            ]
        },
        {
            id: '03',
            title: 'Módulos y Funcionalidades',
            subsections: [
                {
                    name: 'E-commerce Público',
                    details: 'Flujo de Usuario: Landing Page → Catálogo (Grid/List) → Búsqueda Avanzada → Carrito de Compras (LocalStorage) → Autenticación → Checkout.'
                },
                {
                    name: 'Módulo de Inventario',
                    details: 'Valuación por Costo Promedio Ponderado (Art. 177 ISLR). Kardex valorizado, control de stock mínimo/máximo, auditoría física mediante conteos ciegos.'
                },
                {
                    name: 'Ventas & Facturación',
                    details: 'POS Industrial con validación de existencia en tiempo real. Facturación Fiscal con número de control y cálculo automático de retenciones (IVA 75%, ISLR 1.5%).'
                },
                {
                    name: 'Finanzas & Contabilidad',
                    details: 'Generación de asientos automáticos. Estados Financieros bajo NIIF para PYMES (Balance General, P&G, Balance de Comprobación).'
                }
            ]
        }
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">description</span>
                    <span>Documentación <span className="text-white/60 mx-2">|</span> Manual Técnico</span>
                </div>
            }
        >
            <Head title="Manual Técnico - Industrial Forge ERP" />

            <div className="space-y-16 pb-20 px-4">
                {/* Manual Header */}
                <header className="relative flex flex-col md:flex-row md:items-end justify-between gap-10 mt-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="bg-primary/20 text-primary text-[9px] font-black px-4 py-1.5 rounded-full tracking-[0.4em] uppercase border border-primary/10">Technical Documentation Registry</span>
                            <div className="h-px w-12 bg-outline-variant/10"></div>
                            <span className="text-[10px] font-black text-stone-500 uppercase tracking-widest leading-none tracking-[0.3em]">Revision 2.4 // 2024</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-[0.85] text-white">Manual <br/> <span className="text-stone-700 text-3xl md:text-5xl">Técnico Ecosistema ERP</span></h1>
                    </div>
                </header>

                {/* Content Grid */}
                <div className="grid grid-cols-12 gap-12">
                    {/* Main Documentation Area */}
                    <div className="col-span-12 xl:col-span-8 space-y-12">
                        {sections.map((section) => (
                            <section key={section.id} className="bg-zinc-900 rounded-[48px] border border-outline-variant/10 shadow-3xl p-12 relative overflow-hidden group">
                                <span className="text-zinc-950 font-headline font-black text-[120px] absolute -right-4 -top-8 opacity-40 select-none group-hover:scale-110 transition-transform">{section.id}</span>
                                
                                <div className="relative z-10 space-y-8">
                                    <h3 className="text-3xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">{section.title}</h3>
                                    
                                    {section.content && (
                                        <p className="text-stone-500 text-sm font-semibold uppercase leading-relaxed tracking-wide">
                                            {section.content}
                                        </p>
                                    )}

                                    {section.list && (
                                        <ul className="space-y-4">
                                            {section.list.map((item, i) => (
                                                <li key={i} className="flex gap-4 items-start text-stone-400 text-xs font-black uppercase tracking-widest leading-relaxed">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.subsections && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {section.subsections.map((sub, i) => (
                                                <div key={i} className="bg-zinc-950 p-6 rounded-[32px] border border-outline-variant/5 border-l-4 border-primary/40 space-y-3">
                                                    <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">{sub.name}</h4>
                                                    <p className="text-[10px] font-black text-stone-700 uppercase tracking-widest leading-relaxed">{sub.details}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Meta Sidebar */}
                    <aside className="col-span-12 xl:col-span-4 space-y-8">
                        <section className="bg-zinc-900 p-10 rounded-[48px] border border-outline-variant/10 shadow-3xl space-y-8">
                            <h3 className="text-xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">System <br/> <span className="text-primary italic">Signature</span></h3>
                            <div className="space-y-4 border-t border-zinc-800 pt-6">
                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                    <span className="text-stone-700 text-[10px] font-black uppercase tracking-[0.4em]">Client ID</span>
                                    <span className="text-white">J-40308741-5</span>
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                    <span className="text-stone-700 text-[10px] font-black uppercase tracking-[0.4em]">Revision</span>
                                    <span className="text-white">v2.4 STABLE</span>
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                    <span className="text-stone-700 text-[10px] font-black uppercase tracking-[0.4em]">Nodes</span>
                                    <span className="text-white italic">67 PANTALLAS</span>
                                </div>
                            </div>
                            <div className="bg-zinc-950 p-6 rounded-[32px] border border-dashed border-zinc-800">
                                <p className="text-[9px] font-black text-stone-800 uppercase tracking-[0.2em] leading-relaxed">
                                    "Industrial Forge" philosophy: prioritización de densidad de datos y precisión técnica bajo normativas venezolanas.
                                </p>
                            </div>
                        </section>

                        <section className="bg-zinc-950 p-1 rounded-[48px] border border-outline-variant/5">
                            <div className="bg-zinc-900 border border-outline-variant/5 rounded-[44px] p-10 space-y-8 overflow-hidden group">
                                <div className="flex items-start gap-6">
                                    <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">terminal</span>
                                    <div className="space-y-2 text-left">
                                        <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Engineering Notes</h4>
                                        <p className="text-stone-600 text-[10px] font-semibold uppercase leading-relaxed tracking-tight italic">Habilitar localStorage access para la persistencia del motor interno.</p>
                                    </div>
                                </div>
                                <div className="h-48 relative rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img alt="Engineering" className="w-full h-full object-cover opacity-20 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                                </div>
                            </div>
                        </section>
                    </aside>
                </div>

                {/* Industrial Footer */}
                <footer className="mt-20 pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col gap-3">
                        <span className="text-white font-headline font-black tracking-[0.5em] text-xl uppercase leading-none italic">FORGE ARCHIVE</span>
                        <span className="text-stone-800 font-headline text-[9px] font-black uppercase tracking-[0.8em]">Industrial Ecosystem Technical Specification</span>
                    </div>
                    <div className="flex items-center gap-6 bg-zinc-950 px-10 py-5 rounded-full border border-outline-variant/10 shadow-2xl skew-x-[-4deg]">
                         <span className="text-[10px] font-black text-stone-600 uppercase tracking-[0.6em]">Document Status: <span className="text-primary italic">CERTIFIED</span></span>
                    </div>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
