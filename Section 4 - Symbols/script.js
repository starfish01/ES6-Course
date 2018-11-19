//Symbols are a new premitive type
let symbol = Symbol('debug');

//shows you which symbol it is
console.log(symbol.toString);

//The below will return false because symbols stand for unique ids
let anotherSymbol = Symbol('debug');
console.log(symbol == anotherSymbol)

// shows how its hidden so that it cant be accessed in loops etc
let obj ={
  name:'Max',
  [symbol]: 22
}
//this will not show the symbol
console.log(obj)
//only accessing directly will show the symbol
console.log(obj[symbol]);

//If you want to share the key
let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');
console.log(symbol1 == symbol2)

//Shows the primative type of the object
class Person{
  
}

Person.prototype[Symbol.toStringTag] = 'Person'

let person = new Person();
console.log(person);


///
let numbers = [1,2,3,4]

console.log(numbers + 1)

numbers[Symbol.toPrimitive] = function(){
  return 9999
}

console.log(numbers + 1)