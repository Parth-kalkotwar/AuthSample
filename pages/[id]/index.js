import Link from "next/link";
import Router from "next/router";
import Post from "../../components/post";
import CreateForm from "../../components/createForm";
import { Typography } from "@material-ui/core";
import Profile from "../../components/Profile";

export default function Person({ user, posts, id }) {
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
    <>
      <Profile user={user} />
      <CreateForm id={id} />
      <Typography variant="h3">Your Posts:</Typography>
      <br />
      <Post posts={posts} id={id} />
      <br />
      <button onClick={logout}>Logout</button>
    </>
  );
}

Person.getInitialProps = async (ctx) => {
  //console.log(ctx.query);
  const result = await fetch("http://localhost:3000/api/" + ctx.query.id);
  const data = await result.json();
  const resp = await fetch(
    "http://localhost:5000/api/" + ctx.query.id + "/posts"
  );

  const posts = await resp.json();
  return { user: data[0], posts: posts, id: ctx.query.id };
};
