import React from 'react';
import { HiPaperAirplane } from "react-icons/hi";
import UserChat from './UserChat';

export default function Main({ socket, messages, name }) {
  const [inputVal, setInputVal] = React.useState('');


  const onChange = (event) => {
    if (event.target.value !== inputVal) {
      setInputVal(event.target.value)
    }
  }

  const sendMessage = (event) => {
    if ((event.charCode === 13 && inputVal !== '') || event.type === 'click') {
      event.preventDefault()
      socket.emit('sendMessage', inputVal)
      setInputVal('')
    }
  }

  return (
    <div className='flex flex-col h-full'>
      <div className='flex-1 flex flex-col space-y-8 max-h-[650px] p-4 bg-gray-100 border-2 overflow-auto'>
        {messages.filter(msg => msg.type === 'welcome').map((msg, key) => (
          <div key={'welcome-msg' + key} className="flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">{msg.msg}</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
        ))}
        {messages.filter(msg => msg.type !== 'welcome').length > 0 && (
          <UserChat messages={messages.filter(msg => msg.type !== 'welcome')} name={name}/>
        )}
      </div>
      <div className='relative text-md text-gray-400 flex-none h-20 p-8 flex justify-center items-center shadow-xs border-2'>
        <div className='flex absolute right-12 origin-center rotate-45  items-center cursor-pointer'>
          <HiPaperAirplane className='text-green-600 hover:scale-110 z-10' fontSize={20} onClick={sendMessage} />
        </div>
        <input
          className="block p-3 w-full bg-gray-100 rounded-xl border border-gray-300 focus:ring-blue-500 outline-none focus:border-blue-500"
          autoComplete='off'
          placeholder="Your message..."
          value={inputVal}
          id="search-filter"
          onChange={onChange}
          onKeyPress={sendMessage}
        />
      </div>
    </div>
  )
}
