import React from 'react';

const HomeScreen = () => {
  const Greet = () => {
    alert('hello');
  };
  const greetwe = 'hello';
  return (
    <div className='h-[100vh] w-full flex flex-col justify-center items-center'>
      <button
        className='border  w-fit px-4 py-2 text-white rounded-xl bg-orange-500'
        onClick={Greet}
      >
        greet
      </button>
      {/* create an anonymous arrow function */}
      <button
        className='border  w-fit px-4 py-2 text-white rounded-xl bg-orange-500'
        onClick={() => {
          alert('hello');
        }}
      >
        greet2
      </button>
      {/* using  variables */}
      <button
        className='border  w-fit px-4 py-2 text-white rounded-xl bg-orange-500'
        onClick={() => {
          alert(greetwe);
        }}
      >
        greet3
      </button>
    </div>
  );
};

export default HomeScreen;
