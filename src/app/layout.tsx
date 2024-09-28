import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Header } from 'app/components/header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Stuart Jauncey Portfolio',
    description: 'Stuart Jauncey Portfolio',
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main className={`${inter.className} main-container`}>
                    {children}
                    <SpeedInsights />
                </main>
            </body>
        </html>
    );
}
