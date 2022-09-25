import React from "react";
import classes from "./EndBar.module.css";

function Footer() {
  return (
    <footer
      style={{
        marginBottom: "4rem",
        padding: "0 2rem 2rem 2rem",
      }}
    >
      <ul className={classes.footer}>
        <li>
          <a href="/">Terms of Services</a>
        </li>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        <li>
          <a href="/">Cookie Policy</a>
        </li>
      </ul>

      <ul className={classes.footer}>
        <li>
          <a href="/">Accessibility</a>
        </li>
        <li>
          <a href="/">Ads info</a>
        </li>
        <li>
          <a href="/">More..</a>
        </li>
      </ul>
      <div className={classes.copy}>© 2022 Twitter, Inc.</div>
    </footer>
  );
}

export default Footer;
