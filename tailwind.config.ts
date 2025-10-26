import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '3rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        // Nueva paleta limpia: Gris + Rojo (logo colors)
        neutral: {
          50: '#F8FAFC',
          200: '#E5E7EB',
          500: '#6B7280',
          700: '#374151',
          900: '#111827',
        },
        brand: {
          red: '#C5162D',
          'red-600': '#A81225',
          'red-50': '#FFF1F3',
        },
        
        // Utility aliases
        'text-primary': '#111827',
        'text-secondary': '#374151',
        'text-muted': '#6B7280',
        
        // Status colors (simplified)
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        
        // Shadcn/UI compatibility
        background: '#FFFFFF',
        foreground: '#111827',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#111827',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#111827',
        },
        primary: {
          DEFAULT: '#C5162D',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F8FAFC',
          foreground: '#111827',
        },
        muted: {
          DEFAULT: '#F8FAFC',
          foreground: '#6B7280',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        border: '#E5E7EB',
        input: '#E5E7EB',
        ring: '#C5162D',
        
        // Legacy compatibility (mapped to new palette)
        'brand-1': '#C5162D',
        'brand-2': '#A81225',
        'brand-3': '#E53E3E',
        accent: {
          '1': '#C5162D',
          '2': '#A81225',
        },
        construction: '#C5162D',
        ink: '#111827',
        'muted-1': '#F8FAFC',
        'muted-2': '#E5E7EB',
        'muted-3': '#6B7280',
        'muted-4': '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        accent: ['Sora', 'Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.5' }],
        sm: ['clamp(0.875rem, 0.8rem + 0.375vw, 1rem)', { lineHeight: '1.5' }],
        base: ['clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', { lineHeight: '1.6' }],
        lg: ['clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)', { lineHeight: '1.6' }],
        xl: ['clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)', { lineHeight: '1.5' }],
        '2xl': ['clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem)', { lineHeight: '1.4' }],
        '3xl': ['clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem)', { lineHeight: '1.3' }],
        '4xl': ['clamp(2.25rem, 1.95rem + 1.5vw, 3rem)', { lineHeight: '1.2' }],
        '5xl': ['clamp(3rem, 2.5rem + 2.5vw, 3.5rem)', { lineHeight: '1.1' }],
      },
      borderRadius: {
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.15)',
        medium: '0 4px 12px rgba(0, 0, 0, 0.2)',
        strong: '0 8px 24px rgba(0, 0, 0, 0.25)',
        glow: '0 0 20px rgba(197, 22, 45, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '220ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-fast": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-fast": "fade-in-fast 0.3s ease-out forwards",
        "slide-in": "slide-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.4s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
