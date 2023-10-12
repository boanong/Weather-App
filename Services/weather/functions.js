const getWeatherToday = (weather_arr) => {
    const todaylist = []; // weather_arr.filter(({ dt_txt }) => new Date(dt_txt).toDateString() === new Date().toDateString());

    const restOfDaysList = [];
    for (const weather of weather_arr) {
        if (new Date(weather.dt_txt).toDateString() === new Date().toDateString()) {
            todaylist.push(weather);
        } else {
            restOfDaysList.push(weather)
        }
    }

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

const getCurrentDay = (firstForADay) => new Date(firstForADay.dt_txt).toDateString();

const getSortedDays = (array_days) => array_days.sort((a, z) => new Date(a) < new Date(z));

export const distributeWeather = (weather_arr) => {
    if (!weather_arr) return {};

    const NWP = 8 // NWP means number of weather objects per day. 8 for 8 weather forecasts per day.

    const { today, restOfDays } = getWeatherToday(weather_arr);

    const firstDayInForecast = getCurrentDay(today.weatherlist[0]) // to get the first day in the forecast

    const _5_day_weather = {
        [firstDayInForecast]: today.weatherlist,
    };

    for (let i = 0; i < 5; i++) {
        const firstForADay = restOfDays.weatherlist[i * NWP]; // first weather is the first weather forecast on each day.

        const that_day = getCurrentDay(firstForADay);

        _5_day_weather[that_day] = restOfDays.weatherlist.slice(i * NWP, i * NWP + NWP);
    }

    return {
        _5_day_weather,
        sorted_days: getSortedDays(Object.keys(_5_day_weather))
    };
}
