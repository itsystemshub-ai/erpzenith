import React from 'react';
import { Link } from '@inertiajs/react';

export default function ProductCard({ product, view = 'grid' }) {
    if (view === 'list') {
        return (
            <article className="bg-white border border-outline group overflow-hidden flex flex-col sm:flex-row h-auto min-h-[200px] items-stretch">
                <Link href={`/modulo/tienda_virtual/product_detail_cummins_gasket`} className="w-full sm:w-[250px] flex-shrink-0 flex border-b sm:border-b-0 sm:border-r border-outline">
                    <div className="relative aspect-square w-full overflow-hidden bg-stone-50 p-8 flex items-center justify-center">
                        <img src={product.imagen_url || 'https://via.placeholder.com/300'} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" alt={product.nombre} />
                    </div>
                </Link>
                <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                        <div className="flex justify-between items-start mb-2 text-[10px] font-black uppercase tracking-widest">
                            <span className="text-primary">{product.marca || 'GENERIC'}</span>
                            <span className="font-mono text-stone-400">#{product.codigo || 'N/A'}</span>
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">{product.nombre}</h3>
                        <p className="text-sm text-stone-500 line-clamp-2 mb-4">{product.descripcion || 'Componente de alta precisión para motores industriales de carga pesada.'}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                            <p className="text-3xl font-black text-black tracking-tighter">${parseFloat(product.precio).toFixed(2)}</p>
                            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Bs. {(product.precio * 36).toLocaleString()} aprox.</p>
                        </div>
                        <button className="bg-black text-white hover:bg-primary hover:text-black py-4 px-8 font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-3 transition-all">
                            <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                            Agregar
                        </button>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <article className="bg-white border border-outline group overflow-hidden">
            <Link href={`/modulo/tienda_virtual/product_detail_cummins_gasket`} className="block">
                <div className="relative aspect-square overflow-hidden bg-stone-50 p-8 flex items-center justify-center">
                    <img src={product.imagen_url || 'https://via.placeholder.com/300'} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" alt={product.nombre} />
                    <div className="absolute top-4 right-4 bg-black text-primary text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1">En Stock</div>
                </div>
            </Link>
            <div className="p-6">
                <div className="flex justify-between items-start mb-2 text-[10px] font-black uppercase tracking-widest">
                    <span className="text-primary">{product.marca || 'GENERIC'}</span>
                    <span className="font-mono text-stone-400">#{product.codigo || 'N/A'}</span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">{product.nombre}</h3>
                <div className="mb-6">
                    <p className="text-3xl font-black text-black tracking-tighter">${parseFloat(product.precio).toFixed(2)}</p>
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Bs. {(product.precio * 36).toLocaleString()} aprox.</p>
                </div>
                <button className="w-full bg-black text-white hover:bg-primary hover:text-black py-4 font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-3 transition-all">
                    <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    Agregar al Carrito
                </button>
            </div>
        </article>
    );
}
