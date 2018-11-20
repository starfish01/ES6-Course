//sets only store unique values
let set = new Set([1,1,1]);
set.add(2);
set.add(2);
//this will only return 1, 2 
//because they are the only unique values
for(element of set){
  console.log(element);
}

//set.delete(1);
//set.clear();

//checks if this value is there
console.log(set.has(1))