import React from "react";
import "./MessageDisplay.css";
import MessageBox from "../MessageBox/MessageBox";

const messageDisplay = props => {
  return (
    <section className="MessageDisplay">
      <section className="MessagesContainer">
        {props.messages.map(message => {
          
          return (
            <MessageBox
              message={message.message}
              author={message.author}
              timestamp={message.timestamp}
              key={message._id}
              name={props.name}
            />
          );
        })}
      </section>
    </section>
  );
};

export default messageDisplay;
