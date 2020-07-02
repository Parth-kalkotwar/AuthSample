import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="max-w-sm rounded-lg hover:shadow-2xl overflow-hidden shadow-lg bg-white transition duration-500 ease-out focused ">
        <div className="flex justify-between items-center py-2 px-1">
          <div className="flex justify-center items-center">
            <span
              className="border-4 ml-2 hover:border-white hover:bg-green-600 border-green-600"
              style={{
                height: "25px",
                width: "25px",
                backgroundColor: "#fff",
                borderRadius: "50%",
              }}
            ></span>
            <div className="text-sm text=gray-500 ml-4">6 DAYS LEFT</div>
          </div>
          <div className="flex justify-center items-center cursor-pointer">
            <Avatar aria-label="recipe">R</Avatar>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 172 172"
              className="mx-3"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#cccccc">
                  <path d="M27.52,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64zM86,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64zM144.48,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="font-bold text-black hover:text-white text-xl ml-2 mb-2">
          Translation of Legal Documents
        </div>
        <div className="font-semibold text-gray-500 hover:text-white text-md ml-2 mb-2">
          Translation of Legal Documents
        </div>

        <div className="mx-2 mb-2 text-gray-500 text-xs hover:text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </div>
        <div className="flex justify-between mt-2 items-center rounded-full text-sm font-semibold text-gray-700">
          <div className=" mx-2 flex flex-col">
            <div className="text-sm text-gray-500 hover:white">
              Proposals 4/7
            </div>
            <div className="flex my-2">
              <div className="bg-green-400 rounded-lg mx-1 h-2 w-4">
                <button></button>
              </div>
              <div className="bg-green-400 rounded-lg mx-1 h-2 w-4">
                <button></button>
              </div>
              <div className="bg-green-400 rounded-lg mx-1 h-2 w-4">
                <button></button>
              </div>
              <div className="bg-green-400 rounded-lg mx-1 h-2 w-4">
                <button></button>
              </div>
              <div className="bg-gray-200 rounded-lg mx-1 h-2 w-4">
                <button></button>
              </div>
              <div className="bg-gray-200 rounded-lg mx-1 h-2 w-4">
                <button></button>
              </div>
              <div className="bg-gray-200 rounded-lg mx-1 h-2 w-4">
                <button></button>
              </div>
            </div>
          </div>

          <div className="text-lg px-2">12$/hr</div>
        </div>
      </div>
    );
  }
}

export default NewPost;
