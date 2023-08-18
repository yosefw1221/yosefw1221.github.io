import React from 'react';

export default function HamburgerIcon({isOpen,onClick,...props}:any) {
  return (
    <button {...props}  onClick={onClick}>
        <div className={`relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 ${isOpen && 'ring-4'} ring-opacity-30 duration-200 shadow-md`}>
        <div className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 ${isOpen && '-rotate-[45deg]'} origin-center`}>
          <div className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${isOpen && '-rotate-90 h-[1px] -translate-y-[1px]'} origin-right delay-75`}/>
            <div className='bg-white h-[1px] rounded'/>
        <div className={`bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${isOpen && '-rotate-90 h-[1px] translate-y-[1px]'} origin-left delay-75`}/>
          </div>
        </div>
      </button>
  )
}
