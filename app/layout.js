import { Manrope, Saira } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
})

const saira = Saira({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-saira',
})

export const metadata = {
  title: 'The Green Swap',
  description: 'We don\'t sell sustainability. We verify it. - Discover eco-friendly products for sustainable living',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${saira.variable}`}>
      <body>{children}</body>
    </html>
  )
}
