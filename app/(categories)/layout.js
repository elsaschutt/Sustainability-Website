import '@/styles/category.css'
import CategoryHeader from '@/components/layout/CategoryHeader'
import CategoryFooter from '@/components/layout/CategoryFooter'

export default function CategoryLayout({ children }) {
  return (
    <div>
      <CategoryHeader />
      {children}
      <CategoryFooter />
    </div>
  )
}
