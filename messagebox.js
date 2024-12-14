// src/MessageBox.js
import React, { useState } from 'react';

const MessageBox = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <textarea value={message} onChange={handleChange} />
      <p>{message}</p>
    </div>
  );
};

export default MessageBox;
