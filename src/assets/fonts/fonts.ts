import { Heebo } from 'next/font/google'

export const Font = Heebo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heebo',
  display: 'block',
  fallback: ['sans-serif']
})
