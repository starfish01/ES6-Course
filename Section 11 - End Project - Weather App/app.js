import * as ELEMENTS from './elements.js'
import { Http } from './http.js'

const APP_ID = '9dd631959d6917e851ddca98b32dda25';
ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather(){
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim()
    if(CITY_NAME.length == 0 ){
       return alert('Please Enter City Name')
    }
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + CITY_NAME + '&units=metric&appid='+ APP_ID
 
    Http.fetchData(URL)
        .then(responseData => {
            console.log(responseData)
        })
        .catch(error => alert(error))
}