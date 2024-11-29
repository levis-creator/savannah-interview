"use client"
import { Session } from "next-auth"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

import { createContext, ReactNode, useEffect, useState } from "react"

interface AuthHooks{
    session?:Session|null;
}
export const AuthContext=createContext({}as AuthHooks)
const AuthProvider = ({children}:{
    children:ReactNode
}) => {
    const {data: session}=useSession()
    const [isLogin, setIsLogin]=useState(false)
    const router=useRouter();
  
  return (
    <AuthContext.Provider value={{session}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider