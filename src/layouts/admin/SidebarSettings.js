import React from 'react';
import { Link } from "react-router-dom";
import ArrowLeft from '../../assets/images/arrow-left.png';
import Logo from '../../assets/images/LogoSquare.png';

const SidebarSettings = ({items}) => {
  return (
      <aside className="h-screen fixed left-0 top-0 z-[9999] -translate-x-full md:translate-x-0 w-[295px] md:w-[86px] xl:w-[295px] py-4 px-6 bg-white shadow-main overflow-y-auto">
        <div className="flex flex-col h-full space-y-[30px]">
          <Link to="/" className="inline-block w-10">
            <img src={Logo} alt="Air Logo" className="w-10 h-10" />
          </Link>
          <div className="w-full flex items-center md:justify-center xl:justify-start space-x-[10px]">
            <Link to="/settings" className="w-6 h-6 min-w-[24px] text-center">
              <img src={ArrowLeft} alt="Arrow left" />
            </Link>
            <h2 className="font-normal md:hidden xl:inline-block">Settings</h2>
          </div>
          <div className="rounded-2xl bg-white md:bg-transparent xl:bg-white shadow-main md:shadow-none xl:shadow-main py-[10px] md:py-0 md:space-y-1 xl:space-y-0 xl:py-[10px]">
            {items && items.map(item =>
              <Link href={item.path} className={`w-full flex rounded items-center group px-4 md:px-[6px] xl:px-4 py-3 md:py-[6px] xl:py-3 hover:bg-primary hover:text-white space-x-[10px]`}>
                <figure className="w-6 h-6 min-w-[24px] flex items-center justify-center">
                  {item.icon}
                </figure>
                <span className="inline-block md:hidden xl:inline-block">API key</span>
              </Link>
            )}
          </div>
        </div>
      </aside>
  )
}

export default SidebarSettings