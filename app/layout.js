import { Assistant } from 'next/font/google'
import './globals.css'

const assistant = Assistant({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-assistant',
})

export const metadata = {
  title: 'The Green Swap',
  description: 'We don\'t sell sustainability. We verify it. - Discover eco-friendly products for sustainable living',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={assistant.variable}>
      <body>{children}</body>
    </html>
  )
}
