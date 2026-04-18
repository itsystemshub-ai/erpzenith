import React from 'react';
import { Link } from '@inertiajs/react';

export default function AdvancedSearch() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<header className="bg-zinc-950/90 backdrop-blur-xl docked full-width top-0 sticky z-50 border-b border-white/5 shadow-2xl shadow-black/50">
<div className="flex justify-between items-center w-full px-6 py-4 max-w-[1920px] mx-auto">
<div className="text-xl font-bold tracking-tighter text-[#9ACD32] font-['Space_Grotesk']">
                MAYOR DE REPUESTO LA CIMA, C.A.
            </div>
<nav className="hidden md:flex gap-8 items-center">
<a className="font-['Space_Grotesk'] tracking-tight uppercase text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Engines</a>
<a className="font-['Space_Grotesk'] tracking-tight uppercase text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Transmission</a>
<a className="font-['Space_Grotesk'] tracking-tight uppercase text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Electrical</a>
<a className="font-['Space_Grotesk'] tracking-tight uppercase text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Suspension</a>
</nav>
<div className="flex items-center gap-6">
<div className="hidden lg:block relative group">
<input className="bg-zinc-900 border-none text-white text-sm px-4 py-2 rounded-lg w-64 focus:ring-1 focus:ring-[#9ACD32] transition-all" placeholder="Quick search..." type="text"/>
<span className="material-symbols-outlined absolute right-3 top-2 text-zinc-500 text-sm">search</span>
</div>
<button className="font-['Space_Grotesk'] tracking-tight uppercase text-zinc-400 font-medium hover:text-white transition-colors duration-200">My Account</button>
<button className="bg-[#9ACD32] text-zinc-950 px-4 py-2 font-bold font-['Space_Grotesk'] uppercase tracking-tight scale-95 active:scale-90 transition-transform">Cart (0)</button>
</div>
</div>
</header>
<main className="min-h-screen blueprint-bg">
{/* Comentario remanente */}
<section className="max-w-[1920px] mx-auto px-6 py-12 md:py-20 flex flex-col items-center">
<div className="w-full max-w-4xl text-center mb-12">
<h1 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter text-on-surface mb-4">
                    Technical <span className="text-primary">Component</span> Search
                </h1>
<p className="text-secondary text-lg max-w-2xl mx-auto font-light">
                    Precision engineering requires exact specifications. Locate high-performance industrial parts through our advanced technical filtering system.
                </p>
</div>
{/* Comentario remanente */}
<div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Comentario remanente */}
<aside className="lg:col-span-3 space-y-6">
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm">
<h3 className="font-headline font-bold text-sm uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-sm">tune</span> Filter Matrix
                        </h3>
{/* Comentario remanente */}
<div className="mb-8">
<label className="block font-headline text-xs font-bold uppercase tracking-wider text-secondary mb-3">Manufacturer</label>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded-sm border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox"/>
<span className="text-sm text-on-surface group-hover:text-primary transition-colors">Cummins</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="rounded-sm border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox"/>
<span className="text-sm text-on-surface group-hover:text-primary transition-colors">Volvo Penta</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded-sm border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox"/>
<span className="text-sm text-on-surface group-hover:text-primary transition-colors">Detroit Diesel</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="rounded-sm border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox"/>
<span className="text-sm text-on-surface group-hover:text-primary transition-colors">Caterpillar</span>
</label>
</div>
</div>
{/* Comentario remanente */}
<div className="mb-8">
<label className="block font-headline text-xs font-bold uppercase tracking-wider text-secondary mb-3">Series / Platform</label>
<select className="w-full bg-surface-container-highest border-none text-sm py-2 px-3 rounded focus:ring-2 focus:ring-primary">
<option>All Series</option>
<option>ISX15 / X15</option>
<option>D13 / D16</option>
<option>Series 60</option>
<option>C15 / C18 ACERT</option>
</select>
</div>
{/* Comentario remanente */}
<div className="mb-8">
<label className="block font-headline text-xs font-bold uppercase tracking-wider text-secondary mb-3">Part Category</label>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="border-outline-variant text-primary focus:ring-primary w-4 h-4" name="cat" type="radio"/>
<span className="text-sm text-on-surface group-hover:text-primary transition-colors">Cylinder Heads</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="border-outline-variant text-primary focus:ring-primary w-4 h-4" name="cat" type="radio"/>
<span className="text-sm text-on-surface group-hover:text-primary transition-colors">Fuel Systems</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="border-outline-variant text-primary focus:ring-primary w-4 h-4" name="cat" type="radio"/>
<span className="text-sm text-on-surface group-hover:text-primary transition-colors">Turbochargers</span>
</label>
</div>
</div>
{/* Comentario remanente */}
<div>
<label className="block font-headline text-xs font-bold uppercase tracking-wider text-secondary mb-3">Price Range (USD)</label>
<div className="flex gap-2 items-center">
<input className="w-full bg-surface-container-highest border-none text-xs p-2 rounded" placeholder="Min" type="number"/>
<span className="text-outline-variant">—</span>
<input className="w-full bg-surface-container-highest border-none text-xs p-2 rounded" placeholder="Max" type="number"/>
</div>
</div>
<button className="w-full mt-8 bg-on-surface text-surface py-3 font-headline font-bold text-xs uppercase tracking-widest hover:bg-primary transition-colors">
                            Apply Parameters
                        </button>
</div>
</aside>
{/* Comentario remanente */}
<div className="lg:col-span-9 space-y-8">
{/* Comentario remanente */}
<div className="relative">
<div className="flex items-center bg-surface-container-lowest shadow-xl rounded-lg overflow-hidden border-2 border-transparent focus-within:border-primary transition-all">
<span className="material-symbols-outlined ml-6 text-outline">search</span>
<input className="w-full border-none bg-transparent py-6 px-4 text-xl font-headline focus:ring-0 placeholder:text-outline/50" placeholder="Search by Part Number or Keyword..." type="text" value="High pressure fuel injector assembly"/>
<button className="bg-primary text-on-primary px-10 py-6 font-headline font-black uppercase tracking-tighter hover:bg-on-primary-container transition-colors">
                                Search
                            </button>
</div>
{/* Comentario remanente */}
<div className="absolute top-full left-0 right-0 mt-2 bg-surface-container-lowest shadow-2xl rounded-lg z-10 overflow-hidden border border-surface-container-highest">
<div className="p-3 bg-surface-container-low text-[10px] font-bold uppercase tracking-widest text-secondary">Technical Suggestions</div>
<div className="p-4 hover:bg-surface-container-high cursor-pointer flex justify-between items-center group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline">settings_input_component</span>
<div>
<span className="text-on-surface font-medium">Injector 2872405</span>
<p className="text-xs text-secondary">Cummins ISX15 Engine Series</p>
</div>
</div>
<span className="text-[10px] font-headline bg-primary-container text-on-primary-container px-2 py-1 rounded-sm uppercase">In Stock</span>
</div>
<div className="p-4 hover:bg-surface-container-high cursor-pointer flex justify-between items-center">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-outline">settings_input_component</span>
<div>
<span className="text-on-surface font-medium">Fuel Rail High Pressure</span>
<p className="text-xs text-secondary">Volvo D13 Platform</p>
</div>
</div>
<span className="text-xs text-outline italic">2 variations available</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="flex flex-wrap gap-2 items-center mt-4">
<span className="text-xs font-bold uppercase tracking-wider text-outline-variant mr-2">Active:</span>
<div className="bg-primary-container/20 text-on-primary-container border border-primary-container flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium">
                            Volvo Penta <button className="material-symbols-outlined text-sm">close</button>
</div>
<div className="bg-primary-container/20 text-on-primary-container border border-primary-container flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium">
                            Fuel Systems <button className="material-symbols-outlined text-sm">close</button>
</div>
<button className="text-xs text-primary font-bold uppercase hover:underline ml-2">Clear All</button>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Comentario remanente */}
<div className="bg-surface-container-lowest group relative p-1 rounded-lg overflow-hidden transition-all hover:shadow-2xl">
<div className="relative aspect-video overflow-hidden rounded-md bg-surface-container-high">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Close-up of a high-precision metal engine fuel injector with intricate metallic details and mechanical precision lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdih3XW_e6_FAaQCp97gTQ45lzDlWb-bqNy-qbZPTpjtZq6aw5z4etnzjXUGKuQFlngtq3YdAaSTr87jAH8HHYJuRCDpo1EdUd6pt6ibpk2vkdqe_GECKhP9XhwhflYVuzRE_Fvt1FvFn03r5TzKgjhfH9f5i6v5Nr9FqWaWVluKsjoAFyzG1IUTKkrrqIETfK-A3RYRPnGOUL5ww9_DE7OkFQjFgW7Z9PGLbGwE35qH4qoQ27Wop-IhkehsRBlfC9sKM-fpgeFcQ"/>
<div className="absolute top-4 left-4 bg-zinc-950 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1">PN: 2872405-X</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h4 className="font-headline font-bold text-lg leading-tight uppercase group-hover:text-primary transition-colors">Fuel Injector Assembly</h4>
<span className="text-primary font-headline font-black text-xl tracking-tighter">$845.00</span>
</div>
<p className="text-secondary text-sm mb-6 line-clamp-2">High-performance fuel delivery system optimized for Volvo D13 engine architectures.</p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-surface-container-low p-3 rounded">
<span className="block text-[10px] uppercase tracking-wider text-outline font-bold">Manufacturer</span>
<span className="text-xs font-bold text-on-surface">Volvo Penta</span>
</div>
<div className="bg-surface-container-low p-3 rounded">
<span className="block text-[10px] uppercase tracking-wider text-outline font-bold">Condition</span>
<span className="text-xs font-bold text-on-surface">OEM New</span>
</div>
</div>
<button className="w-full border-2 border-on-surface text-on-surface py-3 font-headline font-bold text-xs uppercase tracking-widest hover:bg-on-surface hover:text-white transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">visibility</span> View Technical Specs
                                </button>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-lowest group relative p-1 rounded-lg overflow-hidden transition-all hover:shadow-2xl">
<div className="relative aspect-video overflow-hidden rounded-md bg-surface-container-high">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Technical view of heavy duty diesel engine components showing metallic textures and clean industrial engineering aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClaz8sOkb-CeOYvXAf4B8fgMsCxBzpFNHni0H_kNdeaJBOGQLb1EzqGXvAH7ikXhhnCau00uiD-9WodcYGIVBEJSMHQEY9WkURlQh1qqQ1HgwkdWM1B6XffpkPiio0llSYq0FPi32Q2J0I_0ExDvXP9kdQyiQ_hi8k7e1f3ZbiYRX0EdNzop6YKm4DaNp0zpEABZSwMR5AbFfdppRJo3IbN0OhY7nj3RSMfVHWYVkL05m_RfxCNhjkZC4BwMR34_EHnNCh-1O10Pc"/>
<div className="absolute top-4 left-4 bg-zinc-950 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1">PN: D16-FUEL-99</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h4 className="font-headline font-bold text-lg leading-tight uppercase group-hover:text-primary transition-colors">Common Rail Pump</h4>
<span className="text-primary font-headline font-black text-xl tracking-tighter">$1,290.00</span>
</div>
<p className="text-secondary text-sm mb-6 line-clamp-2">Precision machined pressure pump for heavy-duty marine and industrial applications.</p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-surface-container-low p-3 rounded">
<span className="block text-[10px] uppercase tracking-wider text-outline font-bold">Manufacturer</span>
<span className="text-xs font-bold text-on-surface">Volvo Penta</span>
</div>
<div className="bg-surface-container-low p-3 rounded">
<span className="block text-[10px] uppercase tracking-wider text-outline font-bold">Condition</span>
<span className="text-xs font-bold text-on-surface">Refurbished</span>
</div>
</div>
<button className="w-full border-2 border-on-surface text-on-surface py-3 font-headline font-bold text-xs uppercase tracking-widest hover:bg-on-surface hover:text-white transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">visibility</span> View Technical Specs
                                </button>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="pt-10 flex flex-col items-center">
<button className="group flex items-center gap-4 bg-surface-container-highest px-8 py-4 rounded-full transition-all hover:bg-primary-container">
<span className="text-xs font-headline font-bold uppercase tracking-widest">Load More Results</span>
<span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">expand_more</span>
</button>
<p className="text-[10px] text-outline font-bold uppercase tracking-[0.2em] mt-6">Displaying 2 of 144 components found</p>
</div>
</div>
</div>
</section>
{/* Comentario remanente */}
<section className="bg-zinc-950 text-white py-24 overflow-hidden relative">
<div className="absolute inset-0 opacity-10 blueprint-bg grayscale invert"></div>
<div className="max-w-[1920px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8 leading-none">
                            Precision <br/><span className="text-primary-container">Documentation</span>
