import './globals.css'
import { Navbar } from '@/features/landing-page/Navbar'
import { Footer } from '@/features/landing-page/Footer'

export const metadata = {
  title: 'quiddy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#05080f]
      flex
      flex-col
      items-center
      justify-center
      '>
        <Navbar />
        {children}
        <Footer />  
      </body>
    </html>
  )
}
