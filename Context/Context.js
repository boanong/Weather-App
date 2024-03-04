import { createContext, useContext, useState, useEffect } from "react";
import { getDefaultLocation } from "../Services/utils";
import getWeatherData, { getCurrentWeather } from "../Services/weather/weather.api";
import { getIconUrl } from "../Services/weather/functions";

const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
    const [days, setDays] = useState([]); // example ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs']
    const [weatherForeCast, setWeatherForeCast] = useState(null);
    const [currentDay, setCurrentDay] = useState(""); // is equivalent to ARRAY_DAYS[new Date().getDay()];
    const [todaysWeather, setTodaysWeather] = useState([]);
    const [location, setLocation] = useState(null);
    const [currentWeather, setCurrentWeather] = useState({
        dt_txt: '',
        temp: '',
        description: '',
        wind_speed: '',
        pressure: '',
        humidity: '',
        icon_url: '',
    });  // the users current weather. not a forecast

    const updateWeatherStates = (lat, lon) => {
        getWeatherData(lat, lon)
            .then((res) => {
                const { _5_day_weather, sorted_days, today, location: loc } = res; // loc is an alias to location to avoid conflicting with location from context
                setWeatherForeCast(_5_day_weather);
                setTodaysWeather(_5_day_weather[today]);
                setDays([...sorted_days]);
                setCurrentDay(today);
                setLocation(loc)
            })
            .catch(console.log);
    }

    const updateStatesAndCurrentLocation = async (lat, lon) => {
        const res = await getCurrentWeather(lat, lon);

        console.clear();
        console.log("res", res);

        const res_data = {
            dt_txt: res.dt_txt,
            temp: res.main.temp,
            description: res.weather[0].description,
            wind_speed: res.wind.speed,
            pressure: res.main.pressure,
            humidity: res.main.humidity,
            icon_url: getIconUrl(res.weather[0].icon),
        }

        setCurrentWeather(res_data);

        updateWeatherStates(lat, lon);
    }

    const getLocation = async () => {
        const location = await getDefaultLocation(); // get's user's location.

        // console.log("location", location); // see ipgeolocation response.
        const lat = location.latitude;
        const lon = location.longitude;

        updateStatesAndCurrentLocation(lat, lon);
    };

    useEffect(() => {
        getLocation();
    }, []);

    useEffect(() => {
        if (currentDay && weatherForeCast) {
            setTodaysWeather(weatherForeCast[currentDay]);
        }
    }, [currentDay]);

    return <AppContext.Provider value={{
        days,
        setDays,

        currentWeather,
        location,

        currentDay,
        setCurrentDay,

        weatherForeCast,
        setWeatherForeCast,

        todaysWeather,
        setTodaysWeather,

        updateStatesAndCurrentLocation,
    }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => useContext(AppContext);

export {
    AppContextProvider,
    useAppContext
}
