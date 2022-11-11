import Head from "next/head";

interface ISEOProps {
  title: string
}
export default function SEO({title}: ISEOProps) {
  return (
    <div>
      <Head>
        <title>{title} | Study Next JS</title>
      </Head>
    </div>
  );
}
