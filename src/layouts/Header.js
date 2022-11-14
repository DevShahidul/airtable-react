import React, { useState } from 'react';
import { Dropdown } from '../components';
import { ChevronDown } from '../components/icons';

const Header = ({author, dropdownItems}) => {
    const [dropdownExpand, setDropdownExpand] = useState(false)
  return (
    <header className="w-full flex py-15px px-5">
        <div className="flex items-center ml-auto space-x-4 relative">
            <span className="bg-blue-10 rounded px-4 py-1 inline-block text-sm">{author.name}</span>
            <figure className="rounded-full w-10 h-10 flex items-center justify-center bg-[#F7F7F7]">
                <img src={author.img} alt="Jenny" className="w-full h-full object-cover object-center" />
            </figure>
            <button onClick={() => setDropdownExpand(!dropdownExpand)} className="flex w-6 h-6 items-center justify-center cursor-pointer text-label">
                <ChevronDown className="w-[10px] h-[6px]" color="currentColor" />
                {/* <img src="../images/chevron-down.png" alt="Chevron down" className="w-[10px] h-[6px]" /> */}
            </button>
            <Dropdown items={dropdownItems} expand={dropdownExpand}  />
        </div>
    </header>
  )
}

export default Header