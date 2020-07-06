/*import React, { Component } from "react";
import io from "socket.io-client";
const socket = io("localhost:5000");

class chatBox extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = { messages: this.props.chats, message: "" };
  }
  static async getInitialProps(ctx) {
    const resp = await fetch(
      "http://localhost:7000/api/chats/" +
        ctx.query.id +
        "/" +
        ctx.query.user_id
    );
    let chats = await resp.json();
    return { chats: chats, id: ctx.query.id, with_id: ctx.query.user_id };
  }

  componentDidMount() {
    let name="abc"
    let room = "9_17"
    socket.emit("join", { name, room }, () => {});
  }



  render() {
    return (
      <h1>
        {this.props.id} And {this.props.with_id}
        <br />
        Chats:
        {this.state.messages.map((item) => {
          return (
            <>
              {item.message}
              <br />
            </>
          );
        })}
      </h1>
    );
  }
}

export default chatBox;*/

import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
let socket;

export default function chatBox({ id, user_id, chats, name, room }) {
  const [messages, setmessages] = useState(chats);
  const [message, setmessage] = useState("");
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    console.log("1st", name);
    socket = io(ENDPOINT);
    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [name, room]);

  useEffect(() => {
    socket.on("message", (message) => {
      setmessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      const data = {
        message: message,
        user_from: id,
      };
      socket.emit("sendMessage", message, () => setmessage(""));
      const resp = fetch(
        "http://localhost:7000/api/chats/" + user_id + "/" + id,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        }
      );
    }
  };
  //console.log(message, messages);

  return (
    <>
      <h1>
        Chat, {name} {room}
      </h1>
      <br />
      {messages.map((item) => {
        if (item.text !== undefined) {
          return (
            <h1>
              {item.user}: {item.text}
            </h1>
          );
        }
        return (
          <h1>
            {item.name}: {item.message}
          </h1>
        );
      })}
      <input
        value={message}
        className="border border-green-500"
        onChange={(event) => setmessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
    </>
  );
}

chatBox.getInitialProps = async (ctx) => {
  //console.log("quer", ctx.query);
  const result = await fetch("http://localhost:3000/api/" + ctx.query.id);
  const data = await result.json();
  let room;
  let resp;
  if (parseInt(ctx.query.id) > parseInt(ctx.query.user_id)) {
    room = ctx.query.user_id + "_" + ctx.query.id;
    resp = await fetch(
      "http://localhost:7000/api/chats/" +
        ctx.query.user_id +
        "/" +
        ctx.query.id
    );
  } else {
    room = ctx.query.id + "_" + ctx.query.user_id;
    resp = await fetch(
      "http://localhost:7000/api/chats/" +
        ctx.query.id +
        "/" +
        ctx.query.user_id
    );
  }
  const chats = await resp.json();
  //console.log("room", room);
  //console.log("chats", chats);
  return {
    id: ctx.query.id,
    user_id: ctx.query.user_id,
    chats: chats,
    name: data[0].name,
    room: room,
  };
};
