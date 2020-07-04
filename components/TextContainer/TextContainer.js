import React from "react";

const TextContainer = ({ users }) => (
  <div>
    {users ? (
      <div>
        <h1>Online</h1>
        <div>
          <h2>
            {users.map(({ name }) => (
              <div key={name}>{name}</div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
