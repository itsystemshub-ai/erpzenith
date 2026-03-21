'use client'

const faqs = [
  {
    q: '¿Cómo inicio sesión en el sistema?',
    a: 'Ingresa tu nombre de usuario y contraseña en la pantalla principal. Si no tienes credenciales, contacta al administrador del sistema.',
  },
  {
    q: '¿Olvidé mi contraseña, qué hago?',
    a: 'Haz clic en "¿Olvidaste tu contraseña?" en la pantalla de login. Ingresa tu usuario y la nueva contraseña que deseas. El administrador recibirá la solicitud y la aprobará.',
  },
  {
    q: '¿Qué hago si mi usuario está bloqueado?',
    a: 'Contacta al administrador del sistema para que reactive tu cuenta. El administrador puede gestionar el estado de los usuarios desde el módulo de Configuración.',
  },
  {
    q: '¿El sistema funciona en dispositivos móviles?',
    a: 'ERP ZENITH está optimizado para escritorio. Puede usarse en tablets, pero se recomienda una pantalla de al menos 1024px para la mejor experiencia.',
  },
  {
    q: '¿Cómo cambio mi contraseña una vez dentro del sistema?',
    a: 'Desde el dashboard, ve a tu perfil o usa la opción "Cambiar contraseña" en Configuración.',
  },
  {
    q: '¿Qué navegadores son compatibles?',
    a: 'Chrome 90+, Firefox 88+, Edge 90+ y Safari 14+. Se recomienda Chrome para la mejor experiencia.',
  },
]

export default function AyudaPage() {
  return (
    <div className="bg-background text-on-surface font-body min-h-[calc(100vh-60px)] flex items-start justify-center py-16 px-4 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-tertiary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-2xl z-10">
        <a href="/login" className="flex items-center gap-2 text-xs text-outline hover:text-on-surface transition-colors mb-10 group">
          <span className="material-symbols-outlined text-sm group-hover:text-primary">arrow_back</span>
          Volver al inicio de sesión
        </a>

        <div className="mb-10">
          <div className="w-12 h-12 bg-primary-container rounded-2xl flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-on-primary-container text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>help</span>
          </div>
          <h1 className="font-headline text-3xl font-semibold text-on-surface">Centro de Ayuda</h1>
          <p className="text-on-surface-variant text-sm mt-2">Respuestas a las preguntas más frecuentes sobre ERP ZENITH.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-panel rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary text-xs font-bold font-spartan">{i + 1}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface mb-2">{faq.q}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 glass-panel rounded-2xl p-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-on-surface">¿No encontraste lo que buscabas?</p>
            <p className="text-xs text-on-surface-variant mt-1">Nuestro equipo de soporte está disponible para ayudarte.</p>
          </div>
          <a
            href="/login/soporte"
            className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-all text-xs font-spartan uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-sm">contact_support</span>
            Ir a Soporte
          </a>
        </div>
      </div>
    </div>
  )
}
