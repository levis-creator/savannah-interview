"use client"
import { ThemeProvider } from "next-theme"
import { ThemeProviderProps } from "next-theme/dist/provider/index.props"

const ContextProvider = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <>
            <ThemeProvider >
                {children}
            </ThemeProvider>
        </>
    )
}

export default ContextProvider