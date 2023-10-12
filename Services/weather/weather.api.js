import { API_KEY } from "../Constants";

const getLocationWeather = async (lat, lon) => {
    try {
        const weather_url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        return fetch(weather_url).then(res => res.json());
    } catch (error) {
        console.log(error);
    }
}

export default getLocationWeather;
