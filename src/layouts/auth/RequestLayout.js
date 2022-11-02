import React from 'react';
import ArrowVectorUp from '../../assets/images/arrow-frame-up.png';
import CircleVector from '../../assets/images/circle-frame.png';
import Logo from '../../assets/images/LogoSquare.png';

const RequestLayout = ({children, title}) => {
  return (
    <main className="bg-body w-full max-w-full overflow-hidden">
      <div className="container px-6  py-16 sm:py-28 min-h-screen mx-auto relative  flex items-center">
        <div className="absolute top-0 left-auto md:left-[184px] right-0 md:right-auto w-3/5 md:w-auto">
          <img src={ArrowVectorUp} alt="Arrow vector up" />
        </div>
        <div className="absolute top-[400px] md:top-[558px] left-0 w-1/4 sm:w-auto">
          <img src={CircleVector} alt="Circle vector" />
        </div>
        <div className="w-[320px] rounded-2xl bg-white shadow-main p-30px space-y-5 sm:ml-20 relative z-10">
          <figure className="-mt-16 -mb-1">
            <img src={Logo} alt="Logo" />
          </figure>
          <h2 className="font-normal capitalize">{title}</h2>
            {children}
        </div>
      </div>
    </main>
  )
}

export default RequestLayout;