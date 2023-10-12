import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [weather, setWeather] = useState([]);

    return <AppContext.Provider value={{
        data,
        setData,
        weather,
        setWeather
    }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => useContext(AppContext);


export {
    AppContextProvider,
    useAppContext
}