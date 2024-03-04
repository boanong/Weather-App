import { NEWS_API_KEY } from '../Constants';

const query_str = new URLSearchParams({
    q: 'weather',
    apiKey: NEWS_API_KEY
}).toString();

const api_url = 'https://newsapi.org/v2/everything?' + query_str;

const getWeatherNews = async () => {
    return fetch(api_url).then(res => res.json());
};

export {
    getWeatherNews,
};
