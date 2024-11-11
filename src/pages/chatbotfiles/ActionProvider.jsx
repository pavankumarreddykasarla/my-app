import React from 'react';
import Header from './header';


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const summary = async (usermessage) => {
    try {
      const response = await fetch('https://cftvssypvmboikjuplrn6adsc40mpiws.lambda-url.us-east-2.on.aws/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: usermessage }),
      });
  
      // Check if the response is successful (status 200-299)
      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }
  
      // Check if the response is in JSON format
      const contentType = response.headers.get('Content-Type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const result = await response.text();  // Fallback to text
        data = { response: result };  // Adjust depending on your server's response format
      }
  
      console.log(data);  // Check the response
      const botMessage = createChatBotMessage(data.response || "No response received.");
      
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      console.error('Error fetching API:', error);
  
      // Provide a more informative message to the user
      const botMessage = createChatBotMessage('Failed to get a response from the server. Please try again later.');
      
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };
  

  
  const qa = async (usermessage) => {
    try {
      const response = await fetch('https://cftvssypvmboikjuplrn6adsc40mpiws.lambda-url.us-east-2.on.aws/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: usermessage }),
      });
  
      // Check if the response is successful (status 200-299)
      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }
  
      // Check if the response is in JSON format
      const contentType = response.headers.get('Content-Type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const result = await response.text();
        data = { response: result };
      }
  
      console.log(data);  // Check the response
      const botMessage = createChatBotMessage(data.response || "No response received.");
      
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      console.error('Error fetching API:', error);
  
      // Provide a more informative message to the user
      const botMessage = createChatBotMessage('Failed to get a response from the server. Please try again later.');
      
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };

  // const qa = async (usermessage) => {
  //   try {
  //     const response = await fetch('https://fwmj3alirijfcc3lypmvi3rtiu0vqeog.lambda-url.us-east-2.on.aws/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ query: usermessage }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const data = await response.json();

  //     const botMessage = createChatBotMessage(`${data.response}`);

  //     setState((prev) => ({
  //       ...prev,
  //       messages: [...prev.messages, botMessage],
  //     }));
  //   } catch (error) {
  //     console.error('Error fetching API:', error);

  //     const botMessage = createChatBotMessage('Failed to get a response from the server.');

  //     setState((prev) => ({
  //       ...prev,
  //       messages: [...prev.messages, botMessage],
  //     }));
  //   }
  // };


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            summary,
            qa
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;