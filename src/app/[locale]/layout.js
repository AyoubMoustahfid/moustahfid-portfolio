import Navbar from './ui/sections/Navbar'
import Footer from "./ui/sections/Footer"
import ScrollToTopButton from './ui/components/ScrollToTopButton'
import {NextIntlClientProvider, useMessages} from 'next-intl';


import Providers from "./providers"
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ayoub Folio',
  description: 'Porfolio Ayoub Moustahfid',
}

export default function RootLayout({ children, params: {locale}}) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <main className="grid grid-rows-[auto_1fr_auto] bg-white dark:bg-gray-950">
          <NextIntlClientProvider messages={messages}>
            <Providers>
              <Navbar/>
              {children}
              <Footer/>
              <ScrollToTopButton />
            </Providers>

          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  )
}
