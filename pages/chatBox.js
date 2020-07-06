import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
let socket;

export default function chatBox({ name, room }) {
  const [messages, setmessages] = useState([]);
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
      socket.emit("sendMessage", message, () => setmessage(""));
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
        return (
          <h1>
            {item.user}: {item.text}
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
  console.log(ctx.query);
  return { name: ctx.query.name, room: ctx.query.room };
};
