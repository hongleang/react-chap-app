import React from 'react'
import { HiOutlinePencilAlt, HiOutlineSearch } from "react-icons/hi";

import UsersMessagePreview from './UsersMessagePreview';

import { fake_users } from './data';

export default function Sidebar() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const filterByName = (user) => searchTerm === '' ? true : user?.name?.toLowerCase().includes(searchTerm.toLowerCase());

  const onSearch = (event) => event.target.value !== searchTerm && setSearchTerm(event.target.value)

  return (
    <div className='p-4 overflow-auto max-h-screen'>
      <div className='flex justify-between items-center mb-3'>
        <h3 className='text-3xl font-bold'>Messages</h3>
        <HiOutlinePencilAlt color='stroke-green-500' fontSize={30} />
      </div>
      <div className='relative text-md text-gray-400 my-6'>
        <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
          <HiOutlineSearch color='gray' fontSize={20} />
        </div>
        <input
          className="block p-3 pl-10 w-full bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 outline-none focus:border-blue-500" placeholder="Search User"
          value={searchTerm}
          type="search"
          id="search-filter"
          onChange={onSearch}
        />
      </div>
      <div className='flex flex-col items-center justify-between space-y-3 divide-y'>
        {fake_users && fake_users.filter(filterByName).map(user => (
          <UsersMessagePreview key={`user-preiview-${user.id}`} user={user} />
        ))}
      </div>
    </div>
  )
}
