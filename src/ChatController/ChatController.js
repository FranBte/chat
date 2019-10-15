import React, { Component } from "react";
import "./ChatController.css";
import ChatBar from "./ChatBar/ChatBar";
import MessageDisplay from "./MessageDisplay/MessageDisplay";
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
    messages: []
  };

  getMessageValue = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <section className="ChatController">
        <MessageDisplay messages={this.state.messages} name={this.state.name} />
        <ChatBar change={this.getMessageValue} />
      </section>
    );
  }
}

export default ChatController;
