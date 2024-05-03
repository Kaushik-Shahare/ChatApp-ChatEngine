import { useState } from "react";
import React from "react";

import {
  ChatEngine,
  getOrCreateChat,
  getChats,
  newChat,
} from "react-chat-engine";

function ChatPage(props) {
  const [username, setUsername] = useState("");

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }

  return (
    <ChatEngine
      height="100vh"
      publicKey={"caffa79d-7a5e-4924-b550-1a34d80f44ad"}
      userName={props.user.username}
      userSecret={props.user.secret}
      onGetChat={getChats()}
      onNewChat={newChat()}
      renderNewChatForm={(creds) => renderChatForm(creds)}
    />
  );
}

export default ChatPage;
