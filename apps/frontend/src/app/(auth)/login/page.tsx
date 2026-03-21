'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, Shield, Building2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading, error } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showMfa, setShowMfa] = useState(false);
  const [mfaToken, setMfaToken] = useState('');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const carouselItems = [
    {
      h2: 'Gestión Inteligente para su Negocio',
      h3: 'Eficiencia y Precisión en cada proceso',
    },
    {
      h2: 'ERP ZENITH: Su Socio Estratégico',
      h3: 'Tecnología de vanguardia para Venezuela',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password, showMfa ? mfaToken : undefined);
      router.push('/dashboard');
    } catch (err) {
      // Error is handled in the store
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed text-white font-sans antialiased selection:bg-white/30" 
         style={{ backgroundImage: "url('/images/background.jpg')" }}>
      
      {/* HEADER */}
      <header className="border-b border-white/30 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[80%] mx-auto py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-widest flex items-center gap-2">
            <Building2 className="w-8 h-8" />
            <span>ZENITH</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider font-light">
            <a href="#" className="hover:bg-white hover:text-blue-700 px-4 py-2 transition-all rounded">Inicio</a>
            <a href="#" className="hover:bg-white hover:text-blue-700 px-4 py-2 transition-all rounded">Nosotros</a>
            <a href="#" className="hover:bg-white hover:text-blue-700 px-4 py-2 transition-all rounded">Soluciones</a>
            <a href="#" className="hover:bg-white hover:text-blue-700 px-4 py-2 transition-all rounded">Soporte</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto mt-20 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE: CAROUSEL */}
          <div className="relative h-[300px] overflow-hidden pt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={carouselIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <h2 className="text-4xl md:text-5xl font-extralight mb-4 line-tight">
                  "{carouselItems[carouselIndex].h2}"
                </h2>
                <h3 className="text-2xl md:text-3xl font-extralight text-right opacity-80">
                  {carouselItems[carouselIndex].h3}
                </h3>
                <div className="mt-8 flex justify-end">
                  <img src="/images/drop.png" alt="drop" className="w-10 opacity-70 animate-bounce" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE: LOGIN FORM */}
          <div className="border-l-0 md:border-l border-white/30 pl-0 md:pl-12">
            <div className="max-w-md mx-auto md:mx-0">
              <form onSubmit={handleSubmit} className="space-y-8 backdrop-blur-sm bg-black/10 p-8 rounded-2xl border border-white/10 shadow-2xl">
                <div className="text-center md:text-left mb-6">
                  <h1 className="text-3xl font-light mb-2">Ingreso al Sistema</h1>
                  <p className="text-white/60 font-light text-sm italic">Complete sus credenciales para continuar</p>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xl font-light block ml-1">Institucional</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-white transition-colors" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-transparent border border-white/40 focus:border-white focus:outline-none transition-all placeholder:text-white/20 text-xl font-light rounded-sm"
                      placeholder="usuario@empresa.com"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label className="text-xl font-light block ml-1">Clave de Acceso</label>
                  <div className="relative group">
                    <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/40 rounded-l-sm flex items-center justify-center bg-white/5 hidden xl:flex">
                      <img src="/images/padlock.png" alt="lock" className="w-5" />
                    </div>
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-white transition-colors" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-12 pr-12 py-4 bg-transparent border border-white/40 focus:border-white focus:outline-none transition-all placeholder:text-white/20 text-xl font-light rounded-sm"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* MFA (opcional) */}
                {showMfa && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-2"
                  >
                    <label className="text-xl font-light block ml-1">Código MFA</label>
                    <input
                      type="text"
                      value={mfaToken}
                      onChange={(e) => setMfaToken(e.target.value)}
                      className="w-full px-4 py-4 bg-transparent border border-white/40 focus:border-white focus:outline-none transition-all text-center tracking-widest text-2xl font-light"
                      placeholder="000000"
                      maxLength={6}
                      pattern="[0-9]*"
                      inputMode="numeric"
                    />
                  </motion.div>
                )}

                {/* Error */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-600/40 border border-red-500/60 rounded text-red-100 text-sm italic backdrop-blur-md"
                  >
                    {error}
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-5 border border-white bg-transparent hover:bg-white hover:text-blue-900 text-2xl font-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest shadow-lg rounded-sm"
                >
                  {isLoading ? 'Autenticando...' : 'Acceder'}
                </button>

                {/* MFA Toggle */}
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setShowMfa(!showMfa)}
                    className="text-xs text-white/60 hover:text-white decoration-white/30 underline underline-offset-4 transition-colors"
                  >
                    {showMfa ? 'Volver al ingreso normal' : '¿Posee token de seguridad?'}
                  </button>
                </div>
              </form>

              {/* Demo Credentials */}
              <div className="mt-10 p-4 border border-white/10 bg-white/5 rounded-lg text-center backdrop-blur-[2px]">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3">Acceso temporal para demostración</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 text-xs font-mono">
                  <span className="text-white/60">USER: <span className="text-white">admin@erp.com</span></span>
                  <span className="text-white/60">PASS: <span className="text-white">Admin1234!</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-32 pb-10">
        <div className="max-w-[30%] mx-auto border-t border-white/30 pt-8 flex justify-between text-sm font-light opacity-60">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacidad</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Términos</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Contacto</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Versión 1.0</a>
        </div>
        <div className="text-center mt-8 text-[10px] uppercase tracking-[0.2em] opacity-30">
          ERP ZENITH • Sistema de Gestión Integral para Venezuela
        </div>
      </footer>

      <style jsx global>{`
        @font-face {
          font-family: 'Century Gothic';
          src: local('Century Gothic'), local('CenturyGothic');
        }
        body {
          font-family: 'Century Gothic', 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
