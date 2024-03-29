import './globals.css'

import Navbar from './components/Navbar'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Attack on Titan API',
  description: 'A RESTful API that allows you to retrieve information about characters, episodes, locations, organizations, and titans from the popular anime and manga series Attack on Titan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col h-screen bg-zinc-950 text-white '>
        <Navbar/>
        {children}
        <Analytics/>
      </body>
    </html>
  )
}
