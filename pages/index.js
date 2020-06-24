import Head from "next/head";

export default function Home({ res }) {
  return <>{JSON.stringify(res)}</>;
}

export async function getStaticProps(context) {
  const resp = await fetch("http://localhost:3000/api/login");
  const res = await resp.json();
  return {
    props: { res },
  };
}
