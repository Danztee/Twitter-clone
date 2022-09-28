import React, { useState } from "react";

import Nav from "./Nav/Nav";
import EnterTweet from "./EnterTweet/EnterTweet.jsx";
import HomeTweetBox from "./HomeTweetBox/HomeTweetBox.jsx";

import TweetDB from "../../store/TweetDB";

function MainView(props) {
  const [sendTweet, setSendTweet] = useState(TweetDB);

  const onSendTweet = (data) => {
    setSendTweet((prev) => {
      return [data, ...prev];
    });
  };

  const clicked = (data) => {
    props.open(data);
  };

  return (
    <div>
      <Nav open={clicked} />
      <div>
        <EnterTweet onSendTweet={onSendTweet} />
        <HomeTweetBox sendTweet={sendTweet} />
      </div>
    </div>
  );
}

export default MainView;
