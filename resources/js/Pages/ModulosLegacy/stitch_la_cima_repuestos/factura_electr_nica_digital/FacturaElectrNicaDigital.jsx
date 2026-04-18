import React from 'react';
import { Link } from '@inertiajs/react';

export default function FacturaElectrNicaDigital() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<header className="fixed top-0 w-full z-50 bg-stone-900/90 backdrop-blur-xl flex justify-between items-center px-6 h-16 w-full no-print">
<div className="flex items-center gap-4">
<span className="text-xl font-bold text-lime-400 tracking-tighter font-['Space_Grotesk'] uppercase">TITAN ENGINE ERP</span>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 text-stone-400 font-['Space_Grotesk'] uppercase tracking-tight">
<button className="hover:bg-stone-800 transition-colors duration-200 p-2 rounded-lg scale-95 active:opacity-80 transition-transform">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="hover:bg-stone-800 transition-colors duration-200 p-2 rounded-lg scale-95 active:opacity-80 transition-transform">
<span className="material-symbols-outlined">settings</span>
</button>
</div>
<img alt="User profile avatar" className="w-8 h-8 rounded-full border border-stone-700" data-alt="Professional studio portrait of an industrial manager wearing a dark uniform with high-end lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvwPAw3diWyu-Ic_lIlPu3QWInJyALZdP_a3SldaJc4QZ2oOCnPu1u5ardjh9usxgmK-vWs6Rig2XWDQ4i2F9ClraqT6tkfWkBf_oW8myvdzqlPYamgRAw3_HzvMIMYRqWORextmpTo0NiMaAjlIJPekWGTLyMTJiDr1xcNOL3WsSv-6Ganfr-Ucyf2AgjgitpOJe0J05KzR9OOmivpyKUDMJaXkjcf0vDvnO0yCkU0cXFnu9rT3dNidVNhoCFFMtiTBWVO79_UAw"/>
</div>
</header>
{/* Comentario remanente */}
<aside className="fixed left-0 top-0 h-screen w-64 bg-stone-950 flex flex-col py-8 px-4 gap-2 no-print">
<div className="mb-10 px-4">
<h2 className="text-lg font-black text-white font-['Inter'] uppercase">ENGINE OPS</h2>
<p className="text-[10px] text-stone-500 font-semibold tracking-widest uppercase">High Performance Industrial</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all duration-300 font-['Inter'] text-sm font-semibold uppercase" href="#">
<span className="material-symbols-outlined">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all duration-300 font-['Inter'] text-sm font-semibold uppercase" href="#">
<span className="material-symbols-outlined">add_shopping_cart</span>
                New Sale
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-lime-400 border-r-4 border-lime-500 bg-stone-900/50 translate-x-1 transition-transform font-['Inter'] text-sm font-semibold uppercase" href="#">
<span className="material-symbols-outlined">history</span>
                Sales History
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all duration-300 font-['Inter'] text-sm font-semibold uppercase" href="#">
<span className="material-symbols-outlined">group</span>
                Customers
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all duration-300 font-['Inter'] text-sm font-semibold uppercase" href="#">
<span className="material-symbols-outlined">analytics</span>
                Reports
            </a>
</nav>
<div className="mt-auto pt-6 border-t border-stone-800 space-y-1">
<a className="flex items-center gap-3 px-4 py-2 text-stone-500 hover:text-stone-200 font-['Inter'] text-sm font-semibold uppercase" href="#">
<span className="material-symbols-outlined">help</span>
                Support
            </a>
<a className="flex items-center gap-3 px-4 py-2 text-stone-500 hover:text-stone-200 font-['Inter'] text-sm font-semibold uppercase" href="#">
<span className="material-symbols-outlined">logout</span>
                Logout
            </a>
