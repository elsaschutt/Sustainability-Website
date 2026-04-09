import { Manrope, Urbanist } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
})

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-urbanist',
})

export const metadata = {
  title: 'The Green Swap',
  description: 'We don\'t sell sustainability. We verify it. - Discover eco-friendly products for sustainable living',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${urbanist.variable}`}>
      <body>{children}</body>
    </html>
  )
}
