"use client"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-theme"
import { ThemeProviderProps } from "next-theme/dist/provider/index.props"
import AuthProvider from "./AuthProvider"

const ContextProvider = ({ children }: ThemeProviderProps) => {
    return (
        <>
            <ThemeProvider defaultTheme="light">
                <SessionProvider>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </SessionProvider>
            </ThemeProvider>
        </>
    )
}

export default ContextProvider