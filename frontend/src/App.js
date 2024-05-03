import { useState } from "react";
import "./App.css";

import AuthPage from "./components/AuthPage";
import ChatPage from "./components/ChatPage";

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatPage user={user} />;
  }
}

export default App;
