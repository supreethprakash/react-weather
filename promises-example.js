// function getTemperature(arg1){
//   return new Promise(function(resolve, reject) {
//     setTimeout(function(){
//       resolve(80);
//       reject('undefined');
//     }, 1000);
//   });
// }
//
// getTemperature(undefined).then(function(temp){
//   console.log(temp);
// }, function(err){
//   console.log(err);
// });

function addPromise(num1, num2){
  return new Promise(function(resolve, reject){
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number'){
      reject('Not a number');
    } else {
      resolve(num1 + num2);
    }

  });
}

addPromise(10,9).then(function(added){
 console.log(added);
}, function(error){
  console.log('Error');
});
