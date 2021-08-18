// import React from 'react';
import React, { useState } from "react";
import "./styles.css";

var myBooks = {
  novel: [
    { name: "The White Tiger ", ratings: "5/5" },
    { name: "Witness The Night ", ratings: "3/5" }
  ],
  autobiograohy: [
    { name: "Wings Of Fire-Dr Abdul Kalam", ratings: "4/5" },
    { name: "A Promised Land-Barack Obama", ratings: "5/5" }
  ],
  fiction: [
    { name: "The Hare", ratings: "3/5" },
    { name: "The Four Winds", ratings: "2/5" }
  ]
};

let aboutBooks = '"A room without books is like a body without a soul."';

export default function App() {
  const [Detail, setDetail] = useState("fiction");
  function onClickHandler(item) {
    setDetail(item);
  }
  return (
    <div className="App">
      <h1 className="title">📚 my Books</h1>
      <h2>{aboutBooks}</h2>
      <h2>select a genre to get started:</h2>
      {Object.keys(myBooks).map((item) => (
        <button
          className="button"
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
        <ul style={{ padding: "0" }}>
          {myBooks[Detail].map((book) => (
            <li
              style={{
                listStyle: "none",
                border: "1px solid gray",
                borderTopRightRadius: "1rem",
                borderBottomLeftRadius: "1rem",
                padding: "1rem",
                margin: "1rem",
                backgroundColor: "#7BB661"
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
