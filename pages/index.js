import Head from "next/head";

export default function Index({ res }) {
  //console.log(res);
  return <p>{JSON.stringify(res)}</p>;
}

Index.getInitialProps = async (context) => {
  // const resp = await fetch("http://localhost:3000/api/login");
  const resp = await fetch("https://auth-sample.vercel.app/api/login");
  const res = await resp.json();
  //console.log(res);
  return { res: res };
};
