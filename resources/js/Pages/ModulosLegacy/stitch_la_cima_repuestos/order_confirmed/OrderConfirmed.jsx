import React from 'react';
import { Link } from '@inertiajs/react';

export default function OrderConfirmed() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<header className="bg-zinc-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50 docked full-width top-0 sticky z-50">
<nav className="flex justify-between items-center w-full px-6 py-4 max-w-[1920px] mx-auto">
<div className="text-xl font-bold tracking-tighter text-[#9ACD32] font-['Space_Grotesk'] uppercase">
                MAYOR DE REPUESTO LA CIMA, C.A.
            </div>
<div className="hidden md:flex items-center gap-8 font-['Space_Grotesk'] tracking-tight uppercase">
<a className="text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Engines</a>
<a className="text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Transmission</a>
<a className="text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Electrical</a>
<a className="text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Suspension</a>
</div>
<div className="flex items-center gap-6 font-['Space_Grotesk'] tracking-tight uppercase">
<button className="text-zinc-400 font-medium hover:text-white transition-colors duration-200 scale-95 active:scale-90 transition-transform">Cart (0)</button>
<button className="text-[#9ACD32] border-b-2 border-[#9ACD32] pb-1 scale-95 active:scale-90 transition-transform">My Account</button>
</div>
</nav>
</header>
<main className="flex-grow container mx-auto px-4 py-12 max-w-6xl">
{/* Comentario remanente */}
<section className="mb-12 text-center md:text-left grid md:grid-cols-2 gap-8 items-center">
<div className="order-2 md:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-xs font-bold uppercase tracking-widest mb-4">
<span className="material-symbols-outlined text-sm" >check_circle</span>
                    Order Confirmed
                </div>
<h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4 leading-none">
                    Thank you <br/><span className="text-primary">for your trust.</span>
</h1>
<p className="text-secondary text-lg max-w-md">Your industrial parts order <span className="font-mono font-bold text-on-surface">#LC-99284-Z</span> has been received and is currently being processed by our engineering team.</p>
<div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
<button className="bg-primary text-on-primary px-8 py-3 font-bold uppercase text-sm tracking-widest flex items-center gap-2 scale-95 hover:scale-100 active:scale-90 transition-all">
<span className="material-symbols-outlined">download</span>
                        Download PDF Invoice
                    </button>
<button className="bg-surface-container-high border border-outline/15 px-8 py-3 font-bold uppercase text-sm tracking-widest text-on-surface hover:bg-surface-container-highest transition-colors">
                        View My Orders
                    </button>
</div>
</div>
<div className="order-1 md:order-2 relative aspect-square md:aspect-video rounded-xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="High-precision close up of a heavy duty industrial engine part with metallic texture and sharp engineering focus in a dark workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD51TI-510OC6ALCmY7ohD6dU8JfHKqLV8IFlvx7okG-940A0iFx7-Vor4MRuXZgmnmCyUFnIz9lYEQzvS-ZocE6CW_-acXOb4ZmHb7icO9M7z5geBiy2ytqZvfD4er_DGjH12ptMrygl-nmIFcLylBJKx_-BHgGjjClX9VMwCh01lESbYtALnL8dWHzwZgIXSWGANcMOFRbQ7K9EbfhdcFrV65UO00LW5lkTmBYQUeRTq2p60yWRYEyBeoscjWohuM7EraSQoG6OU"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div className="text-white">
<p className="text-[10px] uppercase tracking-[0.3em] opacity-70">Inventory Location</p>
<p className="font-headline font-bold">Valencia Hub - VZ</p>
</div>
<div className="text-[#9ACD32] font-headline text-2xl font-black">7 ITEMS</div>
</div>
</div>
</section>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
{/* Comentario remanente */}
<div className="md:col-span-2 bg-surface-container-low p-8 rounded-lg relative overflow-hidden group">
<div className="relative z-10">
<h2 className="text-2xl font-bold uppercase tracking-tight mb-6 flex items-center gap-3">
<span className="material-symbols-outlined text-primary">inventory_2</span>
                        Parts Summary
                    </h2>
