import React from 'react';

const Task3 = () => {
  const MyArray = ['hi', 'hello', 'we'];
  const Chidera = () => {
    console.log(MyArray.length);
  };
  Chidera();

  const Chisom = () => {
    return MyArray.length;
  };

  const Ebuka = () => MyArray.length;
  return (
    <div>
      <div className=''>{MyArray.length}</div>
      {Chisom()}
      {Ebuka()}
    </div>
  );
};

export default Task3;
