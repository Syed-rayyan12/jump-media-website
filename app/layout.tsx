import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Preloader from '@/components/Preloader'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jump Media | Eleven Ways To Be Found',
  description: 'Jump Media creates powerful digital platforms that connect businesses, professionals and consumers across the UK.',
  icons: {
    icon: [
      {
        url: '/jump-media-logo.png',
        type: 'image/png',
      },
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
    ],
    shortcut: '/jump-media-logo.png',
    apple: '/jump-media-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/jump-media-logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/jump-media-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&family=Josefin+Sans:ital,wght@0,300..700;1,300..700&family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Preloader />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