<div className="space-y-1">
{/* Comentario remanente */}
<div className="grid grid-cols-12 gap-4 pb-2 text-[10px] uppercase tracking-widest text-secondary font-bold px-4">
<div className="col-span-6">Component Description</div>
<div className="col-span-2 text-center">Qty</div>
<div className="col-span-4 text-right">Price (USD)</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-12 gap-4 py-4 px-4 bg-surface-container-lowest items-center rounded">
<div className="col-span-6">
<p className="font-bold text-sm">V8 Engine Head Gasket Set</p>
<p className="text-[10px] text-secondary font-mono">PN: HG-882-QX</p>
</div>
<div className="col-span-2 text-center font-mono font-bold">01</div>
<div className="col-span-4 text-right font-bold text-primary">$450.00</div>
</div>
<div className="grid grid-cols-12 gap-4 py-4 px-4 bg-surface-container items-center rounded">
<div className="col-span-6">
<p className="font-bold text-sm">Turbocharger Intercooler Hose</p>
<p className="text-[10px] text-secondary font-mono">PN: TI-004-BL</p>
</div>
<div className="col-span-2 text-center font-mono font-bold">02</div>
<div className="col-span-4 text-right font-bold text-primary">$180.00</div>
</div>
<div className="grid grid-cols-12 gap-4 py-4 px-4 bg-surface-container-lowest items-center rounded">
<div className="col-span-6">
<p className="font-bold text-sm">Heavy Duty Oil Filter - Industrial</p>
<p className="text-[10px] text-secondary font-mono">PN: OF-550-HD</p>
</div>
<div className="col-span-2 text-center font-mono font-bold">04</div>
<div className="col-span-4 text-right font-bold text-primary">$120.00</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-outline/10 flex justify-between items-end">
<div>
<p className="text-[10px] uppercase tracking-widest text-secondary mb-1">Status</p>
<span className="text-xs font-bold text-primary px-2 py-0.5 bg-primary/10 rounded uppercase">Awaiting Payment</span>
</div>
<div className="text-right">
<p className="text-[10px] uppercase tracking-widest text-secondary">Total Amount Due</p>
<p className="text-4xl font-headline font-black text-on-surface">$750.00</p>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="absolute -bottom-12 -right-12 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
<span className="material-symbols-outlined text-[300px]">engineering</span>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-on-surface text-surface p-8 rounded-lg flex flex-col">
<h2 className="text-2xl font-bold uppercase tracking-tight mb-8 text-[#9ACD32]">Next Steps</h2>
<div className="space-y-8 flex-grow">
<div className="flex gap-4">
<div className="h-8 w-8 rounded bg-[#9ACD32] text-on-surface flex items-center justify-center font-black flex-shrink-0">1</div>
<div>
<h3 className="font-bold uppercase text-xs tracking-widest mb-1">Payment Validation</h3>
<p className="text-xs text-secondary leading-relaxed">Submit your transfer receipt to <span className="text-[#9ACD32]">sales@lacima.com</span> or upload via the portal to begin assembly.</p>
</div>
</div>
<div className="flex gap-4">
<div className="h-8 w-8 rounded border border-secondary text-secondary flex items-center justify-center font-black flex-shrink-0">2</div>
<div>
<h3 className="font-bold uppercase text-xs tracking-widest mb-1">Shipping Coordinates</h3>
<p className="text-xs text-secondary leading-relaxed">Once validated, our logistics team will dispatch your items to the registered address in Valencia.</p>
</div>
</div>
<div className="flex gap-4">
<div className="h-8 w-8 rounded border border-secondary text-secondary flex items-center justify-center font-black flex-shrink-0">3</div>
<div>
<h3 className="font-bold uppercase text-xs tracking-widest mb-1">Final Delivery</h3>
<p className="text-xs text-secondary leading-relaxed">Arrival expected within 24-48 business hours via TransporCima Heavy Cargo.</p>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10">
<p className="text-[10px] text-zinc-500 italic">Need immediate help? Call +58 412-5550202</p>
</div>
</div>
</div>
{/* Comentario remanente */}
<section className="grid md:grid-cols-4 gap-6">
<div className="md:col-span-1 bg-surface-container-high p-6 rounded-lg">
<h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Destination</h3>
<p className="font-bold mb-1">Empresas Polar S.A.</p>
<p className="text-sm text-secondary">Avenida Industrial 14-B<br/>Zona Industrial II<br/>Valencia, Carabobo 2001<br/>Venezuela</p>
<button className="mt-6 text-primary font-bold uppercase text-[10px] tracking-widest flex items-center gap-1 group">
                    Change Address
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
</div>
<div className="md:col-span-3 rounded-lg overflow-hidden h-[200px] relative grayscale brightness-75 hover:grayscale-0 transition-all duration-1000">
<img className="w-full h-full object-cover" data-alt="Modern logistics map visualization showing industrial route hubs with glowing data points on a dark tech background" data-location="Valencia, Venezuela" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmU9ZmFhTOcMc8Yetxn4zYeo2XbTFqcwW0bmPgdTY1k9AWOBIt5hEDAZuZHEo4e8rywNeN4JYEaC5159ISSYOCu8p_yZXxUfUmPIDIKIXzpenh75y2E0DXu49W_7F57YsAic3xr2mS6c3KUUFNgtjgOhgdYcUMkvpf0l49ro0e1qBT4J9bgw_QnX7SrI8UF-PBRbsjX6rqJBiCRVzuX3908JTrGa7PTU0bPcCNed9dL019nA7SlibnH0IVzQa9Tat_gWEzXZWXMnw"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-primary-container p-4 rounded-full shadow-2xl animate-pulse">
<span className="material-symbols-outlined text-on-primary-container text-3xl" >local_shipping</span>
</div>
</div>
</div>
</section>
</main>
{/* Comentario remanente */}
<footer className="bg-zinc-900 w-full mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-12 w-full max-w-[1920px] mx-auto">
<div>
<div className="font-['Space_Grotesk'] font-black text-zinc-100 text-lg mb-4 uppercase tracking-tighter">
                    MAYOR DE REPUESTO LA CIMA, C.A.
                </div>
