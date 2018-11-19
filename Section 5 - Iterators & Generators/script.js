/*
Iterators
able to access each value of a object in an array

Generators
a function yeilds the next value(s). Like iterators 
but grabs different numbers

*/

//shows that the array is iterator because it returns a function
let array = [1,2,3];
console.log(typeof array[Symbol.iterator])

//we are steping though the array
let it = array[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


//looking at how iterating works
let person ={
  name:'MAX',
  hobbies:['sport','cooking'],
  [Symbol.iterator]: function(){
    let i =0;
    let hobbies = this.hobbies;
    return{
      next: function(){
        let value = hobbies[i]
        i++;
        return{
          done:i > hobbies.length ? true: false,
          value: value
        }
      }
    }
  }
}
for (let hobby of person){
  console.log(hobby);
}


//Generator

//adding the star and yeild are important
function *select(){
  yield 'house';
  yield 'boat';
}

let sel = select();
console.log(sel.next())
console.log(sel.next())
console.log(sel.next())


//see it in action

let obj1 = {
  [Symbol.iterator]: gen
}

function *gen(){
  yield 1;
  yield 2;
}

for(let element of obj1){
  console.log(element);
}
