import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import EcommerceLayout from '../../Layouts/EcommerceLayout';

export default function CatalogoGeneral(props) {
    const { initialProducts = [
        { id: 1, name: 'Junta de Culata Cummins', category: 'cummins', code: 'CU-8842-X', price: 145.00, bs: 5220.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7nYKSbAGk0sNgs7oPCd8fyoeR9e60wl1s7Jym9qpDXwnXaaIfkrxG35dPa2wV94j5fhKhsSHI4p3FIiX0otqPuYO07xO5dJd67_fdC5iaU0OMvzma3OMcftTxGXR_8h-CuY0MNvIpEQtgUBoHs4Y0aWQrtQp8ZPvy2FCDe0auTRAhubbCiVTCvakNmJDOKgDPwpqWLmOg_P1hwI1D4D5VdoJ80afZqds7EAFF88xS-vm6cmgnWgiSjN6obErYH81zQhDeQ0iWub4' },
        { id: 2, name: 'Filtro de Aceite Volvo', category: 'volvo', code: 'VO-1120-F', price: 38.50, bs: 1386.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsHZ9MFD4WCJtxE7xbkGvYvm4qisOi2hGXwJ_Zav27WFtthL07jOmeBqA3uxqD9hGFJF6jtKRFwuIbqtxbKM9d222u0u570XUHOr-3TM5d4-836PCyasLIpwwaCSnEasQ3XtaGoL4RnLluZBXOHdCtMdslZuzY0-nXPEIgnykw7T83b5acMv9DZ3XU7hKUl2gO3uCqaHBWjdvytWxJcG0h1D0ClBrKUkC2J3AKzajE4r9QkGRjpLqjmKsImGg4iReJej_zOKXcihk' },
        { id: 3, name: 'Turboalimentador Holset', category: 'cummins', code: 'HO-449-TB', price: 890.00, bs: 32040.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfjrGRNpjkuVD0N23eX_RV6yqwpouLC8EQL7CLZ-gZNbKywWxWd3inP-MVZR2hDLVBek4gxi0S8M2a1vyaRrrNeSO7Az-A9ojG2JNDnWXZYN-Mw4OfOBiPiHfhiudzde1KJUKBh8fLQ5PpswyaEDpkuKbGyHZWkpaF_gyP-Ge3SsLuGxew2xe1VOh-NN5PAcB0Nh9eAzk_fIks3Qi2U8CXXHJWdVHClIKUm6ddotwdSGQ6bl6u40-453SAtwWAUnFar-PMvHvR3GM' },
        { id: 4, name: 'Válvula EGR Detroit', category: 'detroit', code: 'EG-221-V', price: 420.00, bs: 15120.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKTyHrPtqEfaH6pvwCGdF7-I4OXbWwSSA0VVvCJ2Hwl55TX8_tQAXdhZ3cVuKigbGzyZ-9DKpo-bpZxXUzYTULV4RtW7N1-xcbkK4iXcnmfLmne7Wibg8iuRbPMF8W5ei2X3VBNRT7AFKcWTsc3vTfr3uB999UrusLMap6SuiZJ6PO7G2VuXBNNEofs60aSnQkzVNb_QrnSr8LjAzwifEWQL2LqQYwDD5786DMWsx1QXI-AQcTGwH6Mw2h-EXOxvVH05pqCGvL8BM' },
        { id: 5, name: 'Inyector Detroit DD15', category: 'detroit', code: 'DD-15-FI', price: 275.00, bs: 9900.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB08NxRqet6a7yn-HqiDUbxiUgnO6zzAUIOfOQULzuPrSc5sbGcc-NOprB3VcUd6hzLKSPRKWZJEbCO66ivfnqZb7wHn3mYKgBgrcTPxWa4NgzOoqtEwoEN6e_tiUCddWqLFtTPVRRygYBJ9w6kDBkHXFPOJcJHuhrNy5f2Ic4G3F7XqnFmO5-SJJDGBEc8wmBi2UYrKkd1a06gVhKtgBsUcd4fuwk939GqYI_OdyV4Tmjdu1GntUBwYsaVZRRuT2CbUdV_1sApZrM' },
        { id: 6, name: 'Filtro de Aire International', category: 'international', code: 'IT-990-AF', price: 65.00, bs: 2340.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaNx47CBOPWkbJfyEjb6QsZgO1mH3DCa8_MtQ5U0-k4sIcXRThFWPGPzROZKu7K9qxoXzKJ5OqOIPjTMcNyMzOykfg906z7p2uXkC4-czLMsRB6Q05vYAreG6rd0YiNhscyJqRN0gAQuE77ijcNXGZOn_-SG1qaNVZkdrjZm1i09JdPK1dFHQwnmBsJCznX7v2TYKQ0oEM7mWONm7BcflU6mdbl1I91kH5XND1w3w4OvLxerEcfQm5ewo6Uy73f1SeVu0cUpu9Sx4' },
        { id: 7, name: 'Zapata de Freno Meritor', category: 'meritor', code: 'ME-QP-4515', price: 112.00, bs: 4032.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABkCYWjm5SnVwKp4WKcPniFG1DbN-elQgOxC9k5tpNZzJ0fow6wuHtAW5UBmdhDhQ5ka-sk-Ut5iCIuqstdEKMjg74jOH0mtQ27H4BnHdqoJPbeIF21qxhriZVOJ9u6Cqo7flM4GPe8dJif2MKYmIgVKuJ_KgrBgN7HEjlk0u_Ciw8zzx0KSVCb9Q7yF7B9-dHrMIWBhkEZr2Znha2seW05H4B3VDX4sZiKzygwu-JXeywh1QJrue0TjmWbKqYdqavXBuzzVNOPKQ' },
        { id: 8, name: 'Sensor Presión Aceite', category: 'cummins', code: 'CU-SN-12', price: 54.00, bs: 1944.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmnavll6Z2HmryPSzVx-xW3GSKpYRMwee8ADaDsVNpoXQAo_nfR3VIL2cZjzTaG-fCkImeSjIWmIO8i9v6LBoeieLll7gVR77QeWgG0P2KQKpvdG4N_IRSQ3jAep8EU2QgzHHuWWI4mVeSZOHnrDnV4y4YF4wX0fgwdGl38cXSfvPEjWN-D69HWSgWKfs3UJ1kRj9OMGM7gp_8_XRyzBck5ngiHeUlBEWKg2KYxImzQFIhW1QIvQg3ABFB93ZOT6REKDkau2oCmds' },
        { id: 9, name: 'Filtro de Aceite Toyota', category: 'toyota', code: 'TOY-COR-18', price: 18.50, bs: 666.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiuQeey5lmq6st-vJo1TRQIs8oQtq_4Cg3QyJcj3j5bJguRJRMBb8ZSC_EXi5lrwaP7iFhysnzJ-1xPxNGrK4UF7AT2OeN8ElIvXkr9-fKhD32L0ADYy9Ey15LiRkDN8mJeDuWdAW5rDzkxw-EYW2ydO_BYYgkeF9JIGC8kwEVf-n5FRVlF_rtG7bTZ9VsR_-6AslLZLeyVYNZWjszYl7HOoO_0ZWqNEcN2WLJnxoqR8dzy5OKZhKk8pdLOhI6kvQ7oAHsQ2gQeQ' },
    ] } = props;

    const [filter, setFilter] = useState('all');
    const filteredProducts = filter === 'all' ? initialProducts : initialProducts.filter(p => p.category === filter);

    return (
        <EcommerceLayout title="Catálogo de Partes">
            <div className="tienda-view min-h-screen bg-surface">
                {/* Hero Section */}
                <header className="relative min-h-[85vh] flex items-center overflow-hidden bg-black pt-16">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAXDDoopL1vJGvj43_2EcixnT0qcffP-8sugqc3PJmetlM42HxR7EiDaACitBpmwFEGPY-d0LPOMheDO8XJC_vDkZ0NGhadXT3P0f67reZI-WnouLsKv14pyDyoOT8dU2KDqwTVwiQO7apJ_kQ5mUQ43bKNXlPy0n8itI7-GxJBnEoLXqAGm4Lc218ApwlfA93ICa2tzs84XoB3YvCguieK7UMsUIQ6QITRFgZwmKhnd-3jYDRMGtcZ5G-7Alrjd3kFtkJEppsOsA"
                            className="w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity"
                            alt="Industrial Header"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <span className="inline-block px-3 py-1 bg-primary text-black text-[10px] font-black uppercase tracking-[0.2em] mb-6">Distribuidor Autorizado</span>
                            <h1 className="text-6xl md:text-8xl font-headline font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                                IMPULSADO POR <br />
                                <span className="text-primary-dim">LA PRECISIÓN.</span>
                            </h1>
                            <p className="text-stone-300 text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-medium italic">
                                Suministro de piezas de motor industrial de carga pesada para Cummins, Volvo y Detroit Diesel. Excellence en ingeniería.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/modulo/tienda_virtual/catalogo_detallado" className="bg-primary hover:bg-white text-black font-black uppercase py-5 px-10 tracking-[0.2em] text-xs transition-all inline-block">Explorar Catálogo</Link>
                                <button className="border border-white text-white font-black uppercase py-5 px-10 tracking-[0.2em] text-xs hover:bg-white/10 transition-all">Especificaciones Técnicas</button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Product Catalog */}
                <main className="max-w-screen-2xl mx-auto py-24 px-6 w-full" id="catalog">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-5xl font-black uppercase tracking-tighter text-black mb-4">Componentes de Precisión</h2>
                            <div className="h-2 w-24 bg-primary mb-6"></div>
                            <p className="text-on-surface-variant font-medium leading-relaxed">
                                Explore nuestra selección curada de piezas de alto rendimiento. Cada componente está rigurosamente probado.
                            </p>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-4 w-full md:w-auto">
                            {['all', 'cummins', 'volvo', 'detroit', 'toyota'].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`whitespace-nowrap px-8 py-3 text-xs font-black uppercase tracking-[0.2em] transition-colors ${filter === cat ? 'bg-black text-primary' : 'bg-white border border-outline text-black hover:bg-primary'}`}
                                >
                                    {cat === 'all' ? 'Todos' : cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredProducts.map(product => (
                            <article key={product.id} className="bg-white border border-outline group overflow-hidden">
                                <Link href={`/modulo/tienda_virtual/product_detail_cummins_gasket`} className="block">
                                    <div className="relative aspect-square overflow-hidden bg-stone-50 p-8 flex items-center justify-center">
                                        <img src={product.image} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" alt={product.name} />
                                        <div className="absolute top-4 right-4 bg-black text-primary text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1">En Stock</div>
                                    </div>
                                </Link>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">{product.category}</span>
                                        <span className="text-[10px] font-mono font-bold text-stone-400">#{product.code}</span>
                                    </div>
                                    <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">{product.name}</h3>
                                    <div className="mb-6">
                                        <p className="text-3xl font-black text-black tracking-tighter">${product.price.toFixed(2)}</p>
                                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Bs. {product.bs.toLocaleString()} aprox.</p>
                                    </div>
                                    <button className="w-full bg-black text-white hover:bg-primary hover:text-black py-4 font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 transition-all">
                                        <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                                        Agregar al Carrito
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </main>
            </div>
        </EcommerceLayout>
    );
};
