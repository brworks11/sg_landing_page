import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StarGrove Distribution - Wholesale Distributor for Collectibles & Toys',
  description: 'Trusted wholesale partner specializing in collectibles, toys, and pop culture merchandise. We connect suppliers with retailers and provide marketplace expertise.',
  keywords: 'wholesale distributor, collectibles, toys, pop culture merchandise, Amazon, Walmart, eBay, marketplace sales',
  authors: [{ name: 'StarGrove Distribution' }],
  openGraph: {
    title: 'StarGrove Distribution - Wholesale Distributor',
    description: 'Trusted wholesale partner specializing in collectibles, toys, and pop culture merchandise.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 