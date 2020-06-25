import { verify } from "jsonwebtoken";
import {
  NextApiHandler,
  NextApiRequest,
  NextApiResponse,
  NextPageContext,
} from "next";
import { secret } from "../auth/secret";
import Link from "next/link";
import cookie from "cookie";

export default function homepage({ authenticated }) {
  return (
    <>
      {authenticated ? (
        <h1>
          homepage
          <br />
        </h1>
      ) : (
        <>
          <h1>Not Authenticated</h1>
          <br />
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
      )}
    </>
  );
}

homepage.getInitialProps = async (ctx) => {
  let authenticated = false;
  //console.log(ctx.req);
  if (
    ctx.req.headers.cookie === undefined ||
    (!cookie.parse(ctx.req.headers.cookie).auth &&
      !cookie.parse(ctx.req.headers.cookie).fb &&
      !cookie.parse(ctx.req.headers.cookie).google)
  ) {
    authenticated = false;
    return { authenticated: authenticated };
  }
  const cookies = cookie.parse(ctx.req.headers.cookie);
  if (cookies.auth) {
    verify(cookies.auth, secret, async function (err, decoded) {
      if (!err && decoded) {
        authenticated = true;
      }
    });
  } else if (cookies.fb) {
    verify(cookies.fb, secret, async function (err, decoded) {
      if (!err && decoded) {
        authenticated = true;
      }
    });
  } else if (cookies.google) {
    verify(cookies.google, secret, async function (err, decoded) {
      if (!err && decoded) {
        authenticated = true;
      }
    });
  }

  return { authenticated: authenticated };
};
