"use client"
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { createContext, ReactNode, useEffect } from "react";

interface AuthHooks{
    session?:Session|null;
}
export const AuthContext=createContext({}as AuthHooks)
const AuthProvider = ({children}:{
    children:ReactNode
}) => {
    const {data: session}=useSession()
    const router=useRouter();
   useEffect(()=>{
    if(session==null){
      router.push("/")
    }
   },[session, router])
  return (
    <AuthContext.Provider value={{session}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider