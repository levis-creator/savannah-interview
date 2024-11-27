"use client"
import React from 'react'
import { Icon } from '@iconify/react';
import { signIn } from "next-auth/react"

const Login = () => {
    const googleSignIn = () => {
    signIn("google",{redirectTo:"/home"})
    }
 
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign Up to your account
                        </h1>

                        <button onClick={googleSignIn} className="w-full flex gap-2 items-center justify-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <Icon icon="devicon:google" height={30} />
                            With Google
                        </button>



                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login