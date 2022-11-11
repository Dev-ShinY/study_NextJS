import Layout from "../components/Layout";
import "../styles/globals.css";
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
