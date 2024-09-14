import './globals.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-900 text-gray-100`}>
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">Natesworks</Link>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/projects" className="hover:text-gray-300">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto mt-8 px-4 flex-grow">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            © 2024 Natesworks. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}