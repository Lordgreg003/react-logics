import React, { useState } from 'react';
import { image2 } from '../images';
import { image3 } from '../images';
import { image4 } from '../images';
import { image5 } from '../images';
import { image6 } from '../images';

const Task16 = () => {
  let [images, setimages] = useState([image2, image3, image4, image5, image6]);
  let [index, setIndex] = useState(0);
  const [width, setwidth] = useState(30);
  const [height, setheight] = useState(30);
  const handleNext = () => {
    console.log(index, images[index]);
    if (index < images.length) setIndex(++index);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(--index);
  };

  console.log(images);
  return (
    <section className='w-screen h-screen bg-slate-300'>
      <div className='flex flex-col  items-center gap-9'>
        <div>
          <p className='font-bold text-5xl text-green-400'>Picture Editor</p>
        </div>
        <div>
          <img
            src={images[index]}
            style={{ width: `${width}rem`, height: `${height}rem` }}
            alt=''
          />
        </div>
        <div className='flex flex-row gap-10'>
          <button
            onClick={handlePrev}
            className='text-white rounded-md bg-orange-300 p-2'
          >
            Previous
          </button>{' '}
          <button
            className='text-white rounded-md bg-orange-300 p-2'
            onClick={handleNext}
          >
            Next
          </button>
        </div>
        <div className='flex flex-row gap-10'>
          <input
            className='border border-black py-3 px-5 rounded-lg outline-none '
            type='number'
            name=''
            id=''
            placeholder='width'
            value={width}
            onChange={(e) => setwidth(e.target.value)}
          />
          <input
            className='border border-black py-3 px-5 rounded-lg outline-none '
            type='number'
            name=''
            id=''
            placeholder='height'
            value={height}
            onChange={(e) => setheight(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default Task16;
