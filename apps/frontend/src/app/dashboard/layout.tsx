import { Sidebar } from '@/components/layout/Sidebar'
import { Footer } from '@/components/layout/Footer'
import { ErpProvider } from '@/components/providers/ErpProvider'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ErpProvider>
      <div className="flex min-h-screen bg-surface">
        <Sidebar />
        <div className="flex-1 ml-64 min-w-0 flex flex-col min-h-screen overflow-x-hidden">
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </ErpProvider>
  )
}
