import Link from "next/link";
import Router from "next/router";
import Post from "../../components/post";
import CreateForm from "../../components/createForm";
import { Typography, Button } from "@material-ui/core";
import Profile from "../../components/Profile";
import { List, CardActionArea } from "@material-ui/core";
import ProfilePosts from "../../components/ProfilePosts";

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
    <div className="px-2 py-1">
      <div className="fixed bottom-0 left-0 w-full bg-white z-10 flex justify-center items-center">
        <div className="py-2 px-2">
          <Link href={"/" + id + "/homepage"}>
            <div className="flex flex-col justify-center items-center">
              <img src="https://img.icons8.com/windows/32/000000/home.png" />{" "}
              <button
                className="text-gray-500 hover:bg-green-400 hover:text-white font-bold md:py-2 md:px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Homepage
              </button>
            </div>
          </Link>
        </div>
        <div className="py-2 px-2 flex flex-col justify-center items-center">
          <img
            width="30px"
            height="30px"
            src="https://img.icons8.com/ios/50/000000/logout-rounded-down.png"
          />
          <button
            className="text-gray-500 hover:bg-green-400 hover:text-white font-bold md:py-2 md:px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>

      <Profile user={user} />
      <CreateForm id={id} />
      <div className="w-full flex justify-center items-center my-2 text-4xl">
        Your Posts:
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-12 ">
        {posts.map((item) => {
          return <ProfilePosts post={item} id={id} c={posts.indexOf(item)} />;
        })}
      </div>
      <br />
    </div>
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
