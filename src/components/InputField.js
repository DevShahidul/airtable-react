import React, { useState } from 'react';
import eyeIcon from '../assets/images/eye-black.png';

const InputField = (props) => {

    const [isShow, setIsShow] = useState(false);

    const handleShow = (e) => {
        e.preventDefault();
        setIsShow(!isShow);
        console.log(e, isShow);
    }

    const {isError, errorMessage, name, type, placeholder, handleOnchange, inputValue} = props;
    return (
        <div className="space-y-[5px] w-full">
            {props?.label &&
                <label htmlFor={name} className="font-bold text-label text-xs">{props?.label}</label>
            }
            {
                props?.icon ? (
                <div className="w-full relative">
                    <input name={name} type={isShow ? 'text' : type} placeholder={placeholder} className={`py-3 px-4 border ${isError ? 'border-theme-red' : 'border-theme-gray'} rounded-[10px] text-sm text-label font-normal w-full focus:outline-none focus:shadow-none focus:border-primary`} onChange={(e) => handleOnchange(e.target.value)} value={inputValue}/>
                    <button type="button" className={`absolute right-4 top-3 w-6 h-6 cursor-pointer z-10 ${isShow && 'shownLine'}`} onClick={handleShow}>
                        <img src={eyeIcon} alt="Eye icon" />
                    </button>
                </div>
                ) : (
                    <input name={name} type={type} placeholder={placeholder} className={`py-3 px-4 border ${isError ? 'border-theme-red' : 'border-theme-gray'} rounded-[10px] text-sm text-label font-normal w-full focus:outline-none focus:shadow-none focus:border-primary`} onChange={(e) => handleOnchange(e.target.value)} value={inputValue}/>
                )
            }
            
            {isError &&
                <span className="text-theme-red font-bold text-xs">{errorMessage}</span>
            }
        </div>
    )
}

export default InputField