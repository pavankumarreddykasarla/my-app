import React from 'react';

const MessageParser = ({ children, actions }) => {
  
  const parse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('hello')) {
      actions.handleHello();
    }
    if (lowerCaseMessage.includes('dog')) {
      actions.handleDog();
    }
    if (lowerCaseMessage.includes('summary')){
      actions.summary(lowerCaseMessage);
    }
    if( lowerCaseMessage.includes('?')){
      actions.qa(lowerCaseMessage)
    }
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;

// import React from 'react';
// import { createChatBotMessage } from 'react-chatbot-kit';

// const MessageParser = ({ children, actions }) => {
//   const parse = async (message) => {
//     if (message.includes('hello')) {
//       actions.handleHello();
//     }

//     if (message.includes('dog')) {
//       actions.handleDog();
//     }

//     // API call
//     const response = await fetch('http://localhost:5000/api/get-response', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ message }),
//     });
//     const data = await response.json();
//     const botMessage = createChatBotMessage(data.response);

//     setState((prev) => ({
//       ...prev,
//       messages: [...prev.messages, botMessage],
//     }));
//   };

//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           parse: parse,
//           actions,
//         });
//       })}
//     </div>
//   );
// };

// export default MessageParser;

