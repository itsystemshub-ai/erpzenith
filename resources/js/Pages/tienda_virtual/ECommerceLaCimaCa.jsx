import React from 'react';
import { Link } from '@inertiajs/react';

export default function ECommerceLaCimaCa() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<nav className="bg-stone-950/90 backdrop-blur-xl text-lime-500 font-['Space_Grotesk'] uppercase tracking-tighter docked full-width top-0 sticky z-50 transition-colors duration-200">
<div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
<div className="flex items-center gap-8">
<a className="text-2xl font-black italic text-lime-500 tracking-tight" href="#">TITAN INDUSTRIAL</a>
<div className="hidden md:flex gap-6 items-center">
<a className="text-lime-500 border-b-2 border-lime-500 pb-1 hover:text-lime-400 transition-colors duration-200" href="#">Home</a>
<a className="text-stone-400 hover:text-lime-400 transition-colors duration-200" href="#catalog">Products</a>
<a className="text-stone-400 hover:text-lime-400 transition-colors duration-200" href="#">Cart</a>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:block relative">
<input className="bg-stone-900 border-none text-stone-100 text-sm py-2 px-4 w-64 focus:ring-1 focus:ring-lime-500 rounded-none" placeholder="Search components..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 text-stone-400 hover:text-stone-100 transition-opacity opacity-80 hover:opacity-100 scale-95 active:opacity-80">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="hidden sm:inline">My Account</span>
</button>
<button className="relative flex items-center text-lime-500 hover:text-lime-400 transition-opacity scale-95 active:opacity-80">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
<span className="absolute -top-2 -right-2 bg-lime-500 text-stone-950 text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">0</span>
</button>
</div>
</div>
</div>
</nav>
{/* Comentario remanente */}
<header className="relative w-full overflow-hidden bg-stone-950 pt-16 pb-32 md:py-48 px-6">
<div className="absolute inset-0 z-0 opacity-40">
<img alt="High-performance diesel engine" className="w-full h-full object-cover grayscale brightness-50" data-alt="Close-up of a powerful industrial diesel engine with chrome details and heavy-duty components in a dark workshop environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAXDDoopL1vJGvj43_2EcixnT0qcffP-8sugqc3PJmetlM42HxR7EiDaACitBpmwFEGPY-d0LPOMheDO8XJC_vDkZ0NGhadXT3P0f67reZI-WnouLsKv14pyDyoOT8dU2KDqwTVwiQO7apJ_kQ5mUQ43bKNXlPy0n8itI7-GxJBnEoLXqAGm4Lc218ApwlfA93ICa2tzs84XoB3YvCguieK7UMsUIQ6QITRFgZwmKhnd-3jYDRMGtcZ5G-7Alrjd3kFtkJEppsOsA"/>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto">
<div className="max-w-3xl">
<span className="inline-block px-3 py-1 bg-primary text-on-primary text-xs font-bold uppercase tracking-widest mb-6">Authorized Distributor</span>
<h1 className="text-5xl md:text-8xl font-black text-stone-100 uppercase leading-[0.9] tracking-tighter mb-8">
                    POWERED BY <br/> <span className="text-primary-container">PRECISION.</span>
</h1>
<p className="text-stone-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-light">
                    Supplying heavy-duty industrial engine parts for Cummins, Volvo, and Detroit Diesel. Engineering excellence for the foundation of industrial uptime.
                </p>
<div className="flex flex-wrap gap-4">
<a className="bg-primary hover:bg-primary-container text-on-primary font-bold uppercase py-4 px-8 tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-95" href="#catalog">
                        Explore Catalog
                    </a>
<button className="bg-transparent border border-stone-700 text-stone-100 font-bold uppercase py-4 px-8 tracking-widest hover:bg-stone-800 transition-all">
                        Technical Specs
                    </button>
