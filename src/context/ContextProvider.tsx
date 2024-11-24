"use client"
import { ThemeProvider } from "next-theme"
import { ThemeProviderProps } from "next-theme/dist/provider/index.props"

const ContextProvider = ({ children }: ThemeProviderProps) => {
    return (
        <>
            <ThemeProvider defaultTheme="light">
                {children}
            </ThemeProvider>
        </>
    )
}

export default ContextProvider