</div>
</aside>
{/* Comentario remanente */}
<main className="md:ml-64 pt-24 pb-12 px-4 md:px-12 min-h-screen bg-surface">
{/* Comentario remanente */}
<div className="max-w-5xl mx-auto flex justify-between items-end mb-8 no-print">
<div>
<h1 className="font-headline text-4xl font-extrabold uppercase tracking-tighter text-on-surface">Invoice Detail</h1>
<p className="text-secondary font-medium uppercase text-xs tracking-widest mt-1">Industrial Fulfillment Pipeline / Sale #77492</p>
</div>
<div className="flex gap-3">
<button className="bg-surface-container-high text-on-surface px-6 py-2.5 font-bold uppercase text-xs tracking-wider flex items-center gap-2 hover:bg-surface-dim transition-colors transition-transform active:scale-95" onclick="window.print()">
<span className="material-symbols-outlined text-sm">print</span>
                    Print Document
                </button>
<button className="bg-primary text-on-primary px-6 py-2.5 font-bold uppercase text-xs tracking-wider flex items-center gap-2 hover:opacity-90 transition-transform active:scale-95">
<span className="material-symbols-outlined text-sm">download</span>
                    Export PDF
                </button>
</div>
</div>
{/* Comentario remanente */}
<div className="max-w-5xl mx-auto bg-surface-container-lowest print-shadow p-8 md:p-12 relative overflow-hidden">
{/* Comentario remanente */}
<div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-surface-container pb-10">
<div className="flex flex-col justify-between">
<div>
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 bg-stone-900 flex items-center justify-center">
<span className="material-symbols-outlined text-lime-400 text-4xl" >precision_manufacturing</span>
</div>
<div>
<h2 className="font-headline text-2xl font-black uppercase leading-none text-on-surface">MAYOR DE REPUESTO LA CIMA, C.A.</h2>
<p className="font-bold text-primary text-sm mt-1">RIF J-40308741-5</p>
</div>
</div>
<div className="space-y-1 text-sm text-secondary font-medium">
<p>Zona Industrial Municipal Norte</p>
<p>Avenida Henry Ford, Galpón C-12</p>
<p>Valencia, Edo. Carabobo 2001, Venezuela</p>
<p className="pt-2 text-on-surface">+58 (241) 555-0198 | info@lacima-repuestos.com</p>
</div>
</div>
</div>
<div className="flex flex-col items-end text-right">
<div className="bg-stone-950 text-white p-6 w-full max-w-xs">
<p className="text-[10px] uppercase tracking-[0.2em] font-black text-stone-500 mb-2">Invoice Number</p>
<p className="font-headline text-3xl font-bold tracking-tighter">#FE-2024-0892</p>
<div className="mt-4 pt-4 border-t border-stone-800 grid grid-cols-2 gap-4">
<div>
<p className="text-[9px] uppercase tracking-widest text-stone-500">Emission Date</p>
<p className="text-xs font-bold uppercase">24 OCT 2023</p>
</div>
<div>
<p className="text-[9px] uppercase tracking-widest text-stone-500">Control Number</p>
<p className="text-xs font-bold uppercase">00-998822</p>
</div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-b border-surface-container">
<div className="col-span-2">
<h3 className="text-[10px] uppercase tracking-widest font-black text-secondary mb-4 flex items-center gap-2">
<span className="w-1 h-3 bg-primary"></span>
                        Customer Information
                    </h3>
<div className="bg-surface-container-low p-6">
<p className="text-xl font-bold uppercase text-on-surface mb-2">SIDERÚRGICA DEL TURBIO, S.A. (SIDETUR)</p>
<div className="grid grid-cols-2 gap-6 mt-4">
<div>
<p className="text-[9px] uppercase font-bold text-secondary">RIF</p>
<p className="text-sm font-semibold">J-00034567-0</p>
</div>
<div>
<p className="text-[9px] uppercase font-bold text-secondary">Phone</p>
<p className="text-sm font-semibold">+58 (251) 441-2090</p>
</div>
<div className="col-span-2">
<p className="text-[9px] uppercase font-bold text-secondary">Fiscal Address</p>
<p className="text-sm font-medium leading-relaxed">Zona Industrial II, Carrera 4 con Calle 2. Barquisimeto, Edo. Lara.</p>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-[10px] uppercase tracking-widest font-black text-secondary mb-4 flex items-center gap-2">
<span className="w-1 h-3 bg-primary"></span>
                        Status &amp; Logistics
                    </h3>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-surface-container-high pb-2">