</div>
</div>
</div>
<div className="absolute bottom-0 right-0 p-12 hidden lg:block">
<div className="bg-primary/10 border-l-4 border-primary p-6 backdrop-blur-md">
<p className="text-stone-500 text-xs font-bold uppercase tracking-widest mb-2">Engine Integrity</p>
<p className="text-stone-100 text-2xl font-black italic">99.9% UPTIME</p>
</div>
</div>
</header>
{/* Comentario remanente */}
<main className="max-w-screen-2xl mx-auto py-24 px-6" id="catalog">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-xl">
<h2 className="text-4xl font-black uppercase tracking-tighter text-on-surface mb-4">Precision Components</h2>
<div className="h-1 w-24 bg-primary mb-6"></div>
<p className="text-secondary font-body">Browse our curated selection of high-performance parts. Every component is rigorously tested for industrial durability.</p>
</div>
<div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
<button className="whitespace-nowrap px-6 py-2 bg-primary text-on-primary text-xs font-bold uppercase">All</button>
<button className="whitespace-nowrap px-6 py-2 bg-surface-container-high text-secondary text-xs font-bold uppercase hover:bg-primary-container hover:text-on-primary transition-colors">Cummins</button>
<button className="whitespace-nowrap px-6 py-2 bg-surface-container-high text-secondary text-xs font-bold uppercase hover:bg-primary-container hover:text-on-primary transition-colors">Volvo</button>
<button className="whitespace-nowrap px-6 py-2 bg-surface-container-high text-secondary text-xs font-bold uppercase hover:bg-primary-container hover:text-on-primary transition-colors">Detroit</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-surface-container-highest border border-surface-container-highest">
{/* Comentario remanente */}
<article className="bg-surface group">
<div className="relative aspect-square overflow-hidden bg-surface-container-low p-8">
<img alt="Cylinder head gasket" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" data-alt="Professional studio photograph of a Cummins cylinder head gasket, metallic texture, intricate cutouts, clean white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7nYKSbAGk0sNgs7oPCd8fyoeR9e60wl1s7Jym9qpDXwnXaaIfkrxG35dPa2wV94j5fhKhsSHI4p3FIiX0otqPuYO07xO5dJd67_fdC5iaU0OMvzma3OMcftTxGXR_8h-CuY0MNvIpEQtgUBoHs4Y0aWQrtQp8ZPvy2FCDe0auTRAhubbCiVTCvakNmJDOKgDPwpqWLmOg_P1hwI1D4D5VdoJ80afZqds7EAFF88xS-vm6cmgnWgiSjN6obErYH81zQhDeQ0iWub4"/>
<div className="absolute top-4 right-4 bg-primary text-on-primary text-[10px] font-black uppercase px-2 py-1">In Stock</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold text-primary uppercase tracking-widest">Cummins</span>
<span className="text-[10px] font-mono text-secondary">#CU-8842-X</span>
</div>
<h3 className="text-xl font-bold uppercase tracking-tight text-on-surface mb-4">Junta de Culata Cummins</h3>
<div className="flex items-center justify-between mb-6">
<div>
<p className="text-2xl font-black text-on-surface">$145.00</p>
<p className="text-[10px] text-secondary">Bs. 5,220.00 approx.</p>
</div>
</div>
<button className="w-full bg-surface-container-highest group-hover:bg-primary group-hover:text-on-primary py-3 flex items-center justify-center gap-2 transition-all duration-300 font-bold uppercase text-xs tracking-widest">
<span className="material-symbols-outlined text-lg" data-icon="add_shopping_cart">add_shopping_cart</span>
                        Add to Cart
                    </button>
