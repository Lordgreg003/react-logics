import React, { useEffect, useState } from 'react';

const Task8 = () => {
  const myarray = [];
  const ebuka = () => {
    for (let index = 1; index < 21; index++) {
      myarray.push(index);
    }
  };
  ebuka();
  return (
    <div>
      <div>
        {myarray.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Task8;
