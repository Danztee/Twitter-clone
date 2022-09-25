import React from "react";
import Cover from "../UI/Cover";

function SearchBox() {
  return (
    <Cover
      style={{
        padding: "2.3rem 1rem",
        boxShadow:
          "rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px",
        position: "absolute",
        top: "3.7rem",
        borderRadius: "5px",
      }}
    >
      <div style={{ color: "grey" }}>
        Try searching for people, topics, or keywords
      </div>
    </Cover>
  );
}

export default SearchBox;
