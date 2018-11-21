import * as ELEMENTS from './elements.js'
import { Http } from './http.js'
import { WeatherData, WEATHER_PROXY_HANDLER } from './weather-data.js';

const APP_ID = '9dd631959d6917e851ddca98b32dda25';
ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather(){
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim()
    if(CITY_NAME.length == 0 ){
       return alert('Please Enter City Name')
    }
    ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'block';
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'none';
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + CITY_NAME + '&units=metric&appid='+ APP_ID
    Http.fetchData(URL)
        .then(responseData => {
            console.log(responseData)
            const WEATHER_DATA = new WeatherData(CITY_NAME, responseData.weather[0].description.toUpperCase());
            const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
            WEATHER_PROXY.temperature = responseData.main.temp;
            updateWeather(WEATHER_PROXY);
        })
        .catch(error => alert(error))
}

function updateWeather(weatherData){
    console.log('hello')
    ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
    ELEMENTS.ELEMENT_WEATHER_DESC.textContent = weatherData.description;
    ELEMENTS.ELEMENT_WEATHER_TEMP.textContent = weatherData.temp;

    ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'none';
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block';
}