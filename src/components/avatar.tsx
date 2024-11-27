"use client"
import { useState } from 'react'
import Image from 'next/image'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'

interface AvatarProps {
  data: Session
}

const AvatarCust = ({ data }: AvatarProps) => {
  const [userMenu, setUserMenu] = useState<boolean>(false)

  const handleUserMenuBtn = () => {
    setUserMenu(prev => !prev)  // Toggle the user menu state
  }
  const handleSignOut=()=>{
    signOut()
  }

  return (
    <div data-testid="avatar" className="relative">
      {/* Avatar Button */}
      <button 
        type="button" 
        onClick={handleUserMenuBtn} 
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        aria-expanded={userMenu ? "true" : "false"}
      >
        <span className="sr-only">Open user menu</span>
        <Image 
          className="w-8 h-8 rounded-full" 
          width={32} 
          height={32} 
          src={data.user?.image ?? ""} 
          alt="user photo" 
          unoptimized 
        />
      </button>

      {/* User Menu */}
      {userMenu && (
        <div className="z-50 right-0 top-8 absolute my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">{data.user?.name}</span>
            <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{data.user?.email}</span>
          </div>

          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a  role='button' onClick={handleSignOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default AvatarCust
