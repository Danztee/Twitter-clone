import React from "react";

import classes from "../MainView.module.css";

function SecondFormIcon() {
  return (
    <div className={classes.secondIcon}>
      {/*  */}
      <div className={classes.progress}>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          width="28"
          height="28"
          fill="currentColor"
        >
          <circle
            cx="50%"
            cy="50%"
            fill="none"
            strokeWidth="2"
            r="9"
            stroke="#2F3336"
          ></circle>
        </svg>
      </div>
      {/*  */}

      <div className={classes.border}></div>

      {/*  */}
      <div href="/" className={classes.add}>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          width="18"
          height="18"
          fill="currentColor"
        >
          <g>
            <path
              d="M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1
                    1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447
                    1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z"
            ></path>
          </g>
        </svg>
      </div>
      {/*  */}
    </div>
  );
}

export default SecondFormIcon;
