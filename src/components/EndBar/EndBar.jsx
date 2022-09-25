import React from "react";
import Input from "../UI/Input";
import Follow from "./Follow";
import Trends from "./Trends";
import Footer from "./Footer";
import Messages from "./Messages";
import classes from "./EndBar.module.css";

function EndBar(props) {
  const onTransfer = (data) => {
    props.onTransfer(data);
  };

  const onSendFile = (data) => {
    props.onSendFile(data);
  };

  return (
    <section className={classes.EndBar}>
      <Input />
      <Trends />
      <Follow
        onOpenUnFollowBox={props.onOpenUnFollowBox}
        onUnFollow={props.onUnFollow}
        item={props.item}
        username={props.username}
        onTransfer={onTransfer}
        onSendFile={onSendFile}
        permanent={props.permanent}
        newData={props.newData}
        onShowProfile={props.onShowProfile}
        onHideProfile={props.onHideProfile}
      />
      <Footer />
      <Messages />
    </section>
  );
}

export default EndBar;
