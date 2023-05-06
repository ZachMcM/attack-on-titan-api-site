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
        {children}
      </div>
    </div>
  )
}
