import React from 'react';
import circleVector from '../../assets/images/circle-frame.png';
import Header from '../Header';
import SidebarSettings from './SidebarSettings';

const SettingsLayout = ({children, hasPageVector, author, headerDropdownItems}) => {
  return (
    <main class="bg-body min-h-screen w-full max-w-full overflow-hidden flex">
      <SidebarSettings />
      <div class="flex-grow max-w-full relative md:pl-[86px] xl:pl-[295px] pb-20">
        <Header author={author} dropdownItems={headerDropdownItems} />
        <section class="py-4 pl-5 sm:pl-8 lg:pl-15 pr-5 sm:pr-6 lg:pr-9 space-y-30px relative">
          {children}
        </section>
        {hasPageVector && <figure class="absolute -left-32 md:-left-3 xl:left-44 -bottom-36 md:-bottom-32">
          <img src={circleVector} alt="Circle frame" />
        </figure>}
      </div>
    </main>
  )
}

export default SettingsLayout;