</div>
</article>
{/* Comentario remanente */}
<article className="bg-surface group">
<div className="relative aspect-square overflow-hidden bg-surface-container-low p-8">
<img alt="Oil filter" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" data-alt="Industrial oil filter for Volvo engines, metallic silver finish with technical markings, studio lighting on plain background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsHZ9MFD4WCJtxE7xbkGvYvm4qisOi2hGXwJ_Zav27WFtthL07jOmeBqA3uxqD9hGFJF6jtKRFwuIbqtxbKM9d222u0u570XUHOr-3TM5d4-836PCyasLIpwwaCSnEasQ3XtaGoL4RnLluZBXOHdCtMdslZuzY0-nXPEIgnykw7T83b5acMv9DZ3XU7hKUl2gO3uCqaHBWjdvytWxJcG0h1D0ClBrKUkC2J3AKzajE4r9QkGRjpLqjmKsImGg4iReJej_zOKXcihk"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold text-primary uppercase tracking-widest">Volvo</span>
<span className="text-[10px] font-mono text-secondary">#VO-1120-F</span>
</div>
<h3 className="text-xl font-bold uppercase tracking-tight text-on-surface mb-4">Filtro de Aceite Volvo</h3>
<div className="flex items-center justify-between mb-6">
<div>
<p className="text-2xl font-black text-on-surface">$38.50</p>
<p className="text-[10px] text-secondary">Bs. 1,386.00 approx.</p>
</div>
</div>
<button className="w-full bg-surface-container-highest group-hover:bg-primary group-hover:text-on-primary py-3 flex items-center justify-center gap-2 transition-all duration-300 font-bold uppercase text-xs tracking-widest">
<span className="material-symbols-outlined text-lg" data-icon="add_shopping_cart">add_shopping_cart</span>
                        Add to Cart
                    </button>
</div>
</article>
{/* Comentario remanente */}
<article className="bg-surface group">
<div className="relative aspect-square overflow-hidden bg-surface-container-low p-8">
<img alt="Turbocharger" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" data-alt="Heavy-duty Holset turbocharger component, complex industrial geometry, high-grade steel, technical blueprint style photograph" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfjrGRNpjkuVD0N23eX_RV6yqwpouLC8EQL7CLZ-gZNbKywWxWd3inP-MVZR2hDLVBek4gxi0S8M2a1vyaRrrNeSO7Az-A9ojG2JNDnWXZYN-Mw4OfOBiPiHfhiudzde1KJUKBh8fLQ5PpswyaEDpkuKbGyHZWkpaF_gyP-Ge3SsLuGxew2xe1VOh-NN5PAcB0Nh9eAzk_fIks3Qi2U8CXXHJWdVHClIKUm6ddotwdSGQ6bl6u40-453SAtwWAUnFar-PMvHvR3GM"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold text-primary uppercase tracking-widest">Holset</span>
<span className="text-[10px] font-mono text-secondary">#HO-449-TB</span>
</div>
<h3 className="text-xl font-bold uppercase tracking-tight text-on-surface mb-4">Turboalimentador Holset</h3>
<div className="flex items-center justify-between mb-6">
<div>
<p className="text-2xl font-black text-on-surface">$890.00</p>
<p className="text-[10px] text-secondary">Bs. 32,040.00 approx.</p>
</div>
</div>
<button className="w-full bg-surface-container-highest group-hover:bg-primary group-hover:text-on-primary py-3 flex items-center justify-center gap-2 transition-all duration-300 font-bold uppercase text-xs tracking-widest">
<span className="material-symbols-outlined text-lg" data-icon="add_shopping_cart">add_shopping_cart</span>
                        Add to Cart
                    </button>
