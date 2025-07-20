import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xs: '400px',
        sm: '640px',
        xmd: '674px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
        xxxl: '1920px',
        xxxxl: '2560px',
        'max-4xl': {
          max: '1919'
        },
        'max-3xl': {
          max: '2559'
        },
        'max-2xl': {
          max: '1535px'
        },
        'max-xl': {
          max: '1279px'
        },
        'max-lg': {
          max: '1023px'
        },
        'max-md': {
          max: '767px'
        },
        'max-xmd': {
          max: '899px'
        },
        'max-sm': {
          max: '639px'
        },
        'max-xm': {
          max: '375px'
        },
        'max-xs': {
          max: '400px'
        }
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        blueground: 'hsl(var(--blueground))',
        foreground: 'hsl(var(--foreground))',
        price: 'hsl(var(--price))',
        disabled: 'hsl(var(--disabled))',
        textblue: 'hsl(var(--textblue))',
        skyground: 'hsl(var(--skyground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [tailwindcssAnimate]
} satisfies Config

export default config
