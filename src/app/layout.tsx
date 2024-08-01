import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Providers from '@/lib/Providers';
import { Toaster } from 'react-hot-toast';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: 'Next Travel Buddy',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={font.className}>
          {children}
          <Toaster
            position="top-right"
            reverseOrder={false}
          />
        </body>
      </Providers>
    </html>
  )
}