</div>
</article>
{/* Comentario remanente */}
<article className="bg-surface group">
<div className="relative aspect-square overflow-hidden bg-surface-container-low p-8">
<img alt="EGR Valve" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" data-alt="EGR valve component for industrial diesel engine, intricate mechanical parts, clean metallic finish, sharp focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKTyHrPtqEfaH6pvwCGdF7-I4OXbWwSSA0VVvCJ2Hwl55TX8_tQAXdhZ3cVuKigbGzyZ-9DKpo-bpZxXUzYTULV4RtW7N1-xcbkK4iXcnmfLmne7Wibg8iuRbPMF8W5ei2X3VBNRT7AFKcWTsc3vTfr3uB999UrusLMap6SuiZJ6PO7G2VuXBNNEofs60aSnQkzVNb_QrnSr8LjAzwifEWQL2LqQYwDD5786DMWsx1QXI-AQcTGwH6Mw2h-EXOxvVH05pqCGvL8BM"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold text-primary uppercase tracking-widest">EGR</span>
<span className="text-[10px] font-mono text-secondary">#EG-221-V</span>
</div>
<h3 className="text-xl font-bold uppercase tracking-tight text-on-surface mb-4">Válvula EGR Detroit</h3>
<div className="flex items-center justify-between mb-6">
<div>
<p className="text-2xl font-black text-on-surface">$420.00</p>
<p className="text-[10px] text-secondary">Bs. 15,120.00 approx.</p>
</div>
</div>
<button className="w-full bg-surface-container-highest group-hover:bg-primary group-hover:text-on-primary py-3 flex items-center justify-center gap-2 transition-all duration-300 font-bold uppercase text-xs tracking-widest">
<span className="material-symbols-outlined text-lg" data-icon="add_shopping_cart">add_shopping_cart</span>
                        Add to Cart
                    </button>
</div>
</article>
{/* Comentario remanente */}
<article className="bg-surface group">
<div className="relative aspect-square overflow-hidden bg-surface-container-low p-8">
<img alt="Fuel Injector" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" data-alt="Precision fuel injector nozzle for Detroit Diesel, high detail on metallic needle, technical lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB08NxRqet6a7yn-HqiDUbxiUgnO6zzAUIOfOQULzuPrSc5sbGcc-NOprB3VcUd6hzLKSPRKWZJEbCO66ivfnqZb7wHn3mYKgBgrcTPxWa4NgzOoqtEwoEN6e_tiUCddWqLFtTPVRRygYBJ9w6kDBkHXFPOJcJHuhrNy5f2Ic4G3F7XqnFmO5-SJJDGBEc8wmBi2UYrKkd1a06gVhKtgBsUcd4fuwk939GqYI_OdyV4Tmjdu1GntUBwYsaVZRRuT2CbUdV_1sApZrM"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold text-primary uppercase tracking-widest">Detroit</span>
<span className="text-[10px] font-mono text-secondary">#DD-15-FI</span>
</div>
<h3 className="text-xl font-bold uppercase tracking-tight text-on-surface mb-4">Inyector Detroit DD15</h3>
<div className="flex items-center justify-between mb-6">
<div>
<p className="text-2xl font-black text-on-surface">$275.00</p>
<p className="text-[10px] text-secondary">Bs. 9,900.00 approx.</p>
</div>
</div>
<button className="w-full bg-surface-container-highest group-hover:bg-primary group-hover:text-on-primary py-3 flex items-center justify-center gap-2 transition-all duration-300 font-bold uppercase text-xs tracking-widest">
<span className="material-symbols-outlined text-lg" data-icon="add_shopping_cart">add_shopping_cart</span>
                        Add to Cart
                    </button>
</div>
</article>
{/* Comentario remanente */}
<article className="bg-surface group">
<div className="relative aspect-square overflow-hidden bg-surface-container-low p-8">
<img alt="Air Filter" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" data-alt="Large industrial air filter assembly for International trucks, pleated paper texture, rugged housing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaNx47CBOPWkbJfyEjb6QsZgO1mH3DCa8_MtQ5U0-k4sIcXRThFWPGPzROZKu7K9qxoXzKJ5OqOIPjTMcNyMzOykfg906z7p2uXkC4-czLMsRB6Q05vYAreG6rd0YiNhscyJqRN0gAQuE77ijcNXGZOn_-SG1qaNVZkdrjZm1i09JdPK1dFHQwnmBsJCznX7v2TYKQ0oEM7mWONm7BcflU6mdbl1I91kH5XND1w3w4OvLxerEcfQm5ewo6Uy73f1SeVu0cUpu9Sx4"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold text-primary uppercase tracking-widest">International</span>
<span className="text-[10px] font-mono text-secondary">#IT-990-AF</span>
</div>
<h3 className="text-xl font-bold uppercase tracking-tight text-on-surface mb-4">Filtro de Aire International</h3>
<div className="flex items-center justify-between mb-6">
<div>
<p className="text-2xl font-black text-on-surface">$65.00</p>
<p className="text-[10px] text-secondary">Bs. 2,340.00 approx.</p>
</div>
</div>
<button className="w-full bg-surface-container-highest group-hover:bg-primary group-hover:text-on-primary py-3 flex items-center justify-center gap-2 transition-all duration-300 font-bold uppercase text-xs tracking-widest">
<span className="material-symbols-outlined text-lg" data-icon="add_shopping_cart">add_shopping_cart</span>
                        Add to Cart
                    </button>
