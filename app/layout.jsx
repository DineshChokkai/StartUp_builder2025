import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://startupbuilder.com'),
  title: 'Startup Builder',
  description: 'One Platform. Every Startup Solution. From idea to investor under one roof.',
  openGraph: {
    title: 'Startup Builder',
    description: 'One Platform. Every Startup Solution. From idea to investor under one roof.',
    url: 'https://startupbuilder.com',
    siteName: 'Startup Builder',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Startup Builder - One Platform for Every Startup Solution',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Builder',
    description: 'One Platform. Every Startup Solution. From idea to investor under one roof.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>
        <SmoothScroll />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
