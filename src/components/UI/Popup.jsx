import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import classes from "./Modal.module.css";

const Details = (props) => {
  const hide = () => {
    props.onHideProfile();
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      onMouseLeave={hide}
    >
      <div className={classes.popup}>
        <div className={classes.content}>
          <div
            style={{
              padding: "1rem",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <section
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className={classes.partOne}>
                <img
                  src={require(`../assets/${props.profile.img}`)}
                  alt=""
                  width="60"
                  style={{ borderRadius: "50%" }}
                />
                <h5 style={{ margin: "0", marginTop: "5px" }}>
                  {props.profile.name}
                </h5>
                <span>@{props.profile.username}</span>
              </div>
              <div className={classes.partTwo}>
                <Button
                  style={{
                    width: "6rem",
                    height: "2rem",
                    color: "rgb(0, 0, 0)",
                  }}
                  tweet="Follow"
                />
              </div>
            </section>

            <section style={{ marginTop: "12px" }}>{props.profile.bio}</section>

            <section
              className={classes.followers}
              style={{ display: "flex", gap: "1rem", marginTop: "12px" }}
            >
              <p>
                {props.profile.following} <span>Following</span>
              </p>{" "}
              <p>
                {props.profile.followers} <span>Followers</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("profile");

function Popup(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Details
          profile={props.profile}
          onShowProfile={props.onShowProfile}
          onHideProfile={props.onHideProfile}
        >
          {props.children}
        </Details>,
        portalElement
      )}
    </Fragment>
  );
}

export default Popup;
