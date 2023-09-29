import React, { useState } from 'react';
import { image1 } from '../images';

const Task15 = () => {
  const [borderradius, setborderradius] = useState('0rem');
  const [bordercolour, setbordercolour] = useState('black');
  const [visibilitY, setvisibility] = useState(false);
  const [borderwidth, setborderwidth] = useState('0px');
  const [width, setwidth] = useState('20rem');
  const [height, setheight] = useState('20rem');
  let [radius, setradius] = useState(2);
  let [borderwidthw, setborderwidthw] = useState(1);
  console.log(width);

  const visibility1 = () => {
    if (visibilitY === false) {
      setvisibility('hidden');
    } else {
      setvisibility('visible');
    }
  };

  const increaseradius = () => {
    setradius(++radius);
    setborderradius(`${radius}rem`);
  };

  const decreaseradius = () => {
    setradius(--radius);
    setborderradius(`${radius}rem`);
  };

  const increborderwidth = () => {
    setborderwidthw(++borderwidthw);
    setborderwidth(`${borderwidthw}rem`);
    console.log(borderwidthw);
  };

  const decreborderwidth = () => {
    setborderwidthw(--borderwidthw);
    setborderwidth(`${borderwidthw}rem`);
    console.log(borderwidthw);
  };
  return (
    <>
      <section>
        <div className='flex flex-row justify-center w-screen h-screen bg-slate-200'>
          <div className=' flex flex-col gap-10 justify-center'>
            {' '}
            <div>
              <p className=' font-bold text-4xl text-gray-500'>
                Picture Editor
              </p>
            </div>
            <div>
              <img
                style={{
                  borderColor: bordercolour,
                  borderRadius: borderradius,
                  width: width,
                  height: height,
                  borderWidth: borderwidth,
                  visibility: visibilitY,
                }}
                src={image1}
                alt=''
              />
            </div>
            <div>
              <button
                className='border py-3 px-3 bg-black text-white rounded-2xl'
                onClick={visibility1}
              >
                Toggle Visibility
              </button>
            </div>
            <div>
              <input
                className='border border-black py-2 rounded-lg w-1/3'
                type='number'
                name=''
                id=''
                placeholder='height'
                value={height}
                onChange={(e) => setheight(e.target.value)}
              />
              <input
                className='border border-black py-2 rounded-lg w-1/3'
                type='number'
                name=''
                id=''
                placeholder='width'
                value={width}
                onChange={(e) => setwidth(e.target.value)}
              />
            </div>
            <div>
              <button
                className='border py-3 px-5 bg-black text-white rounded-2xl'
                onClick={increaseradius}
              >
                border radius increase
              </button>
              <button
                className='border py-3 px-5 bg-black text-white rounded-2xl'
                onClick={decreaseradius}
              >
                border radius decrease
              </button>
            </div>
            <div>
              <button
                className='border py-3 px-5 bg-black text-white rounded-2xl'
                onClick={increborderwidth}
              >
                border width increase
              </button>
              <button
                className='border py-3 px-5 bg-black text-white rounded-2xl'
                onClickCapture={decreborderwidth}
              >
                border width decrease
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Task15;
