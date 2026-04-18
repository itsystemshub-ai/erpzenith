import React from 'react';
import { Link } from '@inertiajs/react';

export default function CatalogGridView() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<header className="bg-zinc-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50 sticky top-0 z-50">
<nav className="flex justify-between items-center w-full px-6 py-4 max-w-[1920px] mx-auto">
<div className="text-xl font-bold tracking-tighter text-[#9ACD32] font-headline uppercase">
                MAYOR DE REPUESTO LA CIMA, C.A.
            </div>
<div className="hidden md:flex items-center gap-8">
<a className="font-headline tracking-tight uppercase text-[#9ACD32] border-b-2 border-[#9ACD32] pb-1" href="#">Engines</a>
<a className="font-headline tracking-tight uppercase text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Transmission</a>
<a className="font-headline tracking-tight uppercase text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Electrical</a>
<a className="font-headline tracking-tight uppercase text-zinc-400 font-medium hover:text-white transition-colors duration-200" href="#">Suspension</a>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center bg-zinc-900 px-4 py-2 rounded-lg">
<span className="material-symbols-outlined text-[#9ACD32] text-sm mr-2">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm text-zinc-300 w-48" placeholder="Search components..." type="text"/>
</div>
<button className="font-headline tracking-tight uppercase text-zinc-400 font-medium hover:text-white transition-colors text-sm scale-95 active:scale-90">My Account</button>
<button className="bg-[#9ACD32] text-zinc-950 font-headline font-bold px-4 py-2 rounded uppercase text-sm scale-95 active:scale-90 transition-transform">Cart (0)</button>
</div>
</nav>
</header>
<main className="flex-grow max-w-[1920px] mx-auto w-full px-6 py-8 flex flex-col md:flex-row gap-8">
{/* Comentario remanente */}
<aside className="w-full md:w-72 flex-shrink-0 space-y-8">
<div className="bg-surface-container-low p-6 rounded-lg">
<h2 className="font-headline text-lg font-bold uppercase tracking-tighter mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">filter_list</span>
                    Filtering System
                </h2>
