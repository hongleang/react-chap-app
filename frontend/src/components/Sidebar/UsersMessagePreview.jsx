import React from 'react'

import dayjs from 'dayjs';

export default function UsersMessagePreview({ user }) {
    return (
        <div className='flex w-full h-25 py-3'>
            {/* avatar */}
            <div className='w-16'>
                <img className="w-full h-auto rounded-full" src={user.profilePic} alt={user.name || 'no description'} />
            </div>
            {/* details */}
            <div className='flex-1 pt-2 pl-5'>
                <h3 className='text-lg font-bold'>{user.name}</h3>
                <small className='text-sm text-gray-600'>Lorem, ipsum dolor.</small>
            </div>
            {/* timestamp */}
            <div className='flex-none w-1/4 p-2 flex items-center justify-center'>
                <small className='text-xs text-gray-600'>{dayjs().format('DD/MM/YYYY')}</small>
            </div>
        </div>
    )
}
