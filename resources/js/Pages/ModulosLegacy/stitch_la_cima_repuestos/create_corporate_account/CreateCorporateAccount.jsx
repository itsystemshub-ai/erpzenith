import React from 'react';
import { Link } from '@inertiajs/react';

export default function CreateCorporateAccount() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<nav className="fixed top-0 w-full z-50 bg-stone-950/80 backdrop-blur-xl flex justify-between items-center px-6 py-4 max-w-full">
<div className="text-xl font-black tracking-tighter text-lime-500 font-headline uppercase">
            APEX INDUSTRIAL
        </div>
<div className="flex gap-6 items-center">
<span className="material-symbols-outlined text-stone-400 hover:text-lime-400 transition-colors duration-200 cursor-pointer">support_agent</span>
<span className="material-symbols-outlined text-stone-400 hover:text-lime-400 transition-colors duration-200 cursor-pointer">help_outline</span>
</div>
</nav>
<main className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
{/* Comentario remanente */}
<div className="flex-1 space-y-12">
<header>
<div className="inline-block bg-primary-container text-on-primary-container px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] font-headline uppercase">
                    Registration Portal // Node 01
                </div>
<h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface uppercase stamped-text leading-[0.9]">
                    MAYOR DE REPUESTO <span className="text-primary">LA CIMA, C.A.</span>
</h1>
<p className="mt-8 text-secondary text-lg max-w-lg leading-relaxed">
                    Access our heavy-duty industrial network. We provide the structural foundation for your enterprise uptime through precision-engineered engine parts and OEM logistics.
                </p>
</header>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-surface-container-low p-8 relative overflow-hidden group">
<span className="material-symbols-outlined text-primary mb-4 text-4xl" data-icon="inventory_2">inventory_2</span>
<h3 className="font-headline text-xl font-bold uppercase mb-2">Access to OEM Inventory</h3>
<p className="text-sm text-secondary">Real-time availability of verified original manufacturer industrial components.</p>
<div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="material-symbols-outlined text-9xl" data-icon="precision_manufacturing">precision_manufacturing</span>
</div>
</div>
<div className="bg-surface-container-highest p-8 relative overflow-hidden group">
<span className="material-symbols-outlined text-primary mb-4 text-4xl" data-icon="payments">payments</span>
<h3 className="font-headline text-xl font-bold uppercase mb-2">Specialized B2B Pricing</h3>
<p className="text-sm text-secondary">Volume-tiered procurement rates designed for industrial repair cycles.</p>
<div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="material-symbols-outlined text-9xl" data-icon="query_stats">query_stats</span>
</div>
</div>
<div className="bg-on-surface text-surface p-8 md:col-span-2 flex items-center justify-between">
<div>
<h3 className="font-headline text-xl font-bold uppercase mb-1">Global Industrial Reach</h3>
<p className="text-sm text-stone-400">Vetted supply chain for Valencia Edo. Carabobo region.</p>
</div>
<span className="material-symbols-outlined text-lime-500 text-5xl" data-icon="hub">hub</span>
</div>
</div>
{/* Comentario remanente */}
<div className="aspect-video bg-surface-container overflow-hidden">
<img alt="Industrial Engine Components" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="Close-up of precision engineered steel engine parts on a dark industrial workbench with technical lighting and shallow depth of field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN7JawDn7UHQ09I8cPmMcFXIka7vND22W_6JP4lPjm5jEYHFeiUB_bdiQaP31cWQnTrjuaEYaF9r4NV9-sXG_vQ356PjCXdd0l-O3tK1u8YWQHDoiXSROnYqlSRu9uw-Vsqq3IL-RhdNC9NMT2kikRQEbhGZb2Tzsh7gfMybuBsGQ-n5nXRyi5Md6AGq3KDFzBxSXbfekf3jgyF6Tr_xS4aqhK874_dM8gVpCh3XD4b5SPqH97SXdJqJV_gDn6tNOagNd21cfksZQ"/>
</div>
</div>
{/* Comentario remanente */}
<div className="w-full lg:w-[480px]">
<div className="bg-surface-container-lowest p-8 md:p-12 shadow-[24px_24px_40px_-15px_rgba(26,28,28,0.06)] relative">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/10 -z-10 clip-path-polygon"></div>
<div className="mb-10">
<h2 className="font-headline text-2xl font-bold uppercase tracking-tight">Enterprise Onboarding</h2>
<p className="text-sm text-secondary mt-2 uppercase tracking-widest font-semibold">Step 01: Identity Verification</p>
</div>
<form className="space-y-6">
{/* Comentario remanente */}
<div className="space-y-2">
<label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block">Company Name</label>
<div className="relative">
<input className="w-full bg-surface-container-highest border-none p-4 font-body text-sm placeholder:text-stone-400 focus:ring-2 focus:ring-primary transition-all" placeholder="e.g. METALURGICA CIMA S.A." type="text"/>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 text-sm" data-icon="factory">factory</span>
</div>
</div>
{/* Comentario remanente */}
<div className="space-y-2">
<label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block">RIF (Tax ID)</label>
<input className="w-full bg-surface-container-highest border-none p-4 font-body text-sm placeholder:text-stone-400 focus:ring-2 focus:ring-primary transition-all" placeholder="J-12345678-0" type="text"/>
</div>
{/* Comentario remanente */}
<div className="space-y-2">
<label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block">Work Email</label>
<div className="relative">
<input className="w-full bg-surface-container-highest border-none p-4 font-body text-sm placeholder:text-stone-400 focus:ring-2 focus:ring-primary transition-all" placeholder="procurement@company.com" type="email"/>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 text-sm" data-icon="alternate_email">alternate_email</span>
</div>
</div>
{/* Comentario remanente */}
<div className="space-y-2">
<label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block">Phone Number</label>
<input className="w-full bg-surface-container-highest border-none p-4 font-body text-sm placeholder:text-stone-400 focus:ring-2 focus:ring-primary transition-all" placeholder="+58 412-000-0000" type="tel"/>
</div>
{/* Comentario remanente */}
<div className="space-y-2">
<label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block">Secure Password</label>
<div className="relative">
<input className="w-full bg-surface-container-highest border-none p-4 font-body text-sm placeholder:text-stone-400 focus:ring-2 focus:ring-primary transition-all" placeholder="••••••••" type="password"/>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 text-sm" data-icon="lock">lock</span>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-primary text-on-primary py-5 px-6 font-headline font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20" type="submit">
                            Create Account
                        </button>
