import React, { useState } from "react";
import classes from "./Input.module.css";
import SearchBox from "./SearchBox";

function Input() {
  const [valid, setIsValid] = useState(false);

  const focus = () => {
    setIsValid(true);
  };
  const lostFocus = () => {
    setIsValid(false);
  };

  return (
    <div className={classes.inputBox}>
      <div className={classes.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="22"
          height="22"
          style={{ color: valid ? "rgb(29, 155, 240)" : "grey" }}
        >
          <g data-name="Layer 2">
            <path
              d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
              data-name="search"
            />
          </g>
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search Twitter"
        onFocus={focus}
        onBlur={lostFocus}
      />
      {valid && <SearchBox />}
    </div>
  );
}

export default Input;
