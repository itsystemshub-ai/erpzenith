"use client";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, CATEGORIES, type Product } from "@/data/products";
import { Suspense } from "react";

function ProductCard({ p }: { p: Product }) {
  return (
    <div className="product-card bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        <div className="product-overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity flex items-center justify-center gap-2">
          <span className="bg-[#1d9e4a] text-white text-xs px-3 py-1.5 rounded-full font-medium">
            Ver detalle
          </span>
        </div>
      </div>
      <div className="p-3">
        <p className="text-xs text-[#1d9e4a] font-medium mb-1">{p.category}</p>
        <h3 className="text-sm font-semibold text-gray-800 leading-tight mb-1 line-clamp-2">{p.name}</h3>
        <p className="text-xs text-gray-500">Código: <span className="text-[#1d9e4a] font-medium">{p.sku}</span></p>
        {p.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {p.tags.map(t => (
              <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function HomeContent() {
  const searchParams = useSearchParams();
  const qParam = searchParams.get("q") ?? "";
  const catParam = searchParams.get("categoria") ?? "";

  const [activeCategory, setActiveCategory] = useState(catParam || "Todos");
  const [searchQuery, setSearchQuery] = useState(qParam);

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== "Todos") {
      list = list.filter(p => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const kw = searchQuery.toLowerCase();
      list = list.filter(p =>
        [p.name, p.sku, p.category, ...p.tags].join(" ").toLowerCase().includes(kw)
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* Hero */}
      <section
        className="relative text-white text-center py-20 px-4"
        style={{
          background: "linear-gradient(rgba(29,158,74,0.88), rgba(29,76,39,0.82)), url('/images/2022/08/Banner2.jpg') center/cover no-repeat",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow">
            Expertos en Radiadores y Tanques
          </h1>
          <p className="text-base md:text-lg mb-8 text-white/90 max-w-xl mx-auto">
            La más amplia variedad de radiadores, tanques plásticos, colmenas y accesorios. Calidad garantizada.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#catalogo"
              className="bg-white text-[#1d9e4a] font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors shadow">
              Ver Catálogo
            </a>
            <Link href="/contactenos"
              className="border-2 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              Contáctenos
            </Link>
          </div>
        </div>
      </section>

      {/* Notice */}
      <div className="bg-yellow-50 border-b border-yellow-200 text-center py-2 px-4">
        <p className="text-sm text-yellow-800">
          <span className="font-semibold text-red-600">Contáctenos</span> o diríjase a nuestras oficinas para mayor información sobre precios y disponibilidad.
        </p>
      </div>

      {/* Main content */}
      <div id="catalogo" className="max-w-7xl mx-auto px-4 py-8 flex gap-6">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-4 space-y-4">
            {/* Category filter */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-[#1d9e4a] text-white px-4 py-3 font-semibold text-sm">
                Categorías
              </div>
              <ul className="py-2">
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        activeCategory === cat
                          ? "text-[#1d9e4a] font-semibold bg-green-50"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#1d9e4a]"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar banner */}
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/2022/08/Banner_LD1_fit=576%2C1024&ssl=1_v=1753197701.jpeg"
                alt="Reparelo"
                width={576} height={1024}
                className="w-full h-auto"
              />
            </div>
          </div>
        </aside>

        {/* Products area */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-800">Productos</h2>
              <p className="text-sm text-gray-500">Mostrando {filtered.length} resultado(s)</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Mobile category select */}
              <select
                className="lg:hidden border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#1d9e4a]"
                value={activeCategory}
                onChange={e => setActiveCategory(e.target.value)}
              >
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
              {/* Search */}
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Filtrar..."
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#1d9e4a] w-40"
              />
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map(p => <ProductCard key={p.sku} p={p} />)}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-500">
              <p className="text-4xl mb-3">🔍</p>
              <p className="font-medium">No se encontraron productos</p>
              <button onClick={() => { setActiveCategory("Todos"); setSearchQuery(""); }}
                className="mt-3 text-sm text-[#1d9e4a] underline">
                Ver todos los productos
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}
