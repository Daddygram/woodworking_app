import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Woodko House - თანამედროვე ავეჯის დიზაინი და დამზადება',
  description: 'Woodko House - თანამედროვე ავეჯის დიზაინი და დამზადება. ინტერიერის დიზაინი, ავეჯის აწყობა, სახლის დიზაინი და მეტი.',
  keywords: 'Woodko House, ავეჯის დიზაინი, ავეჯის დამზადება, ინტერიერის დიზაინი, სახლის დიზაინი, თანამედროვე ავეჯი, დიზაინი, ავეჯი, ინტერიერი, სახლი',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Language" content="ka" />
        <meta name="author" content="Woodko House" />
        <meta name="google-site-verification" content="Dsd1d9hUHlcTA4eHqggLMGhcRc3SYgIERj_pwd7w8hg" />
      </Head>
      <html lang="en" className='scroll-smooth hide-scrollbar'>
        <body>
          <Navbar />
          <main className='relative overflow-hidden'>
            {children}
          </main>
          <Footer />
          </body>
      </html>
    </>
  )
}
