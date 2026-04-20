import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const modules = [
        { name: 'Dashboard', icon: 'dashboard', route: 'dashboard', active: 'dashboard' },
        { name: 'Ventas', icon: 'payments', route: 'erp.legacy.universal', params: { path: 'erp/ventas/dashboard_de_ventas_kpis' }, active: 'erp.ventas.*' },
        { name: 'Compras', icon: 'shopping_cart', route: 'erp.legacy.universal', params: { path: 'erp/compras/dashboard_de_compras_erp' }, active: 'erp.compras.*' },
        { name: 'Inventario', icon: 'inventory_2', route: 'erp.products.index', active: 'erp.products.*' },
        { name: 'Contabilidad', icon: 'account_balance', route: 'erp.legacy.universal', params: { path: 'erp/contabilidad/dashboard_de_contabilidad_erp' }, active: 'erp.contabilidad.*' },
        { name: 'Finanzas', icon: 'account_balance_wallet', route: 'erp.currencies.index', active: 'erp.currencies.*' },
        { name: 'RRHH', icon: 'groups', route: 'erp.legacy.universal', params: { path: 'erp/rrhh/dashboard_de_rrhh_control_industrial' }, active: 'erp.rrhh.*' },
        { name: 'Sistema', icon: 'settings', route: 'erp.legacy.universal', params: { path: 'erp/sistema/configuracion_de_parametros_globales' }, active: 'erp.sistema.*' },
    ];

    const NavLink = ({ item }) => {
        const isActive = route().current(item.active);
        return (
            <Link
                href={item.params ? route(item.route, item.params) : route(item.route)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive 
                    ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' 
                    : 'text-secondary hover:bg-surface-container-high hover:text-on-surface'
                }`}
            >
                <span className={`material-symbols-outlined text-[22px] ${isActive ? '' : 'text-primary/70 group-hover:text-primary transition-colors'}`}>
                    {item.icon}
                </span>
                <span className={`font-headline font-semibold text-sm tracking-wide ${!isSidebarOpen && 'hidden'}`}>
                    {item.name}
                </span>
            </Link>
        );
    };

    return (
        <div className="min-h-screen bg-surface flex selection:bg-primary-container selection:text-on-primary-container">
            {/* Sidebar */}
            <aside 
                className={`${isSidebarOpen ? 'w-72' : 'w-20'} bg-surface-container-lowest border-r border-outline-variant flex flex-col transition-all duration-300 ease-in-out fixed inset-y-0 z-50`}
            >
                <div className="p-6 flex items-center gap-4 border-b border-outline-variant/30">
                    <div className="shrink-0 flex items-center justify-center w-10 h-10 bg-primary/10 rounded-xl">
                        <ApplicationLogo className="w-7 h-7 text-primary" />
                    </div>
                    {isSidebarOpen && (
                        <div className="overflow-hidden">
                            <h1 className="font-headline font-bold text-lg text-on-surface tracking-tighter leading-none">ZENITH ERP</h1>
                            <p className="text-[10px] text-primary font-bold uppercase tracking-widest mt-1">Industrial Forge</p>
                        </div>
                    )}
                </div>

                <nav className="flex-1 overflow-y-auto p-4 space-y-1 scrollbar-hide">
                    {modules.map((module) => (
                        <NavLink key={module.name} item={module} />
                    ))}
                    
                    <div className="my-6 border-t border-outline-variant/30 pt-6">
                        <p className={`px-4 mb-2 text-[10px] font-bold text-secondary-container uppercase tracking-[0.2em] ${!isSidebarOpen && 'hidden'}`}>
                            Canales
                        </p>
                        <Link
                            href="/"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-secondary hover:bg-surface-container-high transition-all"
                        >
                            <span className="material-symbols-outlined text-[22px] text-primary/70">store</span>
                            <span className={`font-headline font-semibold text-sm ${!isSidebarOpen && 'hidden'}`}>Tienda Virtual</span>
                        </Link>
                    </div>
                </nav>

                <div className="p-4 bg-surface-container-low border-t border-outline-variant/30">
                    <button 
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="w-full h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high text-secondary transition-colors"
                    >
                        <span className="material-symbols-outlined">
                            {isSidebarOpen ? 'menu_open' : 'menu'}
                        </span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-20'}`}>
                {/* TopBar */}
                <header className="h-16 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/30 sticky top-0 z-40 px-8 flex items-center justify-between">
                    <div>
                        {header && (
                            <div className="font-headline font-bold text-on-surface text-xl">
                                {header}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center gap-2 bg-surface-container px-3 py-1.5 rounded-xl border border-outline-variant/50 focus-within:border-primary transition-all">
                            <span className="material-symbols-outlined text-secondary text-[20px]">search</span>
                            <input 
                                type="text" 
                                placeholder="Buscar en ERP..." 
                                className="bg-transparent border-none text-sm focus:ring-0 w-48 placeholder-outline"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button className="flex items-center gap-3 p-1.5 rounded-full hover:bg-surface-container-high transition-all border border-outline-variant/30">
                                        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-headline font-bold text-xs shadow-inner">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div className="hidden sm:block text-left">
                                            <p className="text-xs font-bold text-on-surface leading-none">{user.name}</p>
                                            <p className="text-[10px] text-secondary mt-0.5 leading-none">Administrador</p>
                                        </div>
                                        <span className="material-symbols-outlined text-secondary text-[18px] mr-1">expand_more</span>
                                    </button>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route('profile.edit')}>Perfil</Dropdown.Link>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">Cerrar Sesión</Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="p-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="max-w-[1600px] mx-auto">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
