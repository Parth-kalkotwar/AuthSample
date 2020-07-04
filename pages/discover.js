import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import NewPost from "../components/NewPost";
import NewSideBar from "../components/NewSideBar";

class discover extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [1, 2, 3, 4, 5, 6] };
  }
  render() {
    return (
      <div className="flex h-screen">
        <div className="bg-white flex flex-col w-1/18 ">
          <div className="bg-green-400 rounded-lg my-2 h-1/8 w-1/2 mx-auto">
            <button></button>
          </div>
          <div className="flex flex-col h-full items-center justify-center">
            <div className="my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="26"
                viewBox="0 0 172 172"
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
                    <path d="M86,0c-47.41887,0 -86,38.58113 -86,86c0,47.41887 38.58113,86 86,86c47.41887,0 86,-38.58113 86,-86c0,-47.41887 -38.58113,-86 -86,-86zM86,13.23077c40.26082,0 72.76923,32.50842 72.76923,72.76923c0,18.91587 -7.23558,36.07452 -19.01923,48.99519c-4.96154,-9.12199 -19.5619,-16.61599 -35.14423,-19.84615c0,0 -7.44231,-2.01562 -4.13462,-9.30288c4.6256,-5.94351 7.44231,-12.48137 7.44231,-14.47115c0,0 6.56371,-5.29747 7.23558,-13.23077c0.67188,-7.28726 -1.44712,-8.0625 -1.44712,-8.0625c2.63582,-8.60517 3.35938,-40.98437 -17.15865,-37.00481c-3.30769,-6.61538 -25.01442,-11.86118 -34.9375,5.99519c-4.6256,8.60517 -6.69291,21.13822 -2.06731,30.38942c0,0.67188 -1.39543,-0.69772 -2.06731,3.92788c0,4.6256 2.14483,11.21515 4.13462,13.85096c0.67188,1.31791 1.98978,2.01563 3.30769,2.6875c0,0 1.29207,8.01082 7.23558,15.29808c1.31791,5.94351 -4.75481,9.30288 -4.75481,9.30288c-16.125,3.23017 -30.77704,10.72416 -35.76442,19.84615c-11.44772,-12.84315 -18.39904,-29.76923 -18.39904,-48.375c0,-40.26081 32.50842,-72.76923 72.76923,-72.76923z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="26"
                viewBox="0 0 172 172"
              >
                <g transform="translate(7.74,7.74) scale(0.91,0.91)">
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="none"
                    stroke-linecap="butt"
                    stroke-linejoin="none"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g
                      fill="#cccccc"
                      stroke="#cccccc"
                      stroke-width="17"
                      stroke-linejoin="round"
                    >
                      <path d="M25.53125,14.78125c2.28438,0 4.03125,1.74687 4.03125,4.03125v9.40625h117.17395c4.3,0 8.33335,2.14895 10.88647,5.6427c2.55312,3.49375 3.2229,7.92813 1.87915,12.09375l-18.40833,55.36407c-3.09062,9.27188 -11.82447,15.58697 -21.63385,15.58697h-75.11615c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125h75.11615c6.45,0 11.9599,-4.03125 13.97552,-10.07812l18.40833,-55.36145c0.67188,-1.6125 0.40312,-3.36147 -0.67187,-4.8396c-0.94063,-1.47812 -2.55208,-2.28333 -4.29895,-2.28333h-117.31042v86c0,2.95625 2.41875,5.375 5.375,5.375h67.1875c2.28437,0 4.03125,1.74687 4.03125,4.03125c0,2.28438 -1.74688,4.03125 -4.03125,4.03125h-67.1875c-7.39062,0 -13.4375,-6.04687 -13.4375,-13.4375v-99.4375h-9.40625c-2.28438,0 -4.03125,-1.74687 -4.03125,-4.03125c0,-2.28438 1.74687,-4.03125 4.03125,-4.03125zM48.375,157.21875c0,7.39063 -6.04687,13.4375 -13.4375,13.4375c-7.39062,0 -13.4375,-6.04687 -13.4375,-13.4375c0,-7.39062 6.04688,-13.4375 13.4375,-13.4375c7.39063,0 13.4375,6.04688 13.4375,13.4375zM115.5625,157.21875c0,7.39063 -6.04687,13.4375 -13.4375,13.4375c-7.39062,0 -13.4375,-6.04687 -13.4375,-13.4375c0,-7.39062 6.04688,-13.4375 13.4375,-13.4375c7.39063,0 13.4375,6.04688 13.4375,13.4375zM29.5625,157.21875c0,2.95625 2.41875,5.375 5.375,5.375c2.95625,0 5.375,-2.41875 5.375,-5.375c0,-2.95625 -2.41875,-5.375 -5.375,-5.375c-2.95625,0 -5.375,2.41875 -5.375,5.375zM96.75,157.21875c0,2.95625 2.41875,5.375 5.375,5.375c2.95625,0 5.375,-2.41875 5.375,-5.375c0,-2.95625 -2.41875,-5.375 -5.375,-5.375c-2.95625,0 -5.375,2.41875 -5.375,5.375z"></path>
                    </g>
                    <path
                      d="M0,172v-172h172v172z"
                      fill="none"
                      stroke="none"
                      stroke-width="1"
                      stroke-linejoin="miter"
                    ></path>
                    <g
                      fill="#cccccc"
                      stroke="none"
                      stroke-width="1"
                      stroke-linejoin="miter"
                    >
                      <path d="M12.09375,14.78125c-2.28438,0 -4.03125,1.74687 -4.03125,4.03125c0,2.28438 1.74687,4.03125 4.03125,4.03125h9.40625v99.4375c0,7.39063 6.04688,13.4375 13.4375,13.4375h67.1875c2.28437,0 4.03125,-1.74687 4.03125,-4.03125c0,-2.28438 -1.74688,-4.03125 -4.03125,-4.03125h-67.1875c-2.95625,0 -5.375,-2.41875 -5.375,-5.375v-86h117.31042c1.74687,0 3.35833,0.8052 4.29895,2.28333c1.075,1.47812 1.34375,3.2271 0.67188,4.8396l-18.40833,55.36145c-2.01562,6.04688 -7.52552,10.07813 -13.97552,10.07813h-75.11615c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28437 1.74688,4.03125 4.03125,4.03125h75.11615c9.80937,0 18.54322,-6.3151 21.63385,-15.58697l18.40833,-55.36407c1.34375,-4.16562 0.67397,-8.6 -1.87915,-12.09375c-2.55312,-3.49375 -6.58647,-5.6427 -10.88647,-5.6427h-117.17395v-9.40625c0,-2.28438 -1.74687,-4.03125 -4.03125,-4.03125zM34.9375,143.78125c-7.39062,0 -13.4375,6.04688 -13.4375,13.4375c0,7.39063 6.04688,13.4375 13.4375,13.4375c7.39063,0 13.4375,-6.04687 13.4375,-13.4375c0,-7.39062 -6.04687,-13.4375 -13.4375,-13.4375zM102.125,143.78125c-7.39062,0 -13.4375,6.04688 -13.4375,13.4375c0,7.39063 6.04688,13.4375 13.4375,13.4375c7.39063,0 13.4375,-6.04687 13.4375,-13.4375c0,-7.39062 -6.04687,-13.4375 -13.4375,-13.4375zM34.9375,151.84375c2.95625,0 5.375,2.41875 5.375,5.375c0,2.95625 -2.41875,5.375 -5.375,5.375c-2.95625,0 -5.375,-2.41875 -5.375,-5.375c0,-2.95625 2.41875,-5.375 5.375,-5.375zM102.125,151.84375c2.95625,0 5.375,2.41875 5.375,5.375c0,2.95625 -2.41875,5.375 -5.375,5.375c-2.95625,0 -5.375,-2.41875 -5.375,-5.375c0,-2.95625 2.41875,-5.375 5.375,-5.375z"></path>
                    </g>
                    <path
                      d=""
                      fill="none"
                      stroke="none"
                      stroke-width="1"
                      stroke-linejoin="miter"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="26"
                viewBox="0 0 172 172"
                className="my-2"
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
                    <path d="M86,0c-43.774,0 -79.38462,35.61062 -79.38462,79.38462c0,29.94123 16.69971,55.99168 41.24279,69.5003c-0.91954,-2.09046 -1.55048,-4.27415 -1.55048,-6.58954c0,-2.73215 0.67994,-5.45377 1.98978,-7.88162c0.10585,-0.19846 0.27516,-0.34421 0.38762,-0.54267c-17.38523,-11.91431 -28.83894,-31.86186 -28.83894,-54.48648c0,-36.47723 29.67662,-66.15385 66.15385,-66.15385c36.47723,0 66.15385,29.67662 66.15385,66.15385c0,22.62462 -11.46663,42.55925 -28.85186,54.47356c0.11908,0.20508 0.301,0.36974 0.41346,0.58143c1.29662,2.408 1.97686,5.12362 1.97686,7.85577c0,2.30877 -0.63756,4.49277 -1.55048,6.57662c24.53646,-13.50862 41.24279,-39.54615 41.24279,-69.48738c0,-43.774 -35.61062,-79.38462 -79.38462,-79.38462zM86.01292,72.76923c-3.40692,0 -7.01231,1.19883 -8.26923,2.97176c-0.86,1.19738 -3.32061,63.18209 -3.32061,63.18209h-11.4994c-1.25031,0 -2.38929,0.69151 -2.98468,1.78305c-0.58877,1.09815 -0.52665,2.43074 0.16797,3.46274c9.05646,13.36969 23.18496,26.63788 23.78696,27.10757c0.62185,0.48954 1.36514,0.72356 2.10607,0.72356c0.74754,0 1.49745,-0.24725 2.10607,-0.72356c0.59538,-0.47631 14.7305,-13.73788 23.78696,-27.10757c0.70124,-1.03862 0.75674,-2.37121 0.16797,-3.46274c-0.58877,-1.09815 -1.74067,-1.78305 -2.9976,-1.78305h-11.48648c0,0 -1.9504,-61.97809 -2.80379,-63.18209c-1.26354,-1.77292 -5.34668,-2.97176 -8.76022,-2.97176z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="my-2 w-full items-center justify-center flex bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="26"
                viewBox="0 0 172 172"
                style={{ fill: "white" }}
                className="my-2"
              >
                <g transform="">
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
                    <path d="M0,172v-172h172v172z" fill="#edf2f7"></path>
                    <g id="original-icon" fill="#2bcf44">
                      <path d="M19.84615,13.23077c-10.95673,0 -19.84615,8.88942 -19.84615,19.84615v112.46154c0,10.95673 8.88942,19.84615 19.84615,19.84615h132.30769c10.95673,0 19.84615,-8.88942 19.84615,-19.84615v-92.61538c0,-10.95673 -8.88942,-19.84615 -19.84615,-19.84615h-79.38462c0,-10.95673 -8.88942,-19.84615 -19.84615,-19.84615zM19.84615,46.30769h132.30769c3.64363,0 6.61538,2.97176 6.61538,6.61538v92.61538c0,3.64363 -2.97176,6.61538 -6.61538,6.61538h-132.30769c-3.64363,0 -6.61538,-2.97176 -6.61538,-6.61538v-92.61538c0,-3.64363 2.97176,-6.61538 6.61538,-6.61538zM86,59.95192c-9.69051,0 -19.22596,6.69291 -19.22596,19.22596c0,8.19171 5.09074,16.35757 10.12981,21.5c1.96394,5.14243 -1.55048,7.1839 -2.27404,7.44231c-10.15565,3.66947 -21.29327,10.36238 -21.29327,16.95192v2.48077c0,8.99279 16.51262,10.95673 32.66346,10.95673c16.17669,0 32.66346,-1.96394 32.66346,-10.95673v-2.48077c0,-6.79628 -11.0601,-13.4375 -21.70673,-16.95192c-0.49099,-0.15504 -3.5661,-1.60216 -1.65385,-7.44231c4.98738,-5.14243 9.92308,-13.33413 9.92308,-21.5c0,-12.53305 -9.53546,-19.22596 -19.22596,-19.22596z"></path>
                    </g>
                    <g fill="#cccccc">
                      <path d="M99.195,68.94v3.7h-10.97v30.42h-4.48v-30.42h-10.94v-3.7z"></path>
                    </g>
                    <path d="" fill="none"></path>
                    <path d="" fill="none"></path>
                    <path d="" fill="none"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="26"
                viewBox="0 0 172 172"
                className="my-2"
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
                    <path d="M86,15.0472l-78.83333,70.9528h21.5v64.5h43v-50.16667h28.66667v50.16667h43v-64.5h21.5z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-12/18 h-full bg-gray-100">
          <div className="h-full">
            <div className="font-bold  text-4xl ml-6 mt-6">Discover Jobs</div>
            <div className="  text-2xl ml-6 mt-6 mr-6 flex justify-between">
              <div className=" flex justify-between items-center">
                <div className="mx-6 rounded-full shadow-xl bg-white overflow-hidden py-2 px-4 flex justify-between items-center ">
                  <input
                    className=" appearance-none text-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Search"
                    type="text"
                    placeholder="Search Keyword"
                  />
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 172 172"
                      style={{ fill: "white" }}
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
                          <path d="M95.04232,106.54818l17.77669,17.77669c-2.7155,5.17904 -2.99544,10.33008 -0.13998,13.18555l32.44597,32.44597c4.08724,4.08724 12.98958,1.84765 19.82031,-5.01107c6.85872,-6.85872 9.09831,-15.73307 5.01107,-19.82031l-32.41797,-32.44597c-2.88346,-2.85547 -8.0345,-2.57552 -13.21354,0.11198l-17.77669,-17.74869zM60.91667,0c-33.64974,0 -60.91667,27.26693 -60.91667,60.91667c0,33.64974 27.26693,60.91667 60.91667,60.91667c33.64974,0 60.91667,-27.26692 60.91667,-60.91667c0,-33.64974 -27.26692,-60.91667 -60.91667,-60.91667zM60.91667,107.5c-25.72722,0 -46.58333,-20.85612 -46.58333,-46.58333c0,-25.72722 20.85612,-46.58333 46.58333,-46.58333c25.72722,0 46.58333,20.85612 46.58333,46.58333c0,25.72722 -20.85612,46.58333 -46.58333,46.58333z"></path>
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>

                <div className="flex justify-center items-center">
                  <div class="rounded-full bg-transparent border border-gray-600 py-2 px-4 mx-2 flex justify-between items-center">
                    <div className="text-xs text-gray-600 mr-4">
                      Copywriting
                    </div>
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="26"
                        height="26"
                        viewBox="0 0 172 172"
                        style={{ fill: "white" }}
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
                            <path d="M141.04,13.76h-110.08c-9.4944,0 -17.2,7.7056 -17.2,17.2v110.08c0,9.4944 7.7056,17.2 17.2,17.2h110.08c9.4944,0 17.2,-7.7056 17.2,-17.2v-110.08c0,-9.4944 -7.7056,-17.2 -17.2,-17.2zM119.4024,114.5176l-4.8848,4.8848l-28.5176,-28.5176l-28.5176,28.5176l-4.8848,-4.8848l28.5176,-28.5176l-28.5176,-28.5176l4.8848,-4.8848l28.5176,28.5176l28.5176,-28.5176l4.8848,4.8848l-28.5176,28.5176z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="rounded-full bg-transparent border border-gray-600 py-2 px-4 mx-2 flex justify-between items-center">
                    <div className="text-xs text-gray-600 mr-4">
                      Translation
                    </div>
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="26"
                        height="26"
                        viewBox="0 0 172 172"
                        style={{ fill: "white" }}
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
                            <path d="M141.04,13.76h-110.08c-9.4944,0 -17.2,7.7056 -17.2,17.2v110.08c0,9.4944 7.7056,17.2 17.2,17.2h110.08c9.4944,0 17.2,-7.7056 17.2,-17.2v-110.08c0,-9.4944 -7.7056,-17.2 -17.2,-17.2zM119.4024,114.5176l-4.8848,4.8848l-28.5176,-28.5176l-28.5176,28.5176l-4.8848,-4.8848l28.5176,-28.5176l-28.5176,-28.5176l4.8848,-4.8848l28.5176,28.5176l28.5176,-28.5176l4.8848,4.8848l-28.5176,28.5176z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex justify-center items-center">
                <div className="rounded-lg overflow-hidden  w-8 h-10 mx-4 border border-gray-800 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 172 172"
                    style={{ fill: "white" }}
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
                      <path d="M0,172v-172h172v172z" fill="#edf2f7"></path>
                      <g fill="#cccccc">
                        <path d="M0,14.33333v14.33333h172v-14.33333zM0,78.83333v14.33333h172v-14.33333zM0,143.33333v14.33333h172v-14.33333z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="rounded-full bg-transparent border border-gray-600 py-2 px-4 mx-2 flex justify-between items-center">
                  <div className="text-xs text-gray-600 mr-8">
                    Lowest Budget
                  </div>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 172 172"
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
                        <path d="M0,172v-172h172v172z" fill="#f7fafc"></path>
                        <g fill="#cccccc">
                          <path d="M7.16667,28.66667l78.83333,131.1556l78.83333,-131.1556z"></path>
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className=" mx-6 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {this.state.posts.map((item) => {
                  return <NewPost />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/18 bg-gray-400 h-full fixed top-0 right-0">
          <NewSideBar />
        </div>
      </div>
    );
  }
}

export default discover;
