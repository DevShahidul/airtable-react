import React, { useState } from 'react';
import eyeIcon from '../assets/images/eye-black.png';

const InputField = (props) => {
    const {errorMessage, name, type, ...inputProps} = props;
    const [isShow, setIsShow] = useState(false);

    const handleShow = (e) => {
        e.preventDefault();
        setIsShow(!isShow);
    }

    return (
        <div className="space-y-[5px] w-full">
            {props?.label &&
                <label htmlFor={name} className="font-bold text-label text-xs">{props?.label}</label>
            }
            {
                props?.icon ? (
                <div className="w-full relative">
                    <input {...inputProps} name={name} type={isShow ? 'text' : type} className={`peer py-3 px-4 border invalid:border-theme-red border-theme-gray rounded-[10px] text-sm text-label font-normal w-full focus:outline-none focus:shadow-none focus:border-primary`}/>
                    <button type="button" className={`absolute right-4 top-3 w-6 h-6 cursor-pointer z-10 ${isShow && 'shownLine'}`} onClick={handleShow}>
                        <img src={eyeIcon} alt="Eye icon" />
                    </button>
                    {name === 'password' ?
                        <p className="text-label peer-invalid:text-theme-red font-bold text-xs -mr-2 mt-[5px]">{errorMessage}</p> : <p className="text-theme-red hidden peer-invalid:block font-bold text-xs -mr-2 mt-[5px]">{errorMessage}</p>
                    }
                </div>
                ) : (
                <React.Fragment>
                    <input {...inputProps} name={name} type={type} className={`peer py-3 px-4 border invalid:border-theme-red border-theme-gray rounded-[10px] text-sm text-label font-normal w-full focus:outline-none focus:shadow-none focus:border-primary`}/>
                    {name === 'password' ?
                        <p className="text-label peer-invalid:text-theme-red font-bold text-xs -mr-2">{errorMessage}</p> : <p className="text-theme-red hidden peer-invalid:block font-bold text-xs -mr-2">{errorMessage}</p>
                    }
                </React.Fragment>
                )
            }
        </div>
    )
}

export default InputField