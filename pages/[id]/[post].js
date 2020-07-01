import React from "react";
import Router from "next/router";
import UpdateForm from "../../components/UpdateForm";
import Comments from "../../components/comments";
import Likes from "../../components/Likes";
import Link from "next/link";

export default function PostDetails({ posts, id, comments, likes }) {
  //console.log(likes);
  const onDelete = async (e) => {
    //console.log(posts);
    e.preventDefault();
    const resp = await fetch(
      "http://localhost:5000/api/posts/" + posts.post_id,
      {
        method: "DELETE",
      }
    );
    //console.log("DElete");
    const { pathname } = Router;
    const url = "/" + id;
    Router.push(url);
  };
  return (
    <div className="h-screen md:h-screen w-full bg-black ">
      <div className="mx-2">
        <Link href={"/" + id + "/homepage"}>
          <img
            src="https://img.icons8.com/ultraviolet/40/000000/chevron-left.png"
            className=" cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex justify-start items-center text-white">
        <Link href={"/" + id}>
          <button className="block h-8 w-8 rounded-full my-4 mx-4 overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Your avatar"
            />
          </button>
        </Link>
        <div className="text-1xl">Parth</div>
      </div>
      <div className="flex justify-center items-center mx-auto">
        <img src="https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </div>
      <div class="px-6 py-4">
        <div class="font-bold text-white text-xl mb-2">{posts.title}</div>
        <div className="font-semibold text-white text-lg mb-2">
          {posts.updated_at}
        </div>
        <p class="text-gray-500 text-base">
          {posts.details} Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil.
        </p>
      </div>
      <div className="flex fixed bottom-0 w-full justify-center items-center">
        <Likes likes={likes} />
        {posts.so_id === id ? (
          <>
            <div className="flex flex-col items-center justify-center">
              <img src="https://img.icons8.com/offices/30/000000/collapse-arrow.png" />
              <button
                className="bg-transparent text-white font-bold uppercase text-sm px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={onDelete}
              >
                Delete Post
              </button>
            </div>
            <UpdateForm post={posts} />
          </>
        ) : (
          <></>
        )}

        <Comments comments={comments} id={id} post_id={posts.post_id} />
      </div>
    </div>
  );
}

PostDetails.getInitialProps = async (ctx) => {
  //console.log(ctx.query);
  const resp = await fetch("http://localhost:5000/api/posts/" + ctx.query.post);
  let posts = await resp.json();
  const response = await fetch(
    "http://localhost:5000/api/" + ctx.query.post + "/comment"
  );
  const update = posts.updated_at.split("T")[0];
  posts.updated_at = update;
  const comments = await response.json();
  const likes_resp = await fetch(
    "http://localhost:5000/api/" + ctx.query.post + "/likes"
  );
  const likes = await likes_resp.json();
  return {
    posts: posts,
    id: ctx.query.id,
    comments: comments,
    likes: likes,
  };
};
