import React from 'react';
import { Link } from '@inertiajs/react';

export default function FacturaFiscalDigital() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<nav className="bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-xl sticky top-0 z-40 flex justify-between items-center w-full px-6 h-16">
<div className="flex items-center gap-4">
<span className="text-xl font-bold tracking-tighter text-stone-900 dark:text-stone-50 font-['Space_Grotesk'] uppercase">TITAN INDUSTRIAL</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-stone-500 font-['Space_Grotesk'] tracking-tight uppercase hover:bg-stone-100 transition-colors px-2 py-1" href="#">Dashboard</a>
<a className="text-lime-600 dark:text-lime-400 font-bold font-['Space_Grotesk'] tracking-tight uppercase hover:bg-stone-100 transition-colors px-2 py-1" href="#">Facturación</a>
<a className="text-stone-500 font-['Space_Grotesk'] tracking-tight uppercase hover:bg-stone-100 transition-colors px-2 py-1" href="#">Inventario</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-stone-500 hover:bg-stone-100 rounded-full transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-stone-500 hover:bg-stone-100 rounded-full transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="h-8 w-8 rounded-full bg-stone-200 overflow-hidden">
<img alt="User profile" data-alt="professional avatar of a person in business attire for an industrial enterprise system dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiAdX4q1r3sFrKK5TS2MjYMeKmnzXlpAuWfuw0G5dHqQJxkM_iqwFXdkTEuqqO0iRnAOKzpQKJFOSHHkTAmg0NwFFyXp0ijH7QQEfWKEQMXMmxR88_nfukt9z3vECeSYT30xJL3sViPPjKFjJ2fo1pX_sQICCVMRawos59omO2cQg6Ztun-5uACXo2opICSidW16XOFPMPjVKyfIQp1T6WOpEoERPv40voNktPWloMbQef50OOURTkd7Hqy_TMJELrf8UDGVOisf4"/>
</div>
</div>
</nav>
<main className="max-w-6xl mx-auto py-12 px-6">
{/* Comentario remanente */}
<div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
<div className="space-y-4">
<div className="bg-primary-container inline-block px-4 py-2">
<h1 className="text-2xl font-black text-on-primary-container tracking-tighter uppercase font-headline">MAYOR DE REPUESTO LA CIMA, C.A.</h1>
</div>
<div className="text-secondary font-label space-y-1">
<p className="font-bold text-on-surface">RIF: J-40308741-5</p>
<p>Av. Principal Industrial Norte, Galpón 42</p>
<p>Valencia, Edo. Carabobo - Venezuela</p>
<p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">phone</span> +58 241 555 0199</p>
</div>
</div>
<div className="w-full md:w-80 bg-surface-container-low p-6 rounded-lg relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary-fixed/20 -rotate-12 translate-x-8 -translate-y-8"></div>
<div className="relative z-10 space-y-4">
<div className="flex justify-between items-center">
<span className="text-xs font-bold uppercase tracking-widest text-secondary">Control Fiscal</span>
<span className="text-primary font-bold">#00-847291</span>
</div>
<div className="border-t border-outline-variant/30 pt-4">
<h2 className="text-3xl font-black tracking-tighter font-headline">FACTURA</h2>
<p className="text-sm text-secondary font-medium">Digital Industrial V-2</p>
</div>
<div className="flex justify-between items-end pt-2">
<div>
<p className="text-[10px] uppercase font-bold text-secondary">Fecha Emisión</p>
<p className="font-bold text-on-surface">24 OCT 2023</p>
</div>
<div className="text-right">
<p className="text-[10px] uppercase font-bold text-secondary">Vence</p>
<p className="font-bold text-on-surface">07 NOV 2023</p>
</div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-primary" >account_circle</span>
<h3 className="font-headline font-bold uppercase tracking-tight">Datos del Cliente</h3>
</div>
<div className="grid grid-cols-2 gap-y-4">
<div>
<p className="text-[10px] uppercase font-bold text-secondary">Razón Social</p>
<p className="font-medium text-on-surface">CONSTRUCTORA DELTA HIERRO S.A.</p>
</div>
<div>
<p className="text-[10px] uppercase font-bold text-secondary">RIF / Identificación</p>
<p className="font-medium text-on-surface">J-31298455-0</p>
</div>
<div className="col-span-2">
<p className="text-[10px] uppercase font-bold text-secondary">Dirección Fiscal</p>
<p className="font-medium text-on-surface">Zona Industrial Municipal II, Av. Este-Oeste, Parroquia Rafael Urdaneta.</p>
</div>
</div>
</div>
<div className="bg-surface-container-highest p-8 rounded-xl flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-secondary">local_shipping</span>
<h3 className="font-headline font-bold uppercase tracking-tight">Logística</h3>
</div>
<p className="text-[10px] uppercase font-bold text-secondary">Método de Envío</p>
<p className="font-medium text-on-surface">Transporte Propio - Ruta Norte</p>
</div>
<div className="pt-4 border-t border-outline-variant/30">
<p className="text-[10px] uppercase font-bold text-secondary">Orden de Compra</p>
<p className="font-headline font-bold text-primary">OC-2023-4492</p>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden mb-12">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-high">
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-secondary font-headline">SKU/ID</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-secondary font-headline">Descripción Técnica del Producto</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-secondary font-headline text-center">Cant.</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-secondary font-headline text-right">Precio Unit.</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-secondary font-headline text-right">Imponible</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-6 py-5 font-mono text-sm text-secondary">EP-992-TX</td>
<td className="px-6 py-5">
<p className="font-bold text-on-surface">Pistón Forjado Serie Titan 4500</p>
<p className="text-xs text-secondary italic">Aleación de aluminio reforzado, tratamiento térmico T6</p>
</td>
<td className="px-6 py-5 text-center font-bold">12</td>
<td className="px-6 py-5 text-right font-medium">$ 145.00</td>
<td className="px-6 py-5 text-right font-bold text-on-surface">$ 1,740.00</td>
</tr>
<tr className="bg-surface-container-low/30 hover:bg-surface-container-low transition-colors">
<td className="px-6 py-5 font-mono text-sm text-secondary">GK-441-RG</td>
<td className="px-6 py-5">
<p className="font-bold text-on-surface">Kit de Empacaduras Industriales (Gasket)</p>
<p className="text-xs text-secondary italic">Alta presión, temperatura hasta 400°C, sellado hermético</p>
</td>
<td className="px-6 py-5 text-center font-bold">04</td>
<td className="px-6 py-5 text-right font-medium">$ 82.50</td>
<td className="px-6 py-5 text-right font-bold text-on-surface">$ 330.00</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-6 py-5 font-mono text-sm text-secondary">BR-102-HD</td>
<td className="px-6 py-5">
<p className="font-bold text-on-surface">Rodamientos de Carga Pesada (Heavy Duty)</p>
<p className="text-xs text-secondary italic">Acero al cromo, doble hilera de esferas, sellado NBR</p>
</td>
<td className="px-6 py-5 text-center font-bold">08</td>
<td className="px-6 py-5 text-right font-medium">$ 210.00</td>
<td className="px-6 py-5 text-right font-bold text-on-surface">$ 1,680.00</td>
</tr>
</tbody>
</table>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
<div className="md:col-span-7 space-y-6">
{/* Comentario remanente */}
<div className="flex items-center gap-6 p-6 bg-white border border-outline-variant/20 rounded-xl">
<div className="w-32 h-32 bg-on-surface p-2 flex items-center justify-center">
<img alt="Código QR Fiscal" data-alt="precise geometric black and white QR code used for industrial tax verification and tracking" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW1nVa49xsB5AocZ0xt6D09eZLP7_vNO2Wp4TyHZLzxoeuGkYpnqtpJHeicaUabppLC6T5duUZiiM6T58PcQr8ZYZOk3edIdHr990H33-ELJNK_a5esxKEHockBv6IbSaScj7sla_hff3Cj_j5mWmfqUMNa1VDEg9AGItriln0CLvU_vZq4njOnSi45qoiEpuLe53dpv6q2n36-rkUewBlNCos7i8Ye6V8e6NGWuqCHe8V5M0HKSlGnHlxenroI57pGMkV44P2Cg0"/>
</div>
<div className="space-y-2">
<h4 className="text-sm font-bold uppercase tracking-tight font-headline">Certificación Fiscal Digital</h4>
<p className="text-xs text-secondary leading-relaxed">Este documento constituye una representación gráfica de una factura digital emitida bajo la normativa vigente de providencias administrativas del SENIAT.</p>
<div className="flex gap-2 pt-2">
<div className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">HASH: 9928-XA2-LL01</div>
<div className="px-2 py-1 bg-surface-container text-[10px] font-bold rounded">SERVER: TR-NODE-04</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="p-6 border-l-4 border-primary-container bg-surface-container-low rounded-r-xl">
<p className="text-[10px] uppercase font-black text-secondary mb-4 tracking-widest">Firma Digital Autorizada</p>
<div className="h-16 flex items-end">
<span className="font-['Dancing_Script'] text-2xl text-on-surface italic opacity-80 border-b border-on-surface/20 pb-2 px-4">Ing. Marcos Rodriguez - Operaciones</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="md:col-span-5 bg-on-surface text-surface rounded-xl p-8 space-y-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-16 translate-x-16 blur-3xl"></div>
<div className="space-y-4 relative z-10">
<div className="flex justify-between items-center text-sm">
<span className="text-stone-400 font-medium">Subtotal Base Imponible</span>
<span className="font-bold">$ 3,750.00</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-stone-400 font-medium">IVA (16%)</span>
<span className="font-bold">$ 600.00</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-stone-700 pb-4">
<span className="text-lime-400 font-bold">Retención IVA (75%)</span>
<span className="text-lime-400 font-bold">- $ 450.00</span>
</div>
<div className="pt-4 flex flex-col gap-1">
<div className="flex justify-between items-end">
<span className="text-xs uppercase font-black tracking-widest text-stone-500">Total a Pagar</span>
<span className="text-4xl font-black font-headline tracking-tighter text-primary-fixed">$ 3,900.00</span>
</div>
<p className="text-[10px] text-stone-400 text-right mt-2 uppercase font-medium">Sujeto a tasa oficial BCV del día</p>
</div>
</div>
<button className="w-full bg-primary-container hover:bg-primary-fixed-dim text-on-primary-container font-black py-4 uppercase tracking-widest text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2">
<span className="material-symbols-outlined">download</span>
                    Descargar PDF Certificado
                </button>
</div>
</div>
</main>
{/* Comentario remanente */}
<footer className="max-w-6xl mx-auto px-6 py-12 border-t border-surface-container mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Sistema Operativo Centralizado v4.2.1</p>
</div>
<div className="flex gap-8 text-[10px] font-bold text-secondary uppercase tracking-widest">
<a className="hover:text-primary transition-colors" href="#">Soporte Técnico</a>
<a className="hover:text-primary transition-colors" href="#">Términos y Condiciones</a>
<a className="hover:text-primary transition-colors" href="#">Portal Proveedores</a>
</div>
</footer>

        </div>
    );
};