</div>
</article>
{/* Comentario remanente */}
<article className="bg-surface group">
<div className="relative aspect-square overflow-hidden bg-surface-container-low p-8">
<img alt="Meritor Brake Shoe" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" data-alt="Heavy duty brake shoe component by Meritor, rugged texture, industrial gray finish, isolated on white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABkCYWjm5SnVwKp4WKcPniFG1DbN-elQgOxC9k5tpNZzJ0fow6wuHtAW5UBmdhDhQ5ka-sk-Ut5iCIuqstdEKMjg74jOH0mtQ27H4BnHdqoJPbeIF21qxhriZVOJ9u6Cqo7flM4GPe8dJif2MKYmIgVKuJ_KgrBgN7HEjlk0u_Ciw8zzx0KSVCb9Q7yF7B9-dHrMIWBhkEZr2Znha2seW05H4B3VDX4sZiKzygwu-JXeywh1QJrue0TjmWbKqYdqavXBuzzVNOPKQ"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold text-primary uppercase tracking-widest">Meritor</span>
<span className="text-[10px] font-mono text-secondary">#ME-QP-4515</span>
</div>
<h3 className="text-xl font-bold uppercase tracking-tight text-on-surface mb-4">Zapata de Freno Meritor</h3>
<div className="flex items-center justify-between mb-6">
<div>
<p className="text-2xl font-black text-on-surface">$112.00</p>
<p className="text-[10px] text-secondary">Bs. 4,032.00 approx.</p>
</div>
</div>
<button className="w-full bg-surface-container-highest group-hover:bg-primary group-hover:text-on-primary py-3 flex items-center justify-center gap-2 transition-all duration-300 font-bold uppercase text-xs tracking-widest">
<span className="material-symbols-outlined text-lg" data-icon="add_shopping_cart">add_shopping_cart</span>
                        Add to Cart
                    </button>
</div>
</article>
{/* Comentario remanente */}
<article className="bg-surface group">
<div className="relative aspect-square overflow-hidden bg-surface-container-low p-8">
<img alt="Sensors" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" data-alt="Engine oil pressure sensor for Cummins, electronic components, precise engineering, studio macro shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmnavll6Z2HmryPSzVx-xW3GSKpYRMwee8ADaDsVNpoXQAo_nfR3VIL2cZjzTaG-fCkImeSjIWmIO8i9v6LBoeieLll7gVR77QeWgG0P2KQKpvdG4N_IRSQ3jAep8EU2QgzHHuWWI4mVeSZOHnrDnV4y4YF4wX0fgwdGl38cXSfvPEjWN-D69HWSgWKfs3UJ1kRj9OMGM7gp_8_XRyzBck5ngiHeUlBEWKg2KYxImzQFIhW1QIvQg3ABFB93ZOT6REKDkau2oCmds"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold text-primary uppercase tracking-widest">Cummins</span>
<span className="text-[10px] font-mono text-secondary">#CU-SN-12</span>
</div>
<h3 className="text-xl font-bold uppercase tracking-tight text-on-surface mb-4">Sensor Presión Aceite</h3>
<div className="flex items-center justify-between mb-6">
<div>
<p className="text-2xl font-black text-on-surface">$54.00</p>
<p className="text-[10px] text-secondary">Bs. 1,944.00 approx.</p>
</div>
</div>
<button className="w-full bg-surface-container-highest group-hover:bg-primary group-hover:text-on-primary py-3 flex items-center justify-center gap-2 transition-all duration-300 font-bold uppercase text-xs tracking-widest">
<span className="material-symbols-outlined text-lg" data-icon="add_shopping_cart">add_shopping_cart</span>
                        Add to Cart
                    </button>
