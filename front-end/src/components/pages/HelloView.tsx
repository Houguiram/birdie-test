import * as React from 'react';
import { useEffect, useState } from 'react';

const getHelloMessage = (setMessage: Function) => {
  fetch('/hello')
    .then(res => res.json())
    .then(message => setMessage(message.greetings));
};

function HelloView() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    getHelloMessage(setMessage);
  });
  return (
    <h1>{message}</h1>
  );
}

export default HelloView;