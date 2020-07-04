import React from "react";

const Message = ({ message: { text, user }, name }) => {
  let curUser = false;

  if (user === name.trim().toLowerCase()) {
    curUser = true;
  }

  return curUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{name.trim().toLowerCase()}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{text}</p>
      </div>
      <p className="sentText pl-10 ">{user}</p>
    </div>
  );
};

export default Message;
