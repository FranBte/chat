import React, { Component } from "react";
import "./ChatController.css";
import ChatBar from "./ChatBar/ChatBar";
import APIClient from "../APIClient/APIClient";
import token from "../token";

class ChatController extends Component {
  APIClient = new APIClient(
    `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0`,
    token
  );
  state = {
    value: "",
    name: "",
    messages: [],
  };

  render() {
    return (
      <section className="ChatController">
     
        <ChatBar/>
      </section>
    );
  }
}

export default ChatController;
