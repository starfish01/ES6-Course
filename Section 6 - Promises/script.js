let promise = new Promise(function(resolve,reject){
  setTimeout(function(){
    //resolve('done!');
    reject('failed!');
  },1500)
});

promise.then(function(value){
  console.log(value)
}, function(error){
  console.log(error)
});


function waitASecond(sec){
  return new Promise(function(resolve,reject){
    if(sec > 2){
      reject('Rejected!');
    } else {
      setTimeout(function(){
        sec++;
        resolve(sec);
      }, 1000)
    }
    
  });
}

waitASecond(3)
  .then(waitASecond)
  .then(function(sec){
    console.log(sec)
  })
  .catch(function(error){
    console.log(error)
  })

//
//Promise all allow us to call two promises
//and waits for both to return successfully
//if one fails they all fail eg.

Promise.all([promise1,promise2])
  .then(function(success){
    console.log(success)
  })
  .catch(function(error){
    console.log(error)
  })

//Promise Race
//waits for the first promise to resolve
//and that is the successful promise

Promise.race([promise1,promise2])
  .then(function(success){
    console.log(success)
  })
  .catch(function(error){
    console.log(error)
  })