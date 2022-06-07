import { useState } from 'react';

import { Extra, Main, Sidebar } from './components'

function App() {

  return (
    <div className="flex flex-row flex-wrap h-screen w-screen p-2">
      {/* User side */}
      <div className='sm:w-96 w-20 '>
        <Sidebar />
      </div>
      {/* Main section */}
      <div className='flex-1'>
        <Main />
      </div>
      {/* Extra */}
      <div className='lg:block hidden w-96'>
        <Extra />
      </div>
    </div>
  )
}

export default App
