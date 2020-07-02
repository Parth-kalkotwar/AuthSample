import DeleteIcon from "@material-ui/icons/Delete";
import Router from "next/router";
import IconButton from "@material-ui/core/IconButton";
import React, { Component } from "react";

class comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: "",
      user_id: this.props.id,
      post_id: this.props.post_id,
      comments: [],
      showModal: false,
    };
  }
  async componentDidMount() {
    const response = await fetch(
      "http://localhost:5000/api/" + this.state.post_id + "/comment"
    );
    const comments = await response.json();
    console.log("comments", comments);
    this.setState({ comments: comments });
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user_id: this.state.user_id,
      details: this.state.details[0],
    };
    const resp = await fetch(
      "http://localhost:5000/api/" + this.state.post_id + "/comment",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    const comments = await resp.json();
    this.setState({ comments: comments, details: "" });
  };
  onDelete = async (item) => {
    // /api/:post_id/comment/:comment_id
    const resp = await fetch(
      "http://localhost:5000/api/" +
        item.post_id +
        "/comment/" +
        item.comment_id,
      {
        method: "DELETE",
      }
    );
    const comments = await resp.json();
    this.setState({ comments: comments });
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
            Comments
          </button>
        </div>

        {this.state.showModal ? (
          <>
            <div className="justify-center w-full sm:w-3/4 items-center flex mx-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-full my-6 mx-auto">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex justify-center items-center">
                    <div className="text-bold text-3xl">Comments</div>
                  </div>
                  <div className="w-full text-xs mx-auto flex justify-start flex-col items-start my-4">
                    {this.state.comments.map((item) => {
                      return (
                        <div className="flex justify-between w-full items-center">
                          <div className="flex justify-start items-center">
                            <div className="mx-4 font-bold"> {item.name}</div>
                            <div>{item.comment_details}</div>
                          </div>
                          {item.id == this.props.id ? (
                            <IconButton onClick={() => this.onDelete(item)}>
                              <DeleteIcon />
                            </IconButton>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                  <form onSubmit={this.onSubmit}>
                    <input
                      type="text"
                      className="mx-4 w-full"
                      placeholder="Comment..."
                      value={this.state.details}
                      name="details"
                      onChange={this.onChange}
                    ></input>
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
                      onClick={this.onSubmit}
                      style={{ transition: "all .15s ease" }}
                    >
                      Add Comment
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

export default comments;
