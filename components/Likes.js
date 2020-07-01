import React, { Component } from "react";

class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  render() {
    return (
      <>
        <div className="flex flex-col items-center justify-center px-4">
          <img src="https://img.icons8.com/offices/30/000000/collapse-arrow.png" />
          <button
            className="bg-transparent text-white font-bold uppercase text-sm px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => this.setState({ showModal: true })}
          >
            Likes
          </button>
        </div>
        {this.state.showModal ? (
          <>
            <div className="justify-center w-full sm:w-3/4 items-center flex mx-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-full my-6 mx-auto">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex justify-center items-center">
                    <div className="text-bold text-3xl">Likes</div>
                  </div>
                  <div className="w-full text-xs mx-auto flex justify-start flex-col items-start my-4">
                    {this.props.likes.map((item) => {
                      return (
                        <div className="flex justify-between w-full items-center">
                          <div className="mx-4 font-bold"> {item.name}</div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-3 py-1 md:px-6 md:py-3 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => this.setState({ showModal: false })}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }
}

export default Likes;