<div className="space-y-6">
<div>
<label className="font-headline text-xs font-bold uppercase text-secondary block mb-3">By Engine Type</label>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
<span className="text-sm font-medium group-hover:text-primary transition-colors">Diesel V8 Heavy Duty</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
<span className="text-sm font-medium group-hover:text-primary transition-colors">Inline 6 Turbo</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
<span className="text-sm font-medium group-hover:text-primary transition-colors">Gas Turbine Aux</span>
</label>
</div>
</div>
<div>
<label className="font-headline text-xs font-bold uppercase text-secondary block mb-3">By Brand</label>
<select className="w-full bg-surface-container-highest border-none rounded-lg text-sm p-3 focus:ring-2 focus:ring-primary">
<option>Cummins Engine Co.</option>
<option>Volvo Penta</option>
<option>Caterpillar Inc.</option>
<option>Detroit Diesel</option>
</select>
</div>
<div>
<label className="font-headline text-xs font-bold uppercase text-secondary block mb-3">Machinery Type</label>
<div className="grid grid-cols-2 gap-2">
<button className="p-2 text-xs font-bold border border-outline-variant rounded hover:bg-primary-container hover:text-on-primary-container transition-all uppercase">Excavator</button>
<button className="p-2 text-xs font-bold border border-outline-variant rounded bg-primary text-on-primary uppercase">Truck</button>
<button className="p-2 text-xs font-bold border border-outline-variant rounded hover:bg-primary-container hover:text-on-primary-container transition-all uppercase">Marine</button>
<button className="p-2 text-xs font-bold border border-outline-variant rounded hover:bg-primary-container hover:text-on-primary-container transition-all uppercase">GenSet</button>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-zinc-900 text-white p-6 rounded-lg relative overflow-hidden group">
<div className="relative z-10">
<h3 className="font-headline text-xl font-black uppercase leading-none mb-2">Technical Support</h3>
<p className="text-zinc-400 text-xs mb-4">Immediate assistance for installation and parts matching.</p>
<button className="text-[#9ACD32] text-xs font-bold uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                        Contact Engineer
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-8xl" >engineering</span>
</div>
</div>
</aside>
{/* Comentario remanente */}
<section className="flex-grow">
<div className="flex justify-between items-end mb-8">
<div>
<span className="text-primary font-bold text-xs uppercase tracking-widest block mb-1">Precision Inventory</span>
<h1 className="font-headline text-4xl font-black uppercase tracking-tighter">Full Catalog</h1>
</div>
<div className="text-right">
<p className="text-xs font-bold text-secondary uppercase">Showing 12 of 842 Items</p>
<div className="flex gap-2 mt-2">
<button className="w-8 h-8 flex items-center justify-center bg-surface-container-highest rounded"><span className="material-symbols-outlined text-sm">grid_view</span></button>
<button className="w-8 h-8 flex items-center justify-center text-secondary hover:bg-surface-container-highest rounded"><span className="material-symbols-outlined text-sm">list</span></button>
</div>
</div>
</div>
<div className="editorial-grid">
{/* Comentario remanente */}
<article className="bg-surface-container-lowest group relative transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 flex flex-col rounded-lg">
<div className="aspect-square w-full overflow-hidden bg-surface-container relative">
<img alt="Junta de culata Cummins" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" data-alt="Close-up of a precision-machined steel industrial engine head gasket on a clean workbench with technical blueprint background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwVKDQ8J7uUIFrNwpCuRmbejTuDOgw9_vpIwmz0wCrb4RslhmWPIoHV-t9eB4FyM3zcmveZ6mYBdAXGjvwj1FHk7cEEzeYIktIFoXowi9VI-JA1CWSp_qrVPgv7Xb9_V6w8wnpIIJnoESwkpmJqeE9LP1q4_Wz96dbs7VcbstxzQiEDaxroiRcqohgVDXieSFSCkDwngw0mknMmsdwRC3JB4obyrVRzYkfHNUbN9wshqpV_XyeF9RIy3vmSk3NTwq-ekPZ-C2wVUQ"/>
<div className="absolute top-3 left-3 bg-zinc-950 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-tighter">In Stock</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="mb-1 text-secondary text-[10px] font-bold uppercase tracking-widest">SKU: CUM-9928-HJ</div>
<h3 className="font-headline text-lg font-bold uppercase tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors">Junta de culata Cummins QSB6.7</h3>
<div className="mt-auto pt-4 border-t border-surface-container flex items-center justify-between">
<span className="font-headline text-2xl font-black text-on-surface">$284.00</span>
<button className="bg-zinc-950 text-white w-10 h-10 rounded flex items-center justify-center hover:bg-primary transition-colors scale-95 active:scale-90">
<span className="material-symbols-outlined text-sm">add_shopping_cart</span>
</button>
</div>
</div>
</article>
{/* Comentario remanente */}
<article className="bg-surface-container-lowest group relative transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 flex flex-col rounded-lg">
<div className="aspect-square w-full overflow-hidden bg-surface-container relative">
<img alt="Filtro de aceite Volvo" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" data-alt="Professional studio shot of a heavy-duty industrial oil filter with metallic finish and yellow accents against a dark gray backdrop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQKD29s0z6GuS4uPSiUeQyw70ldIFl3871UjP1-u9TQTaoCIMjKqWVYf7vjLiRsk-6ggNcyvjOtMnh0Mdju6jWKG76OQKCbleekn-DTwlFAGhQGfIXROTK57Phh8C0XzugExcdoE7eGfV5Li66UjyA7Sw8tByNp7MulgucBI1tD5xgkPM-viyQr1WLFdmyQNTjZOo1QzliRygUM3ddoPLKdvFd6ifJrPGWai6WB6d2pnrTotXOVPtPuWBJu1GO7m7nCGbmB_13mek"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="mb-1 text-secondary text-[10px] font-bold uppercase tracking-widest">SKU: VOL-P901-LP</div>
<h3 className="font-headline text-lg font-bold uppercase tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors">Filtro de Aceite Volvo Penta D13</h3>
<div className="mt-auto pt-4 border-t border-surface-container flex items-center justify-between">
<span className="font-headline text-2xl font-black text-on-surface">$45.50</span>
<button className="bg-zinc-950 text-white w-10 h-10 rounded flex items-center justify-center hover:bg-primary transition-colors scale-95 active:scale-90">
<span className="material-symbols-outlined text-sm">add_shopping_cart</span>
</button>
</div>
</div>
</article>
{/* Comentario remanente */}
<article className="bg-surface-container-lowest group relative transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 flex flex-col rounded-lg">
<div className="aspect-square w-full overflow-hidden bg-surface-container relative">
<img alt="Turbocharger Caterpillar" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" data-alt="High-performance industrial turbocharger assembly with intricate turbine detail and metallic shine under warehouse lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbPP-XFkK6zkczQlnJ0syN052qGxQ9Rj-hlorwmbSZIobuLFXOel2ZMx0xu6dwLm9-7Ubl0F2lzgVQ9DmZ9aBpYK8U6OEIRoY7anE1Esb-iCtFH7QjfwnGbXQqUkSaEkdrFKthlP8ErjHnt8sdiQWx4hVhDWfz79PgQ5U5869M8Wvi6zCxv6CSXXNqnUgGKIIQF2s1hQvlIJcaEfVIfzhL9lTiMBPL-6dmN6QYh7jai-A4a8yMUvreZnN2WsiryiSjUCufA4sWu3I"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="mb-1 text-secondary text-[10px] font-bold uppercase tracking-widest">SKU: CAT-T40-99</div>
<h3 className="font-headline text-lg font-bold uppercase tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors">Turbocargador Caterpillar C15</h3>
<div className="mt-auto pt-4 border-t border-surface-container flex items-center justify-between">
<span className="font-headline text-2xl font-black text-on-surface">$1,420.00</span>
<button className="bg-zinc-950 text-white w-10 h-10 rounded flex items-center justify-center hover:bg-primary transition-colors scale-95 active:scale-90">
<span className="material-symbols-outlined text-sm">add_shopping_cart</span>
</button>
</div>
</div>
</article>
{/* Comentario remanente */}
<article className="bg-surface-container-lowest group relative transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 flex flex-col rounded-lg">
<div className="aspect-square w-full overflow-hidden bg-surface-container relative">
<img alt="Alternador Heavy Duty" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" data-alt="Powerful industrial alternator showing copper windings and robust metal casing, clean industrial macro photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIn0RkeL7SWo_eG05JQuzVMLn7doFBFF7OpIHfDkWl6wZNAvi_1ZRIdJaIVb7a4iDU4D_xMPMwP1PwALo5h5Ne8BeQ6IYJyR5Toi0SScObpCgrDYb9pJcmIDEu8LMBWvn4ErCt93id7lunEM7-qeA4b_9GAXvUPZ4R2NbJ2iwlpFpnmQqi9yDn3DX6RtOLX6S_nes72O7ZOPAzaUA_laYrmrxqNDUBi9HF74lajrW3XH8c3vNOglhQV_mA3b7yPUnw_7OzGx-fL4k"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="mb-1 text-secondary text-[10px] font-bold uppercase tracking-widest">SKU: DEL-24V-HD</div>
<h3 className="font-headline text-lg font-bold uppercase tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors">Alternador 24V Detroit Diesel</h3>
<div className="mt-auto pt-4 border-t border-surface-container flex items-center justify-between">
<span className="font-headline text-2xl font-black text-on-surface">$312.00</span>
<button className="bg-zinc-950 text-white w-10 h-10 rounded flex items-center justify-center hover:bg-primary transition-colors scale-95 active:scale-90">
<span className="material-symbols-outlined text-sm">add_shopping_cart</span>
</button>
</div>
</div>
</article>
{/* Comentario remanente */}
<article className="bg-surface-container-lowest group relative transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 flex flex-col rounded-lg">
<div className="aspect-square w-full overflow-hidden bg-surface-container relative">
<img alt="Inyector de combustible" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" data-alt="Detailed view of high-pressure fuel injector nozzle on a dark reflective surface, highlighting precision engineering" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcq0FTn4sixsza9CVtPOnPKQJov8Ui8XYA3uGRpWC4LDD1Ze8Gg-2xj-O9jKECyJsf6PWKzcAP587qr46eOqqlv0ITwFAOGg9qxHstfdMaVcO13OY1Y43qVQhaQL0N9fEioYTxTcnUjuYC2VZLrFJAgMr_d9gGNwMWkd5tTzJ94ESTCuNWfpLOavRKnF76xuxrOANZKwOUUtEEqpu5exJOvPc5wGxgjew4_6X2fRisUN82VMogfrxsFPZqweCdlMiG8PcxWexovxQ"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="mb-1 text-secondary text-[10px] font-bold uppercase tracking-widest">SKU: BOS-6701-IN</div>
<h3 className="font-headline text-lg font-bold uppercase tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors">Inyector Bosch Common Rail</h3>
<div className="mt-auto pt-4 border-t border-surface-container flex items-center justify-between">
<span className="font-headline text-2xl font-black text-on-surface">$580.00</span>
<button className="bg-zinc-950 text-white w-10 h-10 rounded flex items-center justify-center hover:bg-primary transition-colors scale-95 active:scale-90">
<span className="material-symbols-outlined text-sm">add_shopping_cart</span>
</button>
</div>
</div>
</article>
{/* Comentario remanente */}
<article className="bg-surface-container-lowest group relative transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 flex flex-col rounded-lg">
<div className="aspect-square w-full overflow-hidden bg-surface-container relative">
<img alt="Piston Kit" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" data-alt="Row of heavy engine pistons with polished crowns and dark rings, studio lighting on gray background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWEohmAw6eWxzZ0isaHUZlU9cOvgrjklSgykQalVfOYZjL7qpFC9-FV6LmS9RIY5UcJfa-IDSmjpStTpdObb10qNTIOJuZpo-VXSDINLYw_NacgWn7-C6XvF7I6UnQoSXSOgNfqitJ1gcjbw5DdAiBmXQX89pAwFe1_5df3bM8k3-weKsaPWlmyLHvLBLkb0ywwgbPXjfB1kWHVmNfCx5gdA5eB-GuYD_aiBMLpQb2oSH1PQdn7qfRneQGFFuTAQUR1gzSjZQ4ahs"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="mb-1 text-secondary text-[10px] font-bold uppercase tracking-widest">SKU: CUM-PIS-6</div>
<h3 className="font-headline text-lg font-bold uppercase tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors">Kit de Pistones Cummins N14</h3>
<div className="mt-auto pt-4 border-t border-surface-container flex items-center justify-between">
<span className="font-headline text-2xl font-black text-on-surface">$1,150.00</span>
<button className="bg-zinc-950 text-white w-10 h-10 rounded flex items-center justify-center hover:bg-primary transition-colors scale-95 active:scale-90">
<span className="material-symbols-outlined text-sm">add_shopping_cart</span>
</button>
</div>
</div>
</article>
{/* Comentario remanente */}
<article className="bg-surface-container-lowest group relative transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 flex flex-col rounded-lg">
<div className="aspect-square w-full overflow-hidden bg-surface-container relative">
<img alt="Engine Bearings" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" data-alt="New metallic engine bearings arranged neatly on a technical drawing surface with dramatic side shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvii9sNQqqDnze22RTwuNH4tSqUrMSJEXQ_FZFjPwG7dYtpNrQJAq0iwera4ziKWQKtyKYIL3Msi0Ss1lb_0rAdSz18URZSXeNKR778JJHXa9fh-w_0xuxoiVzGWVmi51yNMm5KiF0vGlydUl4uQOHa2rxq6mLGP-mxNA4hDD6OPLg6oq6Bc1XiiwKu8x-iLpFbE2WTYWPtUz4UsWUlPEbLEvWMu82shO_LQJ9o2VuAd2XKqP2YRA3aO_XtOwzJ8hZqiF8RgaCt5U"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="mb-1 text-secondary text-[10px] font-bold uppercase tracking-widest">SKU: PER-BR-50</div>
<h3 className="font-headline text-lg font-bold uppercase tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors">Cojinetes de Bancada Perkins</h3>
<div className="mt-auto pt-4 border-t border-surface-container flex items-center justify-between">
<span className="font-headline text-2xl font-black text-on-surface">$185.00</span>
<button className="bg-zinc-950 text-white w-10 h-10 rounded flex items-center justify-center hover:bg-primary transition-colors scale-95 active:scale-90">
<span className="material-symbols-outlined text-sm">add_shopping_cart</span>
</button>
</div>
</div>
</article>
{/* Comentario remanente */}
<article className="bg-surface-container-lowest group relative transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 flex flex-col rounded-lg">
<div className="aspect-square w-full overflow-hidden bg-surface-container relative">
<img alt="Camshaft assembly" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" data-alt="Long industrial camshaft with perfectly polished lobes resting on an industrial workstation, moody blue lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnCBaJGHx-KHBLQMmi3di8svfE3nGssoVmApRyiRUq5UrT_y5Pmr6_1ffSS1IY-q5a5uldF0WDPUwWSd54IKetwTlV9chBnwD3zo5BSzAt6P6ztwcNISdloAaVQmOHdN3yZEDhMG7zUUIvZIckDDA4jU0vV0JDZnPJkVr9QulcoKSKbKqwfuLrXrypbTwNii03VYK3j6peId5g5vf6YclbW5jlhIr8u00SlBVCPvoW_1L0z6FOb_TeDtNKLKbNdpjPqlAEdSaZkXA"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="mb-1 text-secondary text-[10px] font-bold uppercase tracking-widest">SKU: KOM-CAM-10</div>
<h3 className="font-headline text-lg font-bold uppercase tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors">Árbol de Levas Komatsu SAA6D</h3>
<div className="mt-auto pt-4 border-t border-surface-container flex items-center justify-between">
<span className="font-headline text-2xl font-black text-on-surface">$940.00</span>
<button className="bg-zinc-950 text-white w-10 h-10 rounded flex items-center justify-center hover:bg-primary transition-colors scale-95 active:scale-90">
<span className="material-symbols-outlined text-sm">add_shopping_cart</span>
</button>
</div>
</div>
</article>
</div>
{/* Comentario remanente */}
<div className="mt-12 flex justify-center items-center gap-4">
<button className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant text-secondary hover:text-primary hover:border-primary transition-all">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<div className="flex items-center gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded bg-primary text-on-primary font-bold">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant hover:border-primary font-bold">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant hover:border-primary font-bold">3</button>
<span className="px-2">...</span>
<button className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant hover:border-primary font-bold">24</button>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant text-secondary hover:text-primary hover:border-primary transition-all">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</section>
</main>
{/* Comentario remanente */}
<footer className="bg-zinc-900 w-full mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-12 w-full">
<div>
<h4 className="font-['Space_Grotesk'] font-black text-zinc-100 text-lg uppercase mb-4">MAYOR DE REPUESTO LA CIMA</h4>
<p className="font-['Inter'] text-sm text-zinc-500 mb-4 leading-relaxed">Expertos en repuestos para motores industriales de alto rendimiento. Soluciones integrales para minería, construcción y marina.</p>
<div className="flex gap-4">
<span className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-100 hover:bg-[#9ACD32] transition-colors cursor-pointer">
<span className="material-symbols-outlined text-sm">share</span>
</span>
<span className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-100 hover:bg-[#9ACD32] transition-colors cursor-pointer">
<span className="material-symbols-outlined text-sm">mail</span>
</span>
</div>
</div>
<div>
<h4 className="font-['Inter'] text-xs font-bold uppercase tracking-widest text-[#9ACD32] mb-6">Quick Links</h4>
<ul className="space-y-3 font-['Inter'] text-sm">
<li><a className="text-zinc-500 hover:text-[#9ACD32] transition-colors" href="#">Inventory Overview</a></li>
<li><a className="text-zinc-500 hover:text-[#9ACD32] transition-colors" href="#">Technical Datasheets</a></li>
<li><a className="text-zinc-500 hover:text-[#9ACD32] transition-colors" href="#">Shipping Logistics</a></li>
<li><a className="text-zinc-500 hover:text-[#9ACD32] transition-colors" href="#">Wholesale Program</a></li>
</ul>
</div>
<div>
<h4 className="font-['Inter'] text-xs font-bold uppercase tracking-widest text-[#9ACD32] mb-6">Direct Contact</h4>
<ul className="space-y-3 font-['Inter'] text-sm">
<li className="opacity-80 hover:opacity-100 transition-opacity"><span className="text-[#9ACD32] font-bold">General:</span> <span className="text-zinc-500">info@lacima.com</span></li>
<li className="opacity-80 hover:opacity-100 transition-opacity"><span className="text-[#9ACD32] font-bold">Orders:</span> <span className="text-zinc-500">sales@lacima.com</span></li>
<li className="opacity-80 hover:opacity-100 transition-opacity"><span className="text-[#9ACD32] font-bold">Phone:</span> <span className="text-zinc-500">+58 241-5550101</span></li>
</ul>
</div>
<div>
<h4 className="font-['Inter'] text-xs font-bold uppercase tracking-widest text-[#9ACD32] mb-6">Location</h4>
<p className="text-zinc-500 text-sm mb-4">Zona Industrial Valencia, Carabobo. Venezuela.</p>
<div className="h-32 w-full bg-zinc-800 rounded relative overflow-hidden">
<img alt="Location Map" className="w-full h-full object-cover opacity-30" data-alt="Abstract aerial satellite map of an industrial zone with high-contrast lines and dark tones" data-location="Valencia, Venezuela" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYCLl7tyXanC6k9q9u1iiNwnH-Lbz-sOsJRemLYgYn3IByFd0t8I6YkGNjk2K6cloS-68iM6ZzQI8q40jLpsNoTpx9TUUp12DWIItkJSJsk3AdMUwxxMdUVCQf2UfUAL5HXkSntQvwMrD4ejMB6KTtzbcDy9epw-XxNMG2l8RZqw_o6mBoCO7xuxe5PvQlo2-SP36zWZMT4yp9KVbzMK7lSBcJzy0pSUe5pm_PZEGCUu94Z-ESqxffo60M0vMx1BAfEx0cRJwRpwc"/>
<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-[#9ACD32]">location_on</span>
</div>
</div>
</div>
</div>
<div className="bg-zinc-800 px-8 py-6">
<p className="font-['Inter'] text-xs antialiased text-zinc-500 text-center uppercase tracking-widest">
                © 2024 MAYOR DE REPUESTO LA CIMA, C.A. RIF: J-40308741-5. Valencia, Venezuela.
            </p>
</div>
</footer>

        </div>
    );
};
