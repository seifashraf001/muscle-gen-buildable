import React, { useState, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    return storedMessages ? JSON.parse(storedMessages) : [];
  });
  const [input, setInput] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isRatingGiven, setIsRatingGiven] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('chatMessages');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const chatbot = async (input) => {
    try {
      if (!isRatingGiven) {
        setIsRatingGiven(true);
        return 'Thank you for your valuable feedback. Your input is crucial to us. Your message will be promptly forwarded to our developers. Kindly take a moment to rate our website. Your rating helps us immensely in our continuous efforts to improve.';
      } else {
        setIsRatingGiven(false);
        setRating(0);
        return 'Thank you for your rating! I will send your feedback to our developers team.';
      }
    } catch (error) {
      console.error(error);
      return 'Error occurred';
    }
  };
  
  const handleRating = (value) => {
    setRating(value);
  };

  const sendMessage = async () => {
    if (input.trim() !== '') {
      const userMessage = { text: input, type: 'user' };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setInput('');

      try {
        const response = await chatbot(input);
        const botMessage = { text: response, type: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const toggleChatWindow = () => {
    setIsVisible(!isVisible);
  };

  const [buttonText, setButtonText] = useState('Send');
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonText('Your Feedback has been Sent!');
    setButtonClicked(true);
    sendMessage(); // Call sendMessage function here if you also want to send the message when button clicked
  };

  return (
    <div>
      <button className="blzvQB launcher-button" onClick={toggleChatWindow}>
        <span>Support</span>
        <img src="/logo1.png" className="icon" alt="Chatbot Icon" />
      </button>

      {isVisible && (
        <div className="container">
          <div className="title">Support Center</div>
          <div className="chat" id="chat">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                <div className="avatar" />
                <div className="text" dangerouslySetInnerHTML={{ __html: message.text }} />
              </div>
            ))}
          </div>
          {isRatingGiven ? (
            <div className="rating-container">
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  className={value <= rating ? "star selected" : "star"}
                  onClick={() => handleRating(value)}
                >
                  &#9733;
                </span>
              ))}
            </div>
          ) : (
            <input
              type="text"
              className="input"
              id="input"
              placeholder="Kindly Write UR Feedback :)"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  sendMessage();
                }
              }}
            />
            
          )}
          <button className="button" onClick={handleButtonClick} disabled={buttonClicked}>
            <span className="gradient-label">{buttonText}</span>
          </button>
          
        </div>
      )}
    </div>
  );
};

export default Chatbot;
