import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function POS() {
    const [cart, setCart] = useState([
        { id: 1, name: 'Cummins Gasket', sku: 'CU-982-GK', qty: 4, price: 142.50, icon: 'settings_input_component' },
        { id: 2, name: 'Volvo Filter', sku: 'VO-FL-002', qty: 12, price: 45.00, icon: 'filter_list' },
    ]);

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const tax = subtotal * 0.16;
    const total = subtotal + tax;

    const updateQty = (id, delta) => {
        setCart(cart.map(item => 
            item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        ));
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <AuthenticatedLayout header="Terminal de Punto de Venta (POS)">
            <Head title="POS - Zenith ERP" />

            <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-180px)]">
                {/* Product Search and Items Table */}
                <div className="flex-1 flex flex-col bg-surface-container-lowest rounded-3xl border border-outline-variant/30 overflow-hidden shadow-sm">
                    {/* Header Action Bar */}
                    <div className="p-8 border-b border-outline-variant/30 bg-surface-container-low/30">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] ml-1">Entrada de Producto (SKU / Nombre)</label>
                                <div className="flex items-center bg-surface-container-lowest px-4 h-14 rounded-2xl border border-outline-variant/50 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                                    <span className="material-symbols-outlined text-primary mr-3">barcode_scanner</span>
                                    <input 
                                        type="text" 
                                        placeholder="Escanea o escribe el producto..." 
                                        className="bg-transparent border-none text-on-surface w-full placeholder-outline font-medium focus:ring-0"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] ml-1">Selección de Cliente</label>
                                <div className="relative h-14 flex items-center bg-surface-container-lowest px-4 rounded-2xl border border-outline-variant/50">
                                    <span className="material-symbols-outlined text-primary mr-3">person</span>
                                    <select className="appearance-none bg-transparent border-none text-on-surface w-full font-medium cursor-pointer focus:ring-0">
                                        <option>Consumidor Final</option>
                                        <option>Transporte Carabobo</option>
                                        <option>Industrial Parts S.A.</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-4 text-outline pointer-events-none">expand_more</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Items Table */}
                    <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-outline-variant">
                        <table className="w-full text-left border-separate border-spacing-y-3">
                            <thead>
                                <tr className="text-secondary">
                                    <th className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest">Identificación de Parte</th>
                                    <th className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-center">Cant.</th>
                                    <th className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-right">Precio Unit.</th>
                                    <th className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-right">Subtotal</th>
                                    <th className="px-6 py-2 w-10"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id} className="bg-surface-container-low/20 hover:bg-surface-container-high/40 transition-colors group">
                                        <td className="px-6 py-4 rounded-l-2xl border-y border-l border-outline-variant/20">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center border border-primary/10">
                                                    <span className="material-symbols-outlined text-primary">{item.icon}</span>
                                                </div>
                                                <div>
                                                    <div className="text-on-surface font-bold text-sm tracking-tight">{item.name}</div>
                                                    <div className="text-[10px] text-secondary font-bold uppercase tracking-wider">{item.sku}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 border-y border-outline-variant/20">
                                            <div className="flex items-center justify-center gap-3">
                                                <button 
                                                    onClick={() => updateQty(item.id, -1)}
                                                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-lowest text-secondary hover:text-primary hover:border-primary border border-outline-variant/50 transition-all"
                                                >
                                                    <span className="material-symbols-outlined text-sm">remove</span>
                                                </button>
                                                <span className="font-headline font-black text-on-surface w-8 text-center">{item.qty.toString().padStart(2, '0')}</span>
                                                <button 
                                                    onClick={() => updateQty(item.id, 1)}
                                                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-lowest text-secondary hover:text-primary hover:border-primary border border-outline-variant/50 transition-all"
                                                >
                                                    <span className="material-symbols-outlined text-sm">add</span>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right font-headline font-bold text-sm text-secondary border-y border-outline-variant/20">
                                            $ {item.price.toFixed(2)}
                                        </td>
                                        <td className="px-6 py-4 text-right font-headline font-black text-on-surface border-y border-outline-variant/20">
                                            $ {(item.price * item.qty).toFixed(2)}
                                        </td>
                                        <td className="px-6 py-4 text-right rounded-r-2xl border-y border-r border-outline-variant/20">
                                            <button 
                                                onClick={() => removeItem(item.id)}
                                                className="text-outline hover:text-error transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Summary Panel */}
                <div className="w-full lg:w-96 flex flex-col gap-6">
                    <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 shadow-sm flex flex-col h-full">
                        <h2 className="font-headline font-black text-lg text-on-surface uppercase tracking-tight mb-8 border-b border-outline-variant/30 pb-4">Resumen de Orden</h2>
                        
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center text-secondary">
                                <span className="text-xs font-bold uppercase tracking-wider">Subtotal</span>
                                <span className="font-headline font-bold text-on-surface">$ {subtotal.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                            </div>
                            <div className="flex justify-between items-center text-secondary">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold uppercase tracking-wider">IVA (16%)</span>
                                    <span className="text-[10px] bg-surface-container px-1.5 py-0.5 text-secondary rounded font-bold">V-TAX</span>
                                </div>
                                <span className="font-headline font-bold text-on-surface">$ {tax.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <div className="bg-primary/5 p-6 rounded-2xl mb-8 border-l-4 border-primary">
                                <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">Monto Total a Pagar</div>
                                <div className="text-4xl font-headline font-black text-on-surface tracking-tighter">
                                    $ {total.toLocaleString(undefined, {minimumFractionDigits: 2})}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="h-16 flex flex-col items-center justify-center gap-1 bg-surface-container-low hover:bg-surface-container-high rounded-2xl border border-outline-variant/50 transition-all font-bold group">
                                        <span className="material-symbols-outlined text-primary group-hover:scale-110 duration-200">payments</span>
                                        <span className="text-[9px] uppercase tracking-widest text-secondary">Efectivo</span>
                                    </button>
                                    <button className="h-16 flex flex-col items-center justify-center gap-1 bg-surface-container-low hover:bg-surface-container-high rounded-2xl border border-outline-variant/50 transition-all font-bold group">
                                        <span className="material-symbols-outlined text-primary group-hover:scale-110 duration-200">credit_card</span>
                                        <span className="text-[9px] uppercase tracking-widest text-secondary">Tarjeta</span>
                                    </button>
                                </div>
                                
                                <button className="w-full h-20 bg-primary text-on-primary rounded-2xl font-headline font-black text-lg uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-300">
                                    Procesar Venta
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface-container-low/50 p-4 rounded-2xl text-center border border-outline-variant/20 italic">
                        <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">
                            Operador: {user.name} • Estación: POS-01
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
