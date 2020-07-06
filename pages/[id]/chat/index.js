import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class chatIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { room: "", newroom: "" };
  }

  static async getInitialProps(ctx) {
    return { id: ctx.query.id };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  onSubmit = async (e) => {
    //console.log("Here");
    e.preventDefault();
    const data = {
      room_name: this.state.newroom[0],
    };
    const resp = await fetch("http://localhost:7000/api/groupchat", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const room = await resp.json();
    //console.log(room[0].room_id);
    const url = "/" + this.props.id + "/chat/groupchat/" + room[0].room_id;
    Router.push(url);
  };

  render() {
    return (
      <>
        <header
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
          }}
          className="absolute inset-0 h-screen w-screen bg-no-repeat bg-cover"
        >
          <div className="m-4 pb-4">
            <Link href="/">
              <img src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
          </div>
          <div className="text-4xl font-bold tracking-wider text-white px-6 md:text-6xl">
            <div>Chats</div>
          </div>
          <div className="w-full flex justify-center items-center">
            <form className="bg-inherit px-8 pt-6 pb-8 mb-4">
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="room"
                >
                  Room
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="room"
                  type="text"
                  value={this.state.room}
                  name="room"
                  onChange={this.onChange}
                />
              </div>
              <div className="flex items-center justify-center">
                <Link href={`/${this.props.id}/chat/${this.state.room}`}>
                  <button
                    className="bg-transparent text-2xl hover:bg-green-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Join
                  </button>
                </Link>
              </div>
            </form>
            <form className="bg-inherit px-8 pt-6 pb-8 mb-4">
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="room"
                >
                  Create A Room
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="newroom"
                  type="text"
                  value={this.state.newroom}
                  name="newroom"
                  onChange={this.onChange}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-transparent text-2xl hover:bg-green-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={this.onSubmit}
                >
                  Create A Room
                </button>
              </div>
            </form>
          </div>
        </header>
      </>
    );
  }
}

export default chatIndex;
