import React from 'react';
import { Link } from '@inertiajs/react';

export default function CatalogListView() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<header className="bg-zinc-950/90 backdrop-blur-xl docked full-width top-0 sticky z-50 border-b border-white/5 shadow-2xl shadow-black/50">
<div className="flex justify-between items-center w-full px-6 py-4 max-w-[1920px] mx-auto">
<div className="text-xl font-bold tracking-tighter text-[#9ACD32] font-['Space_Grotesk']">
                MAYOR DE REPUESTO LA CIMA, C.A.
            </div>
<nav className="hidden lg:flex items-center gap-8 font-['Space_Grotesk'] tracking-tight uppercase">
<a className="text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Engines</a>
<a className="text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Transmission</a>
<a className="text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Electrical</a>
<a className="text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Suspension</a>
</nav>
<div className="flex items-center gap-6">
<div className="relative hidden sm:block">
<input className="bg-zinc-900 text-white text-xs border-none rounded-none py-2 pl-4 pr-10 w-64 focus:ring-1 focus:ring-[#9ACD32]" placeholder="Search Part Number..." type="text"/>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" data-icon="search">search</span>
</div>
<div className="flex items-center gap-4 font-['Space_Grotesk'] tracking-tight uppercase text-xs">
<button className="text-zinc-400 hover:text-white transition-colors">My Account</button>
<button className="text-[#9ACD32] border border-[#9ACD32]/30 px-4 py-1 hover:bg-[#9ACD32] hover:text-zinc-950 transition-all duration-200">Cart (0)</button>
</div>
</div>
</div>
</header>
<main className="min-h-screen blueprint-bg">
{/* Comentario remanente */}
<div className="px-6 py-12 max-w-[1920px] mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div className="space-y-2">
<span className="text-[#496800] font-bold text-xs tracking-widest uppercase">Inventory System v4.0</span>
<h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                        Engine <br/><span className="text-[#9ACD32]">Components</span>
</h1>
</div>
<div className="flex gap-2">
<button className="bg-surface-container-highest p-3 flex items-center justify-center hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
</button>
<button className="bg-[#496800] text-white p-3 flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="list">list</span>
</button>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-low p-6 mb-8 flex flex-wrap items-center gap-8 border-l-4 border-[#496800]">
<div className="flex flex-col gap-1">
<label className="text-[10px] font-bold uppercase text-secondary">Sort By</label>
<select className="bg-transparent border-none text-sm font-bold p-0 focus:ring-0 cursor-pointer">
<option>Performance High-to-Low</option>
<option>Price Ascending</option>
<option>Manufacturer</option>
</select>
</div>
<div className="h-8 w-px bg-outline-variant/30"></div>
<div className="flex flex-col gap-1">
<label className="text-[10px] font-bold uppercase text-secondary">Manufacturer</label>
<div className="flex gap-4">
<button className="text-xs font-bold text-[#496800]">ALL</button>
<button className="text-xs font-bold text-secondary hover:text-on-surface">CATERPILLAR</button>
<button className="text-xs font-bold text-secondary hover:text-on-surface">CUMMINS</button>
<button className="text-xs font-bold text-secondary hover:text-on-surface">DETROIT</button>
</div>
</div>
<div className="ml-auto flex items-center gap-4">
<span className="text-xs font-bold text-secondary">Displaying 1-12 of 482 parts</span>
</div>
</div>
{/* Comentario remanente */}
<div className="space-y-4">
{/* Comentario remanente */}
<div className="hidden lg:grid grid-cols-12 gap-4 px-6 mb-4 text-[10px] font-black uppercase text-secondary tracking-widest">
<div className="col-span-1">Preview</div>
<div className="col-span-4">Technical Description &amp; Identifiers</div>
<div className="col-span-3">Compatibility Matrix</div>
<div className="col-span-1">In Stock</div>
<div className="col-span-1">Price (USD)</div>
<div className="col-span-2 text-right">Acquisition</div>
</div>
{/* Comentario remanente */}
<div className="group bg-surface-container-lowest hover:bg-white transition-all border-l-2 border-transparent hover:border-[#496800] p-6 lg:p-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
<div className="col-span-1">
<div className="aspect-square bg-surface-container-high relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="Close-up photograph of a heavy duty chrome engine piston isolated on a technical gray background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2LKAbltqoTmcZBPgrXcd-Mbj9T3nlW3N9_tlKw8f0f9GATtq-X7PUuiuGdCtWA96blKNoMw58143ILgros0g3WJ_Ve4SyPDGa_c7PX8umHPOO8Lg4LNhadZ19HsYSpJJpgWeJMwHZjtTH2_cDFQ1-JT6qfB3zZxbqr--XFHN2qr86p_zjzC3BsraMdgaSZ5u89KVdATnckPxMJeyjVQqtdS9FDMCCfcg0CyawryMjrqeVjfAQ6ZPksQGRY_qm7as5_nsc95OUzZI"/>
</div>
</div>
<div className="col-span-1 lg:col-span-4 space-y-2">
<div className="flex items-center gap-2">
<span className="bg-primary-container/20 text-[#496800] text-[10px] font-black px-2 py-0.5 rounded-sm">ENG-442</span>
<span className="text-secondary text-[10px] font-bold">OEM: 124-5567-X</span>
</div>
<h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-[#496800] transition-colors">Industrial Grade Forged Piston Kit</h3>
<p className="text-xs text-secondary leading-relaxed max-w-md">Precision engineered high-compression forged alloy pistons for heavy-duty industrial diesel applications. Includes rings and wrist pin.</p>
</div>
<div className="col-span-1 lg:col-span-3">
<div className="flex flex-wrap gap-1">
<span className="bg-surface-container text-on-surface-variant text-[10px] font-bold px-2 py-1">CAT 3406E</span>
<span className="bg-surface-container text-on-surface-variant text-[10px] font-bold px-2 py-1">CAT C15</span>
<span className="bg-surface-container text-on-surface-variant text-[10px] font-bold px-2 py-1">PETERBILT 379</span>
</div>
</div>
<div className="col-span-1">
<div className="flex flex-col">
<span className="text-lg font-bold">24</span>
<span className="text-[10px] font-bold uppercase text-[#496800]">Ready to Ship</span>
</div>
</div>
<div className="col-span-1">
<div className="flex flex-col">
<span className="text-lg font-bold">$1,240.00</span>
<span className="text-[10px] text-secondary font-bold">Per Unit</span>
</div>
</div>
<div className="col-span-1 lg:col-span-2 text-right">
<button className="bg-[#496800] text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 w-full lg:w-auto hover:bg-[#9ACD32] hover:text-black transition-colors duration-300">
                            Add to Order
                        </button>
</div>
</div>
{/* Comentario remanente */}
<div className="group bg-surface-container-low hover:bg-white transition-all border-l-2 border-transparent hover:border-[#496800] p-6 lg:p-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
<div className="col-span-1">
<div className="aspect-square bg-surface-container-high relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="Precision machined turbocharger turbine blades with a metallic reflective finish on a dark technical surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlEaMW1moRBIiJBne4h59tgxIK6XUx6Pc3EMfFXxKWR_SQ_aYuY_D1yIN0pHedE0yBpHxQnT_hLpOogn1g_z3A50NJaMIuCyQwAlNc7u_MfUb2RGzHVdwzChvEHRJTF_Umj4pHuEIjw0b9wF-r2UPG9-KT1yCplHqyhR3AHC51GiFDg9g4PGyigGJp18Uy_21fnL5MH15lQVwi-jqaVX-6T-voVMEb2qzYxGN7at91URXyMqzIur1kz0SOpAqsk-mTSMONVGwM9s8"/>
</div>
</div>
<div className="col-span-1 lg:col-span-4 space-y-2">
<div className="flex items-center gap-2">
<span className="bg-primary-container/20 text-[#496800] text-[10px] font-black px-2 py-0.5 rounded-sm">TRB-881</span>
<span className="text-secondary text-[10px] font-bold">OEM: 404-5022-T</span>
</div>
<h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-[#496800] transition-colors">Hi-Flow Performance Turbocharger</h3>
<p className="text-xs text-secondary leading-relaxed max-w-md">Variable geometry turbocharger designed for maximum thermal efficiency and reduced lag in power generation units.</p>
</div>
<div className="col-span-1 lg:col-span-3">
<div className="flex flex-wrap gap-1">
<span className="bg-surface-container text-on-surface-variant text-[10px] font-bold px-2 py-1">CUMMINS ISX15</span>
<span className="bg-surface-container text-on-surface-variant text-[10px] font-bold px-2 py-1">VOLVO D13</span>
</div>
</div>
<div className="col-span-1">
<div className="flex flex-col">
<span className="text-lg font-bold">08</span>
<span className="text-[10px] font-bold uppercase text-error">Limited Stock</span>
</div>
</div>
<div className="col-span-1">
<div className="flex flex-col">
<span className="text-lg font-bold">$3,850.00</span>
<span className="text-[10px] text-secondary font-bold">Per Unit</span>
</div>
</div>
<div className="col-span-1 lg:col-span-2 text-right">
<button className="bg-[#496800] text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 w-full lg:w-auto hover:bg-[#9ACD32] hover:text-black transition-colors duration-300">
                            Add to Order
                        </button>
</div>
</div>
{/* Comentario remanente */}
<div className="group bg-surface-container-lowest hover:bg-white transition-all border-l-2 border-transparent hover:border-[#496800] p-6 lg:p-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
<div className="col-span-1">
<div className="aspect-square bg-surface-container-high relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="Industrial fuel injector assembly with detailed nozzles and electrical connectors in a clean studio environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHqImxc5SgNUF9h_GAXHeVcUXHyHmY2u0pGwayOb5ChykMU_Ybra0XP8p-T3S2hrNwSA7BjUVDfk6i4UeknVNf6m7Fo_SFLnSWeCs6pAtJNVeBgoJXWvG-FA3nk-PI20hcXxgw4ZkmLFw6_v6nlat5H1A3mjiGYmXzrJZEgs3H71Z8qX1Yhln4XY_ZtbSR8F6AmQkLnJkPz96EtQEa0MhaA0vprxSS9LyEAD_L0Qo-sSjgUHxrJdwfnPB4EgFT9icoodgOeOejJKc"/>
</div>
</div>
<div className="col-span-1 lg:col-span-4 space-y-2">
<div className="flex items-center gap-2">
<span className="bg-primary-container/20 text-[#496800] text-[10px] font-black px-2 py-0.5 rounded-sm">INJ-102</span>
<span className="text-secondary text-[10px] font-bold">OEM: 556-9912-B</span>
</div>
<h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-[#496800] transition-colors">Common Rail Fuel Injector Set (6)</h3>
<p className="text-xs text-secondary leading-relaxed max-w-md">Calibrated piezo-electric injectors for ultra-precise fuel delivery and optimal combustion efficiency.</p>
</div>
<div className="col-span-1 lg:col-span-3">
<div className="flex flex-wrap gap-1">
<span className="bg-surface-container text-on-surface-variant text-[10px] font-bold px-2 py-1">DETROIT DD15</span>
<span className="bg-surface-container text-on-surface-variant text-[10px] font-bold px-2 py-1">DD13 GEN 2</span>
</div>
</div>
<div className="col-span-1">
<div className="flex flex-col">
<span className="text-lg font-bold">115</span>
<span className="text-[10px] font-bold uppercase text-[#496800]">In Stock</span>
</div>
</div>
<div className="col-span-1">
<div className="flex flex-col">
<span className="text-lg font-bold">$2,110.00</span>
<span className="text-[10px] text-secondary font-bold">Per Set</span>
</div>
</div>
<div className="col-span-1 lg:col-span-2 text-right">
<button className="bg-[#496800] text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 w-full lg:w-auto hover:bg-[#9ACD32] hover:text-black transition-colors duration-300">
                            Add to Order
                        </button>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="mt-12 flex justify-center">
<div className="flex items-center bg-surface-container-low">
<button className="p-4 hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button className="px-6 py-4 bg-[#496800] text-white font-bold">01</button>
<button className="px-6 py-4 font-bold hover:bg-surface-container transition-colors">02</button>
<button className="px-6 py-4 font-bold hover:bg-surface-container transition-colors">03</button>
<button className="px-6 py-4 font-bold hover:bg-surface-container transition-colors">...</button>
<button className="px-6 py-4 font-bold hover:bg-surface-container transition-colors">41</button>
<button className="p-4 hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
{/* Comentario remanente */}
<footer className="bg-zinc-900 w-full mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-12 w-full">
<div className="space-y-4">
<div className="font-['Space_Grotesk'] font-black text-zinc-100 text-lg uppercase">
                    MAYOR DE REPUESTO LA CIMA, C.A.
                </div>
<p className="text-zinc-500 font-['Inter'] text-sm antialiased leading-relaxed">
                    Leading industrial spare parts distributor in Venezuela. High-precision engineering components for heavy-duty machinery and logistics fleets.
                </p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-[#9ACD32] cursor-pointer" data-icon="terminal">terminal</span>
<span className="material-symbols-outlined text-[#9ACD32] cursor-pointer" data-icon="precision_manufacturing">precision_manufacturing</span>
<span className="material-symbols-outlined text-[#9ACD32] cursor-pointer" data-icon="settings_suggest">settings_suggest</span>
</div>
</div>
<div className="space-y-4">
<h4 className="text-white font-bold text-xs uppercase tracking-widest">Connect</h4>
<ul className="space-y-2 font-['Inter'] text-sm antialiased">
<li className="text-zinc-500 hover:text-[#9ACD32] transition-colors">General: info@lacima.com</li>
<li className="text-zinc-500 hover:text-[#9ACD32] transition-colors">Orders: sales@lacima.com</li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-white font-bold text-xs uppercase tracking-widest">Inquiries</h4>
<ul className="space-y-2 font-['Inter'] text-sm antialiased">
<li className="text-zinc-500 hover:text-[#9ACD32] transition-colors">Phone: +58 241-5550101</li>
<li className="text-zinc-500 hover:text-[#9ACD32] transition-colors">Phone: +58 412-5550202</li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-white font-bold text-xs uppercase tracking-widest">Logistics</h4>
<div className="bg-zinc-800 p-4 border-l-2 border-[#9ACD32]">
<p className="text-zinc-400 text-xs font-medium">Warehouse Status</p>
<p className="text-[#9ACD32] font-black text-sm uppercase">Operational 24/7</p>
</div>
</div>
</div>
<div className="bg-zinc-800 px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-zinc-500 font-['Inter'] text-[10px] antialiased uppercase tracking-widest">
                © 2024 MAYOR DE REPUESTO LA CIMA, C.A. RIF: J-40308741-5. Valencia, Venezuela.
            </p>
<div className="flex gap-6">
<a className="text-zinc-500 text-[10px] font-bold hover:text-[#9ACD32] uppercase transition-colors" href="#">Privacy</a>
<a className="text-zinc-500 text-[10px] font-bold hover:text-[#9ACD32] uppercase transition-colors" href="#">Legal</a>
<a className="text-zinc-500 text-[10px] font-bold hover:text-[#9ACD32] uppercase transition-colors" href="#">Quality Assurance</a>
</div>
</div>
</footer>

        </div>
    );
};
