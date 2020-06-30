import React, { useState } from "react";
import Link from "next/link";

const SideBar = (props) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-400 h-screen fixed top-0 right-0 w-1/4">
      <div className="flex items-center justify-start">
        <Link href={"/" + props.id}>
          <button className="block h-8 w-8 rounded-full my-4 mx-4 overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Your avatar"
            />
          </button>
        </Link>
        <div className="text-1xl text-black">Parth</div>
      </div>
      <div className="text-2xl text-black flex justify-center items-center">
        Your Posts
      </div>
      <br />
      <div className="mt-2 m-auto py-2 w-5/6  bg-white rounded-lg shadow-xl">
        <div className="flex items-center justify-center flex-col">
          {props.posts.map((item) => {
            if (item.so_id === props.id) {
              return (
                <Link href={"/" + props.id + "/" + item.post_id}>
                  <a className="block px-4 py-2 text-gray-800 hover:bg-green-400 hover:text-white">
                    {item.title}
                  </a>
                </Link>
              );
            }
          })}
        </div>
      </div>
      <div className="w-5/6 mx-auto my-4 bg-green-400  rounded-lg">
        <Link href={"/" + props.id}>
          <button className="w-full flex justify-center items-center text-white py-2 px-2">
            Add A Project
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
