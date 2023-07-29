import '../globals.css';
import React from 'react';
import Footer from '@/components/layout/footer/footer';
import Nav from '@/components/layout/nav/Nav';

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: {
    default: 'Monkey Management',
    template: '%s | Monkey Management'
  }
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <Nav />
        </header>
        <main className="content">{children}</main>
        <footer className="footer">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
