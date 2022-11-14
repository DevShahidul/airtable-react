import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({expand, items}) => {
  return (
    <div className={`${!expand ? 'hidden' : ''} absolute right-0 top-full mt-3 z-10 bg-white rounded-2xl shadow-main py-1 space-y-2 min-w-[220px]`}>
        {items && items.map((item, index) =>
        <>
            <Link to={item.path} className="group flex items-center justify-end w-full px-8 py-3 space-x-4 text-label hover:bg-primary hover:text-white rounded">
                <span className="inline-block">{item.text}</span>
                <figure className="w-6 h-6 flex items-center justify-center">
                    {item.icon}
                    {/* <img src="../images/settings-black.png" alt="Key icon black" className="group-hover:hidden" />
                    <img src="../images/settings-white.png" alt="Key icon black" className="hidden group-hover:block" /> */}
                </figure>
            </Link>
            {items.length !== index && <div className="w-full h-[1px] bg-[#11072C] opacity-10"></div>}
        </>
        )}
        {/* <div className="w-full h-[1px] bg-[#11072C] opacity-10"></div>
        <Link to="/login" className="group flex items-center justify-end w-full px-8 py-3 space-x-4 hover:bg-primary hover:text-white rounded">
        <span className="inline-block">Logout</span>
        <figure className="w-6 h-6 flex items-center justify-center">
            <img src="../images/close-black.png" alt="Close icon black" className="group-hover:hidden" />
            <img src="../images/close-white.png" alt="Close icon black" className="hidden group-hover:block" />
        </figure>
        </Link> */}
    </div>
  )
}

export default Dropdown;