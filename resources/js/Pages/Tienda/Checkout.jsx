import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import EcommerceLayout from '../../Layouts/EcommerceLayout';

export default function Checkout(props) {
    const { customers = [], cart = [], subtotal = 0, impuesto = 0, total = 0 } = props;

    const { data, setData, post, processing, errors } = useForm({
        customer_id: '',
        metodo_pago: 'contado',
        items: cart
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('tienda.checkout.process'));
    };

    return (
        <EcommerceLayout title="Finalizar Pedido">
            <main className="flex-grow w-full max-w-screen-2xl mx-auto px-6 md:px-12 pt-32 pb-24 relative z-10">
                <div className="mb-16">
                    <h1 className="text-6xl font-black text-black uppercase tracking-tighter leading-none mb-4 italic">Finalizar <span className="text-primary italic">Pedido</span></h1>
                    <p className="text-[10px] font-black text-stone-500 uppercase tracking-[0.4em]">Confirma tu orden de repuestos industriales</p>
                </div>

                <form onSubmit={submit} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-7 space-y-8">
                        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
                            <h2 className="text-2xl font-black uppercase tracking-tight mb-6 text-black">Datos del Cliente</h2>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">Cliente Matriz</label>
                                    <select 
                                        name="customer_id" 
                                        value={data.customer_id}
                                        onChange={e => setData('customer_id', e.target.value)}
                                        className="w-full px-4 py-4 bg-stone-50 border border-stone-100 rounded-xl text-stone-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                                        required
                                    >
                                        <option value="">Seleccionar razón social...</option>
                                        {customers.map(customer => (
                                            <option key={customer.id} value={customer.id}>
                                                {customer.razon_social} ({customer.rif})
                                            </option>
                                        ))}
                                    </select>
                                    {errors.customer_id && <div className="text-red-500 text-xs mt-1 uppercase font-bold tracking-widest">{errors.customer_id}</div>}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
                            <h2 className="text-2xl font-black uppercase tracking-tight mb-6 text-black">Método de Adquisición</h2>
                            <div className="space-y-4">
                                {[
                                    { id: 'contado', label: 'Pago de Contado', desc: 'Liquidación inmediata para despacho prioritario.' },
                                    { id: 'credito', label: 'Línea de Crédito', desc: 'Sujeto a aprobación por departamento de finanzas.' }
                                ].map(method => (
                                    <label key={method.id} className={`flex items-start gap-4 p-6 border rounded-xl cursor-pointer transition-all ${data.metodo_pago === method.id ? 'border-primary bg-primary/5' : 'border-stone-100 hover:border-stone-300'}`}>
                                        <input 
                                            type="radio" 
                                            name="metodo_pago" 
                                            value={method.id} 
                                            checked={data.metodo_pago === method.id}
                                            onChange={e => setData('metodo_pago', e.target.value)}
                                            className="mt-1 text-primary focus:ring-primary h-5 w-5"
                                        />
                                        <div>
                                            <span className="font-black uppercase tracking-widest text-sm text-black block mb-1">{method.label}</span>
                                            <span className="text-xs text-stone-500 leading-relaxed block">{method.desc}</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-black text-white p-8 rounded-3xl sticky top-32 shadow-2xl relative overflow-hidden">
                            <div className="absolute -right-8 -top-8 text-primary/10">
                                <span className="material-symbols-outlined text-[120px]">shopping_cart_checkout</span>
                            </div>

                            <h2 className="text-xl font-black text-primary uppercase tracking-tighter mb-8 relative z-10">Resumen de Importación</h2>
                            
                            <div className="space-y-4 mb-8 relative z-10">
                                {cart.map((item, i) => (
                                    <div key={i} className="flex justify-between text-stone-400 text-xs uppercase tracking-widest">
                                        <span className="font-bold">{item.cantidad}x {item.nombre}</span>
                                        <span className="text-white">${parseFloat(item.precio * item.cantidad).toFixed(2)}</span>
                                    </div>
                                ))}
                                {cart.length === 0 && <p className="text-stone-500 italic text-xs">No hay items en la sesión activa.</p>}
                            </div>

                            <div className="border-t border-white/10 pt-6 space-y-4 relative z-10">
                                <div className="flex justify-between text-stone-500 text-[10px] font-black uppercase tracking-[0.2em]">
                                    <span>Subtotal Base</span>
                                    <span className="text-stone-300 font-black">${parseFloat(subtotal).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-stone-500 text-[10px] font-black uppercase tracking-[0.2em]">
                                    <span>IVA Estándar (16%)</span>
                                    <span className="text-stone-300 font-black">${parseFloat(impuesto).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                    <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">Total Inversión</span>
                                    <span className="text-4xl font-black text-white tracking-tighter">${parseFloat(total).toFixed(2)}</span>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                disabled={processing || cart.length === 0}
                                className="w-full bg-primary text-black font-black uppercase py-5 mt-10 tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 shadow-[0_10px_30px_rgba(212,237,49,0.3)] relative z-10"
                            >
                                {processing ? 'Procesando Enlace...' : 'Confirmar Importación'}
                            </button>
                            
                            <p className="text-[9px] uppercase tracking-widest text-stone-600 text-center mt-6 relative z-10">
                                Al confirmar, autoriza la reserva de inventario en el hub central.
                            </p>
                        </div>
                    </div>
                </form>
            </main>
        </EcommerceLayout>
    );
}