</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-lg">
<span className="material-symbols-outlined text-primary-container">description</span>
</div>
<div>
<h4 className="font-headline font-bold uppercase text-sm tracking-wide">Interactive CAD Views</h4>
<p className="text-zinc-500 text-sm">View component diagrams and explosive views directly in your browser.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-lg">
<span className="material-symbols-outlined text-primary-container">verified</span>
</div>
<div>
<h4 className="font-headline font-bold uppercase text-sm tracking-wide">OEM Cross-Reference</h4>
<p className="text-zinc-500 text-sm">Validate part compatibility across major industrial manufacturers instantly.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-primary-container/20 blur-3xl rounded-full"></div>
<img className="relative rounded-xl shadow-2xl border border-white/10 grayscale" data-alt="Macro photography of blueprinted mechanical plans with digital UI overlays highlighting precise engineering measurements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp_go7_XzNq6g-tmy9bpYLTd3_FBXd6B2kXx45Se-1-1Fgn2GasArxzKSx0cpR9a4A0wUur7EOKn0Lb-AV4Qy_mn96N86-SZYDhgs1RxIxsyp4XGlTSM-H2odaoKMCrl3yY6vTltIeNIK2XP0tOmRWCLqAjwkMLgkbAG1u1pHjCbZRYY_DIK1ARS2ZI6HlEBrk07jJqZOVZ3f4EvUOt5K1L5ttCmt9LF0Wz1DgbKDKBSV0KSa617nY1PRQVsew99Hv2CfGWqTzBow"/>
</div>
</div>
</div>
</section>
</main>
{/* Comentario remanente */}
<footer className="bg-zinc-900 w-full mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-12 w-full">
<div className="flex flex-col gap-6">
<div className="font-['Space_Grotesk'] font-black text-zinc-100 text-2xl tracking-tighter uppercase">
                    LA CIMA, C.A.
                </div>
<p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                    Leading distributor of high-performance heavy-duty engine components across Venezuela. Engineered for uptime.
                </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-headline font-bold text-[#9ACD32] uppercase text-xs tracking-[0.2em]">Contact Channels</h4>
<ul className="space-y-3">
<li className="flex items-center gap-2 group transition-colors cursor-pointer">
<span className="material-symbols-outlined text-xs text-zinc-500">mail</span>
<span className="text-zinc-500 text-sm font-['Inter'] hover:text-[#9ACD32]">info@lacima.com</span>
</li>
<li className="flex items-center gap-2 group transition-colors cursor-pointer">
<span className="material-symbols-outlined text-xs text-zinc-500">shopping_cart</span>
<span className="text-zinc-500 text-sm font-['Inter'] hover:text-[#9ACD32]">sales@lacima.com</span>
</li>
</ul>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-headline font-bold text-[#9ACD32] uppercase text-xs tracking-[0.2em]">Support Lines</h4>
<ul className="space-y-3">
<li className="flex items-center gap-2 group transition-colors cursor-pointer">
<span className="material-symbols-outlined text-xs text-zinc-500">call</span>
<span className="text-zinc-500 text-sm font-['Inter'] hover:text-[#9ACD32]">+58 241-5550101</span>
</li>
<li className="flex items-center gap-2 group transition-colors cursor-pointer">
<span className="material-symbols-outlined text-xs text-zinc-500">call</span>
<span className="text-zinc-500 text-sm font-['Inter'] hover:text-[#9ACD32]">+58 412-5550202</span>
</li>
</ul>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-headline font-bold text-[#9ACD32] uppercase text-xs tracking-[0.2em]">Operations</h4>
<p className="text-zinc-500 text-sm leading-relaxed">
                    HQ: Valencia, Edo. Carabobo.<br/>
                    Mon - Fri: 08:00 - 17:00<br/>
                    Sat: 09:00 - 13:00
                </p>
</div>
</div>
<div className="bg-zinc-800 px-8 py-6 w-full flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-zinc-500 text-xs font-['Inter']">© 2024 MAYOR DE REPUESTO LA CIMA, C.A. RIF: J-40308741-5. Valencia, Venezuela.</span>
<div className="flex gap-6">
<a className="text-zinc-500 text-xs hover:text-[#9ACD32] transition-colors" href="#">Privacy Policy</a>
<a className="text-zinc-500 text-xs hover:text-[#9ACD32] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

        </div>
    );
};
