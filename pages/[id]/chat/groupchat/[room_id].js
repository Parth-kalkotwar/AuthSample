import React, { useState, useEffect } from "react";
import io from "socket.io-client";
let socket;

export default function groupChat({ id, user_id, chats, name, room_id }) {
  const [messages, setmessages] = useState(chats);
  const [message, setmessage] = useState("");
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    socket = io(ENDPOINT);
    let room = room_id;
    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [name, room_id]);

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
        ///api/groupchats/chats/:room_id
        "http://localhost:7000/api/groupchats/chats/" + room_id,
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
        Chat, {name} {room_id}
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

groupChat.getInitialProps = async (ctx) => {
  //console.log("quer", ctx.query);
  const result = await fetch("http://localhost:3000/api/" + ctx.query.id);
  const data = await result.json();
  let room;
  let resp;
  resp = await fetch(
    "http://localhost:7000/api/groupchat/" + ctx.query.room_id
  );
  const chats = await resp.json();
  //console.log("room", room);
  console.log("chats", chats);
  return {
    id: ctx.query.id,
    room_id: ctx.query.room_id,
    chats: chats,
    name: data[0].name,
  };
};
