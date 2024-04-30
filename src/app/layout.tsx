import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Providers from '@/lib/Providers';
import assets from "@/assets";


const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: assets.img.favicon!
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={nunito.className}>{children}</body>
      </Providers>
    </html>
  )
}
