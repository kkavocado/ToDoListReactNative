// components/AppContext.js
import React, { createContext, useState, useContext } from "react";

export const AppContext = createContext();


const AppProvider = ({ children }) => {

    const [data, setData] = useState([])

    return (
        <AppContext.Provider value={{ data, setData }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider

export const useAppContext = () => useContext(AppContext)