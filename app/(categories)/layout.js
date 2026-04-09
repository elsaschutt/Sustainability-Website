import '@/styles/main.css'
import '@/styles/category.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function CategoryLayout({ children }) {
  return (
    <div className="category-page">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
