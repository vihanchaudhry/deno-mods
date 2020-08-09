import { AppProps } from 'next/app';
import Layout from '../components/layout';
import '../styles/index.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout title='jsFramework - Top Open Source JavaScript Frameworks'>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
