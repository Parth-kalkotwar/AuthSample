const NewSideBar = () => {
  const items = [1, 2, 3];
  return (
    <>
      <div className="flex  items-center justify-between">
        <div className="flex items-center justify-center">
          <button className="block h-8 w-8 rounded-full my-4 mx-4 overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Your avatar"
            />
          </button>
          <div className="text-2xl text-bold text-black">Parth</div>
        </div>
        <div className="flex justify-center items-center mx-2 my-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 172 172"
            className="mx-2"
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
              <path d="M0,172v-172h172v172z" fill="#cbd5e0"></path>
              <g fill="#718096">
                <path d="M43,14.33333v14.33333h100.33333v71.66667h14.33333v-71.66667c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM28.66667,43c-7.88333,0 -14.26335,6.45 -14.26335,14.33333l-0.06999,107.5l28.66667,-28.66667h71.66667c7.88333,0 14.33333,-6.45 14.33333,-14.33333v-64.5c0,-7.88333 -6.45,-14.33333 -14.33333,-14.33333zM28.66667,57.33333h86v64.5h-71.66667h-5.9349l-4.19922,4.19922l-4.19922,4.19922z"></path>
              </g>
            </g>
          </svg>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 172 172"
              className="relative"
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
                <path d="M0,172v-172h172v172z" fill="#cbd5e0"></path>
                <g fill="#718096">
                  <path d="M86,16.125c-5.9419,0 -10.75,4.8081 -10.75,10.75c0,0.46192 0.10498,0.90283 0.16797,1.34375c-18.58154,4.74512 -32.41797,21.62598 -32.41797,41.65625v48.375c0,3.04443 -2.33057,5.375 -5.375,5.375h-5.375v10.75h38.63281c-0.60889,1.70068 -1.00781,3.48535 -1.00781,5.375c0,8.83935 7.28565,16.125 16.125,16.125c8.83935,0 16.125,-7.28565 16.125,-16.125c0,-1.88965 -0.39893,-3.67432 -1.00781,-5.375h38.63281v-10.75h-5.375c-3.04443,0 -5.375,-2.33057 -5.375,-5.375v-46.86328c0,-20.19824 -13.50049,-38.21289 -32.41797,-43.16797c0.06299,-0.44092 0.16797,-0.88183 0.16797,-1.34375c0,-5.9419 -4.8081,-10.75 -10.75,-10.75zM83.64844,37.625c0.77685,-0.06299 1.55371,0 2.35156,0c0.33594,0 0.67188,0 1.00781,0c17.55273,0.5249 31.24219,15.91504 31.24219,33.76172v46.86328c0,1.88965 0.39893,3.67432 1.00781,5.375h-66.51562c0.60889,-1.70068 1.00781,-3.48535 1.00781,-5.375v-48.375c0,-17.06982 13.14356,-31.03222 29.89844,-32.25zM86,134.375c3.02344,0 5.375,2.35156 5.375,5.375c0,3.02344 -2.35156,5.375 -5.375,5.375c-3.02344,0 -5.375,-2.35156 -5.375,-5.375c0,-3.02344 2.35156,-5.375 5.375,-5.375z"></path>
                </g>
              </g>
            </svg>
            <div className="flex justify-center items-center absolute top-0 right-0 h-4 w-4 rounded-full overflow-hidden bg-red-500 text-white ">
              <div>2</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-lg mt-4 md:text-2xl mx-4 text-black flex items-center justify-between">
        <div className="text-md ml-4">Your Proposals</div>
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
            <g fill="#111111">
              <path d="M27.52,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64zM86,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64zM144.48,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64z"></path>
            </g>
          </g>
        </svg>
      </div>
      <br />
      <div className="mt-2 m-auto py-2 w-5/6  bg-white rounded-lg shadow-xl">
        <div className="flex items-start justify-center flex-col">
          <div className="text-xs mx-3 my-1">
            <div className="text-black font-bold py-1 ">
              Translation of Legal Documents
            </div>
            <div className="text-gray-600 py-1">Translation</div>
          </div>
        </div>
      </div>
      <div className="mt-2 m-auto py-2 w-5/6 mb-4 bg-white rounded-lg shadow-xl">
        <div className="flex items-start justify-center flex-col">
          <div className="text-xs mx-3 my-1">
            <div className="text-black font-bold py-1 ">Content Writing</div>
            <div className="text-gray-600 py-1">CopyWriting</div>
          </div>
        </div>
      </div>
      <div className="text-md mt-4 md:text-2xl mx-4 text-black flex items-center justify-between">
        <div className="text-md ml-4">Your Projects</div>
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
            <g fill="#111111">
              <path d="M27.52,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64zM86,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64zM144.48,68.8c-11.395,0 -20.64,9.245 -20.64,20.64c0,11.395 9.245,20.64 20.64,20.64c11.395,0 20.64,-9.245 20.64,-20.64c0,-11.395 -9.245,-20.64 -20.64,-20.64z"></path>
            </g>
          </g>
        </svg>
      </div>
      <br />
      <div className="bg-white mx-4">
        <div className="my-4">
          {items.map((item) => {
            return (
              <div className="mt-2  m-auto py-2 w-5/6 rounded-lg">
                <div className="flex justify-center items-center">
                  <span
                    className="border-4 hover:border-white hover:bg-green-600 border-green-600"
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                    }}
                  ></span>
                  <div className="flex items-start justify-center flex-col">
                    <div className="text-xs mx-3 ">
                      <div className="text-black font-bold pb-1 ">
                        Part Time Marketing Support
                      </div>
                      <div className="text-gray-600 ">6 DAYS LEFT</div>
                    </div>
                  </div>
                  <div className="">
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
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#cccccc">
                          <path d="M129,57.33333v21.5h-129v14.33333h129v21.5l40.13053,-28.66667z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-5/6 mx-auto my-4 bg-green-400  rounded-lg">
        <button className="w-full flex justify-center items-center text-white py-2 px-2">
          Add A Project
        </button>
      </div>
    </>
  );
};

export default NewSideBar;
