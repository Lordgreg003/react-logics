import React, { useState } from 'react';

const Task14 = () => {
  let [boxheight, setboxheight] = useState('');
  let [boxwidth, setboxwidth] = useState('');
  const [boxheightw, setboxheightw] = useState('2rem');
  const [boxwidthw, setboxwidthw] = useState('2rem');
  let [height, setheight] = useState(2);
  let [width, setwidth] = useState(2);

  const increaseheight = () => {
    setheight(++height);
    setboxheightw(`${height}rem`);
    setboxheight(`${height}rem`);
    console.log(height);
  };

  const increasewidth = () => {
    setwidth(++boxwidth);
    setboxwidthw(`${width}rem`);
    setboxheight(`${width}rem`);
    console.log(width);
  };

  const decreaseheight = () => {
    setheight(--boxheight);
    setboxheightw(`${height}rem`);
    setboxheight(`${height}rem`);
    console.log(height);
  };

  const decreasewidth = () => {
    setwidth(--boxwidth);
    setboxwidthw(`${width}rem`);
    setboxheight(`${width}rem`);
    console.log(width);
  };

  return (
    <div className='w-screen h-screen flex flex-row justify-center items-center'>
      <div className='flex flex-col w-1/4 gap-10'>
        <div>
          {' '}
          <div
            className={`border-2 border-black rounded-md`}
            style={{ height: boxheightw, width: boxwidthw }}
          ></div>
        </div>
        <in
          put
          className='border  py-3 px-16 border-[black] rounded-md'
          type='number'
          name=''
          id=''
          value={boxheight}
          onChange={(event) => setboxheight(event.target.value)}
        />
        <input
          className='border py-3 px-16 border-[black] rounded-md'
          type='number'
          name=''
          id=''
          value={boxwidth}
          onChange={(event) => setboxwidth(event.target.value)}
        />
        <input
          className='border py-3 px-16 border-[black] rounded-md'
          type='number'
          name=''
          id=''
        />
        <input
          className='border py-3 px-16 border-[black] rounded-md'
          type='number'
          name=''
          id=''
        />
      </div>
      <div className='flex flex-col gap-10 w-1/5 pt-16'>
        <button
          className='bg-orange-300 text-white rounded-md p-2 font-bold'
          onClick={increaseheight}
        >
          increase height
        </button>
        <button
          className='bg-gray-300 text-white rounded-md p-2 font-bold'
          onClick={increasewidth}
        >
          increase width
        </button>
        <button
          className='bg-blue-300 text-white rounded-md p-2 font-bold'
          onClick={decreaseheight}
        >
          decrease hight
        </button>
        <button
          className='bg-green-300 text-white rounded-md p-2 font-bold'
          onClick={decreasewidth}
        >
          decrease width{' '}
        </button>
      </div>

      <div>{boxheight}</div>
    </div>
  );
};

export default Task14;
