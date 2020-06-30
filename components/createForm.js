import React, { Component } from "react";
import Router from "next/router";
import { Button } from "@material-ui/core";
class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", details: "", id: this.props.id };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: this.state.title[0],
      details: this.state.details[0],
    };
    const resp = await fetch(
      "http://localhost:5000/api/" + this.state.id + "/posts",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    //console.log(resp.json());
    const { pathname } = Router;
    const url = "/" + this.state.id;
    Router.push(url);
  };
  render() {
    return (
      <>
        <div class="w-full ">
          <form class="shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 mx-4 bg-green-600">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="title"
              >
                Title
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Title..."
                value={this.state.title}
                name="title"
                onChange={this.onChange}
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="details"
              >
                Details
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Details..."
                value={this.state.details}
                onChange={this.onChange}
                name="details"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={this.onSubmit}
              >
                Create A Post
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default CreateForm;
