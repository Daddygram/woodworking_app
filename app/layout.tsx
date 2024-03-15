import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Woodko House',
  description: 'თანამედროვე ავეჯის დიზაინი და დამზადება | ინტერიერის დიზაინი | ავეჯის აწყობა | სახლის დიზაინი | Tanamedrove avejis dizaini da damzadeba | interieris dizaini | avejis awyoba | saxlis dizaini',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth hide-scrollbar'>
      <body>
        <Navbar />
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
