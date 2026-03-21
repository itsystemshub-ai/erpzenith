import { Sidebar } from '@/components/layout/Sidebar'
import { Footer } from '@/components/layout/Footer'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
