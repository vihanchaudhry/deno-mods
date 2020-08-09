import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/index.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout title='denoMods - Top Open Source Deno Modules'>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
