import React from "react";
import classes from "./Cover.module.css";

function Cover(props) {
  return (
    <section className={classes.cover} style={props.style}>
      {props.children}
    </section>
  );
}

export default Cover;
