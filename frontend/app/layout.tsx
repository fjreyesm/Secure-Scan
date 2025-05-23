import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'SecureCheck - Plataforma de Servicios de Seguridad Digital',
  description: 'Verifique si su información ha sido comprometida y proteja su identidad digital',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}