import type { Metadata } from 'next';
import { Header } from 'app/components/header';
import { Inter } from 'next/font/google';

import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

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
                <div className="main-container">{children}</div>
            </body>
        </html>
    );
}
