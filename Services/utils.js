import { GEOLOCATION_API_KEY } from "./Constants";

const removeSecondsFromTime = (dt_txt) => {
    const time_array = new Date(dt_txt).toLocaleTimeString().split(":");
    const period = time_array.at(-1).slice(-2); // returns either AM or PM
    time_array[time_array.length - 1] = period;

    return time_array.join(":");
}

const getDefaultLocation = async () => {
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${GEOLOCATION_API_KEY}`;
    return fetch(url).then(res => res.json())
}

export {
    removeSecondsFromTime,
    getDefaultLocation
}
