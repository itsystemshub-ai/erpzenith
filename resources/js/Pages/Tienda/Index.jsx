import React from 'react';
import { Head, Link } from '@inertiajs/react';
import EcommerceLayout from '../../Layouts/EcommerceLayout';

export default function Index(props) {
    const { products = [] } = props;

    return (
        <EcommerceLayout title="Tienda Virtual">
            <div className="tienda-view min-h-screen bg-surface">
                <main className="pt-16">
                    {/* Hero Section: Precision Search */}
                    <section className="relative min-h-[800px] flex items-center justify-center py-20 overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <img alt="Industrial Diesel Engine" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCagO0b8fbL5mHd01cJKj-yY4TXKz3pJKApoPR3XypDtgxQeE3kAgK8IKYXiuiYy9wlITkGEIPukkyY37Z1EAvCyEsp_fOGYMfm-yAA4YALLy7Tp8-eplYfdagRdehPNAtC9eKAB0i7xqZWA-p44Ux73Mdw8xGQL2B0vm-_HDUE23-j79iRANyUhPfEYlBl45QJV2nNltmDGc9-75xUPuZyU_BBKdOaqXrAwMAqH6q70D_uCpd4wp0fgKcMXUlvkne4AE13G63F4y4" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                        </div>
                        <div className="container mx-auto px-6 relative z-10">
                            <div className="max-w-5xl">
                                <span className="inline-block px-3 py-1 bg-primary text-black text-[10px] font-black uppercase tracking-[0.2em] mb-6">Precisión Industrial Garantizada</span>
                                <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-8 uppercase italic">
                                    POTENCIANDO LA <br />
                                    <span className="text-primary italic">INDUSTRIA PESADA</span>
                                </h1>
                                <p className="text-stone-300 text-lg md:text-xl max-w-2xl font-medium leading-relaxed mb-10">
                                    Especialistas en repuestos de alta gama para motores industriales. Garantizamos la continuidad operativa de su maquinaria con componentes reales e integrados a nuestro ERP.
                                </p>
                                {/* Central Search Console */}
                                <div className="bg-white p-1 rounded-xl shadow-2xl">
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-outline rounded-lg overflow-hidden">
                                        <div className="bg-white p-4">
                                            <label className="block text-[10px] font-bold text-on-surface-variant uppercase mb-2 tracking-widest">Año</label>
                                            <select id="searchYear" className="w-full border-none bg-transparent font-bold text-sm p-0 focus:ring-0">
                                                <option value="">Seleccionar Año</option>
                                                <option value="2024">2024</option>
                                                <option value="2023">2023</option>
                                                <option value="2022">2022</option>
                                                <option value="2021">2021</option>
                                            </select>
                                        </div>
                                        <div className="bg-white p-4">
                                            <label className="block text-[10px] font-bold text-on-surface-variant uppercase mb-2 tracking-widest">Marca / Fabricante</label>
                                            <select id="searchBrand" className="w-full border-none bg-transparent font-bold text-sm p-0 focus:ring-0">
                                                <option value="">Seleccionar Marca</option>
                                                <option value="Toyota">Toyota</option>
                                                <option value="Caterpillar">Caterpillar</option>
                                                <option value="Cummins">Cummins</option>
                                                <option value="Volvo">Volvo</option>
                                                <option value="Detroit Diesel">Detroit Diesel</option>
                                                <option value="Ford">Ford</option>
                                            </select>
                                        </div>
                                        <div className="bg-white p-4">
                                            <label className="block text-[10px] font-bold text-on-surface-variant uppercase mb-2 tracking-widest">Modelo</label>
                                            <select id="searchModel" className="w-full border-none bg-transparent font-bold text-sm p-0 focus:ring-0">
                                                <option value="">Seleccionar Modelo</option>
                                                <option value="Hilux">Hilux</option>
                                                <option value="Corolla">Corolla</option>
                                                <option value="F-150">F-150</option>
                                                <option value="C15">C15</option>
                                                <option value="D13">D13</option>
                                                <option value="DD15">DD15</option>
                                            </select>
                                        </div>
                                        <div className="bg-primary p-4 flex items-center justify-center cursor-pointer hover:bg-primary-dim transition-colors group">
                                            <span className="material-symbols-outlined text-black mr-2">search</span>
                                            <span className="font-black uppercase tracking-widest text-black text-sm">Buscar Repuesto</span>
                                        </div>
                                    </div>
                                    <div className="p-4 flex flex-wrap gap-4 items-center justify-between bg-stone-50 border-t border-outline">
                                        <div className="flex-1">
                                            <div className="relative">
                                                <input id="quickSearch" className="w-full bg-white border-outline text-xs py-3 px-10 rounded-md focus:ring-primary focus:border-primary" placeholder="Búsqueda rápida por número de parte OEM o serie VIN..." type="text" />
                                                <span className="material-symbols-outlined absolute left-3 top-2.5 text-stone-400 text-lg">qr_code_scanner</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <button className="flex items-center gap-2 text-[10px] font-bold text-stone-500 uppercase hover:text-black">
                                                <span className="material-symbols-outlined text-sm">description</span>
                                                Catálogo PDF
                                            </button>
                                            <button className="flex items-center gap-2 text-[10px] font-bold text-stone-500 uppercase hover:text-black">
                                                <span className="material-symbols-outlined text-sm">settings_suggest</span>
                                                Filtro Avanzado
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* B2B Prominent Entry */}
                                <div className="mt-8 flex justify-center">
                                    <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl flex flex-col md:flex-row items-center gap-6">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-primary/20 p-2 rounded-lg">
                                                <span className="material-symbols-outlined text-primary">corporate_fare</span>
                                            </div>
                                            <div>
                                                <p className="text-white text-xs font-bold uppercase tracking-widest">¿Eres Taller o Flota?</p>
                                                <p className="text-stone-400 text-[10px]">Acceso a precios de mayorista y stock ERP en tiempo real.</p>
                                            </div>
                                        </div>
                                        <Link href="/login" className="bg-white text-black px-6 py-2 rounded-md font-black text-[10px] uppercase tracking-[0.2em] hover:bg-primary transition-all">
                                            Entrar al Portal ERP
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Ofertas Técnicas / Repuestos Destacados */}
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-6">
                            <div className="flex justify-between items-end mb-10">
                                <div>
                                    <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">Ofertas de la Semana</span>
                                    <h2 className="text-3xl font-black uppercase tracking-tighter text-black mt-1">Repuestos Destacados</h2>
                                </div>
                                <Link className="text-[10px] font-black uppercase tracking-widest text-black border-b-2 border-primary pb-1" href="/modulo/tienda_virtual/catalogo_detallado">Ver Catálogo Completo</Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Mapeo dinámico de productos desde props */}
                                {products.length > 0 ? (
                                    products.map(product => (
                                        <div key={product.id} className="group bg-stone-50 border border-outline rounded-xl p-4 hover:shadow-xl transition-all">
                                            <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-white">
                                                <img alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={product.image_url || 'https://via.placeholder.com/400'} />
                                            </div>
                                            <p className="text-[10px] font-bold text-stone-400 uppercase mb-1">{product.category || 'Repuesto'}</p>
                                            <h4 className="font-bold text-sm text-black mb-2 line-clamp-1">{product.name}</h4>
                                            <div className="flex items-center justify-between mb-4">
                                                <div>
                                                    <span className="text-lg font-black text-black">${product.price}</span>
                                                </div>
                                                <span className="text-[10px] font-bold text-primary-dim uppercase">Stock: {product.stock > 0 ? `+${product.stock}` : 'Bajo Pedido'}</span>
                                            </div>
                                            <button className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors group/btn">
                                                <span className="material-symbols-outlined text-sm group-hover/btn:text-primary">add_shopping_cart</span>
                                                <span className="text-[10px] font-black uppercase tracking-widest">Añadir al Carrito</span>
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    /* Placeholder cards si no hay productos */
                                    [1, 2, 3, 4].map(i => (
                                        <div key={i} className="group bg-stone-50 border border-outline rounded-xl p-4 animate-pulse">
                                            <div className="aspect-square mb-4 bg-stone-200 rounded-lg"></div>
                                            <div className="h-4 bg-stone-200 w-3/4 mb-2"></div>
                                            <div className="h-6 bg-stone-200 w-1/4 mb-4"></div>
                                            <div className="h-10 bg-stone-200 w-full rounded-lg"></div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </section>
                    {/* Categories Bento Grid */}
                    <section className="py-24 bg-stone-50">
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col items-center mb-16 text-center">
                                <h2 className="text-4xl font-black uppercase tracking-tighter text-black">Explora por Categoría</h2>
                                <div className="h-1.5 w-24 bg-primary mt-4"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
                                <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-black">
                                    <img alt="Engine Parts" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiuQeey5lmq6st-vJo1TRQIs8oQtq_4Cg3QyJcj3j5bJguRJRMBb8ZSC_EXi5lrwaP7iFhysnzJ-1xPxNGrK4UF7AT2OeN8ElIvXkr9-fKhD32L0ADYy9Ey15LiRkDN8mJeDuWdAW5rDzkxw-EYW2ydO_BYYgkeF9JIGC8kwEVf-n5FRVlF_rtG7bTZ9VsR_-6AslLZLeyVYNZWjszYl7HOoO_0ZWqNEcN2WLJnxoqR8dzy5OKZhKk8pdLOhI6kvQ7oAHsQ2gQeQ" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-10">
                                        <span className="text-primary text-xs font-black uppercase tracking-[0.4em]">Industrial Forge</span>
                                        <h3 className="text-5xl font-black text-white uppercase tracking-tighter mt-2">Sistemas de Motor</h3>
                                        <Link href="/modulo/tienda_virtual/catalogo_general" className="mt-6 inline-block bg-primary text-black px-8 py-3 rounded-md font-black text-xs uppercase tracking-widest hover:bg-white transition-all">Explorar Motor</Link>
                                    </div>
                                </div>
                                <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-zinc-900">
                                    <img alt="Brake Systems" className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNjAH9S_Dx8VtU7mF1yl1gIoO1HHxRUQR20jPWmEZ_fWPK0Lf-aqaHg5SbId7ALpHlPm1IBVe6hQPm83-NLF_KRSd1NILUJYVRLn7UO6bSjWbJHrwIEjbFqo-DEe4gv3JFYAtDUXn6VNxmvX1mo4hAlQY5e3qx9t69T02-YM-fgbgyu5g29n1SbpBH5IfDiboMUFBwLW5HUBLf0gL-uFhYCkYCmLrNxaXuJfXidw71gc1TWNKpa50EjrPRsAU9-GWS_sIc880L1A" />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all"></div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-10">
                                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Frenado y Seguridad</h3>
                                        <p className="text-stone-400 text-sm mt-2 mb-4">Pastillas, discos y componentes hidráulicos.</p>
                                        <Link href="/modulo/tienda_virtual/catalogo_general" className="w-fit inline-block bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 border border-white/20 hover:bg-primary hover:text-black hover:border-primary transition-all">Ver Más</Link>
                                    </div>
                                </div>
                                <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-primary">
                                    <div className="p-10 h-full flex flex-col justify-between">
                                        <span className="material-symbols-outlined text-6xl text-black">settings_input_component</span>
                                        <div>
                                            <h3 className="text-3xl font-black text-black uppercase tracking-tighter">Transmisión</h3>
                                            <p className="text-black/70 text-sm mt-2">Cajas, embragues y diferenciales industriales certificados.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-black">
                                    <img alt="Suspension" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHtNySrP8HrGI66TLOsvDPkaDg0OsqNHGb13gCFvCGw0QIBbKbi8njt_UPgaMng-OmtqIcDmx0wAhZUrdUXCmDeFIZM1XG2w7u_7l-k80z1giO2h8A-I1XxRLmt3-W6Idk23flMeIDf660-0qi_Dc3Uczsjnu_ZMz4jIfiTbyh7AkLSoXLrM58e4ggXYxH_nVG2JNEMfP0fVELVbhRLEirDlLmeSZR96Sd4mKGltM7moFTxvlb8IZZgiNy_dX4rJRNFQjnr-pwkw" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                                        <h3 className="text-6xl font-black text-white uppercase tracking-[0.2em] drop-shadow-2xl">Suspensión</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </EcommerceLayout>
    );
};
