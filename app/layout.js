import './globals.css'
import Navbar from './Component/navbar'
import Footer from './Component/footer'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar />
      <main className='min-h-screen'>
      {children}
      </main>
      <Footer />
      </body>
    </html>
  )
}
