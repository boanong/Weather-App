import { API_KEY } from "../Constants";
import { distributeWeather } from "./functions";

const getWeatherFromLocation = async (lat, lon) => {
    try {
        const weather_url = `http://api.openweathermap.org/data/2.5/forecast?units=metric&&lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        return fetch(weather_url).then(res => res.json());
    } catch (error) {
        console.log(error);
    }
}

export const getWeatherData = async (lat, lon) => {
    return getWeatherFromLocation(lat, lon)
        .then(weather => {
            const { _5_day_weather, sorted_days } = distributeWeather(weather.list);
            const today = new Date().toLocaleDateString('en-US', { weekday: "long" });

            return {
                _5_day_weather,
                sorted_days,
                today,
                location: weather.city
            }
        });
}

export const getCurrentWeather = async (lat, lon) => {
    try {
        const search_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&&lat=${lat}&lon=${lon}&appid=${API_KEY}`
        return fetch(search_url).then(res => res.json());
    } catch (error) {
        console.log(error);
    }
}


export default getWeatherData;
