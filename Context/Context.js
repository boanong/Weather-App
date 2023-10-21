import { createContext, useContext, useState, useEffect } from "react";
import { getDefaultLocation } from "../Services/utils";

const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
    const [days, setDays] = useState(['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY']);
    const [weatherForeCast, setWeatherForeCast] = useState(null);
    const [currentDay, setCurrentDAy] = useState(""); // is equivalent to new Date().toLocaleDateString('en-US', { weekday: "long" });
    const [todaysWeather, setTodaysWeather] = useState([]);
    const [location, setLocation] = useState(null);

    useEffect(() => {
        if (currentDay && weatherForeCast) {
            setTodaysWeather(weatherForeCast[currentDay]);
        }
    }, [currentDay]);

    return <AppContext.Provider value={{
        days,
        setDays,

        currentDay,
        setCurrentDAy,

        weatherForeCast,
        setWeatherForeCast,

        todaysWeather,
        setTodaysWeather,
    
        location,
        setLocation,
    }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => useContext(AppContext);

export {
    AppContextProvider,
    useAppContext
}
