import React from "react";
import classes from "./EndBar.module.css";

import Modal from "../UI/Modal";

function UnFollow(props) {
  const handler = (e) => {
    props.unfollow(e);
  };

  // console.log(props);

  return (
    <Modal>
      <h5 style={{ fontWeight: "bold" }}>Unfollow @{props.name}?</h5>
      <p style={{ fontSize: "15px", color: "grey", marginTop: "5px" }}>
        Their Tweets will no longer show up in your home timeline. You can still
        view their profile, unless their Tweets are protected.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        <button
          data-value="unfollowPermanent"
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            color: "#000",
            padding: "0.8rem",
            fontWeight: "bold",
            borderRadius: "30px",
            cursor: "pointer",
          }}
          onClick={handler}
        >
          Unfollow
        </button>
        <button className={classes.btn} onClick={props.unFollow}>
          Cancel
        </button>
      </div>
    </Modal>
  );
}

export default UnFollow;
