import './globals.css';

import NavBar from './NavBar';
import { Nerko_One } from '@next/font/google';

const nerko_one = Nerko_One({ weight: ['400'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nerko_one.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
