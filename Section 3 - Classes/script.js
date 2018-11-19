//helper class
class Helper{
  static logTwice(message){
    console.log(message)
    console.log(message)
  }
}

Helper.logTwice('hello');

/* 

You are able to export classes like we did in modules 
by adding export to the from of the class and 
importing it else where

*/


class Person{
  constructor(name){
    this.name = name;
  }
  
  greet(){
    console.log('Hello my name is '+ this.name);
  }
}

let person = new Person('patrick');
person.greet();


class Max extends Person {
  constructor(age){
    super('Max');
    this.age = age
  }
  
  greetTwice(){
    this.greet();
    this.greet();
  }
}

let max = new Max('Max');
max.greet();
max.greetTwice()

//Using getters and setters

class Car{
  constructor(name){
    this._name = name
  }
  set name(value){
    if(value.length > 2){
       this._name = value
       }else{
       console.log('rejected')
       }
  }
  get name(){
    return this._name
  }
}

let car = new Car('BMW');

console.log(car.name)

car.name = "ja"

car.name = "Merc"

console.log(car.name)


//extending built-in objects
//subclassing

class ConvertableArray extends Array{
  convert(){
    let returnArray =[];
    this.forEach(value => returnArray.push('converted! '+ value));
    return returnArray;
  }
}

let numberArray = new ConvertableArray();
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);

console.log(numberArray.convert())




