import React from 'react';

const Button = (props) => {
  const {styles, text, handleClick} = props;
  return (
    <button onClick={handleClick} className={`w-full h-11 px-6 transition-all duration-300 flex justify-center items-center text-sm font-bold rounded ${styles}`}>{text}</button>
  )
}

export default Button