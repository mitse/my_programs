function getIndexToIns(arr, num) {
  arr.push(num);
  
  arr.sort(function(a, b) {
     return a - b;
    }); 
  for(i=0; i<arr.length; i++){
    if(arr[i] === num){
      return arr.indexOf(num);
    }
  }
}

// getIndexToIns([10, 20, 30, 40, 50], 35) should return 3