import { ARRAY_DAYS } from '../Constants';

const getIconUrl = (icon) => `https://openweathermap.org/img/w/${icon}.png`;

const parseWeatherObjt = (weather_obj) => {
    const parsed_obj = {
        dt_txt: weather_obj.dt_txt,
        temp: weather_obj.main.temp,
        description: weather_obj.weather[0].description,
        wind_speed: weather_obj.wind.speed,
        pressure: weather_obj.main.pressure,
        humidity: weather_obj.main.humidity,
        icon_url: getIconUrl(weather_obj.weather[0].icon),
    }

    return parsed_obj;
}

const getWeatherToday = (weather_arr) => {
    const todaylist = []; // weather_arr.filter(({ dt_txt }) => ARRAY_DAYS[new Date(dt_txt).getDay()] === ARRAY_DAYS[new Date().getDay()]);

    const restOfDaysList = [];

    for (const weather of weather_arr) {
        if (ARRAY_DAYS[new Date(weather.dt_txt).getDay()] === ARRAY_DAYS[new Date().getDay()]) {
            todaylist.push(parseWeatherObjt(weather));
        } else {
            restOfDaysList.push(parseWeatherObjt(weather));
        }
    }

    // todaylist.splice(0, 3);

    // restOfDays.splice(0, 3);

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

const getCurrentDay = (firstForADay) => {
    const day_indx = new Date(firstForADay.dt_txt).getDay(); // eg 0
    return ARRAY_DAYS[day_indx]; // eg 'Sun
};

const distributeWeather = (weather_arr) => {
    if (!weather_arr) return {};

    const NWP = 8 // NWP means number of weather objects per day. 8 for 8 weather forecasts per day.

    const { today, restOfDays } = getWeatherToday(weather_arr);

    const firstDayInForecast = getCurrentDay(today.weatherlist[0]); // to get the first day in the forecast

    const _5_day_weather = {
        [firstDayInForecast]: today.weatherlist.slice(0, 3),
    };

    for (let i = 0; i < 5; i++) {
        const firstForADay = restOfDays.weatherlist[i * NWP]; // first weather is the first weather forecast on each day.

        const that_day = getCurrentDay(firstForADay);

        _5_day_weather[that_day] = restOfDays.weatherlist.slice(i * NWP, i * NWP + NWP).slice(0, 3);
    }

    console.log('keys', Object.keys(_5_day_weather), _5_day_weather);

    return {
        _5_day_weather,
        sorted_days: Object.keys(_5_day_weather)
    };
}

export {
    distributeWeather,
    getIconUrl,
}
