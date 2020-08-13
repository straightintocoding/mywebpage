import React, { useState, useEffect } from "react";
import Message from "./componets/Message";
import "./componets/Message.css";
import db from "./firebase";
import firebase from "firebase";
import ScrollToBottom from "react-scroll-to-bottom";
import FlipMove from "react-flip-move";
import "./componets/facebook.css";
function Facebookapp() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot(snapshot => {
        setMessages(
          snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please Submit your Username"));
  }, []);

  const sendMessage = event => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput("");
  };

  return (
    <div className="centerfb">
      <div className="Facebookapp">
        <div className="Topbar">
          <h1>Messaging App</h1>
          <h2>Welcome {username}</h2>
        </div>
        <div className="mainbox">
          <ScrollToBottom className="messagesBox">
            <FlipMove>
              {messages.map(({ id, message }) => (
                <Message key={id} username={username} message={message} />
              ))}
            </FlipMove>
          </ScrollToBottom>

          <form className="bottomBar">
            <input
              type="input"
              placeholder="Type Message..."
              i
              value={input}
              onChange={event => setInput(event.target.value)}
            />

            <button
              disabled={!input}
              className="ripple"
              type="submit"
              variant="contained"
              color="primary"
              onClick={sendMessage}
            >
              <span>✅</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Facebookapp;
