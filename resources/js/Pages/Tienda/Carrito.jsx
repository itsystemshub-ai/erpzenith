import React, { useState, useEffect } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import EcommerceLayout from '../../Layouts/EcommerceLayout';

export default function Carrito(props) {
    const { cartItems: initialCartItems = [] } = props;
    const [cartItems, setCartItems] = useState(initialCartItems);

    const subtotalTotal = cartItems.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    const iva = subtotalTotal * 0.16;
    const total = subtotalTotal + iva;

    const ajustar = async (id, change) => {
        const item = cartItems.find(i => i.id === id);
        if (!item) return;

        const newQty = item.cantidad + change;
        if (newQty < 1) return;

        // Optimistic UI update
        const updatedItems = cartItems.map(i => i.id === id ? { ...i, cantidad: newQty } : i);
        setCartItems(updatedItems);

        // Sync with backend (placeholder for actual API call)
        // router.put(`/api/tienda/carrito/${id}`, { cantidad: newQty }, { preserveScroll: true });
    };

    const eliminarFila = async (id) => {
        // Optimistic UI update
        const updatedItems = cartItems.filter(i => i.id !== id);
        setCartItems(updatedItems);

        // Sync with backend
        // router.delete(`/api/tienda/carrito/${id}`, { preserveScroll: true });
    };

    return (
        <EcommerceLayout title="Carrito de Inteligencia">
            <main className="flex-grow w-full max-w-screen-2xl mx-auto px-6 md:px-12 pt-32 pb-24 relative z-10">
                
                {/* Título y Breadcrumb */}
                <div className="mb-12">
                    <h1 className="text-6xl font-black text-black uppercase tracking-tighter leading-none mb-3">Requerimiento <span className="text-primary">Activo</span></h1>
                    <p className="text-[11px] font-bold text-stone-500 uppercase tracking-[0.3em]">Gestión de Componentes B2B &bull; Validación Segura</p>
                </div>

                {cartItems.length === 0 ? (
                    /* Empty Cart Premium State */
                    <div className="bg-white rounded-3xl p-24 text-center border border-outline shadow-sm relative overflow-hidden">
                        <div className="absolute inset-x-0 -top-40 h-80 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
                        <span className="material-symbols-outlined text-[100px] text-stone-200 mb-8 block">conveyor_belt</span>
                        <h2 className="text-3xl font-black text-black uppercase tracking-tight mb-4">Línea de Ensamble Vacía</h2>
                        <p className="text-stone-500 mb-10 max-w-md mx-auto text-sm leading-relaxed">Su cesta de distribución industrial no contiene repuestos. Visite nuestro catálogo matriz para comenzar la selección de componentes.</p>
                        <Link href="/modulo/tienda_virtual/catalogo_general" className="inline-flex items-center justify-center gap-3 bg-black text-white hover:bg-primary hover:text-black font-black uppercase py-5 px-12 tracking-[0.2em] transform transition-all hover:-translate-y-1 shadow-lg">
                            <span className="material-symbols-outlined">database</span>
                            Abrir Catálogo de Partes
                        </Link>
                    </div>
                ) : (
                    /* B2B Shopping Cart Layout */
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        
                        {/* Listado de Piezas (Columna Principal) */}
                        <div className="lg:col-span-8 space-y-6">
                            
                            {/* Security Header */}
                            <div className="bg-black text-white rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                                    <div>
                                        <h4 className="font-black uppercase tracking-widest text-xs">Despacho Autorizado</h4>
                                        <p className="text-[10px] text-stone-400">Protección SSL/TLS y rastreo logístico activo.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Tabla de Contenidos */}
                            <div className="bg-white rounded-3xl border border-outline overflow-hidden shadow-sm">
                                
                                {/* Table Header */}
                                <div className="grid grid-cols-12 gap-4 p-6 bg-stone-50 border-b border-outline text-[10px] font-black uppercase tracking-[0.2em] text-stone-500">
                                    <div className="col-span-6 md:col-span-5">Nomenclatura / Componente</div>
                                    <div className="col-span-3 hidden md:block text-center">Valor Unitario</div>
                                    <div className="col-span-4 md:col-span-2 text-center">Cant.</div>
                                    <div className="col-span-2 text-right">Subtotal</div>
                                </div>

                                {/* Items Inject */}
                                <div className="divide-y divide-stone-100 cart-list-container">
                                    {cartItems.map((item) => {
                                        const lineTotal = item.precio * item.cantidad;
                                        return (
                                            <div key={item.id} className="grid grid-cols-12 gap-4 p-6 items-center cart-item-row transition-opacity">
                                                
                                                {/* Producto Info */}
                                                <div className="col-span-6 md:col-span-5 flex items-center gap-6">
                                                    <div className="w-20 h-20 bg-stone-50 rounded-xl flex-shrink-0 border border-stone-100 flex items-center justify-center p-2 hidden sm:flex relative group">
                                                        <img src={item.imagen_url} alt="Foto Pieza" className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                                                        <button onClick={() => eliminarFila(item.id)} className="absolute -top-2 -left-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex">
                                                            <span className="material-symbols-outlined text-xs">close</span>
                                                        </button>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest block">OEM: {item.codigo_oem}</span>
                                                        <Link href={`/modulo/tienda_virtual/product_detail_cummins_gasket`} className="text-sm font-black text-black hover:text-primary transition-colors block leading-tight">{item.nombre}</Link>
                                                        <div className="block md:hidden text-xs text-stone-500 mt-2">${item.precio.toFixed(2)} unit.</div>
                                                        <button onClick={() => eliminarFila(item.id)} className="block sm:hidden text-[10px] text-red-500 font-bold uppercase mt-2">Eliminar de la lista</button>
                                                    </div>
                                                </div>

                                                {/* Precio Desktop */}
                                                <div className="col-span-3 hidden md:flex items-center justify-center text-sm font-black text-stone-600">
                                                    ${item.precio.toFixed(2)}
                                                </div>

                                                {/* Controls */}
                                                <div className="col-span-4 md:col-span-2">
                                                    <div className="flex items-center justify-between border border-stone-200 rounded-lg overflow-hidden bg-stone-50">
                                                        <button onClick={() => ajustar(item.id, -1)} className="w-8 h-10 flex items-center justify-center text-stone-500 hover:bg-stone-200 hover:text-black transition-colors"><span className="material-symbols-outlined text-sm">remove</span></button>
                                                        <input type="number" value={item.cantidad} className="w-10 h-10 text-center text-sm font-bold bg-transparent border-none p-0 focus:ring-0 m-0" readOnly />
                                                        <button onClick={() => ajustar(item.id, 1)} className="w-8 h-10 flex items-center justify-center text-stone-500 hover:bg-stone-200 hover:text-black transition-colors"><span className="material-symbols-outlined text-sm">add</span></button>
                                                    </div>
                                                </div>

                                                {/* Subtotal */}
                                                <div className="col-span-2 text-right">
                                                    <span className="text-base font-black text-black block">${lineTotal.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Footer del Contenedor de Items */}
                                <div className="p-6 bg-stone-50 border-t border-outline flex justify-between items-center">
                                    <Link href="/modulo/tienda_virtual/catalogo_general" className="text-[10px] uppercase font-bold text-stone-500 hover:text-black flex items-center gap-2 group transition-colors">
                                        <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
                                        Añadir Más Piezas
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Panel de Cierre (Order Summary) */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* Summary Card */}
                            <div className="bg-black text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                                <div className="absolute -right-12 -top-12 opacity-10">
                                    <span className="material-symbols-outlined text-[150px]">receipt_long</span>
                                </div>

                                <h3 className="font-headline text-2xl font-black uppercase tracking-tighter mb-8 relative z-10">Consolidado</h3>

                                <div className="space-y-4 mb-8 text-sm relative z-10">
                                    <div className="flex justify-between text-stone-400 font-medium">
                                        <span>Subtotal Repuestos</span>
                                        <span className="text-white font-black">${subtotalTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-stone-400 font-medium pb-4 border-b border-white/20">
                                        <span>Estimado IVA (16%)</span>
                                        <span className="text-white font-black">${iva.toFixed(2)}</span>
                                    </div>
                                    
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-xs uppercase tracking-widest font-bold text-primary">Inversión Final</span>
                                        <span className="text-4xl font-black text-primary">${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <Link href="/modulo/tienda_virtual/checkout" className="w-full bg-primary text-black hover:bg-white hover:text-black font-black uppercase tracking-[0.2em] py-5 transition-colors relative z-10 shadow-[0_10px_30px_rgba(212,237,49,0.2)] block text-center">
                                    Habilitar Modulo de Pago
                                </Link>
                                
                                <p className="text-[9px] uppercase tracking-widest text-stone-500 text-center mt-6 relative z-10">
                                    Su orden pasará por el Hub de validación de disponibilidad Zenith.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                )}
            </main>
        </EcommerceLayout>
    );
};
