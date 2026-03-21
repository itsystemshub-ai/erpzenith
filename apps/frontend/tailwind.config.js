/** @type {import('tailwindcss').Config} */
module.exports = {
  // La clase .dark en <html> activa el tema oscuro
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // ─── Todos los colores apuntan a variables CSS definidas en globals.css ───
      // Esto permite que un solo cambio de clase en <html> cambie todo el sistema
      colors: {
        primary:                      'var(--color-primary)',
        'primary-container':          'var(--color-primary-container)',
        'on-primary':                 'var(--color-on-primary)',
        'on-primary-container':       'var(--color-on-primary-container)',
        secondary:                    'var(--color-secondary)',
        'secondary-container':        'var(--color-secondary-container)',
        'on-secondary':               'var(--color-on-secondary)',
        tertiary:                     'var(--color-tertiary)',
        'tertiary-container':         'var(--color-tertiary-container)',
        'on-tertiary':                'var(--color-on-tertiary)',
        background:                   'var(--color-background)',
        surface:                      'var(--color-surface)',
        'surface-dim':                'var(--color-surface-dim)',
        'surface-bright':             'var(--color-surface-bright)',
        'surface-container-lowest':   'var(--color-surface-container-lowest)',
        'surface-container-low':      'var(--color-surface-container-low)',
        'surface-container':          'var(--color-surface-container)',
        'surface-container-high':     'var(--color-surface-container-high)',
        'surface-container-highest':  'var(--color-surface-container-highest)',
        'surface-variant':            'var(--color-surface-variant)',
        'on-surface':                 'var(--color-on-surface)',
        'on-surface-variant':         'var(--color-on-surface-variant)',
        'on-background':              'var(--color-on-background)',
        outline:                      'var(--color-outline)',
        'outline-variant':            'var(--color-outline-variant)',
        error:                        'var(--color-error)',
        'error-container':            'var(--color-error-container)',
        'inverse-primary':            'var(--color-inverse-primary)',
        'inverse-surface':            'var(--color-inverse-surface)',
      },
      fontFamily: {
        headline: ['Space Grotesk', 'sans-serif'],
        body:     ['Inter', 'sans-serif'],
        spartan:  ['League Spartan', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg:      '0.25rem',
        xl:      '0.5rem',
        '2xl':   '1rem',
        full:    '0.75rem',
      },
      boxShadow: {
        // Sombras estáticas para utilidades Tailwind (shadow-card, shadow-floating, etc.)
        // Las sombras que cambian con el tema usan var(--shadow-*) directamente en CSS
        card:     'var(--shadow-card)',
        floating: '0 20px 25px -5px rgba(0,0,0,0.4), 0 10px 10px -5px rgba(0,0,0,0.2)',
        zenith:   'var(--shadow-zenith)',
        sidebar:  'var(--shadow-sidebar)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%':   { boxShadow: '0 0 0 0 rgba(var(--color-primary-rgb), 0.4)' },
          '70%':  { boxShadow: '0 0 0 15px rgba(var(--color-primary-rgb), 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(var(--color-primary-rgb), 0)' },
        },
      },
    },
  },
  plugins: [],
}
