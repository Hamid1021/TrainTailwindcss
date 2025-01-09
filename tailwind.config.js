const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // رنگ‌های Tailwind
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        yellow: colors.yellow,
        green: colors.green,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.purple,
        pink: colors.pink,
        // رنگ‌های سفارشی
        primary: {
          light: '#d6e6ff',
          DEFAULT: '#1e40af',
          dark: '#1e3a8a'
        },
        secondary: {
          light: '#ff7c7c',
          DEFAULT: '#ef4444',
          dark: '#dc2626'
        }
      },
      spacing: {
        // مقادیر سفارشی فاصله‌ها
        72: '18rem',
        84: '21rem',
        96: '24rem'
      },
      fontFamily: {
        // فونت‌های سفارشی
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'monospace']
      },
      fontSize: {
        // اندازه‌های سفارشی فونت‌ها
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem'
      },
      animation: {
        // انیمیشن‌های سفارشی
        spin: 'spin 3s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite'
      },
      keyframes: {
        // کلیدهای انیمیشن سفارشی
        spin: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' }
        },
        ping: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%, 100%': { transform: 'scale(2)', opacity: '0' }
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' }
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' }
        }
      }
    }
  },
  variants: {
    extend: {
      // انواع مختلف استایل‌ها برای حالت‌های مختلف
      backgroundColor: ['active', 'group-hover'],
      textColor: ['visited', 'group-hover'],
      opacity: ['disabled']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
};
