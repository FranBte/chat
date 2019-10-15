import React from "react";
import "./SendButton.css";

const SendButton = props => {
  return (
    <button
      className="SendButton"
      onClick={() => {
        props.sendMessage();
      }}
    >
      Send
    </button>
  );
};

export default SendButton;
