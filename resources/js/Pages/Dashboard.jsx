import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ stats }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Panel Principal - Zenith ERP
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        {/* Stats Cards */}
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Productos</h3>
                            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stats.total_products}</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Órdenes Activas</h3>
                            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">{stats.total_orders}</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Monedas Configuradas</h3>
                            <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">{stats.total_currencies}</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Usuarios Registrados</h3>
                            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-2">{stats.total_users}</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">
                            <h3 className="text-lg font-bold mb-4">Módulos de Administración</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition duration-150">
                                    <h4 className="font-semibold text-blue-600 dark:text-blue-400">Inventario y Catálogo</h4>
                                    <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">Gestiona productos, almacenes, categorías y lotes sku.</p>
                                </div>
                                <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition duration-150">
                                    <h4 className="font-semibold text-green-600 dark:text-green-400">Tesorería (Multi-moneda)</h4>
                                    <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">Configura tasas de cambio, USD, VES, y cajas/bancos.</p>
                                </div>
                                <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition duration-150">
                                    <h4 className="font-semibold text-purple-600 dark:text-purple-400">Ventas y Órdenes</h4>
                                    <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">Revisa la facturación, aprueba pedidos y gestiona envíos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
