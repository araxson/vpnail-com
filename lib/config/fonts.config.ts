import { Lato, Playfair_Display } from 'next/font/google'

export const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
})

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
  display: 'swap',
  preload: false,
  fallback: ['Georgia', 'serif'],
})

export const fontVariables = [lato.variable, playfair.variable]
