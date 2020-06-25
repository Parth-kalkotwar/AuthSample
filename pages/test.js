export default function test({ msg }) {
  return <h1>{JSON.stringify(msg)}</h1>;
}

test.getInitialProps = async (ctx) => {
  //const resp = await fetch("http://localhost:3000/api/test");
  const resp = await fetch("https://auth-sample.vercel.app/api/test");
  const data = await resp.json();
  return { msg: data };
};