</div>
</article>
</div>
</main>
{/* Comentario remanente */}
<div className="fixed inset-0 z-[100] hidden" id="cart-drawer">
<div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"></div>
<div className="absolute right-0 top-0 h-full w-full max-w-md bg-surface shadow-2xl flex flex-col">
<div className="p-6 border-b border-surface-container-highest flex justify-between items-center bg-stone-900 text-stone-100">
<h3 className="text-xl font-black uppercase tracking-tighter">Shopping Cart</h3>
<button className="material-symbols-outlined hover:text-primary transition-colors" onclick="document.getElementById('cart-drawer').classList.add('hidden')">close</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6">
{/* Comentario remanente */}
<div className="flex flex-col items-center justify-center h-full text-center py-20">
<span className="material-symbols-outlined text-6xl text-surface-container-highest mb-4">shopping_basket</span>
<p className="text-secondary font-bold uppercase text-sm tracking-widest">Your cart is empty</p>
<p className="text-secondary/60 text-xs mt-2">Add precision parts to your order to proceed.</p>
</div>
{/* Comentario remanente */}
{/* Comentario remanente */}
</div>
<div className="p-6 bg-surface-container-low">
<div className="space-y-2 mb-6">
<div className="flex justify-between text-secondary text-xs uppercase font-bold tracking-widest">
<span>Subtotal</span>
<span>$0.00</span>
</div>
<div className="flex justify-between text-on-surface text-lg font-black uppercase tracking-tighter">
<span>Total Estimate</span>
<span>$0.00</span>
</div>
</div>
<button className="w-full bg-primary text-on-primary font-bold uppercase py-4 tracking-widest hover:bg-primary-container transition-all">
                    Proceed to Checkout
                </button>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="fixed inset-0 z-[110] hidden flex items-center justify-center p-6" id="auth-overlay">
<div className="absolute inset-0 bg-stone-950/90 backdrop-blur-md"></div>
<div className="relative w-full max-w-md bg-surface p-10 shadow-2xl">
<button className="absolute top-6 right-6 material-symbols-outlined text-secondary hover:text-on-surface" onclick="document.getElementById('auth-overlay').classList.add('hidden')">close</button>
<div id="login-form">
<h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Technical Access</h3>
<p className="text-secondary text-sm mb-8">Sign in to sync your industrial orders.</p>
<div className="space-y-4">
<div>
<label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Email Address</label>
<input className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary p-3 text-sm" type="email"/>
</div>
<div>
<label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Security Key</label>
<input className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary p-3 text-sm" type="password"/>
</div>
<button className="w-full bg-primary text-on-primary font-bold uppercase py-4 tracking-widest hover:bg-primary-container transition-all mt-4">Login</button>
<p className="text-center text-xs text-secondary mt-6">
                        No account? <button className="text-primary font-bold uppercase">Request Registration</button>
