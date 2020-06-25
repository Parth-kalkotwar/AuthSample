import Link from "next/link";
import Router from "next/router";

export default function Person({ prop }) {
  const event = new Date(prop[0].created_at);
  let created_at = event.toTimeString();
  created_at = created_at.split(" ");
  const logout = async () => {
    document.cookie = "auth=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "google=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "fb=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    //console.log("Deleted");
    const { pathname } = Router;
    const url = "/";
    Router.push(url);
  };
  return (
    <h1>
      Welcome {prop[0].name}
      <br />
      Started At : {created_at[0]}
      <button onClick={logout}>Logout</button>
    </h1>
  );
}

Person.getInitialProps = async (ctx) => {
  //console.log(ctx.query);
  const result = await fetch(
    "https://auth-sample.vercel.app/api/" + ctx.query.id
  );
  const data = await result.json();
  return { prop: data };
};
