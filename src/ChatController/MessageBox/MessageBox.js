import React, { Component } from "react";
import "./MessageBox.css";

class MessageBox extends Component {
  styleSentMessage = {
    alignSelf: "flex-end",
    backgroundColor: "#fcf4c5",
    margin: "1rem 3rem"
  };

  styleSentContent = {
    padding: "2rem 2rem 0 2rem"
  }

  styleReceivedContent = {
    margin: "0.5rem 0"
  }

  styleReceivedMessage = {
    alignSelf: "flex-start",
    backgroundColor: "white",
    padding: "2rem", 
    margin: "1rem 3rem 0 3rem"

  };

  styleSentMessageTime = {
    textAlign: "right",
    margin: "1rem 1rem 1rem 2rem"
  };

  timeConverter(timestamp) {
    const timeInMilliseconds = new Date(Number(timestamp));
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const year = timeInMilliseconds.getFullYear();
    const month = months[timeInMilliseconds.getMonth()];
    const date = timeInMilliseconds.getDate();
    const hour = timeInMilliseconds.getHours();
    const min = timeInMilliseconds.getMinutes();
    const time = `${date} ${month} ${year} ${hour}:${min}`;
    return time;
  }
  render() {
    if (this.props.author === this.props.name) {
      return (
        <section className="MessageBox" style={this.styleSentMessage}>
          <p className="MessageContent" style={this.styleSentContent}>{this.props.message}</p>
          <p className="TimeStamp" style={this.styleSentMessageTime}>
            {this.timeConverter(this.props.timestamp)}
          </p>
        </section>
      );
    }
    return (
      <section className="MessageBox" style={this.styleReceivedMessage}>
        <p className="Author">{this.props.author}</p>
        <p className="MessageContent" style={this.styleReceivedContent}>{this.props.message}</p>
        <p className="TimeStamp">{this.timeConverter(this.props.timestamp)}</p>
      </section>
    );
  }
}

export default MessageBox;
