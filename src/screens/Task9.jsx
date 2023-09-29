import React from 'react';

const Task9 = () => {
  const MyArray = ['chigozie', 'chiemelie', 'somtoo'];
  const yourday = ['chidera', 'chisom'];
  const myCob = [...MyArray, ...yourday];

  return (
    <div>
      {myCob} <div>{myCob.length}</div>
      <div>
        {myCob.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Task9;
