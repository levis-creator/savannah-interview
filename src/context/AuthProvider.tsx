"use client"
import { Session } from "next-auth";
import { useSession } from "next-auth/react";

import { createContext, ReactNode } from "react";

interface AuthHooks{
    session?:Session|null;
}
export const AuthContext=createContext({}as AuthHooks)
const AuthProvider = ({children}:{
    children:ReactNode
}) => {
    const {data: session}=useSession()
  return (
    <AuthContext.Provider value={{session}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider