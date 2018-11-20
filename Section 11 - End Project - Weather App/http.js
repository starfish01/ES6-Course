export class Http {
    static fetchData(url){
        return new Promise((resolve, reject) =>{
            const HTTP = new XMLHttpRequest();
            HTTP.open('GET',url);
            HTTP.onreadystatechange = function(){
                if(HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200){
                    const RESPONSE_DATA = JSON.parse(HTTP.responseText)
                    resolve(this.response)
                }else if(HTTP.readyState == XMLHttpRequest.DONE){
                    reject('something went wrong')
                }
            }
            HTTP.send()
        })
    }
}