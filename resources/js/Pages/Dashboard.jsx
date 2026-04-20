import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import StatCard from '@/Components/StatCard';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ stats }) {
    return (
        <AuthenticatedLayout
            header="Panel de Control Principal"
        >
            <Head title="Dashboard" />

            <div className="space-y-8">
                {/* Indicadores Principales */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard 
                        title="Inventario" 
                        value={stats.total_products} 
                        icon="inventory_2" 
                        color="primary"
                        trend="up"
                        trendValue="12"
                    />
                    <StatCard 
                        title="Órdenes de Venta" 
                        value={stats.total_orders} 
                        icon="shopping_cart" 
                        color="success"
                        trend="up"
                        trendValue="5"
                    />
                    <StatCard 
                        title="Tasas de Cambio" 
                        value={stats.total_currencies} 
                        icon="currency_exchange" 
                        color="info"
                    />
                    <StatCard 
                        title="Usuarios Sistema" 
                        value={stats.total_users} 
                        icon="manage_accounts" 
                        color="warning"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Accesos Rápidos */}
                    <div className="lg:col-span-2 space-y-6">
                        <section className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30">
                            <h3 className="font-headline font-black text-xl text-on-surface mb-6 uppercase tracking-tight">Módulos de Operación Industrial</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Link 
                                    href={route('erp.products.index')}
                                    className="p-6 rounded-2xl border border-outline-variant/50 hover:border-primary/50 hover:bg-primary/5 hover:scale-[1.02] transition-all duration-300 group"
                                >
                                    <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">precision_manufacturing</span>
                                    <h4 className="font-headline font-bold text-on-surface">Catálogo Maestro</h4>
                                    <p className="text-secondary text-sm mt-1">Gestión avanzada de SKU, lotes y almacenes.</p>
                                </Link>
                                <Link 
                                    href={route('erp.currencies.index')}
                                    className="p-6 rounded-2xl border border-outline-variant/50 hover:border-primary/50 hover:bg-primary/5 hover:scale-[1.02] transition-all duration-300 group"
                                >
                                    <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">account_balance</span>
                                    <h4 className="font-headline font-bold text-on-surface">Tesorería & Divisas</h4>
                                    <p className="text-secondary text-sm mt-1">Control multi-moneda y flujos de caja.</p>
                                </Link>
                                <Link 
                                    href={route('erp.legacy.universal', { path: 'erp/ventas/punto_de_venta_pos' })}
                                    className="p-6 rounded-2xl border border-outline-variant/50 hover:border-primary/50 hover:bg-primary/5 hover:scale-[1.02] transition-all duration-300 group"
                                >
                                    <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">point_of_sale</span>
                                    <h4 className="font-headline font-bold text-on-surface">Punto de Venta (POS)</h4>
                                    <p className="text-secondary text-sm mt-1">Terminal de ventas de alto rendimiento.</p>
                                </Link>
                                <Link 
                                    href={route('erp.legacy.universal', { path: 'erp/rrhh/gestion_de_empleados_expediente_digital' })}
                                    className="p-6 rounded-2xl border border-outline-variant/50 hover:border-primary/50 hover:bg-primary/5 hover:scale-[1.02] transition-all duration-300 group"
                                >
                                    <span className="material-symbols-outlined text-primary text-3xl mb-3 group-hover:scale-110 transition-transform">clinical_notes</span>
                                    <h4 className="font-headline font-bold text-on-surface">Expedientes RRHH</h4>
                                    <p className="text-secondary text-sm mt-1">Gestión de personal y nómina digital.</p>
                                </Link>
                            </div>
                        </section>
                    </div>

                    {/* Actividad Reciente / Notificaciones */}
                    <div className="space-y-6">
                        <section className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 h-full">
                            <h3 className="font-headline font-black text-xl text-on-surface mb-6 uppercase tracking-tight">Alertas Sistema</h3>
                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 rounded-xl bg-error/5 border border-error/10">
                                    <span className="material-symbols-outlined text-error">warning</span>
                                    <div>
                                        <p className="text-xs font-bold text-error uppercase">Stock Crítico</p>
                                        <p className="text-sm text-on-surface mt-1 font-medium italic">Filtros Volvo CV-90 bajo el mínimo.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                                    <span className="material-symbols-outlined text-primary">sync</span>
                                    <div>
                                        <p className="text-xs font-bold text-primary uppercase">E-Commerce</p>
                                        <p className="text-sm text-on-surface mt-1 font-medium">8 productos sincronizados con éxito.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 pt-6 border-t border-outline-variant/30">
                                <p className="text-[10px] text-secondary font-bold uppercase tracking-widest text-center">Versión 2.4.0 Codename: Zenith</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
