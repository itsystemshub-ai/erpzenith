"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/data/products";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (search.trim()) router.push(`/?q=${encodeURIComponent(search.trim())}`);
  }

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-gray-100 border-b border-gray-200 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between py-1.5 gap-2">
          <span>RIF: J-50101341-1 | (0241) 414.56.19 - (0414) 143.51.14</span>
          <span>Valencia - Venezuela</span>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/profile.php?id=61550056921038" target="_blank" rel="noreferrer" aria-label="Facebook"
              className="hover:text-[#1d9e4a] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://instagram.com/rytdvzla" target="_blank" rel="noreferrer" aria-label="Instagram"
              className="hover:text-[#1d9e4a] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path fill="white" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/2025/02/cropped-cropped-logo-01_Milwaukee_v=1753193479.png"
              alt="Radiadores y Tanques de Venezuela"
              width={180} height={108}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Search */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xl hidden md:flex">
            <div className="flex w-full border border-gray-300 rounded-full overflow-hidden focus-within:border-[#1d9e4a] transition-colors">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar productos, marcas, modelos..."
                className="flex-1 px-4 py-2 text-sm outline-none"
              />
              <button type="submit" className="bg-[#1d9e4a] text-white px-4 hover:bg-[#1d4c27] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </button>
            </div>
          </form>

          {/* Nav links desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-auto">
            <Link href="/" className="hover:text-[#1d9e4a] transition-colors">Productos</Link>
            <Link href="/nosotros" className="hover:text-[#1d9e4a] transition-colors">Nosotros</Link>
            <Link href="/contactenos" className="hover:text-[#1d9e4a] transition-colors">Contáctenos</Link>
            <Link href="/ingresar" className="flex items-center gap-1.5 bg-[#1d9e4a] text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-[#1d4c27] transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              Ingresar
            </Link>
          </nav>

          {/* Mobile menu btn */}
          <button
            className="md:hidden ml-auto p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-gray-700"/>
              <span className="block w-6 h-0.5 bg-gray-700"/>
              <span className="block w-6 h-0.5 bg-gray-700"/>
            </div>
          </button>
        </div>
      </div>

      {/* Below header: categories bar */}
      <div className="bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-6">
          {/* Categories dropdown */}
          <div className="relative cat-trigger group">
            <button
              onClick={() => setCatOpen(!catOpen)}
              className="flex items-center gap-2 py-3 text-sm font-semibold text-white bg-[#1d9e4a] px-4 hover:bg-[#1d4c27] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              Categorías
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            {catOpen && (
              <div className="absolute top-full left-0 z-50 bg-white border border-gray-200 rounded-b-lg shadow-xl min-w-[260px] py-2">
                {CATEGORIES.filter(c => c !== "Todos").map(cat => (
                  <Link
                    key={cat}
                    href={`/?categoria=${encodeURIComponent(cat)}`}
                    onClick={() => setCatOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-[#1d9e4a] transition-colors"
                  >
                    {cat.toUpperCase()}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="py-3 hover:text-[#1d9e4a] transition-colors font-medium">Inicio</Link>
            <Link href="/nosotros" className="py-3 hover:text-[#1d9e4a] transition-colors">Nosotros</Link>
            <Link href="/contactenos" className="py-3 hover:text-[#1d9e4a] transition-colors">Contáctenos</Link>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <form onSubmit={handleSearch} className="px-4 py-3">
            <div className="flex border border-gray-300 rounded-full overflow-hidden">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar..."
                className="flex-1 px-4 py-2 text-sm outline-none"
              />
              <button type="submit" className="bg-[#1d9e4a] text-white px-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </button>
            </div>
          </form>
          <nav className="flex flex-col text-sm font-medium border-t border-gray-100">
            <Link href="/" onClick={() => setMenuOpen(false)} className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100">Productos</Link>
            <Link href="/nosotros" onClick={() => setMenuOpen(false)} className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100">Nosotros</Link>
            <Link href="/contactenos" onClick={() => setMenuOpen(false)} className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100">Contáctenos</Link>
          </nav>
          <div className="px-4 py-3">
            <p className="text-xs font-semibold text-gray-500 mb-2">CATEGORÍAS</p>
            <div className="grid grid-cols-2 gap-1">
              {CATEGORIES.filter(c => c !== "Todos").map(cat => (
                <Link
                  key={cat}
                  href={`/?categoria=${encodeURIComponent(cat)}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs text-gray-600 hover:text-[#1d9e4a] py-1"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
