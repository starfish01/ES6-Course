let person ={
  age:27,
  lastName: 'lastname'
};

let handler= {
  get: function(target, age){
     return age in target ? target[age] : 'Not there'
  },
  set: function(target, prop, value){
    if(value.length >= 2){
      Reflect.set(target, prop, value)
    }
  }
}

var proxy = new Proxy(person, handler);
console.log(proxy.age)
console.log(proxy.name)
console.log(proxy.lastName)
proxy.lastName ='abs'
console.log(proxy.lastName)


//using the refeclt api we are able to check
//if that object even has that property
var proxy1 = new Proxy({},handler);
Reflect.setPrototypeOf(person, proxy1);
console.log(person.hobbies);

//////////////////

function log(message){
  console.log('Log entry created, message: ' + message);
};


let handler1 = {
  apply:function(target,thisArg, argumentsList){
    if(argumentsList.length == 1){
      Reflect.apply(target, thisArg, argumentsList)
    }
  }
}


let proxy2 = new Proxy(log, handler);
proxy2('hello')


//////////////Revokable Proxies
let person2 = {
  name:'Patrick'
}

let handler2 ={
  get:function(target, property){
    return Reflect.get(target, property);
  }
}
let {proxy3, revoke} = Proxy.revocable(person2, handler2)
console.log(proxy3.name)
revoke();
console.log(proxy3.name)