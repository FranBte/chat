import React from "react";
import ChatInput from "../ChatInput/ChatInput";
import SendButton from "../SendButton/SendButton";
import "./ChatBar.css";

const ChatBar = props => {
  const style = {
    backgroundColor: "#3895d0",
    width: "100%",
    position: "fixed",
    bottom: "0"
  };
  return (
    <section className="ChatBar" style={style}>
      <ChatInput
        change={props.change}
        value={props.value}
        sendMessage={props.sendMessage}
      />
      <SendButton sendMessage={props.sendMessage} />
    </section>
  );
};

export default ChatBar;
