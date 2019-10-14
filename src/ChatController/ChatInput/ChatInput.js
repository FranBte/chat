import React from "react";
import "./ChatInput.css"

const ChatInput = props => {
    return <input type="text" className="ChatInput" placeholder="Message" onChange={props.change} value={props.value}></input>
}

export default ChatInput;