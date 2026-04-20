import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function EcommerceLayout({ children, title, canLogin, canRegister }) {
    return (
        <>
            <Head>
                <title>{title ? `${title} | LA CIMA` : 'MAYOR DE REPUESTO LA CIMA, C.A.'}</title>
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
                <style>{`
                    .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
                `}</style>
            </Head>
            
            <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
                
                {/* Top Navigation Bar */}
                <nav className="bg-zinc-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50 docked full-width top-0 sticky z-50">
                    <div className="flex justify-between items-center w-full px-6 py-4 max-w-[1920px] mx-auto">
                        <div className="flex items-center gap-4">
                            <Link href="/">
                                <img alt="MAYOR DE REPUESTO LA CIMA logo" className="h-10 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbJ8Btl-XhxjD1Hu7RKW2cZByhxG5wCkOWhAJo0CvhOS2CbKozaDA-tDbAQheFhT6pnhmJpS_ayWpCGQo_SBVWOiyMti_VahdWcDAxxMI4yU9d8ejWFH8rHorwYNg9Km1mSDDiavu1-t7h3CI7BXLwtgfIgFSx0aNRfvjeh0QPYEQAUReeCClOY78zdUh6-V5ANXGbLFkpjHiBkqi022DFG0ZUXv0g24B7Yp2A0918GpIj3FvrEkTupDUqLkM4axRlzPIwjVpw_OQ" />
                            </Link>
                            <span className="text-xl font-bold tracking-tighter text-[#9ACD32] font-headline tracking-tight uppercase">LA CIMA</span>
                        </div>
                        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight uppercase text-sm">
                            <Link href="/modulo/tienda_virtual/catalog_grid_view" className="text-zinc-400 font-medium hover:text-white transition-colors duration-200">
                                Catálogo
                            </Link>
                            <Link href="/modulo/tienda_virtual/nosotros_contacto_e_commerce" className="text-zinc-400 font-medium hover:text-white transition-colors duration-200">
                                Nosotros
                            </Link>
                        </div>
                        <div className="flex items-center gap-6">
                            <Link href="/login" className="hidden lg:block text-zinc-400 font-medium font-headline tracking-tight uppercase hover:text-white transition-colors duration-200">
                                Portal ERP
                            </Link>
                            <Link href="/modulo/tienda_virtual/your_cart_7_items" className="bg-[#9ACD32] text-black px-5 py-2.5 font-headline font-black tracking-tight uppercase scale-95 active:scale-90 transition-transform flex items-center shadow-lg hover:shadow-primary/20">
                                Cart (0)
                            </Link>
                        </div>
                    </div>
                </nav>

                <main className="flex-grow">
                    {children}
                </main>

                {/* Footer */}
                <footer className="bg-zinc-900 w-full mt-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-12 w-full max-w-[1920px] mx-auto">
                        <div>
                            <div className="font-headline font-black text-zinc-100 mb-6 text-lg uppercase tracking-widest">LA CIMA, C.A.</div>
                            <p className="text-zinc-500 text-sm font-body leading-relaxed antialiased">
                                Distribución nacional de repuestos originales integrados con Zenith ERP.
                                <br />RIF: J-40308741-5
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
