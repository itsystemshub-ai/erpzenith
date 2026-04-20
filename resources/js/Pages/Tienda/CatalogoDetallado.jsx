import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import EcommerceLayout from '../../Layouts/EcommerceLayout';
import ProductCard from '../../Components/Tienda/ProductCard';

export default function CatalogoDetallado(props) {
    const { products = [
        { id: 1, nombre: 'Junta de Culata Cummins', marca: 'Cummins', codigo: 'CU-8842-X', precio: 145.00, imagen_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7nYKSbAGk0sNgs7oPCd8fyoeR9e60wl1s7Jym9qpDXwnXaaIfkrxG35dPa2wV94j5fhKhsSHI4p3FIiX0otqPuYO07xO5dJd67_fdC5iaU0OMvzma3OMcftTxGXR_8h-CuY0MNvIpEQtgUBoHs4Y0aWQrtQp8ZPvy2FCDe0auTRAhubbCiVTCvakNmJDOKgDPwpqWLmOg_P1hwI1D4D5VdoJ80afZqds7EAFF88xS-vm6cmgnWgiSjN6obErYH81zQhDeQ0iWub4' },
        { id: 2, nombre: 'Filtro de Aceite Volvo', marca: 'Volvo', codigo: 'VO-1120-F', precio: 38.50, imagen_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsHZ9MFD4WCJtxE7xbkGvYvm4qisOi2hGXwJ_Zav27WFtthL07jOmeBqA3uxqD9hGFJF6jtKRFwuIbqtxbKM9d222u0u570XUHOr-3TM5d4-836PCyasLIpwwaCSnEasQ3XtaGoL4RnLluZBXOHdCtMdslZuzY0-nXPEIgnykw7T83b5acMv9DZ3XU7hKUl2gO3uCqaHBWjdvytWxJcG0h1D0ClBrKUkC2J3AKzajE4r9QkGRjpLqjmKsImGg4iReJej_zOKXcihk' },
        // ... more dummy data or provided props
    ] } = props;

    const [view, setView] = useState('grid');

    return (
        <EcommerceLayout title="Catálogo Detallado">
            <main className="flex-grow pt-32 pb-12 px-6 max-w-[1920px] mx-auto w-full">
                <div className="flex flex-col md:flex-row gap-8">
                    
                    {/* Sidebar Filters */}
                    <aside className="w-full md:w-72 flex-shrink-0 space-y-8">
                        <div className="bg-white border border-outline p-6 rounded-lg shadow-sm">
                            <h2 className="font-headline text-lg font-bold uppercase tracking-tighter mb-6 flex items-center gap-2 text-black">
                                <span className="material-symbols-outlined text-primary">filter_list</span>
                                Filtrado Técnico
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="font-headline text-xs font-bold uppercase text-stone-500 block mb-3 tracking-widest">Tipo de Motor</label>
                                    <div className="space-y-2">
                                        {['Diesel V8 Heavy Duty', 'Inline 6 Turbo', 'Gas Turbine Aux'].map(label => (
                                            <label key={label} className="flex items-center gap-3 cursor-pointer group">
                                                <input className="w-4 h-4 rounded border-stone-300 text-primary focus:ring-primary" type="checkbox"/>
                                                <span className="text-sm font-medium group-hover:text-primary transition-colors">{label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="font-headline text-xs font-bold uppercase text-stone-500 block mb-3 tracking-widest text-[#5a5c5e]">Marca / Fabricante</label>
                                    <select className="w-full bg-stone-100 border-none rounded-lg text-sm p-3 focus:ring-2 focus:ring-primary">
                                        <option>Cummins Engine Co.</option>
                                        <option>Volvo Penta</option>
                                        <option>Caterpillar Inc.</option>
                                        <option>Detroit Diesel</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="font-headline text-xs font-bold uppercase text-stone-500 block mb-3 tracking-widest text-[#5a5c5e]">Tipo de Maquinaria</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {['Excavator', 'Truck', 'Marine', 'GenSet'].map(type => (
                                            <button key={type} className={`p-2 text-[10px] font-bold border border-outline rounded hover:bg-black hover:text-white transition-all uppercase ${type === 'Truck' ? 'bg-primary text-black' : ''}`}>{type}</button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technical Support Card */}
                        <div className="bg-black text-white p-6 rounded-lg relative overflow-hidden group shadow-xl">
                            <div className="relative z-10">
                                <h3 className="font-headline text-xl font-black uppercase leading-none mb-2 text-primary">Soporte Técnico</h3>
                                <p className="text-stone-400 text-xs mb-4">Piezas críticas y asistencia en instalación industrial.</p>
                                <button className="text-primary text-[10px] font-bold uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Hablar con Ingeniero
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>engineering</span>
                            </div>
                        </div>
                    </aside>

                    {/* Product Listing */}
                    <section className="flex-grow">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
                            <div>
                                <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-1">Precision Inventory</span>
                                <h1 className="font-headline text-4xl font-black uppercase tracking-tighter text-black">Catálogo Completo</h1>
                            </div>
                            <div className="text-right w-full sm:w-auto">
                                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Mostrando {products.length} Items</p>
                                <div className="flex gap-2 mt-2 justify-end">
                                    <button onClick={() => setView('grid')} className={`w-10 h-10 flex items-center justify-center rounded transition-all ${view === 'grid' ? 'bg-black text-white' : 'text-stone-400 hover:bg-stone-200'}`}><span className="material-symbols-outlined text-sm">grid_view</span></button>
                                    <button onClick={() => setView('list')} className={`w-10 h-10 flex items-center justify-center rounded transition-all ${view === 'list' ? 'bg-black text-white' : 'text-stone-400 hover:bg-stone-200'}`}><span className="material-symbols-outlined text-sm">list</span></button>
                                </div>
                            </div>
                        </div>

                        <div className={`grid gap-6 ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
                            {products.map(product => (
                                <ProductCard key={product.id} product={product} view={view} />
                            ))}
                            {products.length === 0 && (
                                <div className="col-span-full py-24 text-center">
                                    <span className="material-symbols-outlined text-8xl text-stone-200 mb-4 block">inventory_2</span>
                                    <p className="text-stone-500 font-bold text-sm uppercase tracking-widest">Incompatibilidad de Filtros</p>
                                    <p className="text-stone-400 text-xs uppercase tracking-widest mt-2">No se encontraron componentes con estos parámetros.</p>
                                </div>
                            )}
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 flex justify-center items-center gap-4">
                            <button className="w-10 h-10 flex items-center justify-center rounded border border-outline text-stone-500 hover:text-primary hover:border-primary transition-all">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <div className="flex items-center gap-2">
                                <button className="w-10 h-10 flex items-center justify-center rounded bg-black text-primary font-bold text-xs">1</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded border border-outline hover:border-primary font-bold text-xs text-black">2</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded border border-outline hover:border-primary font-bold text-xs text-black">3</button>
                                <span className="px-2 text-stone-400">...</span>
                                <button className="w-10 h-10 flex items-center justify-center rounded border border-outline hover:border-primary font-bold text-xs text-black">24</button>
                            </div>
                            <button className="w-10 h-10 flex items-center justify-center rounded border border-outline text-stone-500 hover:text-primary hover:border-primary transition-all">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>

                        {/* Technical Compatibility Table */}
                        <div className="mt-24 bg-white border border-outline rounded-3xl p-8 shadow-sm">
                            <h2 className="font-headline text-2xl font-black uppercase tracking-widest mb-8 flex items-center gap-4 text-black">
                                <span className="w-12 h-[2px] bg-primary"></span>
                                Matriz de Compatibilidad
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="font-headline uppercase text-[10px] tracking-[0.2em] text-stone-500 border-b border-outline">
                                        <tr>
                                            <th className="pb-4 px-4 font-black">Nomenclatura</th>
                                            <th className="pb-4 px-4 font-black">Marca Compatible</th>
                                            <th className="pb-4 px-4 font-black">Origen / Hub</th>
                                            <th className="pb-4 px-4 font-black">Sello Cert.</th>
                                            <th className="pb-4 px-4 font-black">Estado</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-xs">
                                        {[
                                            { comp: 'Inyectores de Combustible', brand: 'CAT / Perkins', origin: 'USA / Germany', cert: 'OEM Specification', status: 'In Stock' },
                                            { comp: 'Kits de Empacadura', brand: 'Detroit Diesel', origin: 'USA', cert: 'SAE Standard', status: 'In Stock' },
                                            { comp: 'Bombas de Agua', brand: 'Mack / Volvo', origin: 'Brazil', cert: 'Heavy Duty Grade', status: 'Low Stock' },
                                        ].map((row, i) => (
                                            <tr key={i} className="bg-white hover:bg-stone-50 transition-colors border-b border-stone-100 last:border-0">
                                                <td className="py-6 px-4 font-black text-black">{row.comp}</td>
                                                <td className="py-6 px-4 text-stone-600 font-medium">{row.brand}</td>
                                                <td className="py-6 px-4 text-stone-600 italic">{row.origin}</td>
                                                <td className="py-6 px-4"><span className="px-2 py-1 bg-stone-100 rounded text-[9px] font-black uppercase tracking-widest text-stone-500">{row.cert}</span></td>
                                                <td className="py-6 px-4"><span className={`font-black uppercase tracking-widest text-[10px] ${row.status === 'In Stock' ? 'text-primary' : 'text-red-500'}`}>{row.status}</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </EcommerceLayout>
    );
}
