import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import EcommerceLayout from '../../Layouts/EcommerceLayout';

export default function DetalleProductos(props) {
    const { product = {
        id: 1,
        nombre: 'Gasket Kit Upper Engine',
        marca: 'Cummins',
        sku: 'CU-8842-X',
        precio: 145.00,
        precio_anterior: 165.00,
        imagen_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7nYKSbAGk0sNgs7oPCd8fyoeR9e60wl1s7Jym9qpDXwnXaaIfkrxG35dPa2wV94j5fhKhsSHI4p3FIiX0otqPuYO07xO5dJd67_fdC5iaU0OMvzma3OMcftTxGXR_8h-CuY0MNvIpEQtgUBoHs4Y0aWQrtQp8ZPvy2FCDe0auTRAhubbCiVTCvakNmJDOKgDPwpqWLmOg_P1hwI1D4D5VdoJ80afZqds7EAFF88xS-vm6cmgnWgiSjN6obErYH81zQhDeQ0iWub4',
        stock: 25,
        specs: [
            { key: 'Material', value: 'Multi-Layer Steel (MLS)' },
            { key: 'Espesor', value: '1.2mm' },
            { key: 'Diámetro Cilindro', value: '125mm' },
            { key: 'Referencia Cruzada', value: '3804897, 4089889' }
        ],
        compatibility: ['Cummins ISM', 'Cummins QSM11', 'Cummins M11'],
        installation: [
            'Limpiar superficies de contacto.',
            'Verificar planeidad del bloque.',
            'Seguir torque especificado en manual (250Nm).',
            'No utilizar selladores adicionales.'
        ]
    } } = props;

    const [qty, setQty] = useState(1);
    const [activeTab, setActiveTab] = useState('specs');
    const [isFavorite, setIsFavorite] = useState(false);

    const updateQty = (change) => {
        const newQty = qty + change;
        if (newQty >= 1 && newQty <= 99) setQty(newQty);
    };

    const addToCart = () => {
        // router.post('/api/tienda/carrito', { product_id: product.id, cantidad: qty });
        alert(`${qty}x ${product.nombre} añadido al carrito.`);
    };

    return (
        <EcommerceLayout title={`Detalle: ${product.nombre}`}>
            <main className="pt-32 pb-24">
                <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-12">
                    {/* Breadcrumb */}
                    <nav className="mb-10 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
                        <Link href="/modulo/tienda_virtual/index" className="hover:text-primary transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">home</span> Inicio
                        </Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <Link href="/modulo/tienda_virtual/catalogo_general" className="hover:text-primary transition-colors">Catálogo Matrix</Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-black">{product.nombre}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        {/* Gallery Section */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="relative aspect-square bg-white border border-stone-100 rounded-[2rem] overflow-hidden flex items-center justify-center p-12 lg:p-24 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] group">
                                <img src={product.imagen_url} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-1000 group-hover:scale-105" alt={product.nombre} />
                                <div className="absolute top-8 left-8 flex gap-3">
                                    <span className="bg-black text-primary px-5 py-2 text-[9px] font-black uppercase tracking-[0.2em] rounded-full">OEM Genuine Artifact</span>
                                    {product.precio_anterior > product.precio && <span className="bg-primary text-black px-5 py-2 text-[9px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">Oferta Limitada</span>}
                                </div>
                                <div className="absolute top-8 right-8">
                                    <button onClick={() => setIsFavorite(!isFavorite)} className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-xl backdrop-blur-md ${isFavorite ? 'bg-primary text-black' : 'bg-white/80 text-stone-400 hover:text-black'}`}>
                                        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product Info Section */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] bg-primary/10 px-4 py-2 rounded-lg">{product.marca}</span>
                                <span className="flex items-center gap-2 text-green-600 text-[10px] font-black uppercase tracking-widest">
                                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    Suministro Disponible
                                </span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter leading-[0.9] mb-6">{product.nombre}</h1>
                            
                            <div className="flex items-center gap-8 mb-10 pb-10 border-b border-stone-100">
                                <span className="bg-stone-900 text-stone-400 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm">Part ID: {product.sku}</span>
                                <div className="flex items-center gap-1.5">
                                    {[1,2,3,4].map(i => <span key={i} className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                                    <span className="material-symbols-outlined text-stone-200 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="text-[10px] font-black text-stone-400 ml-2 uppercase tracking-widest">(4.8 Grade)</span>
                                </div>
                            </div>

                            <div className="bg-stone-50 rounded-3xl p-10 mb-10">
                                <div className="flex items-baseline gap-4 mb-8">
                                    <span className="text-6xl font-black text-black tracking-tighter">${parseFloat(product.precio).toFixed(2)}</span>
                                    {product.precio_anterior > product.precio && (
                                        <span className="text-stone-300 line-through text-2xl font-black mb-1">${parseFloat(product.precio_anterior).toFixed(2)}</span>
                                    )}
                                </div>
                                <p className="text-[10px] font-black text-stone-400 uppercase tracking-[0.3em] mb-10">Sujeto a validación impositiva B2B | Bs. {(product.precio * 36).toLocaleString()} aprox.</p>

                                <div className="flex gap-4">
                                    <div className="flex items-center bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm">
                                        <button onClick={() => updateQty(-1)} className="w-16 h-16 flex items-center justify-center text-black font-black text-xl hover:bg-stone-50 transition-colors">−</button>
                                        <input className="w-16 bg-transparent border-none text-center font-black text-lg focus:ring-0" type="number" value={qty} readOnly />
                                        <button onClick={() => updateQty(1)} className="w-16 h-16 flex items-center justify-center text-black font-black text-xl hover:bg-stone-50 transition-colors">+</button>
                                    </div>
                                    <button onClick={addToCart} className="flex-grow bg-black text-primary hover:bg-primary hover:text-black border border-black font-black uppercase py-5 px-10 tracking-[0.2em] text-xs rounded-2xl transition-all flex items-center justify-center gap-4 shadow-2xl">
                                        <span className="material-symbols-outlined">add_shopping_cart</span>
                                        Vincular al Carrito
                                    </button>
                                </div>
                            </div>

                            <div className="bg-primary/5 border-l-4 border-primary rounded-r-2xl p-6">
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-3 text-black flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">engineering</span>
                                    Veredicto del Ingeniero
                                </p>
                                <p className="text-sm font-medium text-stone-600 leading-relaxed italic">
                                    "Componente de grado aeroespacial diseñado para soportar ciclos de expansión térmica extremos en motores de tracción pesada."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tabs Section */}
                <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-32">
                    <div className="flex gap-12 border-b-2 border-stone-100 mb-16 overflow-x-auto scrollbar-hide">
                        {[
                            { id: 'specs', label: 'Especificaciones', icon: 'settings_input_component' },
                            { id: 'compatibility', label: 'Compatibilidad', icon: 'hub' },
                            { id: 'installation', label: 'Guía Técnica', icon: 'menu_book' }
                        ].map(tab => (
                            <button 
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-6 border-b-4 text-[11px] font-black uppercase tracking-[0.4em] whitespace-nowrap px-2 flex items-center gap-3 transition-all ${activeTab === tab.id ? 'border-primary text-black' : 'border-transparent text-stone-300 hover:text-stone-500'}`}
                            >
                                <span className={`material-symbols-outlined text-sm ${activeTab === tab.id ? 'text-primary' : 'text-stone-200'}`}>{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-8">
                            {activeTab === 'specs' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h3 className="text-3xl font-black text-black uppercase tracking-tighter mb-10">Protocolo de Partes</h3>
                                    <div className="border border-stone-100 rounded-3xl overflow-hidden shadow-sm">
                                        {product.specs.map((spec, i) => (
                                            <div key={i} className="flex border-b border-stone-50 last:border-0 hover:bg-stone-50 transition-colors">
                                                <div className="w-1/3 bg-stone-50 py-6 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">{spec.key}</div>
                                                <div className="w-2/3 py-6 px-8 text-sm font-bold text-black">{spec.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'compatibility' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h3 className="text-3xl font-black text-black uppercase tracking-tighter mb-10">Mapeo de Motores Compatibles</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {product.compatibility.map((model, i) => (
                                            <div key={i} className="bg-white border border-stone-100 p-8 rounded-2xl flex items-center gap-6 shadow-sm group hover:border-primary transition-all">
                                                <div className="w-12 h-12 bg-stone-100 group-hover:bg-primary transition-all rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="material-symbols-outlined text-black text-lg">precision_manufacturing</span>
                                                </div>
                                                <span className="font-black uppercase tracking-widest text-sm text-stone-700">{model}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'installation' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h3 className="text-3xl font-black text-black uppercase tracking-tighter mb-10">Algoritmo de Montaje</h3>
                                    <div className="space-y-8">
                                        {product.installation.map((step, i) => (
                                            <div key={i} className="flex gap-8 group">
                                                <div className="w-12 h-12 bg-black text-primary font-black rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform shadow-lg">{i + 1}</div>
                                                <div className="pt-2">
                                                    <p className="text-lg font-bold text-stone-800 leading-tight">{step}</p>
                                                    <div className="h-1 w-0 group-hover:w-full bg-primary transition-all mt-2 opacity-30"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="lg:col-span-4 space-y-8">
                            <div className="bg-stone-900 p-12 rounded-[2.5rem] relative overflow-hidden group shadow-2xl">
                                <div className="relative z-10">
                                    <h4 className="text-primary text-3xl font-black uppercase tracking-tighter mb-6 italic leading-none">Asesoría de<br />Torque Real</h4>
                                    <p className="text-stone-400 text-xs font-bold mb-10 leading-relaxed uppercase tracking-[0.2em]">Sincronice con un experto industrial para validación de montaje.</p>
                                    <a href="mailto:soporte@lacima.com" className="inline-flex items-center gap-3 bg-primary text-black px-10 py-5 text-[10px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-white transition-all transform hover:-translate-y-1">
                                        <span className="material-symbols-outlined text-lg">support_agent</span>
                                        Connect
                                    </a>
                                </div>
                                <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-white/5 text-[220px] transform group-hover:rotate-12 transition-transform duration-1000">engineering</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </EcommerceLayout>
    );
}
