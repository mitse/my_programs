function largestOfFour(arr) {
 
  for (var i=0; i<arr.length; i++){
    var long = findLongest(arr[i]);
     arr[i] = long;
     
     }
  
   return arr;
 
}


function findLongest(arr) {
  var long = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= long){
      long = arr[i];
    }
  } 
  
  return long;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);