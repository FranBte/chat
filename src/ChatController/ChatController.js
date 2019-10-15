import React, { Component } from "react";
import "./ChatController.css";
import ChatBar from "./ChatBar/ChatBar";
import MessageDisplay from "./MessageDisplay/MessageDisplay";
import Modal from "./Modal/Modal";
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
    hasChatStarted: false
  };

  getMessageValue = e => {
    this.setState({
      value: e.target.value
    });
  };

  getUserName = e => {
    if (e.target.value.length >= 1) {
      this.setState({
        name: e.target.value
      });
    }
  };

  startChat = () => {
    if (this.state.name.length >= 1) {
      this.setState({
        hasChatStarted: true
      });
    } else {
      alert("Input a name to start chatting");
    }
  };

  componentDidMount() {
    let isFirstRun = true;
    this.interval = setInterval(() => {
      if (this.state.hasChatStarted) {
        // begin chat and get all messages
        if (isFirstRun) {
          const getPromise = this.APIClient.getAllMessages();
          getPromise
            .then(data => {
              this.setState({ messages: data });
              window.scrollTo(0, document.querySelector("body").scrollHeight);
            })
            .catch(error => {
              console.log(error);
            });
          isFirstRun = false;
        } else {
          let timestamp;
          // if there are no messages, get messages from now on
          if (this.state.messages.length === 0) {
            timestamp = Date.now();
          } else {
            // if there are messages, get the last message from known messages
            timestamp =
              this.state.messages[this.state.messages.length - 1].timestamp - 1;
          }
          const getPromise = this.APIClient.getLastTenMessages(timestamp);
          let allMessages = [...this.state.messages];
          getPromise
            .then(data => {
              // check if last message in known messages is equal to first message in last 10 messages
              if (
                allMessages[allMessages.length - 1].timestamp ===
                data[0].timestamp
              ) {
                // if so, get new messages in last 10
                const newMessages = data.splice(1);
                if (newMessages.length > 0) {
                  // push them to all messages
                  newMessages.map(newMessage => {
                   return allMessages.push(newMessage);
                  });
                  // update messages
                  this.setState({
                    messages: allMessages
                  });
                }
              }
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <section className="ChatController">
        <Modal
          hasChatStarted={this.state.hasChatStarted}
          change={this.getUserName}
          startChat={this.startChat}
        />
        <MessageDisplay messages={this.state.messages} name={this.state.name} />
        <ChatBar
          change={this.getMessageValue}
          value={this.state.value}
          sendMessage={() => {
            // if message is not empty
            if (this.state.value !== "") {
              // post message to api
              this.APIClient.sendMessage(this.state.name, this.state.value)
                .then(data => {
                  // update state for immediate response
                  let messages = [...this.state.messages];
                  messages.push(data);
                  this.setState({
                    messages: messages,
                    value: ""
                  });
                  // scroll to bottom if a message was sent
                  window.scrollTo(
                    0,
                    document.querySelector("body").scrollHeight
                  );
                })
                .catch(error => {
                  console.log(error);
                });
            } else {
              // if message is an empty string, alert
              alert("Oopsies, we can't send an empty message!");
            }
          }}
        />
      </section>
    );
  }
}

export default ChatController;
