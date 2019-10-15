import React, { Component } from "react";
import "./ChatInput.css";

class ChatInput extends Component {
  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.props.sendMessage();
    }
  };

  render() {
    return (
      <input
        type="text"
        className="ChatInput"
        placeholder="Message"
        onChange={this.props.change}
        value={this.props.value}
        onKeyDown={this.handleKeyPress}
      ></input>
    );
  }
}

export default ChatInput;