<span className="text-xs font-bold text-secondary uppercase">Payment Terms</span>
<span className="text-xs font-black uppercase">Net 15 Days</span>
</div>
<div className="flex justify-between items-center border-b border-surface-container-high pb-2">
<span className="text-xs font-bold text-secondary uppercase">Dispatch Origin</span>
<span className="text-xs font-black uppercase">VLC-WH-02</span>
</div>
<div className="flex justify-between items-center border-b border-surface-container-high pb-2">
<span className="text-xs font-bold text-secondary uppercase">Priority Status</span>
<span className="px-2 py-0.5 bg-primary text-on-primary text-[9px] font-black uppercase">Critical Part</span>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="py-10">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-stone-900 text-white">
<th className="py-3 px-4 font-headline text-[10px] uppercase tracking-widest font-bold">SKU</th>
<th className="py-3 px-4 font-headline text-[10px] uppercase tracking-widest font-bold">Description</th>
<th className="py-3 px-4 font-headline text-[10px] uppercase tracking-widest font-bold text-right">Quantity</th>
<th className="py-3 px-4 font-headline text-[10px] uppercase tracking-widest font-bold text-right">Unit Price</th>
<th className="py-3 px-4 font-headline text-[10px] uppercase tracking-widest font-bold text-right">Tax Base</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-surface-container-high hover:bg-surface-container-low transition-colors">
<td className="py-4 px-4 font-bold text-primary">CUM-3972886</td>
<td className="py-4 px-4">
<p className="font-bold text-on-surface uppercase">Crankshaft Main Bearing Set</p>
<p className="text-[10px] text-secondary font-medium">Standard Size - Heavy Duty Industrial Grade</p>
</td>
<td className="py-4 px-4 text-right font-semibold">12</td>
<td className="py-4 px-4 text-right font-semibold">$ 450.00</td>
<td className="py-4 px-4 text-right font-black">$ 5,400.00</td>
</tr>
<tr className="bg-surface-container-low/50 border-b border-surface-container-high hover:bg-surface-container-low transition-colors">
<td className="py-4 px-4 font-bold text-primary">DET-23530663</td>
<td className="py-4 px-4">
<p className="font-bold text-on-surface uppercase">Fuel Injector Assembly (Series 60)</p>
<p className="text-[10px] text-secondary font-medium">Electronic Unit Injector - Precision Calibration</p>
</td>
<td className="py-4 px-4 text-right font-semibold">06</td>
<td className="py-4 px-4 text-right font-semibold">$ 820.00</td>
<td className="py-4 px-4 text-right font-black">$ 4,920.00</td>
</tr>
<tr className="border-b border-surface-container-high hover:bg-surface-container-low transition-colors">
<td className="py-4 px-4 font-bold text-primary">PER-U5ME0034</td>
<td className="py-4 px-4">
<p className="font-bold text-on-surface uppercase">Upper Gasket Kit - 1104D Series</p>
<p className="text-[10px] text-secondary font-medium">High-Temperature Resistance Composite Material</p>
</td>
<td className="py-4 px-4 text-right font-semibold">03</td>
<td className="py-4 px-4 text-right font-semibold">$ 215.50</td>
<td className="py-4 px-4 text-right font-black">$ 646.50</td>
</tr>
</tbody>
</table>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-6">
{/* Comentario remanente */}
<div className="md:col-span-7 space-y-8">
<div className="flex gap-6 items-center bg-surface-container p-6">
<div className="bg-white p-2">
<div className="w-24 h-24 bg-stone-900 flex items-center justify-center relative overflow-hidden">
{/* Comentario remanente */}
<div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-30">
<div className="bg-white"></div><div className="bg-stone-900"></div><div className="bg-white"></div><div className="bg-stone-900"></div><div className="bg-white"></div><div className="bg-stone-900"></div>
<div className="bg-stone-900"></div><div className="bg-white"></div><div className="bg-stone-900"></div><div className="bg-white"></div><div className="bg-stone-900"></div><div className="bg-white"></div>
</div>
<span className="material-symbols-outlined text-lime-400 text-4xl" >qr_code_2</span>
</div>
</div>
<div>
<p className="text-[10px] font-black uppercase text-secondary mb-1">Fiscal Authorization</p>
<p className="font-headline text-sm font-bold text-on-surface">Código de Autorización SENIAT:</p>
<p className="font-mono text-xs font-bold text-primary mt-1">SNT-2023-44092-VLC-001</p>
<p className="text-[9px] text-secondary mt-3 leading-tight italic">Documento emitido según Providencia Administrativa N° SNAT/2011/00071 del Servicio Nacional Integrado de Administración Aduanera y Tributaria.</p>
</div>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="border-t border-surface-container pt-4">
<p className="text-[9px] font-bold text-secondary uppercase mb-8">Authorized Signature</p>
<div className="w-full h-px bg-on-surface/10 mb-2"></div>
<p className="text-[10px] font-black text-on-surface uppercase">Warehouse Manager</p>
</div>
<div className="border-t border-surface-container pt-4">
<p className="text-[9px] font-bold text-secondary uppercase mb-8">Customer Acceptance</p>
<div className="w-full h-px bg-on-surface/10 mb-2"></div>
<p className="text-[10px] font-black text-on-surface uppercase">Receiving Department</p>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="md:col-span-5 bg-stone-950 text-white p-8 self-start">
<div className="space-y-4">
<div className="flex justify-between text-xs font-bold text-stone-400 uppercase">
<span>Total Tax Base</span>
<span>$ 10,966.50</span>
</div>
<div className="flex justify-between text-xs font-bold text-stone-400 uppercase">
<span>VAT / IVA (16%)</span>
<span>$ 1,754.64</span>
</div>
<div className="flex justify-between text-xs font-bold text-lime-500 uppercase">
<span>IVA Retenido (75%)</span>
<span>- $ 1,315.98</span>
</div>
<div className="border-t border-stone-800 pt-6 mt-4">
<div className="flex justify-between items-end">
<div>
<p className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-500 mb-1">Amount Due</p>
<p className="text-xs text-stone-400 font-medium">Neto a Pagar</p>
</div>
<div className="text-right">
<p className="font-headline text-3xl font-black text-lime-400 leading-none">$ 11,405.16</p>
<p className="text-[9px] text-stone-500 mt-2 uppercase tracking-tighter">Rate: 1 USD = 35.40 VES</p>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="mt-12 text-center border-t border-surface-container pt-8">
<p className="text-[10px] font-black uppercase tracking-[0.4em] text-surface-container-highest">Performance Without Compromise • Industrial Uptime Guaranteed</p>
</div>
</div>
{/* Comentario remanente */}
<div className="max-w-5xl mx-auto mt-8 flex justify-between items-center no-print">
<div className="flex gap-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="text-[10px] font-bold text-secondary uppercase">Verified System Hash</span>
</div>
<p className="font-mono text-[9px] text-secondary">0x8892_BBAF_C12_9948_SYS_OK</p>
</div>
<p className="text-[10px] font-medium text-secondary uppercase tracking-widest">© 2024 TITAN ENGINE SYSTEMS • VALENCIA OPERATIONS</p>
</div>
</main>
{/* Comentario remanente */}

        </div>
    );
};
