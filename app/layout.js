import { Assistant } from 'next/font/google'
import './globals.css'

const assistant = Assistant({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-assistant',
})

export const metadata = {
  title: 'Sustainable Living',
  description: 'A Modern Home for Conscious Choices - Discover eco-friendly products for sustainable living',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={assistant.variable}>
      <body>{children}</body>
    </html>
  )
}
