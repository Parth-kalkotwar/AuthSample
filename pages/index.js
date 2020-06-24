import Head from "next/head";

export default function Index({ res }) {
  return (
    <p>
      To test the CORS route, open the console in a new tab on a different
      domain and make a POST / GET / OPTIONS request to <b>/api/cors</b>. Using
      a different method from those mentioned will be blocked by CORS
      {JSON.stringify(res)}
    </p>
  );
}

export async function getStaticProps(context) {
  const resp = await fetch("https://auth-sample.vercel.app/api/login");
  const res = await resp.json();
  return {
    props: { res },
  };
}
