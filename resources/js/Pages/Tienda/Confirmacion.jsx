import React from 'react';
import { Head, Link } from '@inertiajs/react';
import EcommerceLayout from '../../Layouts/EcommerceLayout';

export default function Confirmacion(props) {
    const { order = {
        numero_orden: 'ORD-XXXX',
        created_at: new Date().toISOString(),
        customer: { razon_social: 'Cliente Invitado', rif: 'J-00000000-0' },
        items: [],
        total: 0
    } } = props;

    return (
        <EcommerceLayout title="Pedido Confirmado">
            <main className="flex-grow w-full max-w-screen-2xl mx-auto px-6 md:px-12 pt-32 pb-24 relative z-10">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="bg-green-100 p-6 rounded-full">
                            <span className="material-symbols-outlined text-6xl text-green-600">verified</span>
                        </div>
                    </div>
                    <h1 className="text-6xl font-black text-black uppercase tracking-tighter leading-none mb-4 italic">Operación <span className="text-primary italic">Exitosa</span></h1>
                    <p className="text-stone-500 text-lg font-medium">Su requerimiento de componentes ha sido validado y procesado.</p>
                </div>

                <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-stone-200 p-10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-2">Protocolo de Orden</p>
                            <p className="text-3xl font-black text-black tracking-tighter">{order.numero_orden}</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-2">Registro Temporal</p>
                            <p className="text-xl font-bold text-black">{new Date(order.created_at).toLocaleString()}</p>
                        </div>
                    </div>

                    <div className="border-t border-stone-100 py-8 mb-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-4">Consignatario</p>
                        <p className="font-black text-lg text-black uppercase">{order.customer?.razon_social}</p>
                        <p className="text-stone-500 font-mono text-sm">{order.customer?.rif}</p>
                    </div>

                    <div className="border-t border-stone-100 pt-8 mb-10">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-6">Desglose de Carga</p>
                        <div className="space-y-4">
                            {order.items.map((item, i) => (
                                <div key={i} className="flex justify-between items-center py-2 border-b border-stone-50 last:border-0">
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-black bg-stone-100 w-8 h-8 flex items-center justify-center rounded-lg">{item.cantidad}x</span>
                                        <span className="text-sm font-medium text-stone-700">{item.product?.nombre}</span>
                                    </div>
                                    <span className="font-black text-black">${parseFloat(item.subtotal).toFixed(2)}</span>
                                </div>
                            ))}
                            {order.items.length === 0 && <p className="text-stone-400 italic text-sm">Resumen no disponible para esta sesión.</p>}
                        </div>
                    </div>

                    <div className="flex justify-between items-end pt-8 border-t-2 border-primary">
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-stone-400">Inversión Consolidada</span>
                        <span className="text-5xl font-black text-black tracking-tighter">${parseFloat(order.total).toFixed(2)}</span>
                    </div>

                    <div className="mt-12 bg-black text-white rounded-2xl p-8 text-center relative overflow-hidden group">
                        <div className="relative z-10">
                            <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest mb-4">¿Asistencia Logística?</p>
                            <Link href="/modulo/tienda_virtual/contacto" className="inline-flex items-center gap-3 bg-primary text-black font-black uppercase py-4 px-10 tracking-[0.2em] text-xs hover:bg-white transition-all transform hover:scale-105">
                                <span className="material-symbols-outlined text-sm">support_agent</span>
                                Contactar Soporte Técnico
                            </Link>
                        </div>
                        <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-white/5 group-hover:scale-110 transition-transform duration-700">handshake</span>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link href="/modulo/tienda_virtual/catalogo_general" className="group text-stone-400 hover:text-black font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3">
                        <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
                        Retornar a la Base de Suministros
                    </Link>
                </div>
            </main>
        </EcommerceLayout>
    );
}
