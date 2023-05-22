import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const ChatUi=()=>{
return(<>
<div class="container">
  <div class="contacts">
    <div class="contact active">Contact 1</div>
    <div class="contact">Contact 2</div>
    <div class="contact">Contact 3</div>
    <div class="contact">Contact 4</div>
  </div>
  <div class="chat">
    <div class="chat-header">
      <h2>Chat Title</h2>
    </div>
    <div class="chat-messages">
      <div class="message user1">
        <p>Hello!</p>
        <span class="message-time">9:30 AM</span>
      </div>
      <div class="message user2">
        <p>Hi there!</p>
        <span class="message-time">9:32 AM</span>
      </div>
    </div>
    <div class="chat-input">
      <input type="text" placeholder="Type your message..."/>
      <button>Send</button>
    </div>
  </div>
</div>


</>);
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<ChatUi/>)