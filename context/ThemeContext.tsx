import { createContext, ReactElement, useEffect, useState } from "react"

const isDarkInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('rdatos-theme')
        if (typeof storedPrefs === 'string') {
            return storedPrefs === 'dark'
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
        if (userMedia.matches) {
            return true
        }
    }
    return false;
}

export const ThemeContext = createContext({
    isDarkTheme: isDarkInitialTheme(),
    toggleThemeHandler: () => { }
})

interface ThemePropsInterface {
    children?: JSX.Element | Array<JSX.Element>
}

export function ThemeProvider(props: ThemePropsInterface): ReactElement {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    useEffect(()=>{
        rawSetTheme(isDarkInitialTheme())
    })

    const rawSetTheme = (isDark: boolean) => {
        const root = window.document.documentElement

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(isDark ? 'dark' : 'light')
        root.setAttribute("data-theme", isDark ? 'dark' : 'light')

        localStorage.setItem('rdatos-theme', isDark ? 'dark' : 'light')
    };

    function toggleThemeHandler(): void {
        rawSetTheme(!isDarkTheme)
        setIsDarkTheme(!isDarkTheme)
    }


    return (
        <ThemeContext.Provider value={{  isDarkTheme, toggleThemeHandler }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext