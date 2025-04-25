import { useState, useEffect, useCallback } from "react";
import {nanoid} from "nanoid";
import io from "socket.io-client";

import SigninChatForm from "./components/SigninChatForm/SigninChatForm";
import ChatForm from "./components/ChatForm/ChatForm";
import Chat from "./components/Chat/Chat";

function App() {
  const [nickname, setNickname] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(()=> {
    if(nickname) {
      const socket = io.connect("http://localhost:5000");
      setSocket(socket);

      socket.on("chat-message", data => {
        const {nickname, message} = JSON.parse(data);
        setMessages(prevMessages => {
          const newMessage = {
            id: nanoid(),
            type: "user",
            nickname,
            message,
          };
          return [...prevMessages, newMessage]
        });
      })
    }
  }, [nickname]);

  const addNickname = useCallback(({nickname}) => setNickname(nickname), []);

  const onAddMessage = useCallback(({message})=> {
    setMessages(prevMessages => {
      const newMessage = {
        id: nanoid(),
        type: "you",
        nickname,
        message,
      };
      return [...prevMessages, newMessage]
    });

    socket.emit("chat-message", JSON.stringify({nickname, message}));
  }, [nickname, socket]);

  const closeChat = ()=> {
    socket.disconnect(true);
    setSocket(null);
  }
  
  return (
    <div className="App">
      {!nickname && <SigninChatForm onSubmit={addNickname} />}
      {nickname && <ChatForm onSubmit={onAddMessage} />}
      {nickname && <Chat items={messages} />}
      {nickname && <button type="button" onClick={closeChat}>Close chat</button>}
    </div>
  )
}

export default App;
