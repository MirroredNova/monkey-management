import './globals.css';
import React from 'react';
import Nav from '@/components/layout/nav/nav';
import Footer from '@/components/layout/footer/footer';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="content">
          <Nav />
          {children}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}
