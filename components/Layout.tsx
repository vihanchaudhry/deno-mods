import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = 'denoMods' }: Props) {
  return (
    <div className='min-h-screen flex flex-col justify-between bg-gray-100'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta charSet='utf-8' />
        <meta
          name='description'
          content='A List of the Most Popular Open Source Deno Modules.'
        ></meta>
        <meta
          property='og:title'
          content='denoMods - Top Open Source Deno Modules'
        ></meta>
        <meta
          property='og:description'
          content='A List of the Most Popular Open Source Deno Modules.'
        ></meta>
      </Head>

      <header>
        <div className='bg-white'>
          <div className='h-64 max-w-5xl px-6 mx-auto flex flex-col items-center justify-center'>
            <Link href='/'>
              <a className='no-underline text-gray-900'>
                <h1 className='font-mono text-5xl md:text-6xl'>
                  <span className='highlight'>deno</span>Mods
                </h1>
              </a>
            </Link>

            <h2 className='text-xl font-serif text-gray-700 text-center'>
              A List of the Most Popular Open Source Deno Modules.
            </h2>
          </div>
        </div>

        <div className='bg-gray-800'>
          <nav className='max-w-3xl px-6 mx-auto h-12 flex items-center'>
            {/* <Link href='/'>
              <a className='font-sans font-medium no-underline hover:underline text-white hover:text-yellow-400'>
                Home
              </a>
            </Link> */}
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
  );
}

export default Layout;
