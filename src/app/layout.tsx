import './globals.css'

import { Inter } from 'next/font/google'
import Image from 'next/image'
import SantanderLogo from '../../public/santander-logo-horisontal.png'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body className={inter.className}>
      <header className="py-4 px-6 border-t-3 border-t-red border-b border-b-gray-light">
        <Image
          src={SantanderLogo}
          alt="santander logo"
          width={290}
          height={23}
          priority
          quality={100}
          placeholder="blur"
        />
      </header>
      {children}
    </body>
  </html>
)

export default RootLayout
