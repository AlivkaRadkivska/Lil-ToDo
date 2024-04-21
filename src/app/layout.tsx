import type { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import './globals.css';

const font = Comfortaa({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Lil' ToDo App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-slate-800 text-white p-0 m-0`}>
        {children}
      </body>
    </html>
  );
}
