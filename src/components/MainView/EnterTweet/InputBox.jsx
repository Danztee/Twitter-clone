import React, { useState } from "react";
import DropDown from "./DropDown";
import InputTweet from "./InputTweet";

function InputBox(props) {
  const [reached, setReached] = useState(false);

  const toggle = (data) => {
    setReached(data);
  };

  const onSendTweet = (data) => {
    props.onSendTweet(data);
  };

  return (
    <div>
      {reached && <DropDown />}
      <InputTweet onsetWriting={toggle} onSendTweet={onSendTweet} />
    </div>
  );
}

export default InputBox;