</p>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<section className="bg-stone-900 py-24 px-6 text-stone-100">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col gap-4">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="precision_manufacturing">precision_manufacturing</span>
<h4 className="text-xl font-bold uppercase tracking-tight">O.E.M. Standards</h4>
<p className="text-stone-400 text-sm leading-relaxed">All parts meet or exceed original equipment manufacturer specifications for critical industrial applications.</p>
</div>
<div className="flex flex-col gap-4">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="local_shipping">local_shipping</span>
<h4 className="text-xl font-bold uppercase tracking-tight">Rapid Logistics</h4>
<p className="text-stone-400 text-sm leading-relaxed">Strategic distribution from Valencia ensures nationwide coverage and minimal downtime for your fleet.</p>
</div>
<div className="flex flex-col gap-4">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="verified">verified</span>
<h4 className="text-xl font-bold uppercase tracking-tight">Expert Support</h4>
<p className="text-stone-400 text-sm leading-relaxed">Our technical team provides specialized consultation for engine compatibility and maintenance.</p>
</div>
</div>
</section>
{/* Comentario remanente */}
<footer className="bg-stone-900 border-t border-stone-800">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-12 w-full max-w-screen-2xl mx-auto text-stone-100">
<div className="space-y-6">
<div className="text-lg font-bold text-stone-100 uppercase tracking-widest">MAYOR DE REPUESTO LA CIMA, C.A.</div>
<div className="h-1 w-12 bg-primary"></div>
<div className="space-y-4 text-stone-500 font-['Inter'] text-sm uppercase tracking-widest">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-stone-300 text-sm" data-icon="location_on">location_on</span>
<p className="leading-relaxed">AV. 119, EDIF. MULTICENTRO PASEO EL PARRAL, OFICINA NO. 2-3-C, URB. EL PARRAL, 2001, VALENCIA, EDO. CARABOBO</p>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-stone-300 text-sm" data-icon="id_card">id_card</span>
<p>RIF J-40308741-5</p>
</div>
</div>
</div>
<div className="space-y-6">
<h5 className="text-xs font-black text-primary uppercase tracking-widest">Communications</h5>
<div className="flex flex-col gap-4 text-stone-500 font-['Inter'] text-sm uppercase tracking-widest">
<a className="hover:text-stone-100 transition-opacity flex items-center gap-3" href="tel:+584244582766">
<span className="material-symbols-outlined text-stone-300 text-sm" data-icon="call">call</span>
                        +58 424-4582766
                    </a>
<a className="hover:text-stone-100 transition-opacity flex items-center gap-3" href="tel:+584244042558">
<span className="material-symbols-outlined text-stone-300 text-sm" data-icon="call">call</span>
                        +58 424-4042558
                    </a>
<a className="hover:text-stone-100 transition-opacity flex items-center gap-3" href="mailto:LACIMA.REPUESTOS@GMAIL.COM">
<span className="material-symbols-outlined text-stone-300 text-sm" data-icon="mail">mail</span>
                        LACIMA.REPUESTOS@GMAIL.COM
                    </a>
<a className="hover:text-stone-100 transition-opacity flex items-center gap-3" href="mailto:PEDIDOSLACIMA@GMAIL.COM">
<span className="material-symbols-outlined text-stone-300 text-sm" data-icon="shopping_bag">shopping_bag</span>
                        PEDIDOSLACIMA@GMAIL.COM
                    </a>
</div>
</div>
<div className="space-y-6">
<h5 className="text-xs font-black text-primary uppercase tracking-widest">Network</h5>
<div className="flex flex-col gap-4 text-stone-500 font-['Inter'] text-sm uppercase tracking-widest">
<a className="hover:text-stone-100 transition-opacity flex items-center gap-3" href="#">
<span className="material-symbols-outlined text-stone-300 text-sm" data-icon="account_circle">account_circle</span>
                        Instagram
                    </a>
<a className="hover:text-stone-100 transition-opacity flex items-center gap-3" href="#">
<span className="material-symbols-outlined text-stone-300 text-sm" data-icon="hub">hub</span>
                        LinkedIn
                    </a>
</div>
<div className="pt-8">
<p className="text-[10px] text-stone-600 font-bold uppercase tracking-[0.2em] leading-relaxed">
                        © TITAN INDUSTRIAL. ALL RIGHTS RESERVED. <br/>
                        POWERED BY HIGH-PERFORMANCE LOGISTICS.
                    </p>
</div>
</div>
</div>
</footer>
{/* Comentario remanente */}
<button className="fixed bottom-8 right-8 bg-primary text-on-primary p-4 shadow-xl hover:bg-primary-container transition-all z-40" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<span className="material-symbols-outlined" data-icon="arrow_upward">arrow_upward</span>
</button>

        </div>
    );
};
