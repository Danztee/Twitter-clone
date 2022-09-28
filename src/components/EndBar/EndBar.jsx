import React, { useState, useEffect } from "react";
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

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 750) {
      setScroll(true);
    }
  }, [scrollPosition]);

  return (
    <div className={`${classes.EndBar} ${scroll && classes.sticky}`}>
      <Input />
      <div>
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
      </div>
      <Messages />
    </div>
  );
}

export default EndBar;
