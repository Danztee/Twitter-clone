import React from "react";
import classes from "../MainView.module.css";

function DropDown() {
  return (
    <div style={{ paddingLeft: "10px" }}>
      <div className={classes.dropdown}>
        <select name="" id="everyone">
          <option value="Everyone">Everyone</option>
          <option value="Everyone">Everyone</option>
          <option value="Everyone">Everyone</option>
          <option value="Everyone">Everyone</option>
        </select>
      </div>
    </div>
  );
}

export default DropDown;
