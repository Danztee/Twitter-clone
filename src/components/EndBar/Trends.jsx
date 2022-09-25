import React from "react";
import classes from "./EndBar.module.css";
import TrendsList from "./TrendsList";
import Cover from "../UI/Cover";

function Trends() {
  const lists = [
    {
      id: "1",
      trends: "Trending in Nigeria",
      name: "Blaqbonez",
      tweets: "56K",
    },
    {
      id: "2",
      trends: "Trending",
      name: "Outsiders",
      tweets: "9,762",
    },
    {
      id: "3",
      trends: "Trending",
      name: "Berri Tiga",
      tweets: "11.3K",
    },
    {
      id: "4",
      trends: "Trending in Nigeria",
      name: "vinicius",
      tweets: "119K",
    },
    {
      id: "5",
      trends: "Sports . Trending",
      name: "Ronaldo",
      tweets: "60.8k",
    },
    {
      id: "6",
      trends: "Trending in Nigeria",
      name: "Pastor Kumuyi",
      tweets: "1,686",
    },
    {
      id: "7",
      trends: "Sports . Trending",
      name: "Iwobi",
      tweets: "6,518",
    },
    {
      id: "8",
      trends: "Music . Trending",
      name: "Asake",
      tweets: "34.4K",
    },
    {
      id: "9",
      trends: "Sports . Trending",
      name: "Rudiger",
      tweets: "5,451",
    },
    {
      id: "10",
      trends: "Trending",
      name: "Kodak",
      tweets: "5,438",
    },
  ];
  return (
    <Cover>
      <div className={classes.box}>
        <h5 style={{ padding: "1rem 1rem 0 1rem", fontWeight: "bold" }}>
          Trends for you
        </h5>
        {lists.map((list) => (
          <TrendsList
            key={list.id}
            name={list.name}
            trends={list.trends}
            tweets={list.tweets}
          />
        ))}
      </div>
    </Cover>
  );
}

export default Trends;
