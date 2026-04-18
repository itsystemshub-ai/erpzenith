import React from 'react';
import { Link } from '@inertiajs/react';

export default function ProcessingOrder() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<header className="bg-zinc-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50 docked full-width top-0 sticky z-50">
<div className="flex justify-between items-center w-full px-6 py-4 max-w-[1920px] mx-auto">
<div className="text-xl font-bold tracking-tighter text-[#9ACD32] font-['Space_Grotesk'] tracking-tight uppercase">
                MAYOR DE REPUESTO LA CIMA, C.A.
            </div>
<nav className="hidden md:flex items-center space-x-8 font-['Space_Grotesk'] tracking-tight uppercase">
<a className="text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Engines</a>
<a className="text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Transmission</a>
<a className="text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Electrical</a>
<a className="text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Suspension</a>
</nav>
<div className="flex items-center space-x-6 font-['Space_Grotesk'] tracking-tight uppercase">
<a className="text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">My Account</a>
<div className="scale-95 active:scale-90 transition-transform bg-primary-container text-on-primary-container px-4 py-1.5 rounded-lg font-bold">
                    Cart (0)
                </div>
</div>
</div>
</header>
{/* Comentario remanente */}
<main className="flex-grow flex flex-col items-center justify-center relative overflow-hidden bg-zinc-950 p-6">
{/* Comentario remanente */}
<div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#496800]/20 to-transparent"></div>
</div>
{/* Comentario remanente */}
<div className="relative z-10 w-full max-w-4xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
{/* Comentario remanente */}
<div className="lg:col-span-5 flex flex-col items-center justify-center">
<div className="relative w-64 h-64 flex items-center justify-center">
{/* Comentario remanente */}
<div className="absolute inset-0 border-4 border-dashed border-[#9ACD32]/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border-2 border-primary-container/20 rounded-full animate-[spin_6s_linear_reverse_infinite]"></div>
{/* Comentario remanente */}
<div className="relative bg-zinc-900 w-48 h-48 rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(154,205,50,0.2)] overflow-hidden">
<div className="scan-line absolute w-full top-0 left-0 opacity-50"></div>
<span className="material-symbols-outlined text-6xl text-primary-container animate-subtle-pulse" data-icon="settings_suggest">settings_suggest</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="lg:col-span-7 space-y-8">
<div className="space-y-2">
<h1 className="font-headline text-4xl lg:text-5xl text-white font-bold tracking-tighter uppercase leading-none">
                            System <span className="text-primary-container">Validating</span> Order
                        </h1>
