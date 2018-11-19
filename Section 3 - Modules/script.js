import {keyValue,test} from './external.js'

//rename imports like this
//import{keyValue as key, test} from './external.js'

console.log(keyValue)
test();
//below shows that we are only importing the reference and not the value
console.log(keyValue)

//because this is the default you can name it whatever
import ab from './external.js'
console.log(ab)


/*

to import everything you can use

import * as theImportName from './external.js'

this will give you an object so you will need to use it like one eg

console.log(theImportName.keyValue)


*/