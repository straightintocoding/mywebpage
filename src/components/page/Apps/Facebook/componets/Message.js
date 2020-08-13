import React , { forwardRef } from "react";
import "./Message.css";

const Message= forwardRef(({ message, username } , ref ) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message ${isUser && "message_user"} `}>
      <div className={isUser ? "message_userCard" : "message_guestCard"}>
        <div>
          <div id="msgtext">
            {!isUser && `${message.username}:`} {message.message}
          </div>
        </div>
      </div>
    </div>
  );
})

export default Message;
