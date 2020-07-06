import React, { Component } from "react";
import Link from "next/link";

class chatIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", room: "" };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
    //console.log(this.state.password);
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
            <div>Welcome</div>
            <div>Back</div>
          </div>
          <div className="w-full">
            <form className="bg-inherit px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow bg-inherit appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  name="username"
                  onChange={this.onChange}
                />
              </div>
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
                <Link
                  href={`/chatBox?name=${this.state.username}&room=${this.state.room}`}
                >
                  <button
                    className="bg-transparent text-2xl hover:bg-green-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Join
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </header>
      </>
    );
  }
}

export default chatIndex;
