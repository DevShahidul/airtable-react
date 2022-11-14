import React from 'react';

const Button = (props) => {
  const {text, ...btnProps} = props;
  return (
    <button {...btnProps} className={`h-11 px-6 transition-all duration-300 flex justify-center items-center text-sm font-bold rounded text-white disabled:bg-theme-gray disabled:text-disabled disabled:cursor-not-allowed ${props.className}`}>{text ? text : props.children}</button>
  )
}

export default Button