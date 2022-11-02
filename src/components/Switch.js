import React, { useState } from 'react';

const Switch = (props) => {
    const [isChecked, setIsChecked] = useState(false)
    const {name, label, handleOnchange} = props;
    const handleChange = (e) => {
        let val = e.target.checked;
        setIsChecked(val);
        handleOnchange(isChecked);
    }
  return (
    <div className="w-full flex items-center relative">
        <input type="checkbox" id={name} name={name} className="sr-only peer" checked={isChecked} onChange={handleChange} />
        {label &&
            <label htmlFor={name} className="flex items-center h-5 cursor-pointer font-normal text-label text-xs pl-[50px] relative before:absolute before:left-0 before:w-10 before:h-5 before:bg-theme-gray before:transition-all before:duration-500 before:rounded-[6px] peer-checked:before:bg-theme-red after:w-[15px] after:h-[15px] after:rounded-[4px] after:absolute after:top-[2px] after:bottom-[2px] after:left-[3px] after:transition-all after:duration-500 after:bg-white peer-checked:after:left-[22px]">{label}</label>
        }
    </div>
  )
}

export default Switch