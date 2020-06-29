import { verify } from "jsonwebtoken";
import {
  NextApiHandler,
  NextApiRequest,
  NextApiResponse,
  NextPageContext,
} from "next";

import { List, CardActionArea } from "@material-ui/core";
import { secret } from "../../auth/secret";
import Link from "next/link";
import cookie from "cookie";
import Post from "../../components/post";
import { makeStyles } from "@material-ui/styles";

export default function homepage({ posts, id }) {
  return (
    <>
      <h1>homepage</h1>
      <br />
      <List>
        {posts.map((item) => {
          return <Post post={item} id={id} />;
        })}
      </List>
    </>
  );
}

homepage.getInitialProps = async (ctx) => {
  const resp = await fetch("http://localhost:5000/api/posts", {
    method: "GET",
  });
  console.log(ctx.query.id);
  const posts = await resp.json();
  return { posts: posts, id: ctx.query.id };
};
