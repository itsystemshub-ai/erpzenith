import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import EcommerceLayout from '../../Layouts/EcommerceLayout';

export default function Contacto(props) {
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('tienda.contacto.send'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <EcommerceLayout title="Contacto Industrial">
            <main className="flex-grow pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
                
                <div className="text-center mb-16">
                    <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-2">Comunicaciones Corporativas</span>
                    <h1 className="font-headline text-6xl font-black uppercase tracking-tighter text-black leading-none">Conecte con <span className="text-primary italic">Ingeniería</span></h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    
                    {/* Información Fija */}
                    <div className="space-y-12">
                        <section>
                            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-4 text-black">
                                <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
                                Centro de Operaciones
                            </h3>
                            <p className="text-stone-500 font-medium leading-relaxed max-w-md text-sm">
                                Zona Industrial Los Ruices, Calle Milán, Edificio Comercial La Cima.<br />
                                Caracas, Miranda. Zona Postal 1071.<br />
                                Venezuela.
                            </p>
                        </section>

                        <div className="h-px w-full bg-stone-100"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div>
                                <h4 className="font-black uppercase text-[10px] tracking-widest text-stone-400 mb-2">Canal Ventas B2B</h4>
                                <a href="tel:+582121234567" className="text-2xl font-black text-black hover:text-primary transition-colors tracking-tighter">+58 (212) 123-4567</a>
                            </div>
                            <div>
                                <h4 className="font-black uppercase text-[10px] tracking-widest text-stone-400 mb-2">Soporte Técnico Matriz</h4>
                                <a href="tel:+582129876543" className="text-2xl font-black text-black hover:text-primary transition-colors tracking-tighter">+58 (212) 987-6543</a>
                            </div>
                        </div>

                        <div className="bg-black text-white p-10 rounded-3xl relative overflow-hidden shadow-2xl">
                            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[120px] opacity-10 text-white group-hover:scale-110 transition-transform">verified_user</span>
                            <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-4 relative z-10">Acceso VIP Mayorista</h4>
                            <p className="text-sm text-stone-400 leading-relaxed relative z-10">Si representa a una flotilla pesada o concesionario marítimo, nuestro equipo KAM está disponible 24/7 de forma exclusiva para corporaciones autorizadas.</p>
                        </div>
                    </div>

                    {/* Formulario Dinámico Backend */}
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_45px_100px_rgba(0,0,0,0.06)] border border-stone-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full pointer-events-none"></div>
                        
                        {wasSuccessful && (
                            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-xl flex items-center gap-4 animate-in fade-in slide-in-from-top-4">
                                <span className="material-symbols-outlined text-green-600">check_circle</span>
                                <p className="font-black text-green-900 uppercase text-xs tracking-widest">Petición transmitida exitosamente.</p>
                            </div>
                        )}

                        <h3 className="text-2xl font-black uppercase mb-10 text-black tracking-tight">Protocolo de Contacto</h3>
                        
                        <form onSubmit={submit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-stone-400">Entidad / Profesional *</label>
                                    <input 
                                        type="text" 
                                        value={data.nombre}
                                        onChange={e => setData('nombre', e.target.value)}
                                        className="w-full bg-stone-50 border-stone-50 p-4 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all text-sm font-medium" 
                                        required 
                                    />
                                    {errors.nombre && <span className="text-red-500 text-[10px] font-black uppercase">{errors.nombre}</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-stone-400">Terminal de Enlace (Email) *</label>
                                    <input 
                                        type="email" 
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        className="w-full bg-stone-50 border-stone-50 p-4 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all text-sm font-medium" 
                                        required 
                                    />
                                    {errors.email && <span className="text-red-500 text-[10px] font-black uppercase">{errors.email}</span>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-stone-400">Frecuencia Telefónica</label>
                                    <input 
                                        type="text" 
                                        value={data.telefono}
                                        onChange={e => setData('telefono', e.target.value)}
                                        className="w-full bg-stone-50 border-stone-50 p-4 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all text-sm font-medium" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-stone-400">Canal de Atención *</label>
                                    <select 
                                        value={data.asunto}
                                        onChange={e => setData('asunto', e.target.value)}
                                        className="w-full bg-stone-50 border-stone-50 p-4 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all text-sm font-medium h-[52px]" 
                                        required
                                    >
                                        <option value="">Seleccione Departamento</option>
                                        <option value="Ventas">Cotización Comercial Mayorista</option>
                                        <option value="Soporte">Soporte de Ingeniería Especializado</option>
                                        <option value="RMA/Facturación">Módulo de Logística Inversa (RMA)</option>
                                        <option value="Directorio">Línea Directa con el Directorio</option>
                                    </select>
                                    {errors.asunto && <span className="text-red-500 text-[10px] font-black uppercase">{errors.asunto}</span>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-[10px] font-black uppercase tracking-widest text-stone-400">Requerimiento de Transmisión *</label>
                                <textarea 
                                    value={data.mensaje}
                                    onChange={e => setData('mensaje', e.target.value)}
                                    rows="4" 
                                    className="w-full bg-stone-50 border-stone-50 p-4 rounded-xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all text-sm font-medium resize-none" 
                                    placeholder="Detalle las especificaciones técnicas..."
                                    required 
                                ></textarea>
                                {errors.mensaje && <span className="text-red-500 text-[10px] font-black uppercase">{errors.mensaje}</span>}
                            </div>

                            <button 
                                type="submit" 
                                disabled={processing}
                                className="w-full bg-black text-white hover:bg-primary hover:text-black py-5 font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 text-xs shadow-xl disabled:opacity-50 group"
                            >
                                {processing ? 'Sincronizando...' : 'Transmitir Petición'}
                                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">send</span>
                            </button>
                            <div className="flex items-center justify-center gap-2 text-stone-400">
                                <span className="material-symbols-outlined text-sm">lock</span>
                                <p className="text-[9px] font-black uppercase tracking-widest">Información Encriptada SSL/TLS AES-256</p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </EcommerceLayout>
    );
}
