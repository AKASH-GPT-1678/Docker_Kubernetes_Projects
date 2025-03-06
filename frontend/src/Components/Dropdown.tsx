import React from 'react'
import { LogOut } from 'lucide-react'
import { Settings } from 'lucide-react';
import { User } from 'lucide-react';

const Dropdown = () => {
  return (
    <div className='w-[150px] h-[100px] flex flex-col gap-2 bg-white '>
        <div className='flex flex-row items-center gap-2 cursor-pointer hover:bg-gray-200 p-3 pr-2'>
          <User />
          <h4>Your Profile</h4>
        </div>
        <div className='flex flex-row items-center gap-2 cursor-pointer hover:bg-gray-200 p-3 pr-2'>
          <Settings />
          <h4>Settings</h4>
        </div>
        <div className='flex flex-row items-center gap-2 cursor-pointer hover:bg-gray-200 p-3 pr-2'>
          <LogOut />
          <h4>Sign Out</h4>
        </div>

      
    </div>
  )
}

export default Dropdown
