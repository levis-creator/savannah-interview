'use client'
import React, { useState } from 'react'
import { NavList } from './navlist'
import Link from 'next/link'
import $ from 'jquery';
import Image from 'next/image';
import Logo from "@/assets/logo.png";
import { Moon, Sun } from 'react-feather';
import useTheme from 'next-theme';
import { useRouter } from 'next/navigation';

const NavBar = () => {
    const [toggleOpen, setToggleOpen] = useState<boolean>(false);
    const [userMenu, setUserMenu]=useState<boolean>(false)
    const [themeBtn, setThemeBtn]=useState<boolean>(false)
    const {setTheme}=useTheme();
    const router= useRouter()
    const handleToggleBtn = () => {
        setToggleOpen(!toggleOpen)
        if (toggleOpen == true) {
            $('#navbar-user').removeClass("hidden")
        } else {
            $('#navbar-user').addClass("hidden")
        }
    }
    const handleUserMenuBtn=()=>{
        setUserMenu(!userMenu)
        if(userMenu){
            $('#user-dropdown').removeClass("hidden")
        }else{
            $('#user-dropdown').addClass("hidden")
        }
    }
    function handleChangeTheme() {
        
        setThemeBtn(!themeBtn)
        if(themeBtn){
            setTheme("light")
        }else{
            setTheme("dark")
        }
    }
    
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={Logo} className="h-8 w-auto" alt="Flowbite Logo" width={0} height={0} unoptimized  />
                </a>
                <div className="flex gap-6 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button className='dark:text-slate-400' onClick={handleChangeTheme}>
                        {
                            themeBtn?(<Moon/>):
                        (<Sun />)
                        }
                    </button>
                    <div className="relative">
                    <Link href={"/signup"} className='bg-blue-600 text-white px-6 py-3 rounded-full shadow'>
                        SignUp
                    </Link>
                    
                    {/* avatar */}
{/*                     
                    <button type="button" onClick={handleUserMenuBtn} className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                    </button> */}
                    {/* user menu item */}
                    <div className="z-50 right-0 top-8 absolute hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
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
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>
                    </div>
                    {/* toggle menu */}
                    <button data-collapse-toggle="navbar-user" onClick={handleToggleBtn} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {
                            NavList.map((navitem, i) => (
                                <li key={i}>
                                    <Link href={`${navitem.path}`} className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${(router.pathname==navitem.path)?"dark:border-gray-700 border-b-2 dark:border-b-white border-black":""}` } >{navitem.navName}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default NavBar