import React from "react";
import classes from "./EndBar.module.css";

function TrendsList(props) {
  return (
    <div className={classes.TrendsList}>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className={classes.hover}
      >
        <div
          style={{
            margin: "0.5rem 0",
          }}
        >
          <p className={classes.country}>{props.trends}</p>
          <span className={classes.name} style={{ fontWeight: "bold" }}>
            {props.name}
          </span>
          <p className={classes.tweets}>{props.tweets} tweets</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-three-dots"
          viewBox="0 0 16 16"
          style={{ cursor: "pointer", marginTop: "1rem" }}
        >
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
      </div>
    </div>
  );
}

export default TrendsList;
