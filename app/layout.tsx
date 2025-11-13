import './globals.css'
import Sidebar from '../components/ui/Sidebar'
import Topbar from '../components/ui/Topbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-white min-h-screen">
        {/* Sidebar stays fixed on large screens */}
        <Sidebar />

        <div className="flex-1 flex flex-col lg:pl-72">
          {/* Topbar with left padding to avoid overlapping the sidebar */}
          <Topbar />

          {/* Main content */}
          <main className="p-6 flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
