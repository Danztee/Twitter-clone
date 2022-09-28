import React from "react";
import img from "../../assets/daniel.jpeg";

import InputBox from "./InputBox";

function EnterTweet(props) {
  const onSendTweet = (data) => {
    props.onSendTweet(data);
  };

  return (
    <section
      style={{
        display: "flex",
        gap: "1rem",
        borderBottom: "solid 1px rgb(47, 51, 54)",
        padding: "0 1rem",
      }}
    >
      <div>
        <img
          src={img}
          alt="username"
          width="48"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div style={{ width: "100%" }}>
        <InputBox onSendTweet={onSendTweet} />
      </div>
    </section>
  );
}

export default EnterTweet;
