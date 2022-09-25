import React from "react";
import classes from "./SideBar.module.css";

function SideLink(props) {
  return (
    <div>
      <a href="/" id={classes.container}>
        <div className={classes.links}>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            width="25"
            height="25"
            fill="currentColor"
          >
            <g>
              <circle
                cx={props.circle1}
                cy={props.circle2}
                r={props.circle3}
              ></circle>
              <circle
                cx={props.circle12}
                cy={props.circle2}
                r={props.circle3}
              ></circle>
              <circle
                cx={props.circle7}
                cy={props.circle2}
                r={props.circle3}
              ></circle>
              <path d={props.path}></path>
            </g>
          </svg>

          {props.link}
        </div>
      </a>
    </div>
  );
}

export default SideLink;
