// import React from 'react';
import React, { useState } from "react";
import "./styles.css";

var myBooks = {
  hindi: [
    { name: "bharat ko jaano", ratings: "5/5" },
    { name: "jai hind", ratings: "3/5" }
  ],
  english: [
    { name: "Hey! Do You Know Me", ratings: "4/5" },
    { name: "Wings Of Fire", ratings: "5/5" }
  ],
  something: [
    { name: "There is something", ratings: "3/5" },
    { name: "something something", ratings: "2/5" }
  ]
};

export default function App() {
  const [Detail, setDetail] = useState("something");
  function onClickHandler(item) {
    setDetail(item);
  }
  return (
    <div className="App">
      <h1>📕 books</h1>
      <h2>catagory of books i have</h2>
      {Object.keys(myBooks).map((item) => (
        <button
          key={item}
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            margin: "0.5rem",
            cursor: "pointer"
          }}
          onClick={() => onClickHandler(item)}
        >
          {item}
        </button>
      ))}
      <div>
        <ul>
          {myBooks[Detail].map((book) => (
            <li
              style={{
                listStyle: "none",
                border: "1px solid gray",
                borderRadius: "0.5rem",
                padding: "1rem",
                margin: "1rem"
              }}
            >
              <div>{book.name}</div>
              <div>{book.ratings}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
