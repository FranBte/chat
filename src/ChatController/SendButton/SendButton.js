import React from "react";

const SendButton = props => {
  const styleButton = {
    border: "none",
    height: "100%",
    width: "10rem",
    backgroundColor: "#fd866c",
    fontSize: "2rem",
    color: "white",
    borderRadius: "0.5rem",
    fontWeight: "500",
    marginRight: "1rem",
    fontFamily: `"Fira Sans", sans-serif`
  };
  return (
    <button
      style={styleButton}
      onClick={() => {
        props.sendMessage();
      }}
    >
      Send
    </button>
  );
};

export default SendButton;
