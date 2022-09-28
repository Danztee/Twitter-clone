import React, { useState, useRef } from "react";
import classes from "./Button.module.css";

function Button(props) {
  const [following, setFollowing] = useState(false);
  const [follow, setFollow] = useState(props.tweet);
  const identify = useRef("");

  const addFollow = (e) => {
    setFollow("Following");
  };

  // const removeFollow = (e) => {
  //   setFollow("Follow");
  //   setFollowing(false);
  // };

  const toggleUnFollow = (e) => {
    if (e.target.textContent === "Following") {
      setFollowing(true);
    }
    if (e.target.textContent === "Unfollow") {
      setFollow("Following");
    }
  };

  const addUnFollow = (e) => {
    if (e.target.textContent === "Following") {
      setFollow("Unfollow");
    }
  };

  function handler(e) {
    e.preventDefault();
    if (e.target.textContent === "Follow") {
      addFollow();
    }
    if (e.target.textContent === "Unfollow") {
      props.onOpenUnFollowBox();
    }
  }

  return (
    <button
      className={`${classes["button"]} ${following && classes.following}`}
      style={props.style}
      onClick={handler}
      onMouseLeave={toggleUnFollow}
      onMouseEnter={addUnFollow}
      username={props.username}
      ref={identify}
    >
      {follow}
    </button>
  );
}

export default Button;
