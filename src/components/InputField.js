import React from 'react';

const InputField = (props) => {
    const {isError, errorMessage, name, type, placeholder, handleOnchange, inputValue} = props;
    return (
        <div className="space-y-[5px] w-full">
            {props?.label &&
                <label htmlFor={name} className="font-bold text-label text-xs">{props?.label}</label>
            }
            <input name={name} type={type} placeholder={placeholder} className={`py-3 px-4 border ${isError ? 'border-theme-red' : 'border-theme-gray'} rounded-[10px] text-sm text-label font-normal w-full focus:outline-none focus:shadow-none focus:border-primary`} onChange={(e) => handleOnchange(e.target.value)} value={inputValue}/>
            {isError &&
                <span className="text-theme-red font-bold text-xs">{errorMessage}</span>
            }
        </div>
    )
}

export default InputField