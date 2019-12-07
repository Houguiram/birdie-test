import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

// const getHelloMessage = (setMessage: Function) => {
//   fetch('/hello')
//     .then(res => res.json())
//     .then(message => setMessage(message.greetings));
// };

function HelloView() {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    () => {
      const fetchHello = async () => {
        setIsLoading(true);
        const result = await axios('/hello');
        setMessage(result.data.greetings);
        setIsLoading(false);
      };
      fetchHello();
    },
    []);
  return (
    isLoading ? (
      <div>Loading...</div>
    ) : (
      <h1>{message}</h1>
    )
  );
}

export default HelloView;