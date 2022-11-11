import Head from "next/head";
import SEO from "./SEO";

export default function Component() {
  return (
    <div>
      <Head>
      <SEO title="About" />
      </Head>
      <h1>About</h1>
    </div>
  );
}
