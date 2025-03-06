import type { Metadata } from 'next'
import { unstable_ViewTransition as ViewTransition } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import './transitions.css'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Next Movies',
  description: 'A movie app built with Next.js and the View Transitions API',
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-black">
          <ViewTransition>
            {children}
            {modal}
          </ViewTransition>
        </div>
      </body>
    </html>
  )
}
