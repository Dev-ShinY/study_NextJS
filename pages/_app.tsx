import NavBar from "../components/NavBar";
import Layout from '../components/Layout';

interface Iprops {
  Component: any;
  pageProps: any;
}

export default function App({ Component, pageProps }: Iprops) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
