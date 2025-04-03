import { Footer } from '@/components/Footer'

export function Layout({ children, showFooter = true }) {
  return (
    <>
      {/* <Header /> */}
      <main className="flex-auto">{children}</main>
      {showFooter && <Footer />}
    </>
  )
}
