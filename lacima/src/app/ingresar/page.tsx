"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function IngresarPage() {
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder — wire to your auth backend when ready
    setError("Credenciales incorrectas. Por favor intente de nuevo.");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/">
              <Image
                src="/images/2025/02/cropped-cropped-logo-01_Milwaukee_v=1753193479.png"
                alt="RYTDV"
                width={180} height={108}
                className="h-14 w-auto object-contain mx-auto mb-6"
              />
            </Link>
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-[#1d9e4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">¡Bienvenido de nuevo!</h1>
            <p className="text-sm text-gray-500 mt-1">Ingresa tus credenciales para acceder</p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <input
                  type="email"
                  required
                  autoFocus
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="ejemplo@correo.com"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg text-sm outline-none focus:border-[#1d9e4a] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <input
                  type="password"
                  required
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg text-sm outline-none focus:border-[#1d9e4a] transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={e => setForm({ ...form, remember: e.target.checked })}
                  className="w-4 h-4 accent-[#1d9e4a]"
                />
                Recordarme
              </label>
              <Link href="/contactenos" className="text-[#1d9e4a] font-medium hover:underline">
                ¿Olvidaste tu clave?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1d9e4a] text-white font-bold py-3.5 rounded-lg hover:bg-[#1d4c27] transition-colors shadow-md hover:shadow-lg"
            >
              INGRESAR
            </button>

            <p className="text-center text-sm text-gray-500">
              ¿No tienes una cuenta?{" "}
              <Link href="/contactenos" className="text-[#1d9e4a] font-semibold hover:underline">
                Contáctanos
              </Link>
            </p>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6" suppressHydrationWarning>
          &copy; {new Date().getFullYear()} Radiadores y Tanques de Venezuela. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
