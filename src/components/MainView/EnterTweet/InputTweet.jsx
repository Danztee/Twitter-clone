import React, { useReducer, useState, useEffect } from "react";
import FormIcon from "./FormIcon";
import classes from "../MainView.module.css";
import SecondFormIcon from "./SecondFormIcon";

const enteredTweetReducer = (state, action) => {
  switch (action.type) {
    case "ENTERED_TWEET":
      return { value: action.val, isValid: action.val.trim().length > 0 };

    default:
      return { value: "", isValid: false };
  }
};

function InputTweet(props) {
  const [enteredTweetState, dispatchTweet] = useReducer(enteredTweetReducer, {
    value: "",
    isValid: false,
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const [writing, setWriting] = useState(false);

  const enteredTweetHandler = (e) => {
    dispatchTweet({ type: "ENTERED_TWEET", val: e.target.value });
  };

  const { isValid: tweetInputIsValid } = enteredTweetState;

  useEffect(() => {
    setFormIsValid(tweetInputIsValid);
  }, [tweetInputIsValid]);

  const check = () => {
    setWriting(true);
  };
  useEffect(() => {
    props.onsetWriting(writing);
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const tweet = {
      id: (Math.random() * 1000).toFixed(2),
      img: "daniel.jpeg",
      name: "Olowoniyi Daniel",
      username: "iamdanztee",
      time: "now",
      tweet: enteredTweetState.value,
      comment: "0",
      retweet: "0",
      like: "0",
    };
    enteredTweetState.value = "";

    setTimeout(() => {
      props.onSendTweet(tweet);
    }, 500);

    enteredTweetState.isValid = false;
  };

  return (
    <div style={{ width: "100%" }}>
      <form action="" className={classes.form} onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="What's happening?"
          value={enteredTweetState.value}
          onChange={enteredTweetHandler}
          onClick={check}
        />

        {writing && (
          <p
            style={{
              borderBottom: "solid 1px rgb(47, 51, 54)",
              paddingLeft: "10px",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="16"
              height="16"
              fill="currentColor"
              style={{ marginTop: "2px" }}
            >
              <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zM9.047 5.9c-.878.484-1.22.574-1.486.858-.263.284-.663 1.597-.84 1.712-.177.115-1.462.154-1.462.154s2.148 1.674 2.853 1.832c.706.158 2.43-.21 2.77-.142.342.07 2.116 1.67 2.324 2.074.208.404.166 1.748-.038 1.944-.204.196-1.183 1.09-1.393 1.39-.21.3-1.894 4.078-2.094 4.08-.2 0-.62-.564-.73-.848-.11-.284-.427-4.012-.59-4.263-.163-.25-1.126-.82-1.276-1.026-.15-.207-.552-1.387-.527-1.617.024-.23.492-1.007.374-1.214-.117-.207-2.207-1.033-2.61-1.18-.403-.145-.983-.332-.983-.332 1.13-3.652 4.515-6.318 8.52-6.38 0 0 .125-.018.186.14.11.286.256 1.078.092 1.345-.143.23-2.21.99-3.088 1.474zm11.144 8.24c-.21-.383-1.222-2.35-1.593-2.684-.23-.208-2.2-.912-2.55-1.09-.352-.177-1.258-.997-1.267-1.213-.01-.216 1.115-1.204 1.15-1.524.056-.49-1.882-1.835-1.897-2.054-.015-.22.147-.66.31-.81.403-.36 3.19.04 3.556.36 2 1.757 3.168 4.126 3.168 6.873 0 .776-.18 1.912-.282 2.18-.08.21-.443.232-.595-.04z"></path>
            </svg>
            Everyone can reply
          </p>
        )}
        <div className={classes.container}>
          <div>
            <FormIcon />
          </div>
          <div className={classes.second}>
            {formIsValid && <SecondFormIcon />}
          </div>

          <div>
            <button
              type="submit"
              style={{ opacity: formIsValid ? "" : "0.5" }}
              disabled={!formIsValid && "disabled"}
            >
              Tweet
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InputTweet;
