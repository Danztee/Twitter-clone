import React from "react";
import MainIcons from "./MainIcon";
import classes from "./Tweet.module.css";

function TweetList(props) {
  return (
    <li
      className={classes.list}
      style={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "solid 1px rgb(47, 51, 54)",
        listStyle: "none",
      }}
    >
      <section style={{ display: "flex", gap: "1rem" }}>
        <div>
          <img
            src={require(`../../assetsPics/${props.img}`)}
            alt="username"
            width="48"
            style={{ borderRadius: "50%", marginTop: "0.5rem" }}
          />
        </div>

        <div className={classes.namesBox}>
          <p>{props.name}</p>

          <p className={classes.paragraph}>@{props.username}</p>

          <p
            className={classes.paragraph}
            style={{
              marginTop: "-0.4rem",
            }}
          >
            .
          </p>

          <p className={classes.paragraph}>{props.time}</p>

          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="16"
              fill="rgb(113, 118, 123)"
              className="bi bi-three-dots"
              viewBox="0 0 16 16"
              id={classes.icon}
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </p>
        </div>
      </section>

      <div className="tweet" style={{ display: "flex", marginLeft: "4rem" }}>
        <p style={{ marginTop: "-1rem", fontSize: "15px" }}>{props.tweet}</p>
      </div>

      <MainIcons
        comment={props.comment}
        retweet={props.retweet}
        like={props.like}
      />
    </li>
  );
}

export default TweetList;
