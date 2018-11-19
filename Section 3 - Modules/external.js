export let keyValue = 100;

export function test(){
  keyValue = 200;
  console.log('hello');
}

let ab = 'someText'

//or
//export{keyValue,test};

export default ab;