<p className="font-body text-zinc-400 text-lg">Transaction ID: <span className="font-mono text-zinc-200">#MX-9982-LC</span></p>
</div>
{/* Comentario remanente */}
<div className="space-y-4">
{/* Comentario remanente */}
<div className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-900/50 border border-white/5">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container text-sm" data-icon="check" data-weight="fill" >check</span>
</div>
<div className="flex-grow">
<div className="text-zinc-200 font-headline uppercase text-sm tracking-widest font-bold">Verifying Stock Availability</div>
<div className="text-zinc-500 text-xs font-body">Global Inventory Database Synced</div>
</div>
<div className="text-[#9ACD32] font-mono text-sm">OK</div>
</div>
{/* Comentario remanente */}
<div className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-900 border-l-4 border-primary-container shadow-xl">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-container/10 border border-primary-container flex items-center justify-center">
<div className="w-2 h-2 bg-primary-container rounded-full animate-ping"></div>
</div>
<div className="flex-grow">
<div className="text-white font-headline uppercase text-sm tracking-widest font-bold">Generating Pro-forma Invoice</div>
<div className="text-zinc-400 text-xs font-body">Constructing PDF data structures...</div>
</div>
<div className="flex space-x-1">
<div className="w-1.5 h-1.5 bg-primary-container rounded-full animate-bounce [animation-delay:-0.3s]"></div>
<div className="w-1.5 h-1.5 bg-primary-container rounded-full animate-bounce [animation-delay:-0.15s]"></div>
<div className="w-1.5 h-1.5 bg-primary-container rounded-full animate-bounce"></div>
</div>
</div>
{/* Comentario remanente */}
<div className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-900/30 border border-white/5 opacity-50">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-600">
<span className="material-symbols-outlined text-sm" data-icon="pending">pending</span>
</div>
<div className="flex-grow">
<div className="text-zinc-500 font-headline uppercase text-sm tracking-widest font-bold">Calculating Logistics</div>
<div className="text-zinc-600 text-xs font-body">Queued after invoice generation</div>
</div>
<div className="text-zinc-700 font-mono text-sm">WAIT</div>
</div>
</div>
{/* Comentario remanente */}
<div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
<div className="bg-zinc-900/40 p-3 rounded-lg">
<span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Protocol</span>
<span className="block text-zinc-300 font-mono text-xs">ECC-256 SECURED</span>
</div>
<div className="bg-zinc-900/40 p-3 rounded-lg">
<span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Gateway</span>
<span className="block text-zinc-300 font-mono text-xs">VAL-NODE-04</span>
</div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"></div>
<div className="absolute top-1/4 -left-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full"></div>
</main>
{/* Comentario remanente */}
<footer className="bg-zinc-900 w-full mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-12 w-full">
<div className="space-y-4">
<div className="font-['Space_Grotesk'] font-black text-zinc-100 text-lg uppercase tracking-tight">MAYOR DE REPUESTO LA CIMA, C.A.</div>
<div className="h-1 w-12 bg-primary"></div>
<p className="text-zinc-500 text-sm font-['Inter'] antialiased">Premium industrial engine components and technical solutions for heavy-duty machinery across Venezuela.</p>
</div>
<div className="space-y-2">
<h4 className="text-[#9ACD32] font-bold font-['Inter'] text-sm uppercase tracking-widest mb-4">Contact Info</h4>
<div className="space-y-1">
<a className="block text-zinc-500 hover:text-[#9ACD32] transition-colors text-sm font-['Inter']" href="mailto:info@lacima.com">General: info@lacima.com</a>
<a className="block text-zinc-500 hover:text-[#9ACD32] transition-colors text-sm font-['Inter']" href="mailto:sales@lacima.com">Orders: sales@lacima.com</a>
</div>
</div>
<div className="space-y-2">
<h4 className="text-[#9ACD32] font-bold font-['Inter'] text-sm uppercase tracking-widest mb-4">Support</h4>
<div className="space-y-1">
<div className="text-zinc-500 opacity-80 hover:opacity-100 text-sm font-['Inter']">Phone: +58 241-5550101</div>
<div className="text-zinc-500 opacity-80 hover:opacity-100 text-sm font-['Inter']">Phone: +58 412-5550202</div>
</div>
</div>
<div className="space-y-4">
<h4 className="text-[#9ACD32] font-bold font-['Inter'] text-sm uppercase tracking-widest mb-4">Certification</h4>
<div className="p-4 bg-zinc-800 rounded border border-white/5">
<img className="h-10 opacity-50 grayscale hover:grayscale-0 transition-all" data-alt="High-tech certification seal with metallic texture and industrial gear icon in gold and chrome" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfKUpQaTMq5c67KS7B-vIr-io3e2V6bk5ptnjP26KwqG1gvtZFJSxPM5oTc_nsr7sgvqJRfd-XnBgUlkz0B5Iindo0GC3NaXvnNsEZgzcqKjhgNTyiAkRM_gXdRGoGZrm-hT7fg9s6CIgD2KZBZ_GEi7cLf8FkbaBX7P4huSP4Mi406-ZqpXn6CO1KM0b1Ad3mM2xcyKrVsk-jB_u0vwnVvUqeQb6dctkaPSByQcW-6VaTjVhma0vLx-vRh2ZSn-OOnjKQjMjStuw"/>
</div>
</div>
</div>
<div className="bg-zinc-800 px-8 py-4 text-center">
<span className="text-zinc-500 text-xs font-['Inter'] antialiased">© 2024 MAYOR DE REPUESTO LA CIMA, C.A. RIF: J-40308741-5. Valencia, Venezuela.</span>
</div>
</footer>

        </div>
    );
};
