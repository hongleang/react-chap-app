import React from 'react';
import { HiPaperAirplane } from "react-icons/hi";


import UserChat from './UserChat';
export default function Main() {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex-1 flex flex-col space-y-8 max-h-[650px] p-4 bg-gray-100 border-2 overflow-auto'>
        <div className="flex py-5 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400 uppercase text-sm">Today</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <UserChat />
        <UserChat flip/>
      </div>
      <div className='relative text-md text-gray-400 flex-none h-20 p-8 flex justify-center items-center shadow-xs border-2'>
        <div className='flex absolute right-12 origin-center rotate-45  items-center cursor-pointer'>
          <HiPaperAirplane className='text-green-600 hover:scale-110 z-10' fontSize={20} />
        </div>
        <input
          className="block p-3 w-full bg-gray-100 rounded-xl border border-gray-300 focus:ring-blue-500 outline-none focus:border-blue-500"
          placeholder="Your message..."
          // value={searchTerm}
          type="search"
          id="search-filter"
        // onChange={onSearch}
        />
      </div>
    </div>
  )
}
