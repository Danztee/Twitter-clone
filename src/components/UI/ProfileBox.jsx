import React, { useState } from "react";
import classes from "./ProfileBox.module.css";
import Button from "./Button";

function ProfileBox(props) {
  const [hoverName, setHoverName] = useState(false);

  const get = () => {
    props.onTransfer(props.username);
  };

  ///////////////////////////
  const transfer = () => {
    const file = {
      img: props.img,
      name: props.name,
      username: props.username,
      bio: props.bioData,
      following: props.following,
      followers: props.followers,
    };
    props.onSendFile(file);
  };
  const show = () => {
    setTimeout(() => {
      props.onShowProfile();
    }, 1000);
    transfer();
  };

  const hide = () => {
    setTimeout(() => {
      props.onHideProfile();
    }, 1000);
  };

  window.addEventListener("scroll", () => {
    setTimeout(() => {
      props.onHideProfile();
    }, 1000);
  });

  ///////////////////////////
  const hover = () => {
    setHoverName(true);
  };
  const removeHover = () => {
    setHoverName(false);
  };

  return (
    <a href="/" id={classes.container} onMouseEnter={get}>
      <div className={classes.profile} style={props.style}>
        <div className={classes.nameBox} style={props.styles}>
          <img
            src={require(`../assets/${props.img}`)}
            alt={props.username}
            width={props.width}
            style={{ borderRadius: "50%" }}
            onMouseEnter={show}
          />
          <div className={classes.names}>
            <div
              className="name"
              onMouseEnter={() => {
                hover();
                show();
              }}
              onMouseLeave={removeHover}
              onMouseOut={hide}
              style={{ textDecoration: hoverName ? "underline" : "" }}
            >
              {props.name}
            </div>
            <div
              onMouseEnter={show}
              className="username"
              style={{ color: "grey", fontSize: "14px" }}
            >
              @{props.username}
            </div>
          </div>
        </div>
        <Button
          onOpenUnFollowBox={props.onOpenUnFollowBox}
          style={{
            width: "6rem",
            height: "2rem",
            color: "rgb(0, 0, 0)",
          }}
          tweet="Follow"
        />
      </div>
    </a>
  );
}

export default ProfileBox;
