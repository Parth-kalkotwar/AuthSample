import React, { Component } from "react";
import Router from "next/router";
import { Button } from "@material-ui/core";

class Profile extends Component {
  constructor(props) {
    super(props);
    const event = new Date(this.props.user.created_at);
    let created_at = event.toTimeString();
    created_at = created_at.split(" ");
    this.state = { name: props.user.name, created_at: created_at };
    console.log("Profile", props, this.state);
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  onUpdate = async (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name[0],
    };
    ///api/:id/name
    const resp = await fetch(
      "http://localhost:5000/api/" + this.props.user.id + "/name",
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    //console.log(resp.json());
    const { pathname } = Router;
    const url = "/" + this.props.post.so_id;
    Router.push(url);
  };
  render() {
    return (
      <>
        <div className="text-xs md:text-2xl rounded overflow-hidden shadow-lg bg-white transition duration-500 ease-out flex justify-center items-center m-4 h-">
          <div className="flex w-3/4 justify-start items-center">
            <button className="block h-16 w-16 rounded-full my-4 mx-4 overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
              <img
                className="h-full w-full object-cover"
                src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Your avatar"
              />
            </button>
            <div className="flex flex-col justify-center items-center">
              <div className="text-black m-2">{this.state.name}</div>
              <div className="text-gray-600 m-2">
                Logged In At : {this.state.created_at[0]}
              </div>
            </div>
          </div>
          <div className="w-1/4 flex flex-col">
            <div class="mb-4">
              <input
                class="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name..."
                value={this.state.name}
                name="name"
                onChange={this.onChange}
              />
            </div>
            <button
              onClick={this.onUpdate}
              class="bg-green-500 hover:bg-white text-white hover:text-green-400 font-bold md:py-2 md:px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Change Name
            </button>
            {/*<form onSubmit={this.onUpdate}>
              
              <br />
              <button className="text-green-400 md:py-1 md:px-2">
                Change Your Name
              </button>
    </form>*/}
          </div>
        </div>
      </>
    );
  }
}

export default Profile;

/* <h1>Welcome {this.state.name}</h1>
        <br />
        <h3>Logged In At : {this.state.created_at[0]}</h3>
        <br />
        <form onSubmit={this.onUpdate}>
          <input
            type="text"
            placeholder="Name..."
            value={this.state.name}
            name="name"
            onChange={this.onChange}
          ></input>
          <br />
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={this.onUpdate}
          >
            Change Your Name
          </Button>
        </form>
      */
