import React from "react";
import ProfileBox from "../UI/ProfileBox";

import classes from "./EndBar.module.css";
import Cover from "../UI/Cover";

function Follow(props) {
  const lists = [
    {
      id: 1,
      img: "shank.jpeg",
      name: "SHANKS COMIC😀",
      username: "Obacruze",
      bio: "Top Boy🐐 || Lit G👻NG",
      following: "327",
      followers: "664.4k",
    },
    {
      id: 2,
      img: "arit.jpeg",
      name: "Arit Developer",
      username: "AritDeveloper",
      bio: "Senior Developer Advocate @PayPal Learned to code at 37 while raising 2 young children; 1st dev job @ 38. Follow for soul-nurturing Tech content! #SpacesHost",
      following: "303",
      followers: "6,985",
    },
    {
      id: 3,
      img: "alabi.jpeg",
      name: "Alabi",
      username: "the_Lawrenz",
      bio: "Music | Chelsea | Digital comms | ✉️ - alabilawrence88@gmail.com ",
      following: "14.8k",
      followers: "199.4k",
    },
  ];

  return (
    <Cover>
      <div className={classes.box}>
        <h5 style={{ padding: "1rem 1rem 0 1rem", fontWeight: "bold" }}>
          Who to follow
        </h5>
        {lists.map((list) => (
          <ProfileBox
            key={list.id}
            img={list.img}
            name={list.name}
            username={list.username}
            bioData={list.bio}
            following={list.following}
            followers={list.followers}
            onShowProfile={props.onShowProfile}
            onHideProfile={props.onHideProfile}
            ////////////////////////
            onOpenUnFollowBox={props.onOpenUnFollowBox}
            style={{
              padding: "1rem 1rem",
              marginTop: "0",
            }}
            styles={{ width: "14rem", gap: "1rem" }}
            width="50"
            onTransfer={props.onTransfer}
            onSendFile={props.onSendFile}
          />
        ))}
      </div>
    </Cover>
  );
}

export default Follow;
