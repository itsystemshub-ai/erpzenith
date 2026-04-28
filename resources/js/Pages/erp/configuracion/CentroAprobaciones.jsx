import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CentroAprobaciones() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">fact_check</span>
                    <span>Configuración <span className="text-white/60 mx-2">|</span> Centro de Aprobaciones</span>
                </div>
            }
        >
            <Head title="Centro de Aprobaciones | Zenith ERP" />

            <div className="space-y-12 pb-12 relative overflow-hidden">
                {/* Header Section */}
                <header className="relative mb-12">
                    <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-headline font-black text-white uppercase tracking-tighter leading-none italic mb-2">
                                Administración <br/><span className="text-stone-700">Central</span>
                            </h1>
                            <p className="text-lg text-primary font-black uppercase tracking-widest flex items-center gap-2 italic">
                                <span className="w-4 h-[2px] bg-primary"></span> Bandeja de Aprobaciones Integrada
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-zinc-950 border border-white/5 px-6 py-4 flex flex-col items-center rounded-2xl shadow-inner">
                                <span className="text-primary font-black text-4xl italic tracking-tighter">12</span>
                                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-stone-500">Pendientes</span>
                            </div>
                            <div className="bg-zinc-950 border border-white/5 border-l-4 border-l-error px-6 py-4 flex flex-col items-center rounded-2xl shadow-inner">
                                <span className="text-error font-black text-4xl italic tracking-tighter animate-pulse">04</span>
                                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-stone-500">Críticos</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Search & Filter Bar */}
                <section className="bg-zinc-900 border border-white/5 p-4 rounded-3xl flex flex-col lg:flex-row items-center gap-6 shadow-3xl">
                    <div className="flex-1 relative w-full">
                        <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-primary font-black">search</span>
                        <input 
                            className="w-full bg-zinc-950 border-none rounded-2xl py-5 pl-16 pr-6 text-xs font-black uppercase tracking-widest text-stone-300 focus:ring-2 focus:ring-primary/20 shadow-inner" 
                            placeholder="BUSCAR SOLICITUD O REFERENCIA..." 
                            type="text"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2 w-full lg:w-auto overflow-x-auto custom-scrollbar pb-2 lg:pb-0">
                        <button className="bg-zinc-950 text-white px-6 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl border border-primary/30 shadow-inner italic">Todas</button>
                        <button className="bg-zinc-950/50 hover:bg-zinc-950 text-stone-500 hover:text-white px-6 py-4 text-[10px] font-black uppercase tracking-widest border border-white/5 rounded-xl transition-all shadow-inner">Compras</button>
                        <button className="bg-zinc-950/50 hover:bg-zinc-950 text-stone-500 hover:text-white px-6 py-4 text-[10px] font-black uppercase tracking-widest border border-white/5 rounded-xl transition-all shadow-inner">Inventario</button>
                        <button className="bg-zinc-950/50 hover:bg-zinc-950 text-stone-500 hover:text-white px-6 py-4 text-[10px] font-black uppercase tracking-widest border border-white/5 rounded-xl transition-all shadow-inner">Personal</button>
                    </div>
                </section>

                {/* Bento Grid Layout for Approval Cards */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                    
                    {/* CRITICAL ITEM: Order Over $5000 */}
                    <div className="xl:col-span-8 bg-zinc-950 p-8 md:p-10 rounded-[48px] border border-white/5 relative overflow-hidden group shadow-inner flex flex-col justify-between hover:border-error/20 transition-all duration-500">
                        <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                        <div className="absolute top-0 right-0 w-2 h-full bg-error/20 group-hover:bg-error transition-colors duration-500 shadow-[0_0_15px_rgba(186,26,26,0.5)]"></div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="bg-error/10 text-error border border-error/20 text-[9px] px-3 py-1.5 rounded-lg font-black uppercase tracking-widest italic animate-pulse">ALTA PRIORIDAD</span>
                                    <span className="text-stone-500 text-[10px] font-black uppercase tracking-[0.3em] bg-zinc-900 px-3 py-1.5 rounded-lg border border-white/5 shadow-inner">ORDEN DE COMPRA #OC-29401</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-headline font-black text-white uppercase tracking-tighter mb-4 italic group-hover:text-error transition-colors">Importación Motores Caterpillar 3406</h3>
                                <p className="text-stone-400 text-xs font-black tracking-widest max-w-xl leading-relaxed italic">Reposición de stock crítico para contratos mineros zona sur. Proveedor: HeavyEquipment Ltd (Miami).</p>
                            </div>
                            <div className="text-left md:text-right bg-zinc-900 p-6 rounded-3xl border border-white/5 shadow-inner">
                                <span className="text-4xl md:text-5xl font-headline font-black text-primary italic tracking-tighter tabular-nums decoration-double underline decoration-primary/20">$54,200.00</span>
                                <p className="text-[9px] font-black text-stone-500 uppercase tracking-[0.3em] mt-3">Total Neto (Exento IVA)</p>
                            </div>
                        </div>
                        
                        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 py-8 border-y border-white/5">
                            <div className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5 shadow-inner">
                                <p className="text-[9px] text-stone-600 font-black uppercase tracking-[0.3em] mb-2 italic">Solicitado por</p>
                                <p className="font-black text-sm text-stone-300 uppercase tracking-widest">Ing. Marcos Rivas</p>
                            </div>
                            <div className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5 shadow-inner">
                                <p className="text-[9px] text-stone-600 font-black uppercase tracking-[0.3em] mb-2 italic">Almacén Destino</p>
                                <p className="font-black text-sm text-stone-300 uppercase tracking-widest">Almacén Central (POZ)</p>
                            </div>
                            <div className="bg-error/5 p-4 rounded-2xl border border-error/10 shadow-inner group-hover:bg-error/10 transition-colors">
                                <p className="text-[9px] text-error/60 font-black uppercase tracking-[0.3em] mb-2 italic">Fecha Límite</p>
                                <p className="font-black text-sm text-error uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
                                    24h Restantes
                                </p>
                            </div>
                        </div>
                        
                        <div className="relative z-10 flex flex-wrap justify-between items-center gap-6">
                            <div className="flex flex-wrap gap-4 w-full md:w-auto">
                                <button className="flex-1 md:flex-none bg-primary text-black px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-3xl flex justify-center items-center gap-3 italic">
                                    <span className="material-symbols-outlined text-base font-black">check_circle</span> Aprobar_Protocol
                                </button>
                                <button className="flex-1 md:flex-none bg-zinc-900 text-stone-400 px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] border border-white/5 hover:bg-error/10 hover:text-error hover:border-error/20 active:scale-95 transition-all flex justify-center items-center gap-3 shadow-inner italic">
                                    <span className="material-symbols-outlined text-base font-black">cancel</span> Deny_Access
                                </button>
                            </div>
                            <button className="text-[9px] font-black uppercase tracking-[0.4em] text-primary hover:text-white flex items-center gap-3 group/link w-full md:w-auto justify-center italic">
                                Technical Details <span className="material-symbols-outlined text-sm font-black group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    {/* SIDE ITEM: New User Access */}
                    <div className="xl:col-span-4 bg-zinc-900 p-8 md:p-10 rounded-[48px] border-l-[12px] border-primary flex flex-col justify-between shadow-3xl overflow-hidden relative group hover:border-white transition-colors duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors duration-700"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="bg-primary/10 text-primary border border-primary/20 text-[9px] px-3 py-1.5 rounded-lg font-black uppercase tracking-[0.3em] italic">ACCESS_NODE</span>
                                <span className="text-stone-500 text-[9px] font-black uppercase tracking-[0.3em]">NEW_USER</span>
                            </div>
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-20 h-20 bg-zinc-950 rounded-3xl flex items-center justify-center border border-white/5 shadow-inner">
                                    <span className="material-symbols-outlined text-5xl text-stone-600 font-black">person</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter italic">Celia Ortega</h3>
                                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mt-1">Analista_Compras Jr</p>
                                </div>
                            </div>
                            <div className="space-y-4 mb-10 bg-zinc-950 p-6 rounded-3xl border border-white/5 shadow-inner">
                                <div className="flex items-center gap-4 text-xs font-black text-stone-300 uppercase tracking-widest">
                                    <span className="material-symbols-outlined text-primary text-lg font-black">verified_user</span> 
                                    <span>Profile: <span className="text-white">Op Nivel 1</span></span>
                                </div>
                                <div className="flex items-center gap-4 text-xs font-black text-stone-300 uppercase tracking-widest">
                                    <span className="material-symbols-outlined text-primary text-lg font-black">lock</span> 
                                    <span>Modules: <span className="text-white">Inv, Pur</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10 grid grid-cols-2 gap-4 mt-auto">
                            <button className="bg-primary/10 text-primary border border-primary/30 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-primary hover:text-black transition-all shadow-inner hover:shadow-3xl italic">Aprove</button>
                            <button className="bg-zinc-950 text-stone-400 border border-white/5 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:text-white transition-all shadow-inner">Detail</button>
                        </div>
                    </div>

                    {/* FULL WIDTH ROW: Inventory Adjustment */}
                    <div className="xl:col-span-12 bg-zinc-900 border border-white/5 p-8 md:p-10 flex flex-col xl:flex-row justify-between gap-10 rounded-[48px] shadow-3xl group relative overflow-hidden">
                        <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-error/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 flex-1">
                            <div className="w-full md:w-48 h-48 bg-zinc-950 border border-white/10 p-2 shrink-0 rounded-[32px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-inner">
                                <img className="w-full h-full object-cover rounded-[24px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7idQ8PO_25x_MgAF9Ebh6-OGGkL2vPBJ5ZFEb_hI0ZrsXWbjnd6tsbNb47yZigaOEt29RN7gH47_RuVFy7hAPXzYb_VIDu5H-l8JKy65IX4Vupj0FbHXMiGShIJztyuqdjhcKNCQS2oc0aaiazFee9rYaUPoXYnN2leGSZqVBv6AxkQv8ABxZVMl5OKGyha_RfpHbEMqh-gCGJWAMRyL3v0T7Mv0cOOiHDTmswJK4GFVkXsgPTikVZQ4pR-aeQP5GcnLr-zoBnnU" alt="Discrepancia Inventario"/>
                            </div>
                            <div className="flex-1 w-full text-center md:text-left">
                                <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                                    <span className="bg-zinc-950 text-white border border-white/10 text-[9px] px-3 py-1.5 rounded-lg font-black uppercase tracking-[0.3em] italic shadow-inner">AJUSTE CRÍTICO</span>
                                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">INVENTARIO FISICO VS SISTEMA</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-headline font-black text-white uppercase tracking-tighter mb-8 italic">Discrepancia Ejes Transmisión (Z-40)</h3>
                                
                                <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-16 border-t border-white/5 pt-6">
                                    <div>
                                        <p className="text-[9px] text-stone-600 font-black uppercase tracking-[0.3em] mb-2 italic">Teórico_Sys</p>
                                        <p className="text-2xl font-headline font-black text-white tabular-nums tracking-tighter">124 Uni.</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] text-error/60 font-black uppercase tracking-[0.3em] mb-2 italic">Real_Hallado</p>
                                        <p className="text-2xl font-headline font-black text-error tabular-nums tracking-tighter animate-pulse">98 Uni.</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] text-stone-600 font-black uppercase tracking-[0.3em] mb-2 italic">Diferencia_Delta</p>
                                        <p className="text-2xl font-headline font-black text-white tabular-nums tracking-tighter">-$2,860.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative z-10 flex flex-col justify-center gap-4 w-full xl:w-72 mt-8 xl:mt-0 pt-8 xl:pt-0 border-t xl:border-t-0 xl:border-l border-white/5 xl:pl-10">
                            <button className="bg-primary text-black px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(154,205,50,0.2)] italic">Aprove_Sync</button>
                            <button className="bg-zinc-950 text-stone-400 border border-error/30 hover:border-error hover:text-error hover:bg-error/10 px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all shadow-inner italic">Request Recount</button>
                            <button className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-500 hover:text-primary mt-4 text-center group/btn italic">
                                View Audit <span className="group-hover/btn:underline decoration-double">Report</span>
                            </button>
                        </div>
                    </div>

                    {/* ROW: Payroll Approval */}
                    <div className="xl:col-span-12 bg-zinc-950 p-8 md:p-10 rounded-[48px] border border-white/5 border-l-[12px] border-l-primary flex flex-col lg:flex-row items-center justify-between gap-10 shadow-inner group relative overflow-hidden">
                        <div className="absolute inset-0 bg-industrial-mesh opacity-5"></div>
                        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                        
                        <div className="relative z-10 text-center lg:text-left flex-1 min-w-[250px]">
                            <span className="text-[9px] text-primary font-black uppercase tracking-[0.4em] block mb-3 italic">CÓMPUTO DE NOMINA</span>
                            <h3 className="text-2xl md:text-3xl font-headline font-black text-white uppercase tracking-tighter mb-2 italic">MES: OCTUBRE 2023</h3>
                            <p className="text-[10px] text-stone-500 font-black tracking-widest uppercase">152 Active Worker Nodes</p>
                        </div>
                        
                        <div className="relative z-10 w-full lg:w-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:border-l border-white/10 lg:pl-10">
                            <div className="bg-zinc-900 p-6 rounded-3xl border border-white/5 shadow-inner text-center md:text-left">
                                <p className="text-[9px] text-stone-600 font-black uppercase tracking-[0.3em] mb-3 italic">Monto Dispersión_Sys</p>
                                <p className="text-3xl font-headline font-black text-white tracking-tighter tabular-nums decoration-double underline decoration-primary/20">$31,450.00</p>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-3xl border border-white/5 shadow-inner flex flex-col justify-center items-center md:items-start">
                                <p className="text-[9px] text-stone-600 font-black uppercase tracking-[0.3em] mb-4 italic">Integrity_State</p>
                                <div className="flex items-center gap-3">
                                    <span className="w-3 h-3 bg-primary rounded-sm shadow-[0_0_8px_#9acd32] animate-pulse"></span>
                                    <span className="text-[10px] font-black uppercase text-white tracking-widest italic">RRHH Validated</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative z-10 w-full lg:w-auto flex flex-col md:flex-row gap-4 lg:border-l border-white/10 lg:pl-10">
                            <button className="flex-1 md:flex-none bg-primary text-black px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-3xl italic">
                                Emit Payment
                            </button>
                            <button className="bg-zinc-900 text-stone-400 p-5 rounded-2xl border border-white/5 shadow-inner hover:bg-zinc-950 hover:text-white hover:border-primary/50 transition-colors flex items-center justify-center">
                                <span className="material-symbols-outlined text-xl font-black">description</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pagination or Load More (Industrial Style) */}
                <div className="mt-16 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-10 gap-6">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-600 italic">SYNC: 04 OF 12 REQUESTS</span>
                    <button className="flex items-center gap-6 group">
                        <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 group-hover:text-primary transition-colors italic">Load Archive Matrix</span>
                        <div className="w-12 h-12 bg-zinc-900 border border-white/5 text-stone-400 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-black group-hover:border-primary shadow-inner group-hover:shadow-3xl transition-all">
                            <span className="material-symbols-outlined font-black">south</span>
                        </div>
                    </button>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .bg-industrial-mesh {
                    background-image: radial-gradient(rgba(154, 205, 50, 0.1) 1px, transparent 1px);
                    background-size: 32px 32px;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    height: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #1c1c1c;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #9acd32;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
