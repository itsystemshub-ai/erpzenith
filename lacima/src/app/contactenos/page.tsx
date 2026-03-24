"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactenosPage() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, wire this to an email API or backend
    setSent(true);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#1d9e4a]">Inicio</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Contáctenos</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-800 mb-2">Contáctenos</h1>
      <div className="w-12 h-1 bg-[#1d9e4a] mb-8 rounded" />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact info */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Información de Contacto</h2>

          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e8f5ee] flex items-center justify-center flex-shrink-0">
                <span className="text-[#1d9e4a]">📍</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Dirección</p>
                <p className="text-gray-600 text-sm">Valencia, Venezuela</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e8f5ee] flex items-center justify-center flex-shrink-0">
                <span className="text-[#1d9e4a]">📞</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Teléfonos</p>
                <p className="text-gray-600 text-sm">(0241) 414.56.19</p>
                <p className="text-gray-600 text-sm">(0414) 143.51.14</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e8f5ee] flex items-center justify-center flex-shrink-0">
                <span className="text-[#1d9e4a]">✉️</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Correos Electrónicos</p>
                {["ventas@rytdv.com.ve","info@rytdv.com.ve","logistica@rytdv.com.ve"].map(e => (
                  <a key={e} href={`mailto:${e}`} className="block text-sm text-[#1d9e4a] hover:underline">{e}</a>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e8f5ee] flex items-center justify-center flex-shrink-0">
                <span className="text-[#1d9e4a]">🏢</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">RIF</p>
                <p className="text-gray-600 text-sm">J-50101341-1</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="mt-8">
            <p className="font-semibold text-gray-800 text-sm mb-3">Redes Sociales</p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61550056921038" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#3b5998] transition-colors">
                <span className="w-8 h-8 rounded-full bg-[#3b5998] text-white flex items-center justify-center text-xs">f</span>
                Facebook
              </a>
              <a href="https://instagram.com/rytdvzla" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#e1306c] transition-colors">
                <span className="w-8 h-8 rounded-full bg-[#e1306c] text-white flex items-center justify-center text-xs">ig</span>
                @rytdvzla
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">¡Mensaje enviado!</h3>
              <p className="text-gray-600 mb-4">Nos pondremos en contacto contigo a la brevedad posible.</p>
              <button onClick={() => setSent(false)}
                className="text-sm text-[#1d9e4a] underline">
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
                <input
                  required
                  type="text"
                  value={form.nombre}
                  onChange={e => setForm({ ...form, nombre: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1d9e4a] transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1d9e4a] transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input
                  type="tel"
                  value={form.telefono}
                  onChange={e => setForm({ ...form, telefono: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1d9e4a] transition-colors"
                  placeholder="(0414) 000.00.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
                <textarea
                  required
                  rows={5}
                  value={form.mensaje}
                  onChange={e => setForm({ ...form, mensaje: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1d9e4a] transition-colors resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1d9e4a] text-white font-semibold py-3 rounded-lg hover:bg-[#1d4c27] transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
