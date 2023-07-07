import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 overflow-hidden">
      <Sidebar/>
      <div className="flex-1 overflow-y-auto">
        <div className="p-8 md:py-16 md:px-20 lg:px-32">
          {children}
          <Footer/>
        </div>
      </div>
    </div>
  )
}