<p className="text-zinc-500 text-sm antialiased font-['Inter'] leading-relaxed">
                    Reliability engineered. Providing high-performance industrial components for Venezuela's toughest sectors since 2014.
                </p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-[#9ACD32] font-bold uppercase text-xs tracking-widest mb-2">Technical Support</h4>
<a className="text-zinc-500 font-['Inter'] text-sm hover:text-[#9ACD32] transition-colors opacity-80 hover:opacity-100" href="mailto:info@lacima.com">General: info@lacima.com</a>
<a className="text-zinc-500 font-['Inter'] text-sm hover:text-[#9ACD32] transition-colors opacity-80 hover:opacity-100" href="mailto:sales@lacima.com">Orders: sales@lacima.com</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-[#9ACD32] font-bold uppercase text-xs tracking-widest mb-2">Direct Contact</h4>
<p className="text-zinc-500 font-['Inter'] text-sm opacity-80">Phone: +58 241-5550101</p>
<p className="text-zinc-500 font-['Inter'] text-sm opacity-80">Phone: +58 412-5550202</p>
</div>
<div>
<h4 className="text-[#9ACD32] font-bold uppercase text-xs tracking-widest mb-2">Legal Information</h4>
<p className="text-zinc-500 text-sm antialiased font-['Inter']">
                    © 2024 MAYOR DE REPUESTO LA CIMA, C.A. <br/>
                    RIF: J-40308741-5. <br/>
                    Valencia, Venezuela.
                </p>
<div className="h-[1px] bg-zinc-800 w-full my-4"></div>
<div className="flex gap-4">
<span className="material-symbols-outlined text-zinc-600 hover:text-[#9ACD32] cursor-pointer transition-colors">manufacturing</span>
<span className="material-symbols-outlined text-zinc-600 hover:text-[#9ACD32] cursor-pointer transition-colors">precision_manufacturing</span>
<span className="material-symbols-outlined text-zinc-600 hover:text-[#9ACD32] cursor-pointer transition-colors">dock</span>
</div>
</div>
</div>
</footer>

        </div>
    );
};