</div>
<p className="text-[10px] text-center text-stone-400 uppercase tracking-tighter leading-tight mt-6">
                        By registering, you agree to the APEX INDUSTRIAL secure node protocols and data transmission policies.
                    </p>
</form>
</div>
</div>
</main>
{/* Comentario remanente */}
<footer className="bg-on-surface text-surface-variant py-16 px-6 mt-12">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-16">
{/* Comentario remanente */}
<div className="space-y-4">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined" data-icon="location_on">location_on</span>
<h4 className="font-headline font-bold uppercase tracking-widest text-xs">Headquarters</h4>
</div>
<p className="text-stone-400 text-sm leading-relaxed uppercase">
                        AV. 119, EDIF. MULTICENTRO PASEO EL PARRAL,<br/>
                        Valencia, Edo. Carabobo.
                    </p>
</div>
{/* Comentario remanente */}
<div className="space-y-4">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined" data-icon="contact_phone">contact_phone</span>
<h4 className="font-headline font-bold uppercase tracking-widest text-xs">Direct Support</h4>
</div>
<div className="space-y-1">
<p className="text-surface-lowest text-sm font-bold">+58 424-4582766</p>
<p className="text-stone-400 text-sm uppercase">LACIMA.REPUESTOS@GMAIL.COM</p>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-stone-900 aspect-video relative overflow-hidden group">
<img alt="Location Map" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity" data-alt="Aerial topographic map of Valencia Venezuela with stylized industrial grid overlay" data-location="Valencia, Venezuela" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzNsXIeuycgnOoD0Wo2Jn8AgOePlLWcr0afQHUyElC4PnNaRKdQxl7CuqghUDKCZdFVAffstdGzXngwpdBhasPpf1LjFqi9x3sCA1Vcx1EhV_FsWJnyBr3EOqM18d6NoGvpaBHSqbB9dt2f-HVXr60LJ2Wr3E7JTVBlfP-yaCGYKUhERZsRnr5fcQKyGN2nO1oaNaffpn8VifcYcUAGXJ_eSdabX5ahnV5HHY77dyMCqvVtT8mHr1hi21ehet1UAceCGEJc-Ds2Do"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-primary px-3 py-1 text-[10px] font-bold text-on-primary uppercase">Geographic Node: Carabobo</div>
</div>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-headline font-black text-xl tracking-tighter uppercase">
                    MAYOR DE REPUESTO LA CIMA, C.A.
                </div>
<div className="text-[10px] text-stone-500 uppercase tracking-[0.3em]">
                    © 2024 Industrial Supply Chain / Node Valencia
                </div>
</div>
</div>
</footer>

        </div>
    );
};
