import { Head, Link } from '@inertiajs/react';

export default function Welcome({ canLogin, canRegister, products }) {
    return (
        <>
            <Head>
                <title>MAYOR DE REPUESTO LA CIMA, C.A.</title>
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
                <style>{`
                    .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
                    .editorial-grid { display: grid; grid-template-columns: repeat(12, 1fr); }
                `}</style>
            </Head>
            
            <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
                
                {/* Top Navigation Bar */}
                <nav className="bg-zinc-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50 docked full-width top-0 sticky z-50">
                    <div className="flex justify-between items-center w-full px-6 py-4 max-w-[1920px] mx-auto">
                        <div className="flex items-center gap-4">
                            <img alt="MAYOR DE REPUESTO LA CIMA logo" className="h-10 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbJ8Btl-XhxjD1Hu7RKW2cZByhxG5wCkOWhAJo0CvhOS2CbKozaDA-tDbAQheFhT6pnhmJpS_ayWpCGQo_SBVWOiyMti_VahdWcDAxxMI4yU9d8ejWFH8rHorwYNg9Km1mSDDiavu1-t7h3CI7BXLwtgfIgFSx0aNRfvjeh0QPYEQAUReeCClOY78zdUh6-V5ANXGbLFkpjHiBkqi022DFG0ZUXv0g24B7Yp2A0918GpIj3FvrEkTupDUqLkM4axRlzPIwjVpw_OQ" />
                            <span className="text-xl font-bold tracking-tighter text-[#9ACD32] font-headline tracking-tight uppercase">MAYOR DE REPUESTO LA CIMA, C.A.</span>
                        </div>
                        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight uppercase text-sm">
                            <Link href="/modulo/tienda_virtual/catalog_grid_view" className="text-zinc-400 font-medium hover:text-white transition-colors duration-200">
                                Catálogo Completo
                            </Link>
                            <Link href="/modulo/tienda_virtual/nosotros_contacto_e_commerce" className="text-zinc-400 font-medium hover:text-white transition-colors duration-200">
                                Nosotros
                            </Link>
                        </div>
                        <div className="flex items-center gap-6">
                            {canLogin ? (
                                <Link href={route('dashboard')} className="hidden lg:block text-zinc-400 font-medium font-headline tracking-tight uppercase hover:text-white transition-colors duration-200">
                                    Portal ERP
                                </Link>
                            ) : (
                                <>
                                    <Link href="/modulo/auth/login_register" className="hidden lg:block text-zinc-400 font-medium font-headline tracking-tight uppercase hover:text-white transition-colors duration-200">
                                        Iniciar Sesión / Registro
                                    </Link>
                                    <Link href="/modulo/auth/creacion_cuenta_corporativa" className="hidden lg:block text-[#9ACD32] font-medium font-headline tracking-tight uppercase hover:text-white transition-colors duration-200">
                                        Crear Cuenta B2B
                                    </Link>
                                </>
                            )}
                            <Link href="/modulo/tienda_virtual/your_cart_7_items" className="bg-[#9ACD32] text-on-primary-container px-4 py-2 font-headline font-bold tracking-tight uppercase scale-95 active:scale-90 transition-transform flex items-center">
                                Cart (0)
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative min-h-[700px] flex items-center overflow-hidden bg-on-surface">
                    <div className="absolute inset-0 z-0">
                        <img alt="Industrial Diesel Engine" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCagO0b8fbL5mHd01cJKj-yY4TXKz3pJKApoPR3XypDtgxQeE3kAgK8IKYXiuiYy9wlITkGEIPukkyY37Z1EAvCyEsp_fOGYMfm-yAA4YALLy7Tp8-eplYfdagRdehPNAtC9eKAB0i7xqZWA-p44Ux73Mdw8xGQL2B0vm-_HDUE23-j79iRANyUhPfEYlBl45QJV2nNltmDGc9-75xUPuZyU_BBKdOaqXrAwMAqH6q70D_uCpd4wp0fgKcMXUlvkne4AE13G63F4y4" />
                        <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-transparent to-transparent"></div>
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-block px-3 py-1 bg-primary text-on-primary font-headline text-xs tracking-widest uppercase mb-6">Precisión Industrial Garantizada</div>
                            <h1 className="text-white font-headline text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
                                POTENCIANDO LA <br /> <span className="text-[#9ACD32]">INDUSTRIA PESADA</span>
                            </h1>
                            <p className="text-tertiary-container text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                                Especialistas en repuestos de alta gama para motores industriales. Garantizamos la continuidad operativa de su maquinaria con componentes reales e integrados a nuestro ERP.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Featured Products Bento */}
                <section className="py-24 bg-surface" id="productos">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                            <div>
                                <span className="text-primary font-headline font-bold uppercase tracking-widest text-xs">Catálogo Sincronizado</span>
                                <h2 className="font-headline text-4xl md:text-5xl font-black uppercase tracking-tight">Inventario en Tiempo Real</h2>
                            </div>
                        </div>

                        {/* Dynamic DB Products Mapping */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {products.map((product, idx) => (
                                <div key={product.id} className="md:col-span-1 bg-surface-container-low p-6 flex flex-col justify-between h-full group hover:-translate-y-1 transition-transform border border-outline-variant/30">
                                    <div>
                                        <h3 className="font-headline text-lg font-bold uppercase mb-2 text-on-surface line-clamp-2">{product.name}</h3>
                                        <p className="text-xs text-secondary mb-4 line-clamp-3">{product.description}</p>
                                    </div>
                                    <div className="mt-auto">
                                        <div className="text-primary font-headline text-xl font-bold mb-4 tracking-widest">
                                            $ {product.price}
                                        </div>
                                        <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 font-headline font-bold uppercase tracking-widest text-xs transition-colors">
                                            Añadir
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-24 bg-surface-container" id="contacto">
                    <div className="container mx-auto px-6">
                        <div className="editorial-grid gap-12">
                            <div className="col-span-12 lg:col-span-6">
                                <h2 className="font-headline text-5xl font-black uppercase tracking-tighter mb-8 leading-none">Estamos en el <br /><span className="text-primary">Corazón Industrial</span></h2>
                                <div className="space-y-8 mt-12">
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-primary">location_on</span>
                                        <div>
                                            <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-secondary mb-1">Dirección</h4>
                                            <p className="text-sm">Zona Industrial Norte, Av. Henry Ford, Galpón 4A. Valencia, Carabobo.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-primary">badge</span>
                                        <div>
                                            <h4 className="font-headline font-bold uppercase text-xs tracking-widest text-secondary mb-1">Identificación Fiscal</h4>
                                            <p className="text-sm">RIF: J-40308741-5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-zinc-900 w-full mt-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-12 w-full max-w-[1920px] mx-auto">
                        <div>
                            <div className="font-headline font-black text-zinc-100 mb-6 text-lg uppercase tracking-widest">MAYOR DE REPUESTO LA CIMA, C.A.</div>
                            <p className="text-zinc-500 text-sm font-body leading-relaxed antialiased">
                                Distribución nacional de repuestos originales integrados con el sistema avanzado Zenith ERP.
                            </p>
                        </div>
                    </div>
                    <div className="bg-zinc-800 py-6 px-8 text-center md:text-left">
                        <p className="text-zinc-500 text-xs font-body antialiased">
                            © 2026 MAYOR DE REPUESTO LA CIMA, C.A. RIF: J-40308741-5.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}
