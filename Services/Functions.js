import { API_KEY } from "./Constants";

export const getLocationWeather = async (lat, lon) => {
    try {
        const weather_url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        return fetch(weather_url).then(res => res.json());
    } catch (error) {
        console.log(error);
    }
}

const getWeatherToday = (weather_arr) => {
    const todaylist = weather_arr.filter(({ dt_txt }) => new Date(dt_txt).toDateString() === new Date().toDateString());

    const restOfDaysList = weather_arr.filter(({ dt_txt }) => new Date(dt_txt).toDateString() !== new Date().toDateString());

    const today = {
        weatherlist: todaylist,
        end: todaylist.length
    }

    const restOfDays = {
        weatherlist: restOfDaysList,
        end: restOfDaysList.length,
    }

    return {
        today,
        restOfDays
    }
}

export const distributeWeather = (weather_arr) => {
    if (!weather_arr) return {};

    const NWP = 8 // NWP means number of weather objects per day. 8 for 8 weather forecasts per day.

    const { today, restOfDays } = getWeatherToday(weather_arr);

    const day_weather = {
        "today": today.weatherlist,
    };

    for (let i = 0; i < 5; i++) {
        day_weather[`day_${i + 2}`] = restOfDays.weatherlist.slice(i * NWP, i * NWP + NWP);
    }

    return day_weather;
}