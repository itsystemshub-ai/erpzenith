import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Index({ products, categories, brands, currencies }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        slug: '',
        description: '',
        price: '',
        category_id: '',
        brand_id: '',
        currency_id: '',
        type: 'physical'
    });

    const [isCreating, setIsCreating] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route('erp.products.store'), {
            onSuccess: () => {
                reset();
                setIsCreating(false);
            }
        });
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Catálogo de Productos</h2>}
        >
            <Head title="Productos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                    <div className="mb-4 flex justify-end">
                        <button 
                            onClick={() => setIsCreating(!isCreating)}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 font-medium shadow-sm transition-colors"
                        >
                            {isCreating ? 'Cancelar Carga' : '+ Nuevo Producto'}
                        </button>
                    </div>

                    {isCreating && (
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-6 p-6 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Registro en Catálogo</h3>
                            <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">Nombre del Producto</label>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value={data.name} onChange={e => { setData('name', e.target.value); setData('slug', e.target.value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')); }} required />
                                    {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Slug (URL)</label>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50 focus:border-indigo-500 focus:ring-indigo-500" value={data.slug} onChange={e => setData('slug', e.target.value)} required />
                                    {errors.slug && <div className="text-red-500 text-xs mt-1">{errors.slug}</div>}
                                </div>

                                <div className="lg:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Descripción Pública</label>
                                    <textarea rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value={data.description} onChange={e => setData('description', e.target.value)}></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Categoría</label>
                                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value={data.category_id} onChange={e => setData('category_id', e.target.value)} required>
                                        <option value="">Seleccione Categoría...</option>
                                        {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Marca Comercial</label>
                                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value={data.brand_id} onChange={e => setData('brand_id', e.target.value)} required>
                                        <option value="">Seleccione Marca...</option>
                                        {brands.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Tipo de Bien</label>
                                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value={data.type} onChange={e => setData('type', e.target.value)} required>
                                        <option value="physical">Producto Físico</option>
                                        <option value="digital">Bien Digital</option>
                                        <option value="service">Servicio Técnico</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Precio Base</label>
                                    <input type="number" step="0.01" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value={data.price} onChange={e => setData('price', e.target.value)} required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Moneda de Venta</label>
                                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value={data.currency_id} onChange={e => setData('currency_id', e.target.value)} required>
                                        <option value="">Moneda...</option>
                                        {currencies.map(curr => <option key={curr.id} value={curr.id}>{curr.code} ({curr.symbol})</option>)}
                                    </select>
                                </div>
                                <div className="flex items-end">
                                    <button disabled={processing} className="w-full bg-slate-900 text-white px-4 py-2 rounded shadow-sm hover:bg-slate-800 disabled:opacity-50">Guardar Ficha Técnica</button>
                                </div>
                            </form>
                        </div>
                    )}

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg border border-gray-100">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU / Producto</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marca/Cat</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">P.V.P</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {products.length === 0 && (
                                    <tr><td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">No hay productos integrados todavía.</td></tr>
                                )}
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="font-bold text-gray-900">{product.name}</div>
                                            <div className="text-xs text-slate-500">ID: {product.id} | Slug: {product.slug}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {product.brand_name || 'Generico'} <span className="opacity-50 mx-1">/</span> {product.category_name || 'Sin cat.'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                                            {product.type === 'physical' ? 'Físico' : product.type}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-800">
                                            {product.currency_code} {product.price}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap pr-2">
                                            {product.is_active ? (
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-emerald-100 text-emerald-800">Activo</span>
                                            ) : (
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactivo</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
