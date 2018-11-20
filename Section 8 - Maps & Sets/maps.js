let cardAce ={
  name:'Ace of Spades'
};
let cardking ={
  name:'King of Clubs'
};

let deck = new Map();
deck.set('as',cardAce);
deck.set('kc',cardking);

console.log(deck.size);

deck.set('as',cardAce);
//the deck will still be 2 because we 
//are only overriding in the previous step
console.log(deck.size);

//to retrieve value
console.log(deck.get('as'))

//clears items
//deck.delete('as')

//clears the set
//deck.clear();

//returns the keys
for(item of deck.keys()){
  console.log(item)
}

//returns the value
for(item of deck.values()){
  console.log(item)
}

//returns the both key and value
for(item of deck.entries()){
  console.log(item)
}