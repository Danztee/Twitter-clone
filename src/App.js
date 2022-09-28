import React, { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import EndBar from "./components/EndBar/EndBar";
import UnFollow from "./components/EndBar/UnFollow";
import MainView from "./components/MainView/MainView";
import Popup from "./components/UI/Popup";

function App(props) {
  const [unFollow, showUnFollow] = useState(false);
  const [name, setName] = useState("");
  const [permanent, setPermanent] = useState();
  const [popup, setPopup] = useState(false);
  const [profile, setProfile] = useState([]);
  const [openSideBar, setOpenSideBar] = useState(false);
  // popup functionality
  const showPopup = () => {
    setPopup(true);
  };
  const hidePopup = () => {
    setPopup(false);
  };
  const onSendFile = (data) => {
    setProfile(data);
  };

  // openUnFollowBox functionality
  const openUnFollowBox = () => {
    showUnFollow(true);
  };
  const hideUnFollow = () => {
    showUnFollow(false);
  };
  const hidePermanentUnFollow = () => {
    showUnFollow(false);
  };
  const onTransfer = (data) => {
    setName(data);
  };

  const newData = (data) => {
    setPermanent(data);
  };

  const clicked = (data, event) => {
    setOpenSideBar(data);
  };

  if (openSideBar === true) {
    document.body.style.overflow = "hidden";
  }

  document.body.addEventListener("click", () => {
    if (openSideBar === false) {
      setOpenSideBar(false);
      document.body.style.overflow = "";
    }
  });

  return (
    <section>
      {popup && (
        <Popup
          profile={profile}
          onShowProfile={showPopup}
          onHideProfile={hidePopup}
        />
      )}
      {unFollow && (
        <UnFollow unFollow={hideUnFollow} unfollow={newData} name={name} />
      )}
      <div className="grid">
        <div
          id="sideBar"
          className=""
          style={{
            display: openSideBar ? "block" : "",
          }}
        >
          <SideBar />
        </div>
        <div id="mainView" className="" onMouseOver={hidePopup}>
          <MainView open={clicked} />
        </div>
        <div id="endBar" className="">
          <EndBar
            onMouseEnter={hidePopup}
            onOpenUnFollowBox={openUnFollowBox}
            onUnFollow={hidePermanentUnFollow}
            username={props.username}
            onTransfer={onTransfer}
            onSendFile={onSendFile}
            permanent={permanent}
            newData={newData}
            onShowProfile={showPopup}
            onHideProfile={hidePopup}
          />
        </div>
      </div>
    </section>
  );
}

export default App;
