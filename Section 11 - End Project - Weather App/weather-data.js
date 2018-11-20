export class WeatherData{
    constructor(){
        this.cityName = this.cityName;
        this.description = description;
        this.temp = ''
    }
}

export const WEATHER_PROXY_HANDLER ={
    get:function(target, prop){
        return Reflect.get(target, prop)
    },
    set: function(target, prop, value){
        const newValue = (value *1.8 +32).toFixed(2)+'F.'
        return Reflect.set(target,prop, newValue)
    }
}