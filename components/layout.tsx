import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = 'Default' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta charSet='utf-8' />
      </Head>

      <div className='min-h-screen flex flex-col justify-between'>
        <header>
          <div className='bg-indigo-200'>
            <div className='h-64 max-w-5xl px-6 mx-auto flex flex-col items-center justify-center'>
              <h1 className='font-mono text-5xl md:text-6xl'><span className='highlight'>js</span>Framework</h1>

              <h3 className='font-serif text-gray-800 text-center'>
                A List of the Top Open Source JavaScript Frameworks
              </h3>
            </div>
          </div>

          <div className='bg-gray-800'>
            <nav className='max-w-5xl px-6 mx-auto h-12 flex items-center'>
              <Link href='/'>
                <a className='font-sans font-medium no-underline hover:underline text-white hover:text-yellow-400'>
                  Home
                </a>
              </Link>
            </nav>
          </div>
        </header>

        <main className='max-w-5xl px-6 mx-auto'>{children}</main>

        <footer className='bg-gray-800'>
          <div className='max-w-5xl px-6 mx-auto'>
            <p className='my-6 text-center text-white'>
              © Vihan Chaudhry {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
