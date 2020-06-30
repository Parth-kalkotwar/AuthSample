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
import Post from "../components/post";

function MyImage() {
  return <img src="/images/bg-signup.png" alt="my image" />;
}

const img = MyImage();

export default function homepage({ authenticated, posts }) {
  return (
    <>
      {authenticated ? (
        <h1>
          homepage
          <br />
        </h1>
      ) : (
        <div>
          <header
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
            }}
            className="absolute bg-no-repeat bg-cover p-6 bg-top-right h-full w-full"
          >
            <div className="flex justify-center items-center h-full">
              <div>
                <h1 className="text-4xl leading-snug text-white md:text-6xl">
                  Not Authenticated
                </h1>
                <br />
                <div className="flex justify-center items-center text-white flex-col sm:text-4xl md:text-2xl">
                  <Link href="/googlelogin">
                    <div className="mt-4 flex justify-center items-center p-2 rounded-md w-3/4 bg-gradient-blue">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail_Icon.svg"
                        width="20px"
                        height="20px"
                      />
                      <a className="px-2">Google Login</a>
                    </div>
                  </Link>
                  <Link href="/fblogin">
                    <div className="mt-4 flex justify-center items-center p-2  rounded-md  w-3/4 bg-gradient-blue">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                      <a className="px-2">Facebook Login</a>
                    </div>
                  </Link>
                  <Link href="/login">
                    <div className="mt-4 flex justify-center items-center p-2  rounded-md  w-3/4 bg-gradient-blue">
                      <a>Login</a>
                    </div>
                  </Link>
                  <Link href="/signup">
                    <div className="mt-4 flex justify-center items-center p-2  rounded-md  w-3/4 bg-gradient-blue">
                      <a>Create Account</a>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </header>
        </div>
      )}
    </>
  );
}

homepage.getInitialProps = async (ctx) => {
  let authenticated = false;
  //console.log(ctx.req);
  if (
    ctx.req === undefined ||
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
  let posts = [];
  if (authenticated) {
    const resp = await fetch("http://localhost:5000/api/posts", {
      method: "GET",
    });

    posts = await resp.json();
    //console.log(posts);
  }
  return { authenticated: authenticated, posts: posts };
};
