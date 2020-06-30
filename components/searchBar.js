import React, { useState } from "react";

const SearchBar = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Keyword"
          />
          <button
            className="flex-shrink-0 text-sm text-white py-1 px-2"
            type="submit"
          >
            <img
              src="https://img.icons8.com/cotton/64/000000/search--v1.png"
              width="20px"
              height="20px"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;