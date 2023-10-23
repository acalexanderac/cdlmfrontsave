import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SessionAuthProvider from '../context/SessionAuthProvider';
import Sidebar from "@/components/Sidebar";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clínica de la Mujer',
  description: 'Clínica de la Mujer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <SessionAuthProvider>
            <Header />
            <div className="flex">
                
                <main className="flex-grow">{children}</main>
            </div>
            <Footer />
        </SessionAuthProvider>
        </body>
        </html>
    )
}
