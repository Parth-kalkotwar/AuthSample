import Link from "next/link";

export default function Home({ res }) {
  return (
    <>
      <Link href="/googlelogin">
        <a>Google Login</a>
      </Link>
      <br />
      <hr />
      <Link href="/fblogin">
        <a>Facebook Login</a>
      </Link>
      <br />
      <hr />
      <Link href="/register">
        <a>Register</a>
      </Link>
      <br />
      <hr />
      <Link href="/login">
        <a> Login</a>
      </Link>
      <br />
      <hr />
    </>
  );
}
/*
Home.getInitialProps = async (context) => {
  const resp = await fetch("http://localhost:3000/api/login");
  //const resp = await fetch("https://auth-sample.vercel.app/api/login");
  const res = await resp.json();
  //console.log(res);
  return { res: res };
};
*/
