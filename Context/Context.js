import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
    const [days, setDays] = useState(['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY']);
    const [weatherForeCast, setWeatherForeCast] = useState([]);
    const [todaysWeather, setTodaysWeather] = useState([]);

    return <AppContext.Provider value={{
        days,
        setDays,

        weatherForeCast,
        setWeatherForeCast,

        todaysWeather,
        setTodaysWeather
    }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => useContext(AppContext);


export {
    AppContextProvider,
    useAppContext
}