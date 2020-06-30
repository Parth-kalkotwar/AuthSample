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
import SearchBar from "../../components/searchBar";
import SideBar from "../../components/Sidebar";

export default function homepage({ posts, id }) {
  return (
    <div className="bg-feed flex">
      <div className="w-3/4">
        <div className="text-gray-900 text-4xl font-bold tracking-wide mx-6">
          HOMEPAGE
        </div>
        <br />
        <SearchBar />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4">
          {posts.map((item) => (
            <Post key={item.id} post={item} id={id} />
          ))}
        </div>
      </div>
      <div className="w-1/4">
        <SideBar posts={posts} id={id} />
      </div>
    </div>
  );
}

homepage.getInitialProps = async (ctx) => {
  const resp = await fetch("http://localhost:5000/api/posts", {
    method: "GET",
  });
  const posts = await resp.json();
  return { posts: posts, id: ctx.query.id };
};
