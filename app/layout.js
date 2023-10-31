import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Contador para fim das aulas',
    description: 'Feito por Rodrigo',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
                {children}
            </body>
        </html>
    );
}
