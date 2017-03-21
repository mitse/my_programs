
function chunkArrayInGroups(arr, size) {
  var narr =[];
  for(var i=0; i<arr.length; i+=size){
  var n = arr.slice(i,size+i);
  narr.push(n);
  
}
  return narr;
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].