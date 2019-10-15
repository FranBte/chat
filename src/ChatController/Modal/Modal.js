import React, { Component } from "react";
import "./Modal.css"

class Modal extends Component {
  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.props.startChat();
    }
  }
  render() {
    if (this.props.hasChatStarted) {
      return null;
    }
    return (
        <section className="StyleModal">
        <section className="StyleModalContainer">
          <h2>What's your name?</h2>
          <input className="InputName" minLength="1" onChange={this.props.change} onKeyDown={this.handleKeyPress}></input>
            <button onClick={this.props.startChat} className="StartButton">
              Start Chatting
            </button>
        </section>
      </section>
    )
  }
}

export default Modal;
