import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Index({ currencies }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        code: '',
        name: '',
        symbol: '',
        exchange_rate: 1.0,
        is_default: false
    });

    const [isCreating, setIsCreating] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route('erp.currencies.store'), {
            onSuccess: () => {
                reset();
                setIsCreating(false);
            }
        });
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Gestión de Monedas</h2>}
        >
            <Head title="Monedas" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                    <div className="mb-4 flex justify-end">
                        <button 
                            onClick={() => setIsCreating(!isCreating)}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 font-medium shadow-sm transition-colors"
                        >
                            {isCreating ? 'Cancelar' : '+ Nueva Moneda'}
                        </button>
                    </div>

                    {isCreating && (
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-6 p-6 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Agregar Moneda</h3>
                            <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Código (Ej. USD, VES)</label>
                                    <input type="text" maxLength="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm uppercase" value={data.code} onChange={e => setData('code', e.target.value)} required />
                                    {errors.code && <div className="text-red-500 text-sm mt-1">{errors.code}</div>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Nombre (Ej. US Dollar)</label>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={data.name} onChange={e => setData('name', e.target.value)} required />
                                    {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Símbolo (Ej. $)</label>
                                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={data.symbol} onChange={e => setData('symbol', e.target.value)} required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Tasa de Cambio (Respecto al USD)</label>
                                    <input type="number" step="0.000001" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={data.exchange_rate} onChange={e => setData('exchange_rate', e.target.value)} required />
                                </div>
                                <div className="md:col-span-2 flex items-center mt-2">
                                    <input type="checkbox" id="is_default" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500" checked={data.is_default} onChange={e => setData('is_default', e.target.checked)} />
                                    <label htmlFor="is_default" className="ml-2 text-sm text-gray-600">Usar como moneda principal por defecto</label>
                                </div>
                                <div className="md:col-span-2 mt-4">
                                    <button disabled={processing} className="w-full bg-indigo-600 text-white px-4 py-2 rounded shadow-sm hover:bg-indigo-700 disabled:opacity-50">Guardar Moneda</button>
                                </div>
                            </form>
                        </div>
                    )}

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg border border-gray-100">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Símbolo</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tasa de Cambio</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Principal</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {currencies.map((currency) => (
                                    <tr key={currency.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{currency.code}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{currency.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{currency.symbol}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{currency.exchange_rate}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {currency.is_default ? (
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Defecto</span>
                                            ) : '-'}
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
