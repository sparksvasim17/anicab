import React, { createContext, useContext, useState } from "react";


const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
};
//custom hook
const useTheme = () => useContext(ThemeContext);


export { useTheme, ThemeProvider };
