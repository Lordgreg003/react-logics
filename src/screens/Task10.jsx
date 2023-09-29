import React from 'react';
import { useState } from 'react';
const Task10 = () => {
  const [message, setmessage] = useState(0);
  const chisom = () => {
    if (message <= 12) {
      setmessage('good morning !');
    } else if (message > 12 && message <= 16) {
      setmessage('good afternoon !');
    } else if (message > 16 && message <= 24) {
      setmessage('good evening !');
    } else {
      setmessage('time does not exist');
    }
  };
  return (
    <div>
      <div>
        <div>
          <input
            className='border px-10 py-3 rounded-xl'
            type='number'
            name=''
            id=''
            value={message}
            onChange={(event) => setmessage(event.target.value)}
          />
        </div>
        <div>{message}</div>
        <div>
          <button
            className='bg-lime-400 text-white font-bold px-10 py-3'
            onClick={chisom}
          >
            Greet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task10;
