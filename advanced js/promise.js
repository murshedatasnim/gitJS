let promise1 = new Promise(function(resolve, reject) {

  let isClean = true;

  if(isClean){
    resolve();
  }else {
    reject();
  }
})
