import React from 'react';

const Task2 = () => {
  const Say = () => {
    console.log('i am here ');
  };

  return (
    <div className='h-[100vh] w-full flex flex-col justify-center items-center'>
      <button
        className='border px-6 py-4 bg-green-400 text-white rounded-xl'
        onClick={Say}
      >
        button
      </button>
    </div>
  );
};

export default Task2;
