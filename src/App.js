import './App.css';
import Chatbot from 'react-chatbot-kit';
import config from './pages/chatbotfiles/config.js'
import MessageParser from './pages/chatbotfiles/MessageParser.jsx';
import ActionProvider from './pages/chatbotfiles/ActionProvider.jsx';
import 'react-chatbot-kit/build/main.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
