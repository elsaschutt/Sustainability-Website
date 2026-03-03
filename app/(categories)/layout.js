import { Inter } from 'next/font/google'
import '@/styles/category.css'
import CategoryHeader from '@/components/layout/CategoryHeader'
import CategoryFooter from '@/components/layout/CategoryFooter'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export default function CategoryLayout({ children }) {
  return (
    <div className={inter.variable}>
      <CategoryHeader />
      {children}
      <CategoryFooter />
    </div>
  )
}
