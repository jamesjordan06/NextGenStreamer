import Head from 'next/head';
import { ReactNode } from 'react';
import Header from './Header';

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: Props) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | AI Hustle` : 'AI Hustle'}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto p-4">{children}</main>
      </div>
    </>
  );
}
