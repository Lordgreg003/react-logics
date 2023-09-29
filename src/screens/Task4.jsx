import React from 'react';

const Task4 = () => {
  const MyArry = ['hi', 'hello', 'his'];
  const chidera = () => {
    return MyArry.map((item, i) => (
      <p key={i}>
        {item}
        {i}
      </p>
    ));
  };

  const ebuka = () => {
    MyArry.push('my day');
    console.log(MyArry);
  };
  return (
    <div>
      {chidera()}
      <div>
        {MyArry.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
      <div>
        <button className='' onClick={ebuka}>push</button>
      </div>
    </div>
  );
};

export default Task4;
