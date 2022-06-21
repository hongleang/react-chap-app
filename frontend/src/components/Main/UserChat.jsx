import React from 'react'
import classnames from 'classnames'
import dayjs from 'dayjs'
const profilePic = `https://picsum.photos/id/${Math.round(Math.random() * 20)}/300/300`


export default function UserChat({ messages, name }) {
  const messageRef = React.useRef()

  return (
    <>
      {messages && messages?.map((message, key) => (
        <Message ref={messageRef} key={key} message={message} name={name} />
      ))}
    </>
  )
}

const Message = React.forwardRef(({ name, message: { user, text } }, ref) => {
  const flip = name.toLowerCase().trim() === user
  return (
    <div ref={ref} className={classnames("flex w-full space-x-3", { "flex-row-reverse space-x-reverse": flip })}>
      {/* avatar */}
      <div className='w-10 mt-1'>
        <img className="w-full h-auto rounded-full" src={profilePic} alt={name || 'no description'} />
      </div>
      {/* details */}
      <div className='flex-1'>
        <div className={classnames('flex items-center space-x-2', { 'flex-row-reverse space-x-reverse': flip })}>
          <h3 className='text-sm'>{user}</h3>
        </div>
        <div className={classnames('mt-2 flex flex-col space-y-2', { 'items-start': !flip, 'items-end': flip })}>
          {text.map((t, key) => {
            return <div key={`text-${key}`} className={classnames('rounded-tl-none rounded-lg flex-auto p-2', { 'bg-gray-300': !flip, 'bg-purple-500 text-white': flip })}>
              <small className='text-sm font-normal'>{t}</small>
            </div>
          })}

        </div>
      </div>
      {/* timestamp */}
    </div>
  )
})
