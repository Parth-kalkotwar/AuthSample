import Router from "next/router";
import React, { Component } from "react";

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", details: "", showModal: false };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  onUpdate = async (e) => {
    e.preventDefault();
    const data = {
      title: this.state.title[0],
      details: this.state.details[0],
    };
    const resp = await fetch(
      "http://localhost:5000/api/posts/" + this.props.post.post_id,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    //console.log(resp.json());
    const { pathname } = Router;
    const url = "/" + this.props.post.so_id + "/" + this.props.post.post_id;
    Router.push(url);
  };
  render() {
    return (
      <>
        <div className="flex flex-col items-center justify-center">
          <img src="https://img.icons8.com/offices/30/000000/collapse-arrow.png" />
          <button
            className="bg-transparent text-white font-bold uppercase text-sm px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => this.setState({ showModal: true })}
          >
            Update Post
          </button>
        </div>
        {this.state.showModal ? (
          <>
            <div className="justify-center w-full sm:w-3/4 items-center flex mx-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-full my-6 mx-auto">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex justify-center items-center">
                    <div className="text-bold text-3xl">Update</div>
                  </div>
                  <div className="w-full text-xs mx-auto flex justify-start flex-col items-start my-4"></div>
                  <form onSubmit={this.onUpdate}>
                    <div className="w-3/4 mx-auto">
                      <input
                        type="text"
                        placeholder="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.onChange}
                        className="w-full py-2 border-2 mt-4 px-2"
                      ></input>
                    </div>

                    <br />
                    <div className="w-3/4 mx-auto">
                      <input
                        type="text"
                        placeholder="details..."
                        value={this.state.details}
                        onChange={this.onChange}
                        className="w-full border-2 py-2 px-2 mt-4"
                        name="details"
                      ></input>
                    </div>

                    <br />
                  </form>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-3 py-1 md:px-6 md:py-3 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => this.setState({ showModal: false })}
                    >
                      Close
                    </button>
                    <button
                      className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-3 py-1 md:px-6 md:py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={this.onUpdate}
                      style={{ transition: "all .15s ease" }}
                    >
                      Update
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

export default UpdateForm;
