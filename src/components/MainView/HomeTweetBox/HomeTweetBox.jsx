import React from "react";
import TweetList from "./TweetList";

function HomeTweetBox(props) {
  console.log();
  const TweetDataBase = props.sendTweet;

  return (
    <ul style={{ padding: "0" }}>
      {TweetDataBase.map((tweet) => (
        <TweetList
          key={tweet.id}
          name={tweet.name}
          username={tweet.username}
          time={tweet.time}
          tweet={tweet.tweet}
          img={tweet.img}
          comment={tweet.comment}
          retweet={tweet.retweet}
          like={tweet.like}
        />
      ))}
    </ul>
  );
}

export default HomeTweetBox;
