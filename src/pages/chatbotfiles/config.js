
import { createChatBotMessage } from 'react-chatbot-kit';
import Header from './header';
const botName = 'News Chatbot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName} you can ask your Query here regarding any news from 19th centuary`)],
  customComponents: {
   header: () => <Header />,
  },
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#424242', // Light blue
    },
    chatButton: {
      backgroundColor: '#616161', // Light cyan
    },
  },
};

export default config;