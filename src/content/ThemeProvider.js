import { createContext, useState } from "react";

// tạo context
const ThemeContext = createContext()

// Viết hàm xử lý toggle Theme
function ThemeProvider ({children}) {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const value = {
        theme,
        toggleTheme
    }

    return (
        //Tạo provider
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}



export {ThemeContext, ThemeProvider}