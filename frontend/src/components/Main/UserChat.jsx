import React from 'react'
import classnames from 'classnames'
import dayjs from 'dayjs'

import { fake_users } from '../Sidebar/data'

export default function UserChat({ flip }) {
  const { name, profilePic } = fake_users[0]

  return (
    <>
      <div className={classnames("flex w-full space-x-3", { "flex-row-reverse space-x-reverse": flip })}>
        {/* avatar */}
        <div className='w-16 mt-1'>
          <img className="w-full h-auto rounded-full" src={profilePic} alt={name || 'no description'} />
        </div>
        {/* details */}
        <div className='flex-1'>
          <div className={classnames('flex items-center space-x-2', { 'flex-row-reverse space-x-reverse': flip })}>
            <h3 className='text-lg font-bold'>{name}</h3>
            <small className='text-xs mt-1 text-gray-400'>{dayjs().format('hh: mm a')}</small>
          </div>
          <div className={classnames('mt-2 flex flex-col space-y-4', {'items-start': !flip, 'items-end': flip})}>
            <div className='bg-gray-300 rounded-tl-none rounded-lg flex-auto p-3 '>
              <small className='text-sm font-normal text-black'>Lorem, ipsum dolor.</small>
            </div>
            <div className='bg-gray-300 rounded-tl-none rounded-lg flex-auto p-3 '>
              <small className='text-sm font-normal text-black'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis consectetur, tenetur veniam voluptatibus hic molestias doloribus blanditiis sapiente quod. Temporibus provident soluta, eligendi porro nesciunt aspernatur inventore eaque quam facilis?
              </small>
            </div>
            <div className='bg-gray-300 rounded-tl-none rounded-lg flex-auto p-3 '>
              <small className='text-sm font-normal text-black'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis consectetur, tenetur veniam voluptatibus hic molestias doloribus blanditiis sapiente quod. Temporibus provident soluta, eligendi porro nesciunt aspernatur inventore eaque quam facilis?
              </small>
            </div>
            <div className='bg-gray-300 rounded-tl-none rounded-lg flex-auto p-3 '>
              <small className='text-sm font-normal text-black'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis consectetur, tenetur veniam voluptatibus hic molestias doloribus blanditiis sapiente quod. Temporibus provident soluta, eligendi porro nesciunt aspernatur inventore eaque quam facilis?
              </small>
            </div>
          </div>
        </div>
        {/* timestamp */}
      </div>
    </>
  )
}
